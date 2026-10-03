import { METRICS } from "@/lib/constants";

export default function StatBar() {
  return (
    <section aria-label="Key numbers" className="rule-b grid grid-cols-2 md:grid-cols-4">
      {METRICS.map((m, i) => (
        <div
          key={m.label}
          className={[
            "p-5 md:px-10 md:py-7 flex flex-col gap-1.5",
            // mobile 2x2: right rule on even cells, bottom rule on first row
            i % 2 === 0 ? "rule-r" : "",
            i < 2 ? "rule-b md:border-b-0" : "",
            // desktop: right rule on all but last
            i < METRICS.length - 1 ? "md:border-r md:border-paper" : "md:border-r-0",
          ].join(" ")}
        >
          <span
            className={`display text-4xl md:text-5xl leading-none ${m.accent ? "text-lime" : ""}`}
          >
            {m.value}
          </span>
          <span className="label text-[11px] md:text-xs text-muted">{m.label}</span>
        </div>
      ))}
    </section>
  );
}
