export function JourneyFlowDiagram() {
  const steps = [
    "Landing",
    "SSO / domain",
    "Workspace",
    "Templates",
    "Decision",
    "Path",
  ];
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-white p-6">
      <div className="flex min-w-[640px] items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-lg border border-line bg-canvas px-3 py-3 text-center text-xs font-medium text-ink">
              {label}
            </div>
            {i < steps.length - 1 ? (
              <span className="text-muted" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted">
        Decision splits into self-serve templates vs. expert-assisted customization.
      </p>
    </div>
  );
}
