import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ChartNoAxesCombined,
  ChevronRight,
  Database,
  Gauge,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  Network,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import "./styles.css";

const metrics = [
  { value: "$3M+", label: "Meta ad spend managed", detail: "Optimized campaigns while consistently meeting KPIs." },
  { value: "$1.5M", label: "Monthly budget team target", detail: "Co-founded and developed an in-house buying operation." },
  { value: "50+", label: "Ad accounts operated", detail: "Daily oversight across Meta and Google ecosystems." },
  { value: "70%", label: "Follower growth", detail: "Rebranding and awareness push for Mikko over six months." },
];

const performanceSummary = [
  { currency: "USD", spend: "$5.55M", clicks: "6.37M", impressions: "719.5M", ctr: "0.88%", cpc: "$0.87" },
  { currency: "BRL", spend: "R$2.00M", clicks: "845K", impressions: "48.1M", ctr: "1.76%", cpc: "R$2.37" },
  { currency: "MXN", spend: "MX$12.2K", clicks: "3.9K", impressions: "88.4K", ctr: "4.46%", cpc: "MX$3.09" },
];

const accountBars = [
  { label: "Account 01", currency: "USD", spend: "$1.35M", clicks: "475K", impressions: "4.6M", ctr: "10.42%", bar: 100 },
  { label: "Account 02", currency: "BRL", spend: "R$1.01M", clicks: "571K", impressions: "34.1M", ctr: "1.67%", bar: 75 },
  { label: "Account 03", currency: "USD", spend: "$999K", clicks: "239K", impressions: "12.9M", ctr: "1.86%", bar: 74 },
  { label: "Account 04", currency: "BRL", spend: "R$988K", clicks: "274K", impressions: "14.0M", ctr: "1.96%", bar: 73 },
  { label: "Account 05", currency: "USD", spend: "$983K", clicks: "3.31M", impressions: "511M", ctr: "0.65%", bar: 73 },
  { label: "Account 06", currency: "USD", spend: "$941K", clicks: "267K", impressions: "13.7M", ctr: "1.95%", bar: 70 },
  { label: "Account 07", currency: "USD", spend: "$326K", clicks: "149K", impressions: "1.3M", ctr: "11.07%", bar: 24 },
  { label: "Account 08", currency: "USD", spend: "$276K", clicks: "974K", impressions: "97.1M", ctr: "1.00%", bar: 20 },
];

const caseStudies = [
  {
    company: "Locent Technology",
    role: "Lead Media Buying Specialist",
    period: "2023 - Present",
    icon: Target,
    summary:
      "Scaled paid social performance across iGaming products, managing large Meta budgets, account operations, tracking systems, supplier relationships, and executive reporting.",
    highlights: ["Daily budgets from $1K to $30K", "LATAM market and user-quality analysis", "Mentored junior media buyers"],
  },
  {
    company: "Mikko Food Industry",
    role: "Digital Marketing Executive",
    period: "2020 - 2023",
    icon: Megaphone,
    summary:
      "Led social media, content planning, PPC campaigns, influencer coordination, chatbot funnel work, and digital/offline advertising materials for FMCG products.",
    highlights: ["Six FMCG product channels", "30% inquiry lift in six months", "Commercial and campaign production"],
  },
  {
    company: "Trust & Development",
    role: "Customer Relationship Officer",
    period: "2017 - 2019",
    icon: UsersRound,
    summary:
      "Built customer relationship processes, supported project management, wrote education-stage content, and handled B2B awareness and negotiation work.",
    highlights: ["Customer retention framework", "Industry blog writing", "Hospital and stakeholder negotiations"],
  },
];

const toolGroups = [
  { title: "Media Buying", tools: ["Meta Ads", "TikTok Ads", "Google Ads", "Kwai", "XMP Mobivista"], icon: Gauge },
  { title: "Tracking", tools: ["Voluum", "RedTrack", "AppsFlyer", "Adjust", "Google Analytics"], icon: Network },
  { title: "Analytics", tools: ["SQL", "Tableau", "Power BI", "ROI", "ROAS"], icon: Database },
  { title: "Leadership", tools: ["Budget control", "Team mentoring", "Vendor relations", "C-suite reporting"], icon: BriefcaseBusiness },
];

const proofItems = [
  {
    title: "Commercial Film Production",
    tag: "Mikko",
    src: "/proof/commercial-film-production.jpg",
  },
  {
    title: "Content Planning Board",
    tag: "Campaign operations",
    src: "/proof/campaign-creative-screenshot.jpg",
    fit: "contain",
  },
  {
    title: "Advertising Photo Work",
    tag: "Creative support",
    src: "/proof/advertising-photo-work.jpg",
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zay Lin Oo home">
          <span>ZLO</span>
          <strong>Zay Lin Oo</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#results">Results</a>
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Media Buying Specialist
          </div>
          <h1>Scaling paid campaigns with sharp data, calm execution, and serious budget discipline.</h1>
          <p>
            I help performance-driven teams manage paid social, tracking, analytics, and campaign operations across
            Meta, TikTok, Google, and high-velocity growth markets.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:zaylinoomm98@gmail.com">
              <Mail size={18} />
              Contact Me
            </a>
            <a className="secondary-action" href="#work">
              View Work
              <ChevronRight size={18} />
            </a>
          </div>
        </div>

        <aside className="command-panel" aria-label="Performance summary">
          <div className="panel-topline">
            <span>Live Operator Profile</span>
            <BadgeCheck size={18} />
          </div>
          <div className="spend-card">
            <span>Total managed spend</span>
            <strong>$3M+</strong>
            <div className="spend-bars" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="market-row">
            <Globe2 size={18} />
            <span>LATAM / iGaming market knowledge</span>
          </div>
          <div className="signal-grid">
            <span>ROAS</span>
            <span>Retention</span>
            <span>User Quality</span>
            <span>Creative Tests</span>
          </div>
        </aside>
      </section>

      <section className="results-band" id="results">
        <div className="section-heading">
          <span>Results Snapshot</span>
          <h2>Proof that belongs above the fold.</h2>
        </div>
        <div className="metric-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="performance-section">
        <div className="section-heading">
          <span>Account Performance Extract</span>
          <h2>Anonymized report data from the account performance PDF.</h2>
        </div>
        <div className="performance-layout">
          <article className="performance-chart" aria-label="Top spend account distribution">
            <div className="chart-heading">
              <div>
                <ChartNoAxesCombined size={24} />
                <strong>Top 8 Account Rows By Reported Spend</strong>
              </div>
              <span>91 active rows extracted</span>
            </div>
            <div className="bar-list">
              {accountBars.map((item) => (
                <div className="bar-row" key={item.label}>
                  <div className="bar-meta">
                    <strong>{item.label}</strong>
                    <span>{item.spend}</span>
                  </div>
                  <div className="bar-track" aria-hidden="true">
                    <i style={{ width: `${item.bar}%` }} />
                  </div>
                  <div className="bar-details">
                    <span>{item.currency}</span>
                    <span>{item.clicks} clicks</span>
                    <span>{item.impressions} impressions</span>
                    <span>{item.ctr} CTR</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <aside className="currency-panel" aria-label="Currency performance summary">
            {performanceSummary.map((item) => (
              <article key={item.currency}>
                <div>
                  <span>{item.currency}</span>
                  <strong>{item.spend}</strong>
                </div>
                <dl>
                  <div>
                    <dt>Clicks</dt>
                    <dd>{item.clicks}</dd>
                  </div>
                  <div>
                    <dt>Impressions</dt>
                    <dd>{item.impressions}</dd>
                  </div>
                  <div>
                    <dt>Weighted CTR</dt>
                    <dd>{item.ctr}</dd>
                  </div>
                  <div>
                    <dt>Avg. CPC</dt>
                    <dd>{item.cpc}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </aside>
        </div>
        <p className="performance-note">
          Source: `Account performance (1).pdf`. Account names and customer IDs are excluded. Spend is shown in each
          row's original report currency, not converted across currencies.
        </p>
      </section>

      <section className="case-section" id="work">
        <div className="section-heading">
          <span>Selected Work</span>
          <h2>Performance marketing with operational range.</h2>
        </div>
        <div className="case-list">
          {caseStudies.map((item) => {
            const Icon = item.icon;
            return (
              <article className="case-card" key={item.company}>
                <div className="case-icon">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="case-meta">
                    <span>{item.role}</span>
                    <span>{item.period}</span>
                  </div>
                  <h3>{item.company}</h3>
                  <p>{item.summary}</p>
                  <div className="highlight-row">
                    {item.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="tools-section">
        <div className="section-heading">
          <span>Stack</span>
          <h2>Tools grouped by the job they do.</h2>
        </div>
        <div className="tool-grid">
          {toolGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="tool-card" key={group.title}>
                <Icon size={22} />
                <h3>{group.title}</h3>
                <div>
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="proof-section" id="proof">
        <div className="section-heading">
          <span>Proof Gallery</span>
          <h2>Creative work, campaign assets, and certificates.</h2>
        </div>
        <div className="proof-grid">
          {proofItems.map((item) => (
            <figure className={`proof-card ${item.fit === "contain" ? "proof-card--contain" : ""}`} key={item.title}>
              <img src={item.src} alt={item.title} loading="lazy" />
              <figcaption>
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="proof-note">
          Confidential campaign dashboards should be published only after names, account IDs, and sensitive spend details
          are blurred. Certification:{" "}
          <a href="/proof/google-digital-garage-certificate.pdf" target="_blank" rel="noreferrer">
            Google Digital Garage
          </a>
          .
        </p>
      </section>

      <section className="about-section">
        <div className="about-copy">
          <span>About</span>
          <h2>I sit between campaign execution, data discipline, and creative judgment.</h2>
          <p>
            My background started in customer relationships, content, and FMCG social marketing, then moved into lead
            media buying for high-spend performance environments. That mix helps me understand both the numbers and the
            people behind the campaign.
          </p>
        </div>
        <div className="about-facts">
          <div>
            <MapPin size={20} />
            <span>Bishkek, Kyrgyzstan</span>
          </div>
          <div>
            <BarChart3 size={20} />
            <span>English, Mandarin, Japanese N4</span>
          </div>
          <div>
            <Camera size={20} />
            <span>Photography, videography, tech</span>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <span>Ready for the next scale problem?</span>
          <h2>Let’s talk performance, markets, and growth.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:zaylinoomm98@gmail.com">
            <Mail size={18} />
            zaylinoomm98@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/zay-lin-oo-7815741aa/" target="_blank" rel="noreferrer">
            LinkedIn
            <ArrowUpRight size={18} />
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
