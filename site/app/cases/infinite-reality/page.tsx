import Header from "./Header";
import ScrollHint from "./ScrollHint";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFEFA] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#6C63E8] px-4 pb-20 pt-32 text-white md:px-10 md:pt-40">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-[0.625rem] border border-white/20 bg-[#D85BD6] px-4 py-2 text-base text-white transition-all duration-300 hover:bg-[#C94BC7]"
        >
          <span className="leading-none">←</span>
          <span>Back</span>
        </a>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h1 className="text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] md:text-[2.5rem]">
              From internal dev tool to enterprise creator platform
            </h1>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-2">
            <p className="text-lg leading-[1.4] tracking-[-0.02em] text-white/95 md:text-xl">
              Ethereal Engine began as a powerful internal 3D development tool.
              My role was to help evolve it into a more usable, enterprise-ready
              creator platform for building and launching immersive multiplayer
              experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-base md:mt-20 md:block md:space-y-8 md:text-lg">
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Year</p>
                <p>2025</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Client</p>
                <p>Ethereal Engine</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Website</p>
                <p>Current brand: napster.com</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Contribution</p>
                <p className="leading-[1.5]">
                  I helped transform Ethereal Engine from an internal developer
                  tool into an enterprise-ready creator platform during its
                  acquisition by Infinite Reality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ScrollHint />
      </section>

      {/* COVER IMAGE */}
      <section className="bg-[#FFFEFA] px-4 py-10 md:px-10 md:py-16">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-[#e8e6e1] md:rounded-[1.5rem]">
          <img
            src="/covers/ethereal-engine-cover.png"
            alt="Ethereal Engine"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="text-base font-medium text-[#999]">Problem Statement</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[1.375rem] font-normal leading-[1.35] tracking-[-0.02em] md:text-[1.75rem]">
              While the platform had powerful capabilities, its user experience
              created friction for broader adoption. The creation journey needed
              to be reshaped to make processes clearer for multiple user
              types — creators, teams, and business users.
            </p>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <h2 className="mb-8 text-[2rem] font-bold tracking-[-0.01em] text-[#111] md:mb-14">
          My Design Process
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[#d0cdc8] bg-[#d0cdc8] sm:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", title: "Stakeholder Mapping", body: "Identified and aligned key stakeholders across product, engineering, and business teams to establish a shared vision." },
            { n: "02", title: "User Interviews", body: "Conducted in-depth interviews with creators, teams, and enterprise users to surface unmet needs and friction points." },
            { n: "03", title: "Affinity Mapping", body: "Synthesized qualitative data into actionable clusters to define clear problem areas and opportunity spaces." },
            { n: "04", title: "UX Architecture", body: "Restructured information architecture and navigation flows to reduce cognitive load for all user types." },
            { n: "05", title: "Prototyping & Testing", body: "Built interactive prototypes and ran usability sessions to validate hypotheses before development handoff." },
            { n: "06", title: "Design System Migration", body: "Audited existing Tailwind-based components and progressively migrated them to Infinite Reality brand standards." },
          ].map(({ n, title, body }) => (
            <div key={n} className="bg-[#FFFEFA] px-6 py-8 transition-colors duration-200 hover:bg-[#EBE9E1] md:px-8 md:py-10">
              <p className="mb-4 text-xs text-[#bbb]">{n}</p>
              <p className="mb-3 text-xl font-bold tracking-[-0.01em]">{title}</p>
              <p className="text-[0.9375rem] leading-[1.6] text-[#444]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHALLENGE — RESULT BLOCKS */}
      <section className="border-t border-[#d0cdc8]">
        {[
          {
            challenge: "Fragmented product vision across stakeholders made it impossible to prioritize the right problems.",
            result: "Stakeholder mapping, interviews, and affinity mapping established a unified direction that aligned the entire product team.",
          },
          {
            challenge: "Synthesizing multiple research sources — interviews, surveys, and market research — without losing sight of early adopters.",
            result: "A research framework that maintained early adopter engagement while supporting the long-term enterprise strategy.",
          },
          {
            challenge: "Converting research insights into actionable UX improvements that would measurably improve user activation.",
            result: null,
          },
        ].map(({ challenge, result }, i) => (
          <div key={i} className={i % 2 === 1 ? "bg-[#EBE9E1]" : "bg-[#FFFEFA]"}>
            <div className="grid grid-cols-1 px-4 py-12 md:grid-cols-12 md:px-10 md:py-20">
              <div className="mb-8 md:col-span-5 md:mb-0">
                <p className="mb-4 text-xs uppercase tracking-[0.12em] text-[#8B2635] md:mb-6">Challenge</p>
                <p className="text-[1.375rem] font-normal leading-[1.45] tracking-[-0.02em]">{challenge}</p>
              </div>
              <div className="hidden md:col-span-1 md:flex md:justify-center">
                <div className="w-px bg-[#d0cdc8]" />
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <p className="mb-4 text-xs uppercase tracking-[0.12em] text-[#4A7C59] md:mb-6">Result</p>
                {result ? (
                  <p className="text-[1.375rem] font-normal leading-[1.45] tracking-[-0.02em]">{result}</p>
                ) : (
                  <>
                    <p className="mb-3 text-[3.5rem] font-light leading-none tracking-[-0.04em] text-[#6C63E8]">82%</p>
                    <p className="text-[1.375rem] font-normal leading-[1.45] tracking-[-0.02em]">
                      onboarding completion rate through embedded product walkthroughs.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="mb-10 md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#999]">Key Deliverables</p>
          <h2 className="text-[2rem] font-bold tracking-[-0.03em]">Three core experiences redesigned</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Admin Panel", desc: "A performance metrics dashboard giving enterprise admins full visibility into platform usage, user activity, and content health." },
            { title: "Client View", desc: "An immersive collaboration space enabling clients to review and sign off on 3D environments without needing technical expertise." },
            { title: "3D Editor", desc: "Simplified navigation and toolbar hierarchy that made the 3D creation environment accessible to non-developers for the first time." },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-[1.25rem] border border-[#d0cdc8] bg-[#FFFEFA] p-6 md:p-8">
              <div className="mb-6 aspect-video rounded-[0.75rem] bg-[#e0ddd8] md:mb-8" />
              <p className="mb-2 text-xl font-medium tracking-[-0.01em]">{title}</p>
              <p className="text-[0.9375rem] leading-[1.65] text-[#777]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN SYSTEM MIGRATION */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#999]">Design System</p>
            <h2 className="text-[2rem] font-bold leading-[1.2] tracking-[-0.03em]">
              Tailwind to Infinite Reality brand standards
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            <p className="text-xl leading-[1.55] text-[#333]">
              A comprehensive audit of the existing Tailwind-based component
              library revealed inconsistencies across screens. I led a
              progressive migration strategy — replacing components one system
              at a time — to avoid disrupting ongoing development.
            </p>
            <p className="text-xl leading-[1.55] text-[#333]">
              The new system brought the product in line with Infinite
              Reality's brand identity while improving component reusability
              and reducing design debt across the entire platform.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-4 md:gap-4">
              {[
                { label: "Components audited", value: "140+" },
                { label: "Screens redesigned", value: "60+" },
                { label: "Design tokens created", value: "320+" },
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
