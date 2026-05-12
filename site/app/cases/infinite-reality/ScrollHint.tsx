"use client";

import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-1/2 z-40 -translate-x-1/2 animate-bounce-slow transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button className="flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-[13px] text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
        <span>Scroll down</span>
        <div className="flex h-4 w-4 items-start justify-center rounded-full border border-white/50 pt-[3px]">
          <div className="h-1.5 w-[2px] rounded-full bg-white/70" />
        </div>
      </button>
    </div>
  );
}
