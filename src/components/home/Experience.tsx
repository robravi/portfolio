import { EXPERIENCE } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="rule-b scroll-mt-16">
      <SectionHeader left="Experience" right="2024 — present" />

      {EXPERIENCE.map((job, i) => (
        <article
          key={job.role + job.start}
          className={[
            "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-5 py-6 md:p-10 border-l-[6px]",
            i < EXPERIENCE.length - 1 ? "rule-b" : "",
            job.lead ? "border-l-lime pl-4 md:pl-10" : "border-l-transparent",
          ].join(" ")}
        >
          <div className="md:col-span-4 flex flex-col gap-2.5 md:gap-3">
            <time className="label text-[11px] md:text-xs text-lime">{job.period}</time>
            <h3 className="display text-3xl md:text-[40px] leading-[0.95]">{job.role}</h3>
            <p className="text-[13px] md:text-[15px] text-muted leading-relaxed">
              {job.company}
              <br />
              {job.context}
            </p>
            {job.lead && (
              <ul className="hidden md:flex flex-wrap gap-1.5 pt-1" aria-label="Stack">
                {job.stack.map((s) => (
                  <li key={s} className="chip !text-[11px] !py-1.5 !px-2.5">
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <ul className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-x-8 md:gap-y-4 text-sm md:text-[15px] leading-relaxed text-soft">
            {job.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 md:gap-3">
                <span className="text-lime shrink-0" aria-hidden="true">
                  —
                </span>
                {h}
              </li>
            ))}
          </ul>

          {job.lead && (
            <ul className="md:hidden flex flex-wrap gap-1.5 pt-1" aria-label="Stack">
              {job.stack.map((s) => (
                <li key={s} className="chip !text-[10px] !py-1.5 !px-2">
                  {s}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
}
