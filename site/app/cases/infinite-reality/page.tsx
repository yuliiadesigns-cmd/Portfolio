export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#6C63E8] text-white">
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-gradient-to-b from-[#6C63E8]/90 to-[#6C63E8]/20 px-8 py-5 backdrop-blur-xl">
        <div className="flex items-center gap-8">
          <a href="/" className="text-[28px] font-medium tracking-tight">
            Y.T.
          </a>

          <span className="text-[14px] text-white/50">
            1:52:31 AM
          </span>
        </div>

        <nav className="flex items-center gap-7 text-[15px]">
          <a href="/" className="text-white/85 hover:text-white">
            About
          </a>

          <a href="/" className="text-white/85 hover:text-white">
            Projects
          </a>

          <a href="/" className="text-white/85 hover:text-white">
            Resume
          </a>

          <a
            href="mailto:jnjs609@gmail.com"
            className="rounded-full bg-[#D85BD6] px-5 py-2 text-white transition-all duration-300 hover:bg-[#C94BC7]"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="min-h-screen px-10 pt-40">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 bg-[#D85BD6] px-4 py-2 text-[16px] text-white transition-all duration-300 hover:bg-[#C94BC7]"
        >
          <span className="text-[16px] leading-none">←</span>

          <span>Back</span>
        </a>

        <div className="mt-14 grid grid-cols-12 gap-14">
          <div className="col-span-5">
            <h1 className="max-w-[540px] text-[40px] font-normal leading-[1.1] tracking-[-0.04em]">
              From internal dev tool to enterprise creator platform
            </h1>
          </div>

          <div className="col-span-6 col-start-7 pt-2">
            <p className="max-w-[620px] text-[20px] leading-[1.4] tracking-[-0.02em] text-white/95">
              Ethereal Engine began as a powerful internal 3D development tool.
              My role was to help evolve it into a more usable,
              enterprise-ready creator platform for building and launching
              immersive multiplayer experiences.
            </p>

            <div className="mt-20 space-y-8 text-[18px]">
              <div>
                <p className="mb-2 text-[16px] text-white/50">
                  Year
                </p>

                <p>2025</p>
              </div>

              <div>
                <p className="mb-2 text-[16px] text-white/50">
                  Client
                </p>

                <p>Ethereal Engine</p>
              </div>

              <div>
                <p className="mb-2 text-[16px] text-white/50">
                  Website
                </p>

                <p>Current brand: napster.com</p>
              </div>

              <div>
                <p className="mb-2 text-[16px] text-white/50">
                  Contribution
                </p>

                <p className="max-w-[520px] leading-[1.5]">
                  I helped transform Ethereal Engine from an internal developer
                  tool into an enterprise-ready creator platform during its
                  acquisition by Infinite Reality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-10 left-1/2 z-50 -translate-x-1/2">
          <button className="flex items-center gap-3 rounded-[28px] border border-white/40 px-7 py-3 text-[16px] leading-none text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">

            <span>Scroll down</span>

            <div className="flex h-5 w-5 items-start justify-center rounded-[6px] border border-white/70 pt-[2px]">
              <div className="h-1.5 w-[2px] rounded-full bg-white" />
            </div>

          </button>
        </div>
      </section>
    </main>
  );
}