export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFFEFA] text-[#111]">
      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-5">
          <a
            href="/"
            className="text-[15px] font-medium tracking-[-0.02em]"
          >
            Y.T.
          </a>

          <span className="text-[13px] font-light text-[#888]">
            1:52:31 AM
          </span>
        </div>

        <div className="flex items-center gap-6 text-[14px]">
          <a href="#about" className="hover:opacity-50">
            About
          </a>

          <a href="#projects" className="hover:opacity-50">
            Projects
          </a>

          <a href="#" className="underline">
            Resume
          </a>

          <a
            href="/contact"
            className="rounded-full bg-[#F7F6F0] px-4 py-1 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-3 pb-12 pt-3">
        <div className="relative flex min-h-[55vh] flex-col justify-between rounded-[20px] bg-[#F7F6F0] px-12 py-10">
          <div className="grid grid-cols-12 gap-6">
            <h1 className="col-span-7 text-[64px] font-normal leading-[1.1] tracking-[-0.04em]" style={{ fontFamily: "var(--font-noto-serif)" }}>
              Designing structured,
              <br />
              intuitive user-oriented
              <br />
              products that{" "}
              <span className="text-[#467A4C]">WORK</span>.
            </h1>

            <p className="col-span-3 col-start-10 pt-2 text-[16px] leading-[1.7] text-[#444]">
              For the past 10 years, I've been designing from scratch,
              helping startups secure funding and supporting global companies
              on their growth journey.
            </p>
          </div>

          {/* Toptal + Projector — правый нижний угол */}
          <div className="absolute bottom-10 right-10 flex items-end">
            <div className="group relative" style={{ transform: "rotate(-8deg)", zIndex: 1 }}>
              <img src="/logos/toptal.webp" alt="Toptal" className="h-9 w-9 rounded-[8px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:scale-105" />
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-[#111] px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Top 3% Contractors
              </div>
            </div>
            <div className="group relative -ml-3" style={{ transform: "rotate(6deg)", zIndex: 2 }}>
              <img src="/logos/projector.webp" alt="Projector" className="h-9 w-9 rounded-[8px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-transform duration-200 group-hover:scale-105" />
              <div className="pointer-events-none absolute bottom-full right-0 mb-2 w-[7rem] rounded-[8px] bg-[#111] px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Lecturer, Product Design Course
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10">
            <img src="/logos/mural.webp" alt="Mural" className="h-8 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200" />
            <img src="/logos/chick-fil-a.avif" alt="Chick-fil-A" className="h-8 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200" />
            <img src="/logos/bcg.webp" alt="BCG" className="h-5 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200" />
            <img src="/logos/ir.avif" alt="Infinite Reality" className="h-8 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200" />
            <img src="/logos/gartner.webp" alt="Gartner" className="h-8 object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200" />

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-14">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-[28px] tracking-[-0.02em]">
            Selected projects
          </h2>

          <span className="text-[14px] font-light text-[#888]">
            '23 – Present
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Revenue Base */}
          <a href="/cases/revenue-base">
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-[#e8e6e1]">
              <img
                src="/covers/revenue-base-cover.png"
                alt="Revenue Base"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-[16px]">
              Revenue Base
            </p>
          </a>

          {/* Infinite Reality */}
          <a href="/cases/infinite-reality">
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-[#e8e6e1]">
              <img
                src="/covers/ethereal-engine-cover.png"
                alt="Infinite Reality"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-[16px]">
              Infinite Reality
            </p>
          </a>

          {/* BCG */}
          <a href="/cases/bcg">
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-[#e8e6e1]">
              <img
                src="/covers/bcg-cover.png"
                alt="BCG"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-[16px]">
              Boston Consulting Group
            </p>
          </a>
          {/* Mural */}
          <a href="/cases/mural">
            <div className="aspect-[4/3] overflow-hidden rounded-[12px] bg-[#e8e6e1]">
              <img
                src="/covers/mural-cover.png"
                alt="Mural"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-[16px]">
              Mural
            </p>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="grid grid-cols-[260px_1fr] gap-20 border-t border-[#d0cdc8] px-10 py-20"
      >
        <div>
          <p className="pt-2 text-[13px] font-light text-[#888]">
            [01] About me
          </p>
        </div>

        <div>
          <p className="mb-10 text-[42px] leading-[1.25] tracking-[-0.02em]">
            <span className="font-light text-[#aaa]">
              I design intuitive, user-centered interfaces that solve real
              problems.
            </span>{" "}
            My process is rooted in deep research and hypothesis generation,
            followed by ideation, prototyping, and collaboration closely with
            interdisciplinary teams.
          </p>

          <div className="mb-8 rounded-[14px] bg-[#111] px-9 py-8 text-[15px] font-light leading-[1.72] text-[#ddd]">
            " In 2017, I built my first fintech product — a trading terminal
            bot — at a time when trading interfaces weren't yet mainstream.
            Later, at Infinity Reality, I faced a new kind of challenge:
            creating an immersive web experience alongside a user-friendly
            interface for a cutting-edge platform."
          </div>

          <p className="text-[13px] font-light leading-[1.7] text-[#888]">
            [01] Outside of design, I explore photography, build Lego figures,
            and practice meditation.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0e0e0e] px-10 py-12 text-[#999]">
        <div className="flex items-center justify-between border-t border-[#2a2a2a] pt-8">
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-[14px] text-[#bbb] hover:text-white"
            >
              LinkedIn
            </a>

            <span className="text-[#444]">·</span>

            <span className="text-[13px] text-[#777]">
              yuliiadesigns@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-6 text-[13px] text-[#555]">
            <span>©2025</span>
          </div>
        </div>
      </footer>
    </main>
  );
}