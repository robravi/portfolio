import { PROCESS } from "@/lib/constants";
import SideHeading from "@/components/SideHeading";

export default function Process() {
  return (
    <section id="process" className="rule-b grid grid-cols-1 md:grid-cols-12">
      <SideHeading eyebrow="Process" lines={["How I", "ship"]} />

      <ol className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 px-5 pb-8 md:p-0 rule-t md:border-t-0">
        {PROCESS.map((step, i) => (
          <li
            key={step.title}
            className={[
              "flex gap-3.5 md:flex-col md:gap-2 py-4 md:px-10 md:py-8",
              i < PROCESS.length - 1 ? "rule-b" : "",
              // desktop 2x2 rules
              i % 2 === 0 ? "md:border-r md:border-paper" : "",
              i < 2 ? "md:border-b md:border-paper" : "md:border-b-0",
            ].join(" ")}
          >
            <span className="label text-xs text-lime pt-0.5 md:pt-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1 md:gap-2">
              <strong className="font-semibold text-base md:text-lg">{step.title}</strong>
              <span className="text-[13px] md:text-sm leading-relaxed text-muted">{step.body}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
