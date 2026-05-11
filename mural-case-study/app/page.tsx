import { Hero } from "@/components/Hero";
import { MD } from "@/components/MD";
import { ResearchInsights } from "@/components/ResearchInsights";
import { ScreenBlock } from "@/components/ScreenBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { Shell } from "@/components/Shell";
import { BeforeAfterDiagram } from "@/components/diagrams/BeforeAfterDiagram";
import { EcosystemDiagram } from "@/components/diagrams/EcosystemDiagram";
import { HybridModelDiagram } from "@/components/diagrams/HybridModelDiagram";
import { JourneyFlowDiagram } from "@/components/diagrams/JourneyFlowDiagram";
import { ServiceArchitectureDiagram } from "@/components/diagrams/ServiceArchitectureDiagram";
import { extractBulletList } from "@/lib/bullets";
import { getSection, loadCaseStudy } from "@/lib/case-study";

export default function MuralCaseStudyPage() {
  const doc = loadCaseStudy();
  const fm = doc.frontmatter;

  const researchBody = getSection(doc, "Research Inputs");
  const researchIntro =
    researchBody.split("Research came from:")[0]?.trim() ?? "";
  const researchInputs = extractBulletList(researchBody, "Research came from:");
  const researchInsights = extractBulletList(researchBody, "Key insights:");

  const challenge = getSection(doc, "Key UX Challenge").trim();

  return (
    <main>
      <Hero
        kicker={doc.h1}
        title={fm.heroTitle}
        subtitle={fm.heroSubtitle}
        meta={[
          { label: "Role", value: fm.role },
          { label: "Company", value: fm.company },
          { label: "Focus", value: fm.focus },
          { label: "Timeline", value: fm.timeline },
          { label: "Users", value: fm.users },
        ]}
      />

      <section className="border-b border-line bg-white py-section">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Context"
                title="Enterprise collaboration, with a services layer"
                description="Mural operated as a shared workspace for teams—while Experts on Demand extended that environment with structured expert support."
              />
              <MD
                markdown={getSection(doc, "Context")}
                className="prose prose-neutral prose-sm mt-8 max-w-measure sm:prose-base prose-headings:font-medium prose-headings:tracking-tight prose-li:marker:text-muted"
              />
              <MD
                markdown={getSection(doc, "Users")}
                className="prose prose-neutral prose-sm mt-10 max-w-measure sm:prose-base prose-headings:font-medium prose-headings:tracking-tight"
              />
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-xl border border-line bg-canvas p-6">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    Initiative
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">
                    Experts on Demand connects{" "}
                    <span className="text-accent">workshop facilitation</span>,{" "}
                    <span className="text-accent">templates</span>, and{" "}
                    <span className="text-accent">workflow setup</span> to the
                    same enterprise surface teams already trusted.
                  </p>
                  <MD
                    markdown={getSection(doc, "Case Study Goal")}
                    className="prose prose-neutral prose-sm mt-6 max-w-none prose-p:text-sm prose-p:leading-relaxed prose-p:text-muted"
                  />
                </div>
              </div>
            </aside>
          </div>
        </Shell>
      </section>

      <section className="border-b border-line bg-canvas py-section">
        <Shell>
          <SectionHeader
            eyebrow="Problem"
            title="A sales-led system that didn’t scale"
            description="The prior journey worked for bespoke deals—but it obscured services, slowed discovery, and depended on repeated human explanation."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <MD
              markdown={getSection(doc, "Problem")}
              className="prose prose-neutral prose-sm max-w-measure sm:prose-base prose-headings:font-medium"
            />
            <div className="space-y-6">
              <BeforeAfterDiagram />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-white p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    Before — narrative
                  </p>
                  <MD
                    markdown={getSection(doc, "Before")}
                    className="prose prose-neutral prose-sm mt-3 max-w-none prose-p:text-sm"
                  />
                </div>
                <div className="rounded-xl border border-line bg-white p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                    After — narrative
                  </p>
                  <MD
                    markdown={getSection(doc, "After")}
                    className="prose prose-neutral prose-sm mt-3 max-w-none prose-p:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="border-b border-line bg-white py-section">
        <Shell>
          <SectionHeader
            eyebrow="Research"
            title="Enterprise discovery grounded in sales reality"
            description="Interviews with prospective clients and Mural’s sales organization surfaced where clarity had to improve before a conversation even started."
          />
          <div className="mt-12">
            <ResearchInsights
              inputs={
                researchInputs.length
                  ? researchInputs
                  : [
                      "Enterprise client interviews",
                      "Sales team interviews",
                      "Process mapping of the B2B motion",
                    ]
              }
              insights={
                researchInsights.length
                  ? researchInsights
                  : [
                      "Value must be legible pre-sales",
                      "Flexibility over fixed packages",
                      "Differentiate templates vs custom support",
                    ]
              }
            />
          </div>
          <MD
            markdown={researchIntro}
            className="prose prose-neutral prose-sm mt-12 max-w-measure sm:prose-base prose-headings:font-medium"
          />
        </Shell>
      </section>

      <section className="border-b border-line bg-canvas py-section">
        <Shell>
          <SectionHeader
            eyebrow="UX challenge"
            title="Self-serve collaboration vs expert-assisted customization"
          />
          <figure className="mt-10 max-w-measure rounded-2xl border border-line bg-white p-8 sm:p-10">
            <blockquote className="text-lg font-medium leading-snug tracking-tight text-ink sm:text-xl">
              {challenge}
            </blockquote>
          </figure>
          <div className="mt-12">
            <HybridModelDiagram />
          </div>
        </Shell>
      </section>

      <section className="border-b border-line bg-white py-section">
        <Shell>
          <SectionHeader
            eyebrow="Strategy"
            title="Hybrid enablement: clarify the fork, preserve depth"
            description="The product model pairs scalable self-serve usage with an explicit, credible path into expert-led customization."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <MD
              markdown={getSection(doc, "Core Product Model")}
              className="prose prose-neutral prose-sm max-w-measure sm:prose-base"
            />
            <MD
              markdown={getSection(doc, "Design Strategy")}
              className="prose prose-neutral prose-sm max-w-measure sm:prose-base"
            />
          </div>
          <div className="mt-12">
            <ServiceArchitectureDiagram />
          </div>
          <MD
            markdown={getSection(doc, "Services Presented")}
            className="prose prose-neutral prose-sm mt-12 max-w-measure sm:prose-base"
          />
        </Shell>
      </section>

      <section className="border-b border-line bg-canvas py-section">
        <Shell>
          <SectionHeader
            eyebrow="Key flows"
            title="From enterprise entry to facilitated outcomes"
          />
          <div className="mt-10">
            <JourneyFlowDiagram />
          </div>
          <MD
            markdown={getSection(doc, "After")}
            className="prose prose-neutral prose-sm mt-10 max-w-measure sm:prose-base"
          />
        </Shell>
      </section>

      <section className="border-b border-line bg-white py-section">
        <Shell>
          <SectionHeader
            eyebrow="Ecosystem"
            title="Support layer mapped to operational outcomes"
            description="The enablement model ties workspace primitives to expert services—without collapsing into a generic services marketplace."
          />
          <div className="mt-12">
            <EcosystemDiagram />
          </div>
        </Shell>
      </section>

      <section className="border-b border-line bg-canvas py-section">
        <Shell>
          <SectionHeader
            eyebrow="Solution"
            title="Reconstructed surfaces: discovery, decision, depth"
            description="Annotated reconstructions emphasize hierarchy, progressive disclosure, and the explicit fork between self-serve and expert paths."
          />
          <div className="mt-14 space-y-24">
            <ScreenBlock
              align="left"
              label="Discovery"
              annotation="Enterprise entry reframed as operational context: what teams can do now, and when experts accelerate outcomes."
              caption="Landing / program overview — hierarchy + scannable service categories."
            />
            <ScreenBlock
              align="right"
              label="Decision architecture"
              annotation="A deliberate decision moment: continue in-template work, or route into a tailored engagement with clear expectations."
              caption="Decision point — contrasted paths with consistent enterprise chrome."
            />
            <ScreenBlock
              align="left"
              label="Depth without noise"
              annotation="Expert-assisted flows preserve credibility through structured intake, not marketing fluff—grounded in workshop and workflow primitives."
              caption="Expert request / facilitation depth — progressive disclosure."
            />
          </div>
        </Shell>
      </section>

      <section className="border-b border-line bg-white py-section">
        <Shell>
          <SectionHeader eyebrow="Outcome" title="What shifted operationally" />
          <MD
            markdown={getSection(doc, "Outcome")}
            className="prose prose-neutral prose-sm mt-8 max-w-measure sm:prose-base"
          />
        </Shell>
      </section>

      <section className="bg-canvas py-section">
        <Shell>
          <SectionHeader eyebrow="Reflection" title="Systems thinking in B2B" />
          <MD
            markdown={getSection(doc, "Reflection")}
            className="prose prose-neutral prose-sm mt-8 max-w-measure sm:prose-base"
          />
        </Shell>
      </section>
    </main>
  );
}
