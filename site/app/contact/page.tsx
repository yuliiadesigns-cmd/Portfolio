export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFA] text-[#111] flex flex-col">
      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-5">
          <a href="/" className="text-[15px] font-medium tracking-[-0.02em]">
            Y.T.
          </a>
        </div>

        <div className="flex items-center gap-6 text-[14px]">
          <a href="/#about" className="hover:opacity-50">About</a>
          <a href="/#projects" className="hover:opacity-50">Projects</a>
          <a href="#" className="underline">Resume</a>
          <a
            href="/contact"
            className="rounded-full border border-[#bbb] bg-[#F7F6F0] px-5 py-3 transition-all duration-300 hover:bg-black hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-20 text-center">
        <h1
          className="mb-10 text-[3.5rem] leading-[1.15] tracking-[-0.03em] md:text-[4.5rem]"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          If you would like
          <br />
          to chat you can
          <br />
          reach me at:
        </h1>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-[1rem]">
          <span className="rounded-[0.625rem] border border-[#d0cdc8] bg-[#F7F6F0] px-5 py-3 text-[#444]">
            yuliiadesigns@gmail.com
          </span>
          <span className="text-[#888]">or message via</span>
          <a
            href="https://t.me/yuliiadesigns"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0cdc8] bg-[#F7F6F0] transition-all duration-200 hover:bg-[#111] hover:border-[#111] hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        <div className="max-w-[34rem] rounded-[1rem] bg-[#111] px-8 py-7 text-left text-[0.9375rem] font-light leading-[1.72] text-[#ccc]">
          Let's collaborate! Whether it's a new project, a partnership, or just
          a question, I'd love to hear from you. Reach out, and let's create
          something amazing together.
        </div>
      </div>
    </main>
  );
}
