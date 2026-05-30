"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FILE_TREE } from "@/lib/constants";

const allItems = [
  { name: "index.tsx", path: "/", desc: "Home / Boot" },
  ...FILE_TREE.map((f) => ({
    name: f.name,
    path: f.path,
    desc: f.path.slice(1),
  })),
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
    setQuery("");
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  const filtered = allItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="w-full max-w-md glass-card rounded-xl shadow-2xl shadow-accent/5 overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              type="text"
              placeholder="Search files... (Esc to close)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-3.5 bg-transparent border-b border-border text-text-primary text-[14px] outline-none placeholder:text-text-muted"
            />
            <div className="max-h-64 overflow-y-auto">
              {filtered.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    router.push(item.path);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-[13px] text-text-secondary hover:bg-accent/10 hover:text-accent transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-text-muted text-[11px]">
                    {item.desc}
                  </span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-4 py-3 text-text-muted text-[13px]">
                  No files found.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
