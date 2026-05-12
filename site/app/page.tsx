export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFEFA] text-[#111]">
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
            href="mailto:yuliiadesigns@gmail.com"
            className="rounded-full border border-[#bbb] px-5 py-2 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8">
        <div className="rounded-[16px] bg-[#F7F6F0] px-8 py-12">
          <div className="mb-10 grid grid-cols-2 gap-10">
            <h1 className="text-[56px] font-normal leading-[1.15] tracking-[-0.06em]">
              Designing structured,
              <br />
              intuitive user-oriented
              <br />
              products that WORK.
            </h1>

            <p className="max-w-[420px] pt-2 text-[16px] font-medium leading-[1.6]">
              For the past 10 years, I've been designing from scratch,
              helping startups secure funding and supporting global companies
              on their growth journey.
            </p>
          </div>

          <div className="flex items-center gap-10 text-[16px]">
            <span className="font-semibold">mural</span>

            <span className="italic">Chick-fil-A</span>

            <span className="font-bold">BCG</span>

            <span className="text-[12px] tracking-[0.16em]">
              INFINITE REALITY
            </span>

            <span className="font-light">Gartner</span>
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
          <a href="#">
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
          <a href="#">
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