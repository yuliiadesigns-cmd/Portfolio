type ResearchInsightsProps = {
  inputs: string[];
  insights: string[];
};

export function ResearchInsights({ inputs, insights }: ResearchInsightsProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Inputs
        </p>
        <ul className="mt-4 space-y-3">
          {inputs.map((t) => (
            <li
              key={t}
              className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Insights
        </p>
        <ul className="mt-4 space-y-3">
          {insights.map((t) => (
            <li
              key={t}
              className="rounded-lg border border-accent/20 bg-accent-soft/30 px-4 py-3 text-sm leading-relaxed text-ink"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
