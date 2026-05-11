type MetaRowProps = {
  items: { label: string; value: string }[];
};

export function MetaRow({ items }: MetaRowProps) {
  return (
    <dl className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-snug text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
