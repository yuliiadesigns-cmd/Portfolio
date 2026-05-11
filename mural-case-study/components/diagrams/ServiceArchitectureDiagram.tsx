const services = [
  "Facilitation",
  "Training",
  "Collaboration consulting",
  "Template customization",
  "Workflow setup",
];

export function ServiceArchitectureDiagram() {
  return (
    <div className="flex flex-wrap justify-center gap-3 rounded-xl border border-line bg-white p-8">
      {services.map((s) => (
        <div
          key={s}
          className="rounded-full border border-line bg-canvas px-4 py-2 text-xs font-medium text-ink"
        >
          {s}
        </div>
      ))}
    </div>
  );
}
