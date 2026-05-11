export function BeforeAfterDiagram() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-xl border border-line bg-white p-6 shadow-sm">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Before
        </p>
        <p className="mt-3 text-sm font-medium text-ink">Sales-led, closed loop</p>
        <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          <li>1. Enterprise interest</li>
          <li>2. Sales contact</li>
          <li>3. Closed demo</li>
          <li>4. Manual explanation</li>
          <li>5. Qualification</li>
          <li>6. Onboarding conversation</li>
          <li>7. Custom setup</li>
        </ol>
      </div>
      <div className="rounded-xl border border-accent/25 bg-accent-soft/40 p-6 shadow-sm">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          After
        </p>
        <p className="mt-3 text-sm font-medium text-ink">
          Scalable enterprise discovery
        </p>
        <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
          <li>1. Experts on Demand entry</li>
          <li>2. Understand support model</li>
          <li>3. Company domain login</li>
          <li>4. Workspace & templates</li>
          <li>5. Decision: self-serve vs expert</li>
          <li>6. Facilitation / customization</li>
        </ol>
      </div>
    </div>
  );
}
