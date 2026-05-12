"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-6 ${
        scrolled
          ? "border-b border-[#d0cdc8]/40 bg-[#FFFEFA]/50 text-[#111] shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
          : "bg-gradient-to-b from-[#A85C3E]/90 to-[#A85C3E]/0 text-white"
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <a href="/" className="text-[1.75rem] font-medium tracking-tight">Y.T.</a>
        <span className={`hidden text-sm md:block ${scrolled ? "text-[#111]/40" : "text-white/50"}`}>
          1:52:31 AM
        </span>
      </div>
      <nav className="flex items-center gap-4 text-[0.9375rem] md:gap-7">
        <a href="/" className={`hidden transition-opacity hover:opacity-60 md:block ${scrolled ? "text-[#111]" : "text-white/85"}`}>About</a>
        <a href="/" className={`hidden transition-opacity hover:opacity-60 md:block ${scrolled ? "text-[#111]" : "text-white/85"}`}>Projects</a>
        <a href="/" className={`hidden transition-opacity hover:opacity-60 md:block ${scrolled ? "text-[#111]" : "text-white/85"}`}>Resume</a>
        <a
          href="mailto:jnjs609@gmail.com"
          className="rounded-full bg-[#D85BD6] px-4 py-1.5 text-sm text-white transition-all duration-300 hover:bg-[#C94BC7] md:px-5 md:py-2"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
