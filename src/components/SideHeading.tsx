/**
 * Left column heading used by About, Process, Tools and case-study sections.
 * On mobile it stacks above the content; on desktop it is a 4/12 ruled column.
 */
export default function SideHeading({
  eyebrow,
  lines,
  number,
  note,
}: {
  eyebrow?: string;
  lines: string[];
  number?: string;
  note?: string;
}) {
  return (
    <div className="md:col-span-4 px-5 pt-8 pb-4 md:p-12 md:rule-r md:border-r md:border-paper flex flex-col gap-2.5 md:gap-3">
      {number && <span className="label text-xs text-lime">{number}</span>}
      {eyebrow && !number && <span className="label text-[11px] md:text-xs text-lime">{eyebrow}</span>}
      <h2 className="display text-[34px] md:text-[44px] leading-[0.95]">
        {lines.map((l, i) => (
          <span key={l} className={i < lines.length - 1 ? "md:block" : ""}>
            {l}
            {i < lines.length - 1 ? " " : ""}
          </span>
        ))}
      </h2>
      {note && <p className="text-[15px] leading-relaxed text-muted">{note}</p>}
    </div>
  );
}
