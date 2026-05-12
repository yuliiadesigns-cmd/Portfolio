import Header from "./Header";
import ScrollHint from "./ScrollHint";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFEFA] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#1B3A4B] px-4 pb-20 pt-32 text-white md:px-10 md:pt-40">
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
              From sales-dependent demos to self-serve marketplace
            </h1>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-2">
            <p className="text-lg leading-[1.4] tracking-[-0.02em] text-white/95 md:text-xl">
              As the sole designer, I transformed Revenue Base from a
              platform that required manual demos and internal coordination
              into a self-serve marketplace — cutting sales cycles from
              30 days to under one week.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-base md:mt-20 md:block md:space-y-8 md:text-lg">
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Year</p>
                <p>2026</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Client</p>
                <p>Revenue Base</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Website</p>
                <p>revenuebase.ai</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Contribution</p>
                <p className="leading-[1.5]">
                  Sole designer — stakeholder interviews, architecture,
                  flow design, and full design system creation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ScrollHint />
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="border-t border-[#d0cdc8] px-4 pb-0 pt-14 md:px-10 md:pt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-base font-medium text-[#999]">Problem Statement</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[1.375rem] font-normal leading-[1.35] tracking-[-0.02em] md:text-[1.75rem]">
              Every purchase required demos and internal team coordination.
              The platform had no self-serve path — buyers couldn't explore,
              evaluate, or purchase data without going through the sales team first.
            </p>
          </div>
        </div>

      </section>

      {/* CONSTRAINTS */}
      <section className="px-4 py-14 md:px-10 md:py-24">
        <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.01em] md:mb-14">
          Constraints
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#d0cdc8] bg-[#d0cdc8] md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Complex product definition",
              body: "No initial structure existed. The product scope, user roles, and core flows all had to be defined from scratch before any design could begin.",
            },
            {
              n: "02",
              title: "Technical delivery constraints",
              body: "Backend limitations around Snowflake, AWS S3, and Gigasheet shaped what was feasible — requiring close collaboration with engineering early on.",
            },
            {
              n: "03",
              title: "Sales-driven business model",
              body: "Automating a process previously owned by the sales team meant navigating internal politics and designing for trust as much as usability.",
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="bg-[#FFFEFA] px-6 py-8 transition-colors duration-200 hover:bg-[#F0EDE6] md:px-8 md:py-10">
              <p className="mb-4 text-xs text-[#bbb]">{n}</p>
              <p className="mb-3 text-xl font-bold tracking-[-0.01em]">{title}</p>
              <p className="text-[0.9375rem] leading-[1.6] text-[#444]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <h2 className="mb-10 text-[2rem] font-bold tracking-[-0.01em] md:mb-14">
          Research Findings
        </h2>

        <div className="space-y-px">
          {[
            {
              tag: "Sales team",
              quote: "\"We spend the first two weeks just explaining what the data is. By the time they understand it, half of them have moved on.\"",
              insight: "The demo process was doing the job that the product should have been doing — educating buyers.",
            },
            {
              tag: "Data architect",
              quote: "\"Buyers don't think in infrastructure. They think in rows — how many, how fresh, how clean.\"",
              insight: "Users' mental model was rows-as-value, not infrastructure-based. Design had to reflect this language.",
            },
            {
              tag: "Key insight",
              quote: null,
              insight: "The goal wasn't to increase transaction volume — it was to increase user confidence. A buyer who understood the data would convert without a sales call.",
            },
          ].map(({ tag, quote, insight }, i) => (
            <div key={i} className={`px-4 py-10 md:px-10 md:py-14 ${i % 2 === 1 ? "bg-[#F0EDE6]" : "bg-[#FFFEFA]"}`}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
                <div className="md:col-span-3">
                  <span className="inline-block rounded-full border border-[#d0cdc8] px-3 py-1 text-xs text-[#999]">
                    {tag}
                  </span>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  {quote && (
                    <p className="mb-4 text-[1.375rem] font-normal italic leading-[1.45] tracking-[-0.02em] text-[#333]">
                      {quote}
                    </p>
                  )}
                  <p className="text-base leading-[1.65] text-[#555]">{insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY DESIGN DECISIONS */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#999]">Key Decision</p>
            <h2 className="text-[2rem] font-bold leading-[1.2] tracking-[-0.03em]">
              Data health signals instead of row counts
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            <p className="text-xl leading-[1.55] text-[#333]">
              Instead of showing raw infrastructure metrics, I designed
              the marketplace to surface data health signals — freshness,
              completeness, and sample previews — in the language buyers
              actually use.
            </p>
            <p className="text-xl leading-[1.55] text-[#333]">
              This single shift made buyers confident enough to purchase
              without a demo, eliminating the need for sales-assisted
              evaluation entirely.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 md:gap-4">
              {[
                { label: "Sales cycle reduced", value: "30→7d" },
                { label: "Self-serve conversion", value: "↑64%" },
                { label: "Demo requests dropped", value: "↓40%" },
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
