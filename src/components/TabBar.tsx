"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FILE_TREE } from "@/lib/constants";

const allTabs = [
  { name: "index.tsx", path: "/" },
  ...FILE_TREE,
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="flex bg-bg-secondary border-b border-border overflow-x-auto">
      {allTabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className={`flex items-center gap-2 px-4 py-2 text-[13px] border-r border-border/50 whitespace-nowrap transition-all ${
              isActive
                ? "bg-bg-primary text-text-primary border-t-2 border-t-accent shadow-[0_-1px_8px_rgba(129,140,248,0.1)]"
                : "bg-bg-secondary text-text-muted hover:text-text-secondary border-t-2 border-t-transparent hover:bg-bg-primary/50"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
