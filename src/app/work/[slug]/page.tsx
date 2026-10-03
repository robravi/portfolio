import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/case-studies";
import ArrowIcon from "@/components/ArrowIcon";
import SideHeading from "@/components/SideHeading";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = PROJECTS[index];
  const study = CASE_STUDIES[slug];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const number = String(index + 1).padStart(2, "0");

  return (
    <article>
      {/* Title */}
      <header className="rule-b px-5 pt-10 pb-8 md:px-10 md:pt-16 md:pb-12 flex flex-col gap-6 md:gap-8">
        <p className="label text-xs md:text-[13px] text-lime">
          {study?.eyebrow ?? `Case study ${number} · ${project.kind} · ${project.year}`}
        </p>
        <h1 className="display text-[13vw] md:text-[104px] leading-[0.88] tracking-[-0.05em]">
          {study ? (
            <>
              {study.headline[0]}
              <br />
              <span className="outline-text">{study.headline[1]}</span>
            </>
          ) : (
            project.name
          )}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-end">
          <p className="md:col-span-7 text-base md:text-[19px] leading-relaxed text-muted max-w-[640px]">
            {study?.intro ?? project.description}
          </p>
          <div className="md:col-span-5 flex flex-col md:flex-row md:justify-end gap-2.5 md:gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-between md:justify-start gap-2.5 min-h-[52px] px-5 bg-lime text-ink font-semibold text-sm uppercase tracking-[0.04em] no-underline hover:bg-paper transition-colors"
            >
              Live site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-between md:justify-start min-h-[52px] px-5 border border-paper text-paper font-semibold text-sm uppercase tracking-[0.04em] no-underline hover:bg-paper hover:text-ink transition-colors"
            >
              Source
            </a>
          </div>
        </div>
      </header>

      {/* Capture */}
      <div
        className="rule-b w-full aspect-[16/9] md:aspect-[21/9] bg-panel flex items-center justify-center label text-[11px] md:text-xs text-dim text-center p-6"
        role="img"
        aria-label={study?.captureAlt ?? `${project.name} screenshot`}
      >
        {study?.captureAlt ?? `${project.name} screenshot`}
      </div>

      {/* Facts strip */}
      {study ? (
        <dl className="rule-b grid grid-cols-2 md:grid-cols-5">
          {study.facts.map((f, i) => (
            <div
              key={f.label}
              className={[
                "p-5 md:px-10 md:py-6 flex flex-col gap-1.5",
                i % 2 === 0 ? "rule-r md:border-r-0" : "",
                i < study.facts.length - 1 ? "md:border-r md:border-paper" : "",
                i < study.facts.length - (study.facts.length % 2 === 0 ? 2 : 1) ? "rule-b md:border-b-0" : "",
              ].join(" ")}
            >
              <dt className="label text-[11px] text-muted">{f.label}</dt>
              <dd className={`font-semibold text-sm md:text-base ${f.accent ? "text-lime" : ""}`}>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <dl className="rule-b grid grid-cols-2 md:grid-cols-4">
          <div className="p-5 md:px-10 md:py-6 flex flex-col gap-1.5 rule-r md:border-r md:border-paper">
            <dt className="label text-[11px] text-muted">Type</dt>
            <dd className="font-semibold text-sm md:text-base">{project.kind}</dd>
          </div>
          <div className="p-5 md:px-10 md:py-6 flex flex-col gap-1.5 md:border-r md:border-paper">
            <dt className="label text-[11px] text-muted">Year</dt>
            <dd className="font-semibold text-sm md:text-base">{project.year}</dd>
          </div>
          <div className="p-5 md:px-10 md:py-6 flex flex-col gap-1.5 rule-t md:border-t-0 rule-r md:border-r md:border-paper col-span-2 md:col-span-2">
            <dt className="label text-[11px] text-muted">Stack</dt>
            <dd className="font-semibold text-sm md:text-base">{project.stack.join(" · ")}</dd>
          </div>
        </dl>
      )}

      {study ? (
        <>
          {/* 01 Problem */}
          <section className="rule-b grid grid-cols-1 md:grid-cols-12">
            <SideHeading number="01" lines={["The", "problem"]} />
            <div className="md:col-span-8 px-5 pb-8 md:p-12 flex flex-col gap-5 text-base md:text-[17px] leading-relaxed text-soft max-w-[720px]">
              {study.problem.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </section>

          {/* 02 Decisions */}
          <section className="rule-b grid grid-cols-1 md:grid-cols-12">
            <SideHeading
              number="02"
              lines={["Key", "decisions"]}
              note="Three choices that shaped the build, each with the trade-off it carried."
            />
            <div className="md:col-span-8 flex flex-col">
              {study.decisions.map((d, i) => (
                <div
                  key={d.title}
                  className={`px-5 py-6 md:px-10 md:py-9 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ${
                    i < study.decisions.length - 1 ? "rule-b" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-semibold text-lg md:text-xl">{d.title}</h3>
                    <p className="text-sm md:text-[15px] leading-relaxed text-soft">{d.body}</p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span className="label text-[11px] text-lime">Trade-off</span>
                    <p className="text-sm md:text-[15px] leading-relaxed text-muted">{d.tradeoff}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 Architecture */}
          <section className="rule-b grid grid-cols-1 md:grid-cols-12">
            <SideHeading number="03" lines={["Archi-", "tecture"]} />
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {study.architecture.map((cell, i) => (
                <div
                  key={cell.title}
                  className={[
                    "px-5 py-6 md:px-8 md:py-7 flex flex-col gap-2",
                    cell.accent ? "border-t-4 border-t-lime" : "",
                    i < study.architecture.length - 1 ? "rule-b" : "",
                    i % 3 !== 2 ? "md:border-r md:border-paper" : "",
                    i < 3 ? "md:border-b md:border-paper" : "md:border-b-0",
                  ].join(" ")}
                >
                  <span className={`label text-[11px] ${cell.accent ? "text-lime" : "text-muted"}`}>
                    {cell.label}
                  </span>
                  <strong className="font-semibold text-base">{cell.title}</strong>
                  <span className="text-[13px] leading-relaxed text-muted">{cell.body}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 04 Bug */}
          {study.bug && (
            <section className="rule-b grid grid-cols-1 md:grid-cols-12">
              <SideHeading number="04" lines={["The bug", "worth", "telling"]} />
              <div className="md:col-span-8 px-5 pb-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-start">
                <div className="flex flex-col gap-4 text-base leading-relaxed text-soft">
                  {study.bug.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-panel border border-paper flex items-center justify-center label text-[11px] text-dim text-center p-3">
                    {study.bug.before}
                  </div>
                  <div className="aspect-square bg-panel border border-lime flex items-center justify-center label text-[11px] text-dim text-center p-3">
                    {study.bug.after}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* 05 Results */}
          <section aria-label="Results" className="rule-b grid grid-cols-2 md:grid-cols-4">
            {study.results.map((r, i) => (
              <div
                key={r.label}
                className={[
                  "p-5 md:px-10 md:py-9 flex flex-col gap-1.5",
                  i % 2 === 0 ? "rule-r" : "",
                  i < 2 ? "rule-b md:border-b-0" : "",
                  i < study.results.length - 1 ? "md:border-r md:border-paper" : "md:border-r-0",
                ].join(" ")}
              >
                <span className={`display text-4xl md:text-[56px] leading-none ${r.accent ? "text-lime" : ""}`}>
                  {r.value}
                </span>
                <span className="label text-[11px] md:text-xs text-muted">{r.label}</span>
              </div>
            ))}
          </section>
        </>
      ) : (
        <>
          {/* Generic template */}
          <section className="rule-b grid grid-cols-1 md:grid-cols-12">
            <SideHeading number="01" lines={["What it", "does"]} />
            <ul className="md:col-span-8 px-5 pb-8 md:p-12 flex flex-col gap-4 text-base md:text-[17px] leading-relaxed text-soft max-w-[720px]">
              {project.features.map((f) => (
                <li key={f.slice(0, 24)} className="flex gap-3">
                  <span className="text-lime shrink-0" aria-hidden="true">—</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
          <section aria-label="Results" className="rule-b grid grid-cols-1 sm:grid-cols-3">
            {project.metrics.map((m, i) => (
              <div
                key={m.label}
                className={[
                  "p-5 md:px-10 md:py-9 flex flex-col gap-1.5",
                  i < project.metrics.length - 1 ? "rule-b sm:border-b-0 sm:border-r sm:border-paper" : "",
                ].join(" ")}
              >
                <span className="display text-4xl md:text-[56px] leading-none">{m.value}</span>
                <span className="label text-[11px] md:text-xs text-muted">{m.label}</span>
              </div>
            ))}
          </section>
        </>
      )}

      {/* Next */}
      <nav aria-label="Next case study" className="px-5 py-9 md:px-10 md:py-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="label text-xs text-muted">Next case study</span>
          <Link
            href={`/work/${next.slug}`}
            className="display text-3xl md:text-[56px] leading-[0.95] text-paper no-underline hover:text-lime transition-colors inline-flex items-center gap-3"
          >
            {String(((index + 1) % PROJECTS.length) + 1).padStart(2, "0")} {next.name}
            <ArrowIcon className="text-lime w-7 h-7 md:w-10 md:h-10 shrink-0" />
          </Link>
        </div>
        <Link href="/#work" className="label text-[13px] text-lime hover:text-paper">
          ← All work
        </Link>
      </nav>
    </article>
  );
}
