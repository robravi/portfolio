import { ABOUT, PERSONAL } from "@/lib/constants";
import SideHeading from "@/components/SideHeading";

export default function About() {
  return (
    <section id="about" className="rule-b scroll-mt-16 grid grid-cols-1 md:grid-cols-12">
      <SideHeading eyebrow="About" lines={["Who's", "behind", "this"]} />

      <div className="md:col-span-8 px-5 py-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:items-start">
        <div
          className="hidden md:flex md:col-span-3 aspect-[4/5] bg-panel border border-paper items-center justify-center label text-[11px] text-dim text-center p-3"
          aria-hidden="true"
        >
          Photo
        </div>
        <div className="md:col-span-9 flex flex-col gap-4 md:gap-[18px] text-[15px] md:text-[17px] leading-relaxed text-soft max-w-[620px]">
          {ABOUT.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="flex flex-wrap gap-5 md:gap-6 pt-1 label text-[11px] md:text-xs text-muted">
            {ABOUT.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
            <li>
              <a href={PERSONAL.resume} target="_blank" rel="noopener" className="text-lime hover:text-paper">
                Resume PDF →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
