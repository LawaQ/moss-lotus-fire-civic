import {
  createContext,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Check, Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

type PlanId = "studio" | "growth" | "scale";
type Billing = "annual" | "monthly";
type Status = "Risk" | "Critical" | "Healthy" | "Watch";
type Filter = "all" | "risk" | "healthy";

type Lead = {
  email: string;
  plan: PlanId;
  billing: Billing;
  at: string;
  already?: boolean;
};

const STORAGE_KEY = "alder.leads";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PLAN_META: Record<PlanId, { name: string; cta: string; note: string }> = {
  studio: { name: "Studio", cta: "Start free", note: "Free for 25 accounts." },
  growth: { name: "Growth", cta: "Start free trial", note: "14 days. No card." },
  scale: { name: "Scale", cta: "Request a walkthrough", note: "We'll reply with times." },
};

const NAV = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#stories", label: "Stories" },
];

const LOGOS = ["Helio Labs", "Northwind", "Vellum", "Lowtide", "Parcel & Co", "Kindred"];

const ACCOUNTS: {
  name: string;
  initials: string;
  score: number;
  status: Status;
  signal: string;
  owner: string;
}[] = [
  {
    name: "Kindred",
    initials: "KI",
    score: 41,
    status: "Risk",
    signal: "Usage down 38% over 14 days",
    owner: "Lea",
  },
  {
    name: "Atlas Freight",
    initials: "AF",
    score: 29,
    status: "Critical",
    signal: "Invoice overdue 21 days",
    owner: "Jonah",
  },
  {
    name: "Parcel & Co",
    initials: "PC",
    score: 63,
    status: "Watch",
    signal: "Two P1 tickets still open",
    owner: "Mara",
  },
  {
    name: "Lowtide",
    initials: "LT",
    score: 88,
    status: "Healthy",
    signal: "Seats up 12% this month",
    owner: "Priya",
  },
  {
    name: "Vellum",
    initials: "VE",
    score: 74,
    status: "Watch",
    signal: "Champion quiet for 11 days",
    owner: "Sam",
  },
  {
    name: "Northwind",
    initials: "NW",
    score: 92,
    status: "Healthy",
    signal: "Expanded into a second team",
    owner: "Priya",
  },
];

const FEATURES = [
  {
    n: "01",
    title: "Health that updates overnight",
    body: "Usage, support volume, and billing events recompute one score. Nobody maintains a red-yellow-green sheet.",
  },
  {
    n: "02",
    title: "Playbooks with an owner",
    body: "When an account slips, Alder assigns a person and a next step — exec check-in, save offer, or QBR — with a due date.",
  },
  {
    n: "03",
    title: "One timeline",
    body: "CS, support, and sales read the same notes, tickets, and calls. The question stops being whether anyone talked to them.",
  },
  {
    n: "04",
    title: "A renewal forecast",
    body: "Expected, best, and at-risk dollars by month, tied to the accounts that actually move the number.",
  },
  {
    n: "05",
    title: "Slack, where the work is",
    body: "A morning digest, plus a ping when something turns critical. Reply in the thread and the note lands on the account.",
  },
  {
    n: "06",
    title: "CRM sync without a project",
    body: "Salesforce and HubSpot stay current. Alder does not become another system of record to babysit.",
  },
];

const TIERS: {
  id: PlanId;
  blurb: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
  featured: boolean;
}[] = [
  {
    id: "studio",
    blurb: "For a CSM who is still the whole team.",
    monthly: 0,
    annual: 0,
    features: ["25 accounts", "Health scores from usage", "Weekly risk email", "One workspace"],
    featured: false,
  },
  {
    id: "growth",
    blurb: "For teams that own a renewal number.",
    monthly: 86,
    annual: 69,
    features: [
      "Unlimited accounts",
      "Playbooks and owners",
      "Slack and CRM sync",
      "Renewal forecast",
      "Shared timeline",
    ],
    featured: true,
  },
  {
    id: "scale",
    blurb: "For companies that need a paper trail.",
    monthly: null,
    annual: null,
    features: [
      "Everything in Growth",
      "SSO and audit log",
      "US or EU data residency",
      "Dedicated CSM",
      "Custom scoring model",
    ],
    featured: false,
  },
];

const QUOTES = [
  {
    quote:
      "We used to learn an account was unhappy when the champion went quiet. Last quarter our save rate on at-risk logos hit 64%, because the conversation started three weeks earlier.",
    name: "Priya Shah",
    role: "VP Customer Success, Helio Labs",
    ink: false,
  },
  {
    quote:
      "Finance stopped arguing with our renewal number. The forecast is the same board the CSMs work from.",
    name: "Jonah Adeyemi",
    role: "CRO, Northwind",
    ink: true,
  },
  {
    quote:
      "We retired a Sunday spreadsheet and two Slack bots. The first useful board was up on a Thursday, not after a quarter of services.",
    name: "Leah Okonkwo",
    role: "Head of CS, Vellum",
    ink: false,
  },
];

const FAQS = [
  {
    q: "What do you connect?",
    a: "Product analytics, your support desk, and billing. Most teams start with the warehouse or Segment, plus Zendesk or Intercom, plus Stripe. Salesforce and HubSpot are optional and two-way.",
  },
  {
    q: "How long until the scores mean something?",
    a: "The first board is up the day the connections land. Scores get sharp after about two weeks of history. You are not waiting on a services project.",
  },
  {
    q: "Does Alder replace our CRM?",
    a: "No. The CRM stays the system of record. Alder is where the team decides who to call on Monday.",
  },
  {
    q: "Where does customer data live?",
    a: "Studio and Growth run in the US. Scale can pin a US or EU region. We don't train models on your accounts, and we don't sell the data.",
  },
];

const press =
  "transition-transform duration-150 ease-out active:scale-[0.96] disabled:opacity-60";

type SignupContextValue = {
  plan: PlanId;
  setPlan: (plan: PlanId) => void;
  billing: Billing;
  setBilling: (billing: Billing) => void;
  saved: Lead | null;
  submit: (raw: string) => string | null;
  clearSaved: () => void;
  choose: (plan: PlanId) => void;
};

const SignupContext = createContext<SignupContextValue | null>(null);

function useSignup() {
  const value = useContext(SignupContext);
  if (!value) throw new Error("SignupProvider missing");
  return value;
}

function readLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const rec = item as Record<string, unknown>;
      if (typeof rec.email !== "string") return [];
      const plan: PlanId =
        rec.plan === "studio" || rec.plan === "scale" || rec.plan === "growth"
          ? rec.plan
          : "growth";
      const billing: Billing = rec.billing === "monthly" ? "monthly" : "annual";
      return [
        {
          email: rec.email,
          plan,
          billing,
          at: typeof rec.at === "string" ? rec.at : "",
        },
      ];
    });
  } catch {
    return [];
  }
}

function SignupProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanId>("growth");
  const [billing, setBilling] = useState<Billing>("annual");
  const [saved, setSaved] = useState<Lead | null>(null);

  function submit(raw: string) {
    const email = raw.trim().toLowerCase();
    if (!EMAIL_RE.test(email)) return "Enter a valid email address.";
    const leads = readLeads();
    const existing = leads.find((lead) => lead.email === email);
    if (existing) {
      setSaved({ ...existing, already: true });
      return null;
    }
    const lead: Lead = { email, plan, billing, at: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...leads, lead]));
    setSaved(lead);
    return null;
  }

  function choose(next: PlanId) {
    setPlan(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("signup")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
    window.setTimeout(() => {
      document.getElementById("email-footer")?.focus({ preventScroll: true });
    }, reduce ? 0 : 350);
  }

  return (
    <SignupContext.Provider
      value={{
        plan,
        setPlan,
        billing,
        setBilling,
        saved,
        submit,
        clearSaved: () => setSaved(null),
        choose,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

function Logo({ tone = "paper" }: { tone?: "paper" | "forest" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={cn(
          "grid size-8 place-items-center rounded-lg",
          tone === "forest" ? "bg-card text-forest" : "bg-forest text-card",
        )}
      >
        <Leaf className="size-4" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight">Alder</span>
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5">
        <a href="#get-started" className="shrink-0" aria-label="Alder home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center rounded-full px-3 text-sm font-medium text-ink hover:bg-paper-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#get-started"
            className={cn(
              press,
              "inline-flex h-11 items-center rounded-full bg-forest px-4 text-sm font-medium text-card hover:bg-forest-deep",
            )}
          >
            Start free
          </a>
          <button
            type="button"
            className={cn(
              press,
              "grid size-11 place-items-center rounded-full border border-line lg:hidden",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line px-5 py-3 lg:hidden">
          <ul className="grid">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center text-lg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function PlanPicker({ tone }: { tone: "paper" | "forest" }) {
  const { plan, setPlan } = useSignup();
  const options: PlanId[] = ["studio", "growth", "scale"];
  return (
    <div role="radiogroup" aria-label="Plan" className="flex flex-wrap gap-2">
      {options.map((id) => {
        const selected = plan === id;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => setPlan(id)}
            className={cn(
              press,
              "h-11 rounded-full border px-4 text-sm font-medium",
              tone === "paper"
                ? selected
                  ? "border-forest bg-forest text-card"
                  : "border-line bg-card text-ink"
                : selected
                  ? "border-card bg-card text-ink"
                  : "border-card/40 text-card",
            )}
          >
            {PLAN_META[id].name}
          </button>
        );
      })}
    </div>
  );
}

function SignupForm({
  id,
  tone,
}: {
  id: string;
  tone: "paper" | "forest";
}) {
  const { plan, billing, saved, submit, clearSaved } = useSignup();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const onForest = tone === "forest";

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = submit(value);
    setError(message);
    if (!message) setValue("");
  }

  if (saved) {
    const billingLabel = saved.billing === "annual" ? "billed annually" : "billed monthly";
    return (
      <div
        role="status"
        className={cn(
          "rounded-2xl p-5",
          onForest ? "bg-forest-deep text-card" : "border border-line bg-card",
        )}
      >
        <p className="font-serif text-2xl">
          {saved.already ? "You're already on the list." : "You're on the list."}
        </p>
        <p className={cn("mt-2", onForest ? "text-mist" : "text-muted")}>
          We'll write to <span className={onForest ? "text-card" : "text-ink"}>{saved.email}</span>{" "}
          about {PLAN_META[saved.plan].name}, {billingLabel}.
        </p>
        <button
          type="button"
          onClick={clearSaved}
          className={cn(
            "mt-4 inline-flex h-11 items-center text-sm font-medium underline underline-offset-4",
            onForest ? "text-moss" : "text-forest",
          )}
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-3" aria-label="Email signup">
      <PlanPicker tone={tone} />
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">
          Work email
        </label>
        <input
          id={id}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          placeholder="karen@company.com"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (error) setError(null);
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : `${id}-hint`}
          className={cn(
            "h-12 w-full rounded-full border px-5 text-base text-ink placeholder:text-muted",
            onForest ? "border-transparent bg-card" : "border-line bg-card",
          )}
        />
        <button
          type="submit"
          className={cn(
            press,
            "inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-medium",
            onForest
              ? "bg-ink text-card hover:bg-ink/90"
              : "bg-forest text-card hover:bg-forest-deep",
          )}
        >
          {PLAN_META[plan].cta}
        </button>
      </div>
      <p id={`${id}-hint`} className={cn("text-sm", onForest ? "text-mist" : "text-muted")}>
        {PLAN_META[plan].note}{" "}
        {plan === "growth"
          ? billing === "annual"
            ? "Growth is $69 per user / month, billed yearly."
            : "Growth is $86 per user / month."
          : null}
      </p>
      {error ? (
        <p id={`${id}-error`} role="alert" className={cn("text-sm font-medium", onForest ? "text-card" : "text-ink")}>
          {error}
        </p>
      ) : null}
    </form>
  );
}

function Hero() {
  return (
    <section id="get-started" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-5 lg:items-end lg:py-20">
        <div className="lg:col-span-3">
          <p className="text-xs font-medium tracking-widest text-forest uppercase">
            Customer success platform
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
            Catch <span className="text-forest italic">churn</span> while you can still stop it.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Alder reads usage, tickets, and invoices, scores every account, and hands your team the
            next conversation — not another dashboard to interpret.
          </p>
          <div className="mt-8 max-w-xl">
            <SignupForm id="email-hero" tone="paper" />
          </div>
          <p className="mt-4 text-sm text-muted">
            <a
              href="#pricing"
              className="font-medium text-ink underline decoration-line underline-offset-4"
            >
              Compare plans
            </a>
          </p>
        </div>
        <div className="lg:col-span-2">
          <dl className="grid grid-cols-3 gap-3 border-y border-line py-6 lg:grid-cols-1 lg:gap-6 lg:border-y-0 lg:border-l lg:py-0 lg:pl-8">
            {[
              ["Surprise churn", "−31%"],
              ["Hours back", "18/wk"],
              ["First save", "9 days"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-1 font-serif text-3xl tabular-nums text-ink lg:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted lg:pl-8">Median result after 90 days on Growth.</p>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  return (
    <section aria-labelledby="logos-heading" className="border-y border-line bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <h2 id="logos-heading" className="text-center text-sm text-muted">
          Already in the Monday meeting at
        </h2>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {LOGOS.map((name) => (
            <li key={name} className="font-serif text-lg text-muted">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Value() {
  const points = [
    {
      title: "One score, not twelve tools",
      body: "Usage, tickets, and invoices collapse into a number the whole company can read without a glossary.",
    },
    {
      title: "A next step, not a notification",
      body: "Risk assigns an owner and a playbook. The alert arrives as work that is already scoped.",
    },
    {
      title: "A forecast you can defend",
      body: "Renewal dollars sit on the same board as the risk, so CS and finance stop reconciling spreadsheets.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-widest text-forest uppercase">Why teams switch</p>
        <h2 className="mt-3 text-4xl text-ink sm:text-5xl">The Sunday spreadsheet was never a system.</h2>
      </div>
      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {points.map((point, index) => (
          <li key={point.title} className="border-t border-line pt-5">
            <p className="font-serif text-sm text-forest">0{index + 1}</p>
            <h3 className="mt-3 text-2xl">{point.title}</h3>
            <p className="mt-2 text-muted">{point.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function statusClass(status: Status) {
  if (status === "Healthy") return "bg-moss text-forest-deep";
  if (status === "Critical") return "bg-ink text-card";
  if (status === "Risk") return "bg-paper-deep text-ink";
  return "border border-line text-muted";
}

function barClass(score: number) {
  if (score >= 75) return "bg-forest";
  if (score >= 50) return "bg-muted";
  return "bg-ink";
}

function Product() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = ACCOUNTS.filter((account) => {
    if (filter === "healthy") return account.status === "Healthy";
    if (filter === "risk") return account.status !== "Healthy";
    return true;
  });
  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "risk", label: "Needs a human" },
    { id: "healthy", label: "Healthy" },
  ];

  return (
    <section id="product" className="scroll-mt-20 bg-ink text-card">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-xs font-medium tracking-widest text-moss uppercase">The Monday board</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">See who needs a human this week.</h2>
          <p className="mt-4 text-lg text-mist">
            Scores move when usage drops, tickets pile up, or an invoice goes quiet. Owners already
            know the next call.
          </p>
          <ul className="mt-6 grid gap-3 text-mist">
            {[
              "One health number from product, support, and billing",
              "Critical accounts surface before the renewal call",
              "Forecast dollars stay attached to the account that moves them",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-moss" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-mist/25 bg-card text-ink shadow-lg">
          <figcaption className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <span className="inline-flex items-center gap-2 text-sm font-medium">
              <Leaf className="size-4 text-forest" aria-hidden />
              Sample book
            </span>
            <span className="text-xs text-muted">Updated 6:40am</span>
          </figcaption>
          <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-5">
            {filters.map((item) => {
              const selected = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(item.id)}
                  className={cn(
                    press,
                    "h-11 rounded-full px-4 text-sm font-medium",
                    selected ? "bg-ink text-card" : "bg-paper text-ink",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
            <p aria-live="polite" className="flex h-11 items-center text-sm text-muted">
              {shown.length} accounts
            </p>
          </div>
          <ul className="divide-y divide-line">
            {shown.length === 0 ? (
              <li className="px-5 py-8 text-sm text-muted">No accounts in this view.</li>
            ) : (
              shown.map((account) => (
                <li key={account.name} className="flex gap-3 px-4 py-4 sm:px-5">
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-xl bg-paper font-medium"
                  >
                    {account.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <p className="truncate font-medium">{account.name}</p>
                      <p className="shrink-0 font-serif text-lg tabular-nums">{account.score}</p>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-paper-deep">
                      <div
                        className={cn("h-full rounded-full", barClass(account.score))}
                        style={{ width: `${account.score}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted">{account.signal}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "inline-flex h-7 items-center rounded-full px-2.5 text-xs font-medium",
                          statusClass(account.status),
                        )}
                      >
                        {account.status}
                      </span>
                      <span className="text-sm text-muted">{account.owner}</span>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="grid grid-cols-2 gap-4 border-t border-line bg-paper px-4 py-4 sm:px-5">
            <div>
              <p className="text-xs text-muted">Net renewal</p>
              <p className="font-serif text-2xl tabular-nums">$1.84M</p>
            </div>
            <div>
              <p className="text-xs text-muted">At risk</p>
              <p className="font-serif text-2xl tabular-nums">$210k</p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-forest uppercase">Features</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Everything between the signal and the save.</h2>
          </div>
          <a
            href="#signup"
            className={cn(
              press,
              "inline-flex h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-card hover:bg-forest-deep",
            )}
          >
            Get started
          </a>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li key={feature.n} className="bg-card p-6">
              <p className="font-serif text-sm text-forest">{feature.n}</p>
              <h3 className="mt-4 text-2xl">{feature.title}</h3>
              <p className="mt-2 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  const { billing, setBilling, choose } = useSignup();
  return (
    <section id="pricing" className="scroll-mt-20 bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-widest text-forest uppercase">Pricing</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Priced per CSM, not per account.</h2>
          <p className="mt-4 text-lg text-muted">
            Start free. Upgrade when the renewal number is yours to hit.
          </p>
        </div>
        <div
          role="radiogroup"
          aria-label="Billing period"
          className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="inline-flex rounded-full border border-line bg-card p-1">
            {(
              [
                ["monthly", "Monthly"],
                ["annual", "Annual"],
              ] as const
            ).map(([id, label]) => {
              const selected = billing === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setBilling(id)}
                  className={cn(
                    press,
                    "h-11 rounded-full px-4 text-sm font-medium",
                    selected ? "bg-ink text-card" : "text-muted",
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p className="text-sm font-medium text-forest-deep">Save 20% yearly</p>
        </div>
        <ul className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const amount =
              tier.monthly === null ? null : billing === "annual" ? tier.annual : tier.monthly;
            return (
              <li
                key={tier.id}
                className={cn(
                  "flex flex-col rounded-2xl bg-card p-6",
                  tier.featured ? "border-2 border-forest" : "border border-line",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl">{PLAN_META[tier.id].name}</h3>
                  {tier.featured ? (
                    <span className="rounded-full bg-moss px-2.5 py-1 text-xs font-medium text-forest-deep">
                      Most chosen
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-muted">{tier.blurb}</p>
                <div className="mt-6">
                  {amount === null ? (
                    <p className="font-serif text-5xl">Let's talk</p>
                  ) : amount === 0 ? (
                    <p className="font-serif text-5xl">Free</p>
                  ) : (
                    <p className="flex items-end gap-1">
                      <span className="font-serif text-5xl tabular-nums">${amount}</span>
                      <span className="pb-1.5 text-sm text-muted">/ user / month</span>
                    </p>
                  )}
                  <p className="mt-2 text-sm text-muted">
                    {tier.id === "growth"
                      ? billing === "annual"
                        ? "$828 per user, billed yearly. You save $204."
                        : "Billed monthly. Switch to annual and save $204 a year."
                      : tier.id === "studio"
                        ? "No card. Upgrade when you want."
                        : "A walkthrough, then a quote."}
                  </p>
                </div>
                <ul className="mt-6 grid flex-1 gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-forest" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => choose(tier.id)}
                  className={cn(
                    press,
                    "mt-8 inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium",
                    tier.featured
                      ? "bg-forest text-card hover:bg-forest-deep"
                      : "border border-line bg-card text-ink hover:bg-paper",
                  )}
                >
                  {PLAN_META[tier.id].cta}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-3xl">Questions, answered</h3>
          <div className="mt-4 border-t border-line">
            {FAQS.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 py-4 text-base font-medium">
                  {item.q}
                  <span className="text-muted transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <p className="text-xs font-medium tracking-widest text-forest uppercase">Stories</p>
        <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">Teams who stopped guessing.</h2>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {QUOTES.map((item) => (
            <li key={item.name}>
              <figure
                className={cn(
                  "flex h-full flex-col rounded-2xl p-6",
                  item.ink ? "bg-ink text-card" : "border border-line bg-card",
                )}
              >
                <blockquote className="flex-1 font-serif text-xl leading-snug">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-medium">{item.name}</p>
                  <p className={cn("text-sm", item.ink ? "text-mist" : "text-muted")}>{item.role}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="signup" className="on-forest scroll-mt-20 bg-forest text-card">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <p className="text-xs font-medium tracking-widest text-moss uppercase">Get started</p>
        <h2 className="mt-3 text-4xl sm:text-5xl">Put Monday's calls on one board.</h2>
        <p className="mt-4 text-lg text-mist">
          Tell us where to send the workspace. Most teams see their first at-risk account the day
          connections land.
        </p>
        <div className="mt-8">
          <SignupForm id="email-footer" tone="forest" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-muted">
            Alder is the customer success workspace for teams who are done guessing which logo
            leaves next.
          </p>
        </div>
        <nav aria-label="Footer" className="grid content-start sm:justify-self-end">
          {NAV.map((link) => (
            <a key={link.href} href={link.href} className="flex h-11 items-center text-sm font-medium">
              {link.label}
            </a>
          ))}
          <a href="#signup" className="flex h-11 items-center text-sm font-medium">
            Get started
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-muted">© 2026 Alder</p>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <SignupProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-card"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Logos />
        <Value />
        <Product />
        <Features />
        <Pricing />
        <Stories />
        <FinalCta />
      </main>
      <Footer />
    </SignupProvider>
  );
}
