"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FILE_TREE, PERSONAL } from "@/lib/constants";

export default function FileTree() {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-bg-sidebar border-r border-border flex-col shrink-0 hidden md:flex">
      {/* Explorer header */}
      <div className="px-4 py-2.5 text-[11px] uppercase tracking-[0.15em] text-text-muted font-sans border-b border-border">
        Explorer
      </div>

      {/* Project name */}
      <div className="px-4 py-2 text-[12px] text-text-secondary font-semibold uppercase tracking-wide flex items-center gap-1.5">
        <span className="text-[10px] text-text-muted">&#9660;</span>
        <span className="gradient-text">ramendra-portfolio</span>
      </div>

      {/* src folder */}
      <div className="px-6 py-0.5 text-[12px] text-text-muted flex items-center gap-1.5">
        <span className="text-[10px]">&#9660;</span>
        <span className="text-syntax-type">src/</span>
      </div>

      {/* File list */}
      <nav className="flex-1 px-2 mt-1 overflow-y-auto">
        <Link
          href="/"
          className={`flex items-center gap-2 px-5 py-1.5 text-[13px] rounded-md transition-all ${
            pathname === "/"
              ? "sidebar-active text-accent"
              : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
          }`}
        >
          <FileIcon name="index.tsx" />
          index.tsx
        </Link>
        {FILE_TREE.map((file) => (
          <Link
            key={file.path}
            href={file.path}
            className={`flex items-center gap-2 px-5 py-1.5 text-[13px] rounded-md transition-all ${
              pathname === file.path
                ? "sidebar-active text-accent"
                : "text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            }`}
          >
            <FileIcon name={file.name} />
            {file.name}
          </Link>
        ))}
      </nav>

      {/* Bottom info */}
      <div className="px-4 py-3 border-t border-border shrink-0">
        <p className="text-[11px] text-text-muted">{PERSONAL.location}</p>
        <p className="text-[11px] text-green flex items-center gap-1.5 mt-0.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
          Open to Relocation
        </p>
      </div>
    </aside>
  );
}

function FileIcon({ name }: { name: string }) {
  if (name.endsWith("/"))
    return (
      <span className="text-syntax-type text-[10px] font-bold w-4 text-center">
        D
      </span>
    );
  if (name.endsWith(".tsx"))
    return (
      <span className="text-accent text-[10px] font-bold w-4 text-center">
        TX
      </span>
    );
  if (name.endsWith(".ts"))
    return (
      <span className="text-syntax-type text-[10px] font-bold w-4 text-center">
        TS
      </span>
    );
  return <span className="text-text-muted text-[10px] w-4 text-center">F</span>;
}
