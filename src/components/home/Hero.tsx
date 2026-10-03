import { PERSONAL } from "@/lib/constants";
import ArrowIcon from "@/components/ArrowIcon";

export default function Hero() {
  return (
    <section
      id="top"
      className="rule-b px-5 pt-10 pb-8 md:px-10 md:pt-20 md:pb-14 flex flex-col gap-6 md:gap-10"
    >
      <h1 className="display text-[15.5vw] leading-[0.86] md:text-[140px] tracking-[-0.05em]">
        {PERSONAL.firstName}
        <br />
        <span className="outline-text">{PERSONAL.middleName}</span>
        <br />
        {PERSONAL.lastName}
        <span className="text-lime">.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-end">
        <div className="md:col-span-7 flex flex-col gap-3.5">
          <p className="label text-xs md:text-[13px] text-lime leading-relaxed">
            {PERSONAL.tagline}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted max-w-[600px]">
            {PERSONAL.summary}
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col md:flex-row md:justify-end gap-2.5 md:gap-3">
          <a
            href="#experience"
            className="inline-flex items-center justify-between md:justify-start gap-2.5 min-h-[52px] px-5 md:px-6 bg-lime text-ink font-semibold text-sm uppercase tracking-[0.04em] no-underline hover:bg-paper transition-colors"
          >
            Experience <ArrowIcon />
          </a>
          <a
            href={PERSONAL.resume}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-between md:justify-start gap-2.5 min-h-[52px] px-5 md:px-6 border border-paper text-paper font-semibold text-sm uppercase tracking-[0.04em] no-underline hover:bg-paper hover:text-ink transition-colors"
          >
            Resume (PDF)
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="md:hidden">
              <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
