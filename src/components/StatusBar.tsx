"use client";

import { usePathname } from "next/navigation";
import { PERSONAL } from "@/lib/constants";

export default function StatusBar() {
  const pathname = usePathname();
  const fileName =
    pathname === "/"
      ? "index.tsx"
      : pathname.slice(1) + (pathname.includes(".") ? "" : ".tsx");

  return (
    <footer className="flex items-center justify-between bg-bg-statusbar border-t border-border px-4 py-1 text-[11px] shrink-0 relative z-10">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-accent shadow-[0_0_6px_rgba(129,140,248,0.4)]" />
          <span className="text-text-secondary">main</span>
        </span>
        <span className="text-text-muted">{fileName}</span>
        <span className="text-text-muted">TypeScript React</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href={PERSONAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <span className="text-text-muted">UTF-8</span>
      </div>
    </footer>
  );
}
