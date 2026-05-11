const nodes = [
  "Enterprise teams",
  "Shared workspaces",
  "Templates",
  "Collaboration experts",
  "Workshop facilitation",
  "Custom workflows",
  "Operational outcomes",
];

export function EcosystemDiagram() {
  return (
    <div className="rounded-xl border border-line bg-white p-8">
      <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        Enterprise collaboration enablement model
      </p>
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-3">
        {nodes.map((n) => (
          <div
            key={n}
            className="rounded-lg border border-line bg-canvas px-3 py-3 text-center text-xs font-medium leading-snug text-ink"
          >
            {n}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-measure text-center text-sm text-muted">
        Experts sit adjacent to the workspace layer—accelerating outcomes without
        replacing self-serve collaboration.
      </p>
    </div>
  );
}
