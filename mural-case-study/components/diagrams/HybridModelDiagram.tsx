export function HybridModelDiagram() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border border-line bg-white p-6">
        <h3 className="text-sm font-semibold text-ink">Self-serve collaboration</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Shared workspace continuity</li>
          <li>Template library leverage</li>
          <li>Team rituals without sales gates</li>
        </ul>
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent-soft/50 p-6">
        <h3 className="text-sm font-semibold text-ink">
          Expert-assisted customization
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Facilitation & workshops</li>
          <li>Custom templates & workflows</li>
          <li>Operational enablement</li>
        </ul>
      </div>
    </div>
  );
}
