"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LINES = [
  { text: "$ initializing ramendra-portfolio...", delay: 0 },
  { text: "[OK] Loading modules: React, Next.js, TypeScript", delay: 400 },
  { text: "[OK] Connecting to experience.db... 2+ years found", delay: 800 },
  { text: "[OK] Build: 0 errors, 0 warnings, 0 rollbacks", delay: 1200 },
  {
    text: "[OK] Performance: 30% faster load, 35% faster API",
    delay: 1600,
  },
  { text: "[OK] System ready. Welcome, visitor.", delay: 2000 },
  { text: "", delay: 2400 },
  { text: '> console.log("Hello, I\'m Ramendra Kumar Ravi")', delay: 2600 },
  { text: '  "Hello, I\'m Ramendra Kumar Ravi"', delay: 3000 },
];

export default function Terminal({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );

    const completeTimer = setTimeout(onComplete, 3800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-bg-primary flex items-center justify-center p-4"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl glass-card rounded-xl overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-bg-secondary/80 border-b border-border">
          <span className="w-3 h-3 rounded-full bg-red/80" />
          <span className="w-3 h-3 rounded-full bg-yellow/80" />
          <span className="w-3 h-3 rounded-full bg-green/80" />
          <span className="ml-3 text-[12px] text-text-muted">
            terminal -- ramendra-portfolio
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-[13px] min-h-[280px]">
          {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
            <div
              key={i}
              className={`leading-relaxed ${
                line.text.startsWith("[OK]")
                  ? "text-green"
                  : line.text.startsWith("$") || line.text.startsWith(">")
                  ? "text-accent"
                  : line.text.startsWith("  ")
                  ? "text-syntax-string"
                  : "text-text-primary"
              }`}
            >
              {line.text || "\u00A0"}
            </div>
          ))}
          {visibleLines < BOOT_LINES.length && (
            <span className="cursor-blink text-accent">|</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
