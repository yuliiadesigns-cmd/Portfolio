import Header from "./Header";
import ScrollHint from "./ScrollHint";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFEFA] text-[#111]">
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen bg-[#A85C3E] px-4 pb-20 pt-32 text-white md:px-10 md:pt-40">
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
              Mural
            </h1>
          </div>

          <div className="md:col-span-6 md:col-start-7 md:pt-2">
            <p className="text-lg leading-[1.4] tracking-[-0.02em] text-white/95 md:text-xl">
              Mural is an enterprise collaboration platform used by global
              organizations to facilitate workshops, planning rituals, and
              distributed teamwork through shared digital workspaces and
              collaborative workflow systems. The company had reached a $2B
              valuation and supported thousands of enterprise teams across
              companies including IBM, Microsoft, SAP, and Atlassian.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 text-base md:mt-20 md:block md:space-y-8 md:text-lg">
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Year</p>
                <p>2021</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Client</p>
                <p>Mural</p>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Website</p>
                <a href="https://mural.co" target="_blank" className="underline underline-offset-2 hover:opacity-70">Mural.co</a>
              </div>
              <div>
                <p className="mb-1 text-sm text-white/50 md:mb-2">Contribution</p>
                <p className="leading-[1.5]">
                  I designed enterprise discovery and onboarding flows for
                  Mural's Experts on Demand initiative, conducted research
                  with enterprise prospects and Mural's sales team, and helped
                  shape a new user experience for expert-assisted workflows.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ScrollHint />
      </section>

      {/* COVER IMAGE */}
      <section className="border-t border-[#d0cdc8] px-4 py-14 md:px-10 md:py-24">
        <div className="aspect-[16/9] w-full overflow-hidden rounded-[1rem] bg-[#e8e6e1] md:rounded-[1.5rem]">
          <img
            src="/covers/mural-cover.png"
            alt="Mural"
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
              Mural's enterprise collaboration ecosystem already supported
              shared workspaces, templates, and cross-functional planning —
              but lacked a structured path for expert-assisted onboarding
              and discovery for new enterprise clients.
            </p>
          </div>
        </div>
      </section>

      {/* PLACEHOLDER — карусель появится когда будут картинки */}

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
