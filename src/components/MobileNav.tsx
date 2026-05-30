"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FILE_TREE, PERSONAL } from "@/lib/constants";

const allLinks = [{ name: "index.tsx", path: "/" }, ...FILE_TREE];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger bar */}
      <div className="flex items-center justify-between bg-bg-sidebar border-b border-border px-4 py-2">
        <span className="text-[13px] text-accent font-semibold">
          {PERSONAL.name.toLowerCase().replace(/ /g, "-")}
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="text-text-secondary text-[20px] leading-none"
          aria-label="Toggle menu"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Dropdown nav */}
      {open && (
        <nav className="bg-bg-sidebar border-b border-border px-4 py-2">
          {allLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-[13px] ${
                pathname === link.path
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
