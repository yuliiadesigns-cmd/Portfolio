import Header from "./Header";
import ScrollHint from "./ScrollHint";
import Carousel from "./Carousel";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFEFA] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#0D3B2E] px-4 pb-20 pt-32 text-white md:px-10 md:pt-40">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-[0.625rem] border border-white/20 bg-white/10 px-4 py-2 text-base text-white transition-all duration-300 hover:bg-white/20"
        >
          <span className="leading-none">←</span>
          <span>Back</span>
        </a>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h1 className="text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] md:text-[2.5rem]">
              Unifying fragmented analytics tools across a global consulting firm
            </h1>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-2">
            <p className="text-lg leading-[1.4] tracking-[-0.02em] text-white/95 md:text-xl">
              BCG's internal analytics tools were fragmented and inconsistent
              across teams. I led product design to unify the experience —
              reducing time spent on data processing and analysis by 33%.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-base md:mt-20 md:block md:space-y-8 md:text-lg">
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Year</p>
                <p>2023</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Client</p>
                <p>Boston Consulting Group</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Website</p>
                <a href="https://bcg.com" target="_blank" className="underline underline-offset-2 hover:opacity-70">bcg.com</a>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Contribution</p>
                <p className="leading-[1.5]">
                  Product Design — research, Double Diamond process,
                  design system, and Cost Evaluation Tool.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ScrollHint />
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-base font-medium text-[#999]">Problem Statement</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[1.375rem] font-normal leading-[1.35] tracking-[-0.02em] md:text-[1.75rem]">
              Internal analytics tools were fragmented across teams with
              inconsistent UX. Analysts spent significant time switching
              between apps, re-entering data, and reconciling results —
              instead of focusing on insights.
            </p>
            <div className="mt-10 inline-block rounded-[0.875rem] bg-[#0D3B2E] px-6 py-5">
              <p className="text-[3rem] font-light leading-none tracking-[-0.04em] text-white">33%</p>
              <p className="mt-2 text-sm text-white/60">reduction in data processing and analysis time</p>
            </div>
          </div>
        </div>
        <div className="mt-14 md:mt-20">
          <Carousel />
        </div>
      </section>

      {/* MY APPROACH */}
      <section className="px-4 py-14 md:px-10 md:py-24">
        <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.01em] md:mb-14">My Approach</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-base leading-[1.6] text-[#555]">
              I applied the <strong>Double Diamond framework</strong> — structured
              into Discovery and Delivery phases — to ensure every design
              decision was grounded in real user behaviour and technical constraints.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="overflow-hidden border border-[#d0cdc8]">
              <div className="grid grid-cols-3 border-b border-[#d0cdc8] bg-[#F0EDE6] px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#999]">
                <span>Constraint</span>
                <span>Action taken</span>
                <span>Outcome</span>
              </div>
              {[
                {
                  constraint: "Inconsistent design language",
                  action: "Audited existing components and built a unified design system",
                  outcome: "Single source of truth adopted across 4 teams",
                },
                {
                  constraint: "No governance model",
                  action: "Defined contribution guidelines and review process",
                  outcome: "Reduced design debt by ~40% in 6 months",
                },
                {
                  constraint: "Scalability concerns",
                  action: "Tokenised spacing, colour, and typography",
                  outcome: "System scaled to 3 new product lines without rework",
                },
                {
                  constraint: "Distributed team",
                  action: "Created async-first documentation and Figma libraries",
                  outcome: "Onboarding time cut from 2 weeks to 3 days",
                },
                {
                  constraint: "Implementation gaps",
                  action: "Embedded with engineering for weekly design–dev syncs",
                  outcome: "Pixel-accuracy improved, fewer back-and-forth cycles",
                },
              ].map(({ constraint, action, outcome }, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 gap-4 px-5 py-5 text-[0.9375rem] leading-[1.55] ${
                    i % 2 === 1 ? "bg-[#F0EDE6]" : "bg-[#FFFEFA]"
                  } ${i < 4 ? "border-b border-[#d0cdc8]" : ""}`}
                >
                  <p className="text-[#333]">{constraint}</p>
                  <p className="text-[#555]">{action}</p>
                  <p className="text-[#555]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.01em] md:mb-14">Research Phase</h2>

        <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-base leading-[1.6] text-[#555]">
              3 weeks of user interviews + 1 week of analysis. I shadowed
              analysts, observed workflows, and mapped four primary
              behaviour patterns.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#d0cdc8] bg-[#d0cdc8] sm:grid-cols-2">
              {[
                { n: "01", title: "Cost page inspection", body: "Users spent disproportionate time validating cost data before any analysis could begin." },
                { n: "02", title: "Cross-system comparison", body: "Analysts regularly switched between 3–5 apps to compare data, introducing manual error." },
                { n: "03", title: "Multi-app calculations", body: "Correlated Index and Supplier Margin Cost required jumping between tools with no shared state." },
                { n: "04", title: "Currency verification", body: "Users had no reliable way to confirm data freshness — leading to decisions made on stale information." },
              ].map(({ n, title, body }) => (
                <div key={n} className="bg-[#FFFEFA] px-6 py-8 transition-colors duration-200 hover:bg-[#F0EDE6]">
                  <p className="mb-4 text-xs text-[#bbb]">{n}</p>
                  <p className="mb-3 text-xl font-bold tracking-[-0.01em]">{title}</p>
                  <p className="text-[0.9375rem] leading-[1.6] text-[#444]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY SOLUTION */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#999]">Final Solution</p>
            <h2 className="text-[2rem] font-bold leading-[1.2] tracking-[-0.03em]">
              Cost Evaluation Tool (CET)
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            <p className="text-xl leading-[1.55] text-[#333]">
              Using HMW frameworks and shadowing sessions, I designed the
              Cost Evaluation Tool — a unified interface that consolidated
              cost inspection, cross-system data comparison, and margin
              calculations into a single workflow.
            </p>
            <p className="text-xl leading-[1.55] text-[#333]">
              The tool simplified investment evaluation and cost/revenue
              assessment, eliminating the need to switch between apps
              and reducing manual reconciliation entirely.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 md:gap-4">
              {[
                { label: "Time saved on data processing", value: "33%" },
                { label: "Apps consolidated into one", value: "5→1" },
                { label: "Onboarding time reduced", value: "↓78%" },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-[0.875rem] bg-[#1a1a1a] px-4 py-5 md:px-6 md:py-7">
                  <p className="mb-2 text-[2.25rem] font-light leading-none tracking-[-0.04em] text-[#FFFEFA]">
                    {value}
                  </p>
                  <p className="text-sm leading-[1.5] text-[#FFFEFA]/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e0e0e] px-4 py-10 text-[#999] md:px-10 md:py-12">
        <div className="flex flex-col gap-4 border-t border-[#2a2a2a] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" className="text-sm text-[#bbb] hover:text-white">
              LinkedIn
            </a>
            <span className="text-[#444]">·</span>
            <span className="text-xs text-[#777]">yuliiadesigns@gmail.com</span>
          </div>
          <span className="text-xs text-[#555]">©2025</span>
        </div>
      </footer>
    </main>
  );
}
