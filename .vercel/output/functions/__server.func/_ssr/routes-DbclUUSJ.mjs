import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as Leaf, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbclUUSJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var STORAGE_KEY = "alder.leads";
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var PLAN_META = {
	studio: {
		name: "Studio",
		cta: "Start free",
		note: "Free for 25 accounts."
	},
	growth: {
		name: "Growth",
		cta: "Start free trial",
		note: "14 days. No card."
	},
	scale: {
		name: "Scale",
		cta: "Request a walkthrough",
		note: "We'll reply with times."
	}
};
var NAV = [
	{
		href: "#product",
		label: "Product"
	},
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#pricing",
		label: "Pricing"
	},
	{
		href: "#stories",
		label: "Stories"
	}
];
var LOGOS = [
	"Helio Labs",
	"Northwind",
	"Vellum",
	"Lowtide",
	"Parcel & Co",
	"Kindred"
];
var ACCOUNTS = [
	{
		name: "Kindred",
		initials: "KI",
		score: 41,
		status: "Risk",
		signal: "Usage down 38% over 14 days",
		owner: "Lea"
	},
	{
		name: "Atlas Freight",
		initials: "AF",
		score: 29,
		status: "Critical",
		signal: "Invoice overdue 21 days",
		owner: "Jonah"
	},
	{
		name: "Parcel & Co",
		initials: "PC",
		score: 63,
		status: "Watch",
		signal: "Two P1 tickets still open",
		owner: "Mara"
	},
	{
		name: "Lowtide",
		initials: "LT",
		score: 88,
		status: "Healthy",
		signal: "Seats up 12% this month",
		owner: "Priya"
	},
	{
		name: "Vellum",
		initials: "VE",
		score: 74,
		status: "Watch",
		signal: "Champion quiet for 11 days",
		owner: "Sam"
	},
	{
		name: "Northwind",
		initials: "NW",
		score: 92,
		status: "Healthy",
		signal: "Expanded into a second team",
		owner: "Priya"
	}
];
var FEATURES = [
	{
		n: "01",
		title: "Health that updates overnight",
		body: "Usage, support volume, and billing events recompute one score. Nobody maintains a red-yellow-green sheet."
	},
	{
		n: "02",
		title: "Playbooks with an owner",
		body: "When an account slips, Alder assigns a person and a next step — exec check-in, save offer, or QBR — with a due date."
	},
	{
		n: "03",
		title: "One timeline",
		body: "CS, support, and sales read the same notes, tickets, and calls. The question stops being whether anyone talked to them."
	},
	{
		n: "04",
		title: "A renewal forecast",
		body: "Expected, best, and at-risk dollars by month, tied to the accounts that actually move the number."
	},
	{
		n: "05",
		title: "Slack, where the work is",
		body: "A morning digest, plus a ping when something turns critical. Reply in the thread and the note lands on the account."
	},
	{
		n: "06",
		title: "CRM sync without a project",
		body: "Salesforce and HubSpot stay current. Alder does not become another system of record to babysit."
	}
];
var TIERS = [
	{
		id: "studio",
		blurb: "For a CSM who is still the whole team.",
		monthly: 0,
		annual: 0,
		features: [
			"25 accounts",
			"Health scores from usage",
			"Weekly risk email",
			"One workspace"
		],
		featured: false
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
			"Shared timeline"
		],
		featured: true
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
			"Custom scoring model"
		],
		featured: false
	}
];
var QUOTES = [
	{
		quote: "We used to learn an account was unhappy when the champion went quiet. Last quarter our save rate on at-risk logos hit 64%, because the conversation started three weeks earlier.",
		name: "Priya Shah",
		role: "VP Customer Success, Helio Labs",
		ink: false
	},
	{
		quote: "Finance stopped arguing with our renewal number. The forecast is the same board the CSMs work from.",
		name: "Jonah Adeyemi",
		role: "CRO, Northwind",
		ink: true
	},
	{
		quote: "We retired a Sunday spreadsheet and two Slack bots. The first useful board was up on a Thursday, not after a quarter of services.",
		name: "Leah Okonkwo",
		role: "Head of CS, Vellum",
		ink: false
	}
];
var FAQS = [
	{
		q: "What do you connect?",
		a: "Product analytics, your support desk, and billing. Most teams start with the warehouse or Segment, plus Zendesk or Intercom, plus Stripe. Salesforce and HubSpot are optional and two-way."
	},
	{
		q: "How long until the scores mean something?",
		a: "The first board is up the day the connections land. Scores get sharp after about two weeks of history. You are not waiting on a services project."
	},
	{
		q: "Does Alder replace our CRM?",
		a: "No. The CRM stays the system of record. Alder is where the team decides who to call on Monday."
	},
	{
		q: "Where does customer data live?",
		a: "Studio and Growth run in the US. Scale can pin a US or EU region. We don't train models on your accounts, and we don't sell the data."
	}
];
var press = "transition-transform duration-150 ease-out active:scale-[0.96] disabled:opacity-60";
var SignupContext = (0, import_react.createContext)(null);
function useSignup() {
	const value = (0, import_react.useContext)(SignupContext);
	if (!value) throw new Error("SignupProvider missing");
	return value;
}
function readLeads() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.flatMap((item) => {
			if (!item || typeof item !== "object") return [];
			const rec = item;
			if (typeof rec.email !== "string") return [];
			const plan = rec.plan === "studio" || rec.plan === "scale" || rec.plan === "growth" ? rec.plan : "growth";
			const billing = rec.billing === "monthly" ? "monthly" : "annual";
			return [{
				email: rec.email,
				plan,
				billing,
				at: typeof rec.at === "string" ? rec.at : ""
			}];
		});
	} catch {
		return [];
	}
}
function SignupProvider({ children }) {
	const [plan, setPlan] = (0, import_react.useState)("growth");
	const [billing, setBilling] = (0, import_react.useState)("annual");
	const [saved, setSaved] = (0, import_react.useState)(null);
	function submit(raw) {
		const email = raw.trim().toLowerCase();
		if (!EMAIL_RE.test(email)) return "Enter a valid email address.";
		const leads = readLeads();
		const existing = leads.find((lead) => lead.email === email);
		if (existing) {
			setSaved({
				...existing,
				already: true
			});
			return null;
		}
		const lead = {
			email,
			plan,
			billing,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify([...leads, lead]));
		setSaved(lead);
		return null;
	}
	function choose(next) {
		setPlan(next);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById("signup")?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
		window.setTimeout(() => {
			document.getElementById("email-footer")?.focus({ preventScroll: true });
		}, reduce ? 0 : 350);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupContext.Provider, {
		value: {
			plan,
			setPlan,
			billing,
			setBilling,
			saved,
			submit,
			clearSaved: () => setSaved(null),
			choose
		},
		children
	});
}
function Logo({ tone = "paper" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-8 place-items-center rounded-lg", tone === "forest" ? "bg-card text-forest" : "bg-forest text-card"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
				className: "size-4",
				strokeWidth: 2.25,
				"aria-hidden": true
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-xl font-semibold tracking-tight",
			children: "Alder"
		})]
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#get-started",
					className: "shrink-0",
					"aria-label": "Alder home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-1 lg:flex",
					children: NAV.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "inline-flex h-11 items-center rounded-full px-3 text-sm font-medium text-ink hover:bg-paper-deep",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#get-started",
						className: cn(press, "inline-flex h-11 items-center rounded-full bg-forest px-4 text-sm font-medium text-card hover:bg-forest-deep"),
						children: "Start free"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn(press, "grid size-11 place-items-center rounded-full border border-line lg:hidden"),
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: open ? "Close menu" : "Open menu"
						}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "size-5",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "size-5",
							"aria-hidden": true
						})]
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-nav",
			"aria-label": "Mobile",
			className: "border-t border-line px-5 py-3 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid",
				children: NAV.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "flex h-12 items-center text-lg",
					children: link.label
				}) }, link.href))
			})
		}) : null]
	});
}
function PlanPicker({ tone }) {
	const { plan, setPlan } = useSignup();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Plan",
		className: "flex flex-wrap gap-2",
		children: [
			"studio",
			"growth",
			"scale"
		].map((id) => {
			const selected = plan === id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": selected,
				onClick: () => setPlan(id),
				className: cn(press, "h-11 rounded-full border px-4 text-sm font-medium", tone === "paper" ? selected ? "border-forest bg-forest text-card" : "border-line bg-card text-ink" : selected ? "border-card bg-card text-ink" : "border-card/40 text-card"),
				children: PLAN_META[id].name
			}, id);
		})
	});
}
function SignupForm({ id, tone }) {
	const { plan, billing, saved, submit, clearSaved } = useSignup();
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const onForest = tone === "forest";
	function onSubmit(event) {
		event.preventDefault();
		const message = submit(value);
		setError(message);
		if (!message) setValue("");
	}
	if (saved) {
		const billingLabel = saved.billing === "annual" ? "billed annually" : "billed monthly";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "status",
			className: cn("rounded-2xl p-5", onForest ? "bg-forest-deep text-card" : "border border-line bg-card"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-2xl",
					children: saved.already ? "You're already on the list." : "You're on the list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("mt-2", onForest ? "text-mist" : "text-muted"),
					children: [
						"We'll write to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: onForest ? "text-card" : "text-ink",
							children: saved.email
						}),
						" ",
						"about ",
						PLAN_META[saved.plan].name,
						", ",
						billingLabel,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: clearSaved,
					className: cn("mt-4 inline-flex h-11 items-center text-sm font-medium underline underline-offset-4", onForest ? "text-moss" : "text-forest"),
					children: "Use a different email"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		noValidate: true,
		className: "grid gap-3",
		"aria-label": "Email signup",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanPicker, { tone }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: id,
						className: "sr-only",
						children: "Work email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id,
						name: "email",
						type: "email",
						inputMode: "email",
						autoComplete: "email",
						autoCapitalize: "none",
						autoCorrect: "off",
						spellCheck: false,
						placeholder: "karen@company.com",
						value,
						onChange: (event) => {
							setValue(event.target.value);
							if (error) setError(null);
						},
						"aria-invalid": error ? true : void 0,
						"aria-describedby": error ? `${id}-error` : `${id}-hint`,
						className: cn("h-12 w-full rounded-full border px-5 text-base text-ink placeholder:text-muted", onForest ? "border-transparent bg-card" : "border-line bg-card")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: cn(press, "inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-medium", onForest ? "bg-ink text-card hover:bg-ink/90" : "bg-forest text-card hover:bg-forest-deep"),
						children: PLAN_META[plan].cta
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				id: `${id}-hint`,
				className: cn("text-sm", onForest ? "text-mist" : "text-muted"),
				children: [
					PLAN_META[plan].note,
					" ",
					plan === "growth" ? billing === "annual" ? "Growth is $69 per user / month, billed yearly." : "Growth is $86 per user / month." : null
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-error`,
				role: "alert",
				className: cn("text-sm font-medium", onForest ? "text-card" : "text-ink"),
				children: error
			}) : null
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "get-started",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-5 lg:items-end lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-forest uppercase",
						children: "Customer success platform"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl",
						children: [
							"Catch ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-forest italic",
								children: "churn"
							}),
							" while you can still stop it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-muted",
						children: "Alder reads usage, tickets, and invoices, scores every account, and hands your team the next conversation — not another dashboard to interpret."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupForm, {
							id: "email-hero",
							tone: "paper"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#pricing",
							className: "font-medium text-ink underline decoration-line underline-offset-4",
							children: "Compare plans"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-3 gap-3 border-y border-line py-6 lg:grid-cols-1 lg:gap-6 lg:border-y-0 lg:border-l lg:py-0 lg:pl-8",
					children: [
						["Surprise churn", "−31%"],
						["Hours back", "18/wk"],
						["First save", "9 days"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-sm text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-serif text-3xl tabular-nums text-ink lg:text-4xl",
						children: value
					})] }, label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted lg:pl-8",
					children: "Median result after 90 days on Growth."
				})]
			})]
		})
	});
}
function Logos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-labelledby": "logos-heading",
		className: "border-y border-line bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "logos-heading",
				className: "text-center text-sm text-muted",
				children: "Already in the Monday meeting at"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3",
				children: LOGOS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "font-serif text-lg text-muted",
					children: name
				}, name))
			})]
		})
	});
}
function Value() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-forest uppercase",
				children: "Why teams switch"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl text-ink sm:text-5xl",
				children: "The Sunday spreadsheet was never a system."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 grid gap-8 md:grid-cols-3",
			children: [
				{
					title: "One score, not twelve tools",
					body: "Usage, tickets, and invoices collapse into a number the whole company can read without a glossary."
				},
				{
					title: "A next step, not a notification",
					body: "Risk assigns an owner and a playbook. The alert arrives as work that is already scoped."
				},
				{
					title: "A forecast you can defend",
					body: "Renewal dollars sit on the same board as the risk, so CS and finance stop reconciling spreadsheets."
				}
			].map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-t border-line pt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-serif text-sm text-forest",
						children: ["0", index + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-2xl",
						children: point.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: point.body
					})
				]
			}, point.title))
		})]
	});
}
function statusClass(status) {
	if (status === "Healthy") return "bg-moss text-forest-deep";
	if (status === "Critical") return "bg-ink text-card";
	if (status === "Risk") return "bg-paper-deep text-ink";
	return "border border-line text-muted";
}
function barClass(score) {
	if (score >= 75) return "bg-forest";
	if (score >= 50) return "bg-muted";
	return "bg-ink";
}
function Product() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const shown = ACCOUNTS.filter((account) => {
		if (filter === "healthy") return account.status === "Healthy";
		if (filter === "risk") return account.status !== "Healthy";
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "product",
		className: "scroll-mt-20 bg-ink text-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-moss uppercase",
					children: "The Monday board"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl sm:text-5xl",
					children: "See who needs a human this week."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-mist",
					children: "Scores move when usage drops, tickets pile up, or an invoice goes quiet. Owners already know the next call."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid gap-3 text-mist",
					children: [
						"One health number from product, support, and billing",
						"Critical accounts surface before the renewal call",
						"Forecast dollars stay attached to the account that moves them"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1.5 shrink-0 rounded-full bg-moss",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "overflow-hidden rounded-2xl border border-mist/25 bg-card text-ink shadow-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
								className: "size-4 text-forest",
								"aria-hidden": true
							}), "Sample book"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "Updated 6:40am"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 px-4 py-3 sm:px-5",
						children: [[
							{
								id: "all",
								label: "All"
							},
							{
								id: "risk",
								label: "Needs a human"
							},
							{
								id: "healthy",
								label: "Healthy"
							}
						].map((item) => {
							const selected = filter === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": selected,
								onClick: () => setFilter(item.id),
								className: cn(press, "h-11 rounded-full px-4 text-sm font-medium", selected ? "bg-ink text-card" : "bg-paper text-ink"),
								children: item.label
							}, item.id);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							"aria-live": "polite",
							className: "flex h-11 items-center text-sm text-muted",
							children: [shown.length, " accounts"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-5 py-8 text-sm text-muted",
							children: "No accounts in this view."
						}) : shown.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "grid size-11 shrink-0 place-items-center rounded-xl bg-paper font-medium",
								children: account.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium",
											children: account.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "shrink-0 font-serif text-lg tabular-nums",
											children: account.score
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 h-1.5 overflow-hidden rounded-full bg-paper-deep",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("h-full rounded-full", barClass(account.score)),
											style: { width: `${account.score}%` }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: account.signal
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("inline-flex h-7 items-center rounded-full px-2.5 text-xs font-medium", statusClass(account.status)),
											children: account.status
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted",
											children: account.owner
										})]
									})
								]
							})]
						}, account.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4 border-t border-line bg-paper px-4 py-4 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "Net renewal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl tabular-nums",
							children: "$1.84M"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: "At risk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-2xl tabular-nums",
							children: "$210k"
						})] })]
					})
				]
			})]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-forest uppercase",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-4xl sm:text-5xl",
						children: "Everything between the signal and the save."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#signup",
					className: cn(press, "inline-flex h-12 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-card hover:bg-forest-deep"),
					children: "Get started"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3",
				children: FEATURES.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-sm text-forest",
							children: feature.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl",
							children: feature.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: feature.body
						})
					]
				}, feature.n))
			})]
		})
	});
}
function Pricing() {
	const { billing, setBilling, choose } = useSignup();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "scroll-mt-20 bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-forest uppercase",
							children: "Pricing"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-4xl sm:text-5xl",
							children: "Priced per CSM, not per account."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted",
							children: "Start free. Upgrade when the renewal number is yours to hit."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "radiogroup",
					"aria-label": "Billing period",
					className: "mx-auto mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex rounded-full border border-line bg-card p-1",
						children: [["monthly", "Monthly"], ["annual", "Annual"]].map(([id, label]) => {
							const selected = billing === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								role: "radio",
								"aria-checked": selected,
								onClick: () => setBilling(id),
								className: cn(press, "h-11 rounded-full px-4 text-sm font-medium", selected ? "bg-ink text-card" : "text-muted"),
								children: label
							}, id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-forest-deep",
						children: "Save 20% yearly"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid items-stretch gap-4 lg:grid-cols-3",
					children: TIERS.map((tier) => {
						const amount = tier.monthly === null ? null : billing === "annual" ? tier.annual : tier.monthly;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: cn("flex flex-col rounded-2xl bg-card p-6", tier.featured ? "border-2 border-forest" : "border border-line"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl",
										children: PLAN_META[tier.id].name
									}), tier.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-moss px-2.5 py-1 text-xs font-medium text-forest-deep",
										children: "Most chosen"
									}) : null]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: tier.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6",
									children: [amount === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-5xl",
										children: "Let's talk"
									}) : amount === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-5xl",
										children: "Free"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-end gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-serif text-5xl tabular-nums",
											children: ["$", amount]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pb-1.5 text-sm text-muted",
											children: "/ user / month"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted",
										children: tier.id === "growth" ? billing === "annual" ? "$828 per user, billed yearly. You save $204." : "Billed monthly. Switch to annual and save $204 a year." : tier.id === "studio" ? "No card. Upgrade when you want." : "A walkthrough, then a quote."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 grid flex-1 gap-3",
									children: tier.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "mt-0.5 size-4 shrink-0 text-forest",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
									}, feature))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => choose(tier.id),
									className: cn(press, "mt-8 inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-medium", tier.featured ? "bg-forest text-card hover:bg-forest-deep" : "border border-line bg-card text-ink hover:bg-paper"),
									children: PLAN_META[tier.id].cta
								})
							]
						}, tier.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-16 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-3xl",
						children: "Questions, answered"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 border-t border-line",
						children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group border-b border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: "flex min-h-12 cursor-pointer items-center justify-between gap-4 py-4 text-base font-medium",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted transition-transform duration-200 group-open:rotate-45",
									children: "+"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "pb-4 text-muted",
								children: item.a
							})]
						}, item.q))
					})]
				})
			]
		})
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-forest uppercase",
					children: "Stories"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-4xl sm:text-5xl",
					children: "Teams who stopped guessing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 lg:grid-cols-3",
					children: QUOTES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: cn("flex h-full flex-col rounded-2xl p-6", item.ink ? "bg-ink text-card" : "border border-line bg-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex-1 font-serif text-xl leading-snug",
							children: [
								"“",
								item.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("text-sm", item.ink ? "text-mist" : "text-muted"),
								children: item.role
							})]
						})]
					}) }, item.name))
				})
			]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "signup",
		className: "on-forest scroll-mt-20 bg-forest text-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-moss uppercase",
					children: "Get started"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl sm:text-5xl",
					children: "Put Monday's calls on one board."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg text-mist",
					children: "Tell us where to send the workspace. Most teams see their first at-risk account the day connections land."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupForm, {
						id: "email-footer",
						tone: "forest"
					})
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm text-muted",
				children: "Alder is the customer success workspace for teams who are done guessing which logo leaves next."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Footer",
				className: "grid content-start sm:justify-self-end",
				children: [NAV.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex h-11 items-center text-sm font-medium",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#signup",
					className: "flex h-11 items-center text-sm font-medium",
					children: "Get started"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-4 text-sm text-muted",
				children: "© 2026 Alder"
			})
		})]
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SignupProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-card",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logos, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Product, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
var SplitComponent = LandingPage;
//#endregion
export { SplitComponent as component };
