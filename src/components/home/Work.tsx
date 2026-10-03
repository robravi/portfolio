import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import SectionHeader from "@/components/SectionHeader";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-16">
      <SectionHeader
        left="Selected work · personal projects"
        right={`${String(PROJECTS.length).padStart(2, "0")} case studies`}
      />

      {PROJECTS.map((p, i) => {
        const n = String(i + 1).padStart(2, "0");
        return (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="row-link rule-b grid grid-cols-1 md:grid-cols-12 gap-3.5 md:gap-6 md:items-center px-5 py-6 md:p-10 no-underline text-paper"
          >
            {/* Mobile-only thumbnail for the lead project */}
            {i === 0 && (
              <div
                className="md:hidden w-full aspect-[16/10] bg-panel border border-paper flex items-center justify-center label text-[11px] text-dim"
                aria-hidden="true"
              >
                Atelier capture
              </div>
            )}

            <span className="md:col-span-1 label text-xs md:text-sm font-bold text-lime">
              {n}
            </span>

            <h3 className="md:col-span-6 display text-[34px] md:text-[56px] leading-[0.95]">
              {p.name}
            </h3>

            <div className="md:col-span-3 flex flex-col gap-2">
              <p className="text-sm md:text-[15px] leading-relaxed text-muted">{p.summary}</p>
              <span className="label text-[11px] md:text-xs text-muted">{p.stackLine}</span>
            </div>

            <div
              className="hidden md:flex md:col-span-2 aspect-[4/3] bg-panel border border-paper items-center justify-center label text-[11px] text-dim text-center p-2"
              aria-hidden="true"
            >
              Still
            </div>
          </Link>
        );
      })}
    </section>
  );
}
