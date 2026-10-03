import { TOOLS } from "@/lib/constants";
import SideHeading from "@/components/SideHeading";

export default function Tools() {
  return (
    <section id="tools" className="rule-b grid grid-cols-1 md:grid-cols-12">
      <SideHeading lines={["Tools", "of the", "trade"]} />

      <div className="md:col-span-8 px-5 pb-8 md:p-12 flex flex-col gap-5">
        {TOOLS.map((group) => (
          <div key={group.group} className="flex flex-col gap-2">
            <span className="label text-[11px] text-muted">{group.group}</span>
            <ul className="flex flex-wrap gap-1.5 md:gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`chip text-[11px] md:text-[13px] ${
                    group.highlight?.includes(item) ? "chip-lime" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
