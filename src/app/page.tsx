"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import MetricsCounter from "@/components/MetricsCounter";
import { PERSONAL } from "@/lib/constants";
import {
  CodeBlock,
  CodeLine,
  LineNumber,
  Keyword,
  Str,
  Fn,
  Comment,
  Bracket,
  Type,
  Prop,
  Num,
} from "@/components/CodeLine";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const onComplete = useCallback(() => setBooted(true), []);

  return (
    <>
      <AnimatePresence>
        {!booted && <Terminal onComplete={onComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10"
      >
        <CodeBlock>
          <CodeLine>
            <LineNumber n={1} />
            <Comment>index.tsx -- Portfolio Entry Point</Comment>
          </CodeLine>
          <CodeLine>
            <LineNumber n={2} />
          </CodeLine>
          <CodeLine>
            <LineNumber n={3} />
            <Keyword>import</Keyword> <Bracket>{"{"}</Bracket>{" "}
            <Type>Developer</Type> <Bracket>{"}"}</Bracket>{" "}
            <Keyword>from</Keyword> <Str>@/ramendra</Str>;
          </CodeLine>
          <CodeLine>
            <LineNumber n={4} />
          </CodeLine>
          <CodeLine>
            <LineNumber n={5} />
            <Keyword>const</Keyword> <Fn>ramendra</Fn>
            <Bracket>:</Bracket> <Type>Developer</Type> ={" "}
            <Bracket>{"{"}</Bracket>
          </CodeLine>
          <CodeLine>
            <LineNumber n={6} />
            {"  "}
            <Prop>name</Prop>: <Str>{PERSONAL.name}</Str>,
          </CodeLine>
          <CodeLine>
            <LineNumber n={7} />
            {"  "}
            <Prop>role</Prop>: <Str>{PERSONAL.role}</Str>,
          </CodeLine>
          <CodeLine>
            <LineNumber n={8} />
            {"  "}
            <Prop>location</Prop>: <Str>{PERSONAL.location}</Str>,
          </CodeLine>
          <CodeLine>
            <LineNumber n={9} />
            {"  "}
            <Prop>stack</Prop>: [<Str>React</Str>, <Str>Next.js</Str>,{" "}
            <Str>TypeScript</Str>],
          </CodeLine>
          <CodeLine>
            <LineNumber n={10} />
            {"  "}
            <Prop>yearsOfExp</Prop>: <Num>2</Num>,
          </CodeLine>
          <CodeLine>
            <LineNumber n={11} />
            {"  "}
            <Prop>productionRollbacks</Prop>: <Num>0</Num>,
          </CodeLine>
          <CodeLine>
            <LineNumber n={12} />
            <Bracket>{"}"}</Bracket>;
          </CodeLine>
          <CodeLine>
            <LineNumber n={13} />
          </CodeLine>
          <CodeLine>
            <LineNumber n={14} />
            <Keyword>export default</Keyword> <Fn>ramendra</Fn>;
          </CodeLine>
        </CodeBlock>

        {/* Metrics */}
        <div className="mt-10">
          <p className="text-[11px] text-text-muted mb-3 font-sans uppercase tracking-[0.15em]">
            System Diagnostics
          </p>
          <MetricsCounter />
        </div>

        {/* Quick links */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/Ramendra_Kumar_Ravi-Resume.pdf"
            download
            className="btn-gradient px-5 py-2.5 rounded-lg text-[13px] font-sans"
          >
            Download Resume
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-accent transition-colors font-sans"
          >
            GitHub
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-accent transition-colors font-sans"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-accent transition-colors font-sans"
          >
            {PERSONAL.email}
          </a>
        </div>

        <p className="mt-8 text-[12px] text-text-muted">
          Press{" "}
          <kbd className="px-1.5 py-0.5 glass-card rounded text-[11px] text-text-secondary">
            Ctrl+K
          </kbd>{" "}
          to open command palette
        </p>
      </motion.div>
    </>
  );
}
