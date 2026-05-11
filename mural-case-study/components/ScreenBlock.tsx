type ScreenBlockProps = {
  align: "left" | "right";
  label: string;
  annotation: string;
  caption: string;
};

export function ScreenBlock({
  align,
  label,
  annotation,
  caption,
}: ScreenBlockProps) {
  const visual = (
    <div className={align === "right" ? "lg:order-2" : ""}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-neutral-100 shadow-sm">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: [
              "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px)",
              "linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
            ].join(","),
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute left-6 right-6 top-6 h-8 rounded-md border border-black/5 bg-white/80 backdrop-blur-sm" />
        <div className="absolute bottom-8 left-6 right-6 top-20 rounded-md border border-black/5 bg-white/90" />
      </div>
      <p className="mt-3 text-xs text-muted">{caption}</p>
    </div>
  );

  const copy = (
    <div className={align === "right" ? "lg:order-1" : ""}>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
        {label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink">{annotation}</p>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      {visual}
      {copy}
    </div>
  );
}
