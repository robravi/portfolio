"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import {
  CodeBlock,
  CodeLine,
  LineNumber,
  Comment,
} from "@/components/CodeLine";

export default function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <CodeBlock>
        <CodeLine>
          <LineNumber n={1} />
          <Comment>experience.tsx -- git log --oneline</Comment>
        </CodeLine>
        <CodeLine>
          <LineNumber n={2} />
        </CodeLine>
      </CodeBlock>

      <div className="space-y-6 mt-4">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={exp.hash}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.4 }}
            className="glass-card rounded-xl overflow-hidden"
          >
            {/* Commit header */}
            <div className="px-5 py-4 border-b border-border/50">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono">
                <span className="text-peach">commit {exp.hash}</span>
                <span className="text-text-muted">|</span>
                <span className="text-syntax-keyword">{exp.period}</span>
                {idx === 0 && (
                  <span className="ml-auto px-2.5 py-0.5 text-[10px] rounded-full font-sans font-semibold bg-green/10 text-green border border-green/20 shadow-[0_0_8px_rgba(74,222,128,0.1)]">
                    HEAD
                  </span>
                )}
              </div>
              <h3 className="text-[17px] font-bold text-text-primary mt-2 font-sans">
                {exp.role}
              </h3>
              <p className="text-[13px] text-accent/80 font-sans mt-0.5">
                {exp.company}
              </p>
              <p className="text-[12px] text-text-muted mt-1 font-sans">
                {exp.context}
              </p>
            </div>

            {/* Diff body */}
            <div className="px-5 py-4 space-y-1.5 text-[13px]">
              <div className="text-text-muted text-[11px] mb-3 font-mono flex items-center gap-3">
                <span>diff --git a/role.tsx b/role.tsx</span>
                <span className="text-green">
                  +{exp.highlights.length} additions
                </span>
              </div>
              {exp.highlights.map((h, i) => (
                <div key={i} className="diff-add py-1.5 rounded-md">
                  <span className="text-green mr-2 font-mono">+</span>
                  <span className="text-text-secondary font-sans">{h}</span>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-text-muted font-mono flex items-center gap-4">
                <span className="text-green">
                  {exp.highlights.length} insertions(+)
                </span>
                <span className="text-text-muted">0 deletions(-)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
