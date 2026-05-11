import { MetaRow } from "@/components/MetaRow";
import { Shell } from "@/components/Shell";
import { BeforeAfterDiagram } from "@/components/diagrams/BeforeAfterDiagram";

type HeroProps = {
  kicker: string;
  title: string;
  subtitle: string;
  meta: {
    label: string;
    value: string;
  }[];
};

export function Hero({ kicker, title, subtitle, meta }: HeroProps) {
  return (
    <section className="border-b border-line bg-white pb-20 pt-20 sm:pb-28 sm:pt-28">
      <Shell>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-[52rem] text-balance text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 max-w-measure text-pretty text-lg leading-relaxed text-muted">
          {subtitle}
        </p>
        <MetaRow items={meta} />
        <div className="mt-16 rounded-2xl border border-line bg-canvas p-6 sm:p-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Transformation overview
          </p>
          <div className="mt-6">
            <BeforeAfterDiagram />
          </div>
        </div>
      </Shell>
    </section>
  );
}
