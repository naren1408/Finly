import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  ReceiptText,
  Sparkles,
  WalletCards,
  X,
} from "lucide-react";
import dailyHabitsImage from "./assets/photos/daily-habits.jpg";
import monthlyReviewImage from "./assets/photos/monthly-review.jpg";
import tripPlanningImage from "./assets/photos/trip-planning.jpg";
import {
  categoryBreakdown,
  demoCategories,
  features,
  heroHighlights,
  howItWorks,
  insight,
  lifeMoments,
  monthlyBudget,
  monthlySnapshot,
  overviewStats,
  recentTransactions,
  recurringBills,
  savingsGoal,
  spendingTrend,
} from "./data/financeData";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
];

function LogoMark() {
  return (
    <div className="logo">
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      <span className="logo-text">finly</span>
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-orbit" aria-hidden="true">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
    </div>
  );
}

const lifeMomentImages = [dailyHabitsImage, tripPlanningImage, monthlyReviewImage];

function PhotoCard({ tag, title, imageAlt, imageSrc }) {
  return (
    <article className="photo-card">
      <img className="photo-visual" src={imageSrc} alt={imageAlt} loading="lazy" />
      <span className="photo-tag">{tag}</span>
      <p>{title}</p>
    </article>
  );
}

function FeatureIllustration({ index }) {
  const shapes = [
    "M24 74c9-17 28-29 44-24 16 4 25 18 27 31 2 14-3 28-13 39-11 12-28 19-44 16-16-3-28-15-32-31-4-11 0-22 18-31Z",
    "M25 54c0-16 13-29 29-29h22c14 0 25 11 25 25v20c0 14-11 25-25 25H54c-16 0-29-13-29-29V54Z",
    "M26 72c6-25 22-43 44-47 23-5 37 8 42 25 6 18 1 39-13 53-14 13-37 17-54 7-18-10-25-21-19-38Z",
    "M25 64c0-25 17-39 41-39 25 0 41 14 41 39 0 18-8 35-23 44-15 8-33 8-49 0-6-3-10-10-10-18V64Z",
  ];

  return (
    <svg className="feature-illustration" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <path d={shapes[index]} fill={`url(#grad-${index})`} />
      <circle cx="60" cy="60" r="22" fill="#4f46e5" opacity="0.15" />
      <path
        d="M43 63c6 8 14 12 22 12 8 0 16-4 22-12M44 51h32M44 57h19"
        fill="none"
        stroke="#4f46e5"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StepIllustration({ index }) {
  const detail = [
    ["M26 84h68", "M36 68h22", "M67 50h17"],
    ["M26 84h68", "M38 63l12-11 12 8 19-20", "M38 50h8"],
    ["M26 84h68", "M40 70h14", "M62 61h18"],
  ];

  return (
    <svg className="step-illustration" viewBox="0 0 120 100" aria-hidden="true">
      <rect x="14" y="16" width="92" height="68" rx="24" fill="#ffffff" />
      <rect x="24" y="26" width="72" height="14" rx="7" fill="#e2e8f0" />
      {detail[index].map((path) => (
        <path
          key={path}
          d={path}
          fill="none"
          stroke="#4f46e5"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <circle cx="85" cy="33" r="9" fill="#f59e0b" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Food");

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const activeDemo = demoCategories[activeCategory];

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container navbar">
          <a href="#top" className="brand" aria-label="Finly home">
            <LogoMark />
          </a>
          <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="button button-primary mobile-only" href="#demo" onClick={() => setMenuOpen(false)}>
              Explore Finly
            </a>
          </nav>
          <a className="button button-primary desktop-only" href="#demo">
            Explore Finly
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <HeroArtwork />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Personal finance, simplified</span>
              <h1>Know where your money goes.</h1>
              <p>
                Finly brings your spending, budgets, and savings goals into one clear
                view so you can make better everyday money decisions.
              </p>
              <div className="hero-highlights" aria-label="Finly overview highlights">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="hero-highlight">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#demo">
                  Explore Finly <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#how-it-works">
                  See how it works <ChevronDown size={18} />
                </a>
              </div>
              <div className="hero-motion" aria-hidden="true">
                <div className="motion-label">
                  <span className="motion-dot" />
                  Spending pulse
                </div>
                <div className="motion-bars">
                  {[36, 56, 44, 72, 52, 88, 64, 78].map((height, index) => (
                    <span key={index} style={{ "--bar-height": `${height}%` }} />
                  ))}
                </div>
                <strong>Clearer every day</strong>
              </div>
            </div>

            <div className="hero-visual" aria-label="Finly dashboard preview">
              <section className="dashboard-card">
                <div className="dashboard-header">
                  <div>
                    <p className="section-kicker">Good morning, Alex</p>
                    <h2>Here's your financial overview for August.</h2>
                  </div>
                  <span className="header-pill">
                    <Sparkles size={16} /> Calm month
                  </span>
                </div>

                <div className="stat-grid">
                  {overviewStats.map((stat) => (
                    <article key={stat.label} className={`stat-card tone-${stat.tone}`}>
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                      <small>{stat.detail}</small>
                    </article>
                  ))}
                </div>

                <section className="chart-card">
                  <div className="card-heading">
                    <div>
                      <p className="section-kicker">Spending overview</p>
                      <h3>Weekly trend</h3>
                    </div>
                    <span className="micro-note">This month</span>
                  </div>
                  <div className="chart-wrap">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={spendingTrend}>
                        <defs>
                          <linearGradient id="spendFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2e8b67" stopOpacity={0.35} />
                            <stop offset="95%" stopColor="#2e8b67" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} stroke="#ece5d7" strokeDasharray="4 4" />
                        <Tooltip
                          contentStyle={{
                            borderRadius: "14px",
                            border: "1px solid #e7e1d3",
                            background: "#fffaf3",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="spending"
                          stroke="#1f7a5c"
                          strokeWidth={3}
                          fill="url(#spendFill)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </section>

                <div className="dashboard-lower-grid">
                  <section className="mini-panel">
                    <div className="mini-panel-head">
                      <p className="section-kicker">Recent activity</p>
                      <span className="micro-note">Updated today</span>
                    </div>
                    <div className="transaction-list">
                      {recentTransactions.map((transaction) => (
                        <div key={`${transaction.merchant}-${transaction.time}`} className="transaction-row">
                          <div>
                            <strong>{transaction.merchant}</strong>
                            <span>{transaction.category}</span>
                          </div>
                          <div className="transaction-amount">
                            <strong>{transaction.amount}</strong>
                            <span>{transaction.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="mini-panel">
                    <div className="mini-panel-head">
                      <p className="section-kicker">Upcoming bills</p>
                      <span className="micro-note">This week</span>
                    </div>
                    <div className="bills-list">
                      {recurringBills.map((bill) => (
                        <div key={bill.name} className="bill-row">
                          <div>
                            <strong>{bill.name}</strong>
                            <span>Due {bill.due}</span>
                          </div>
                          <strong>{bill.amount}</strong>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="life-strip">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-kicker">Money, made a little lighter.</span>
            </div>
            <div className="photo-grid">
              {lifeMoments.map((item, index) => (
                <PhotoCard
                  key={item.title}
                  tag={item.tag}
                  title={item.title}
                  imageAlt={item.imageAlt}
                  imageSrc={lifeMomentImages[index]}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section" id="product">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Product</span>
              <h2>A clearer picture of your money.</h2>
              <p>
                See your spending patterns, track your goals, and understand your
                monthly habits without digging through spreadsheets.
              </p>
            </div>

            <div className="showcase-grid">
              <div className="showcase-stack">
                <article className="panel panel-large">
                  <div className="card-heading">
                    <div>
                      <p className="section-kicker">Where your money goes</p>
                      <h3>Category breakdown</h3>
                    </div>
                  </div>
                  <div className="category-layout">
                    <div className="donut-wrap">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryBreakdown}
                            dataKey="amount"
                            nameKey="category"
                            innerRadius={62}
                            outerRadius={86}
                            paddingAngle={4}
                          >
                            {categoryBreakdown.map((entry) => (
                              <Cell key={entry.category} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value) => `₹${value.toLocaleString("en-IN")}`}
                            contentStyle={{
                              borderRadius: "14px",
                              border: "1px solid #e7e1d3",
                              background: "#fffaf3",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="category-list">
                      {categoryBreakdown.map((item) => (
                        <div key={item.category} className="category-row">
                          <div className="category-meta">
                            <span
                              className="swatch"
                              style={{ backgroundColor: item.color }}
                              aria-hidden="true"
                            />
                            <span>{item.category}</span>
                          </div>
                          <div className="category-values">
                            <strong>₹{item.amount.toLocaleString("en-IN")}</strong>
                            <small>{item.percentage}%</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="panel insight-card">
                  <div className="insight-topline">
                    <WalletCards size={18} />
                    <span>{insight.title}</span>
                  </div>
                  <p>{insight.body}</p>
                  <a href="#demo" className="text-link subtle-link">
                    {insight.cta}
                  </a>
                </article>

                <article className="panel snapshot-panel">
                  <div className="card-heading">
                    <div>
                      <p className="section-kicker">Monthly snapshot</p>
                      <h3>August at a glance</h3>
                    </div>
                    <ReceiptText size={18} />
                  </div>
                  <div className="snapshot-grid">
                    {monthlySnapshot.map((item) => (
                      <div key={item.label} className={`snapshot-item tone-${item.tone}`}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <div className="showcase-stack">
                <article className="panel">
                  <div className="card-heading">
                    <div>
                      <p className="section-kicker">Monthly budget</p>
                      <h3>Budget status</h3>
                    </div>
                    <span className="status-pill">{monthlyBudget.status}</span>
                  </div>
                  <div className="budget-stats">
                    <div>
                      <span>Budget</span>
                      <strong>₹{monthlyBudget.budget.toLocaleString("en-IN")}</strong>
                    </div>
                    <div>
                      <span>Spent</span>
                      <strong>₹{monthlyBudget.spent.toLocaleString("en-IN")}</strong>
                    </div>
                    <div>
                      <span>Remaining</span>
                      <strong>₹{monthlyBudget.remaining.toLocaleString("en-IN")}</strong>
                    </div>
                  </div>
                  <div className="progress-track" aria-label="61 percent of monthly budget used">
                    <span style={{ width: `${monthlyBudget.progress}%` }} />
                  </div>
                </article>

                <article className="panel">
                  <div className="card-heading">
                    <div>
                      <p className="section-kicker">Savings goal</p>
                      <h3>{savingsGoal.name}</h3>
                    </div>
                    <a href="#demo" className="text-link subtle-link">
                      View goal
                    </a>
                  </div>
                  <div className="goal-layout">
                    <img
                      className="goal-thumb"
                      src={tripPlanningImage}
                      alt="Planning a weekend getaway around a table with a map and laptop"
                      loading="lazy"
                    />
                    <div className="goal-copy">
                      <div className="budget-stats compact">
                        <div>
                          <span>Target</span>
                          <strong>₹{savingsGoal.target.toLocaleString("en-IN")}</strong>
                        </div>
                        <div>
                          <span>Saved</span>
                          <strong>₹{savingsGoal.saved.toLocaleString("en-IN")}</strong>
                        </div>
                        <div>
                          <span>Remaining</span>
                          <strong>₹{savingsGoal.remaining.toLocaleString("en-IN")}</strong>
                        </div>
                      </div>
                      <div className="progress-track" aria-label="69 percent of savings goal reached">
                        <span style={{ width: `${savingsGoal.progress}%` }} />
                      </div>
                    </div>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">How it works</span>
              <h2>From transactions to clarity.</h2>
            </div>
            <div className="steps-grid">
              {howItWorks.map((step, index) => (
                <article key={step.id} className="step-card">
                  <StepIllustration index={index} />
                  <div className="step-badge">{step.id}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" id="features">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Features</span>
              <h2>Everything you need to feel more in control.</h2>
            </div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <article key={feature.title} className="feature-card">
                  <FeatureIllustration index={index} />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="demo-section" id="demo">
          <div className="container demo-grid">
            <div className="section-head demo-head">
              <span className="section-kicker">Interactive demo</span>
              <h2>Explore your spending.</h2>
              <p>
                Switch categories to see how Finly keeps everyday spending easy to scan
                and easy to understand.
              </p>
            </div>
            <article className="demo-panel">
              <div className="tab-row" role="tablist" aria-label="Spending categories">
                {Object.keys(demoCategories).map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    className={activeCategory === category ? "tab-button is-active" : "tab-button"}
                    aria-selected={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="demo-content">
                <div className="demo-metrics">
                  <div>
                    <span>Monthly total</span>
                    <strong>{activeDemo.amount}</strong>
                  </div>
                  <div>
                    <span>Share of spending</span>
                    <strong>{activeDemo.percentage}</strong>
                  </div>
                </div>

                <div className="demo-body">
                  <div className="demo-bars" aria-hidden="true">
                    {activeDemo.bars.map((bar, index) => (
                      <span key={`${activeCategory}-${index}`} style={{ height: `${bar}%` }} />
                    ))}
                  </div>
                  <div className="demo-sidecard">
                    <img
                      src={dailyHabitsImage}
                      alt="Using a finance app beside a coffee"
                      loading="lazy"
                    />
                    <p className="demo-insight">{activeDemo.insight}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <article className="cta-card">
              <div className="cta-overlay" aria-hidden="true" />
              <img
                className="cta-image"
                src={monthlyReviewImage}
                alt="A calm desk setup for reviewing monthly finances"
                loading="lazy"
              />
              <div className="cta-content">
                <span className="section-kicker">Start here</span>
                <h2>Your money should make sense.</h2>
                <p>
                  Finly gives you a clearer way to understand today, plan ahead, and
                  stay aware of where your money goes.
                </p>
                <a className="button button-primary" href="#top">
                  Explore Finly <ArrowRight size={18} />
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <LogoMark />
            <p>Personal finance, made understandable.</p>
          </div>
          <div className="footer-links">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
          <p className="footer-note">Concept product created for a frontend engineering assessment.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
