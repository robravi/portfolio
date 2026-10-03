export default function SectionHeader({
  left,
  right,
}: {
  left: string;
  right?: string;
}) {
  return (
    <div className="rule-b px-5 py-3.5 md:px-10 md:py-[18px] flex justify-between label text-[11px] md:text-xs text-muted">
      <span>{left}</span>
      {right && <span>{right}</span>}
    </div>
  );
}
