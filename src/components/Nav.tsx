"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, PERSONAL } from "@/lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close on Escape. Menu links close it themselves on click.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="rule-b">
      <nav
        aria-label="Primary"
        className="flex items-center justify-between gap-4 px-5 py-3.5 md:px-10 md:py-5"
      >
        <Link
          href="/"
          className="display text-lg md:text-xl tracking-tight text-paper no-underline"
          aria-label={`${PERSONAL.name}, home`}
        >
          RAVI<span className="text-lime">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 label text-[13px]">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-paper hover:text-lime transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="text-lime hover:text-paper transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-11 h-11 border border-paper text-paper"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          id="mobile-menu"
          className="md:hidden rule-t flex flex-col label text-sm"
        >
          {NAV.map((item) => (
            <li key={item.href} className="rule-b">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-paper"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="block px-5 py-4 text-lime"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
