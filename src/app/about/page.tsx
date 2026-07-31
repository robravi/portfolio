"use client";

import { motion } from "framer-motion";
import { PERSONAL, EDUCATION } from "@/lib/constants";
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
} from "@/components/CodeLine";

export default function AboutPage() {
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
          <Comment>about.tsx -- Who is Ramendra?</Comment>
        </CodeLine>
        <CodeLine>
          <LineNumber n={2} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={3} />
          <Keyword>import</Keyword> React <Keyword>from</Keyword>{" "}
          <Str>react</Str>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={4} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={5} />
          <Keyword>interface</Keyword> <Type>AboutProps</Type>{" "}
          <Bracket>{"{"}</Bracket>
        </CodeLine>
        <CodeLine>
          <LineNumber n={6} />
          {"  "}
          <Prop>name</Prop>: <Type>string</Type>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={7} />
          {"  "}
          <Prop>summary</Prop>: <Type>string</Type>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={8} />
          {"  "}
          <Prop>education</Prop>: <Type>Education</Type>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={9} />
          <Bracket>{"}"}</Bracket>
        </CodeLine>
        <CodeLine>
          <LineNumber n={10} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={11} />
          <Keyword>export default function</Keyword> <Fn>About</Fn>
          <Bracket>()</Bracket> <Bracket>{"{"}</Bracket>
        </CodeLine>
        <CodeLine>
          <LineNumber n={12} />
          {"  "}
          <Keyword>return</Keyword> <Bracket>(</Bracket>
        </CodeLine>
      </CodeBlock>

      {/* Rendered "output" panel */}
      <div className="ml-8 mt-6 mb-6 border-l-2 border-accent/40 pl-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold gradient-text font-sans inline-block">
            {PERSONAL.name}
          </h1>
          <p className="text-accent/80 text-[14px] mt-1 font-sans">
            {PERSONAL.tagline}
          </p>
        </motion.div>

        <motion.div
          className="space-y-3 text-[14px] text-text-secondary leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p>
            Full Stack Developer with 2+ years shipping performance-critical
            React.js applications and C#/.NET services in B2B SaaS
            environments. I architect Monorepo systems using Nx and Turborepo,
            own CI/CD pipelines end-to-end, and deliver measurable gains in
            load speed, API response, and code reuse.
          </p>
          <p>
            I was promoted from intern to full-time within 6 months --
            building 20+ reusable components, authoring architecture docs, and
            earning trust through consistent delivery with zero production
            rollbacks.
          </p>
          <p>
            Beyond frontend, I collaborate on backend services using Node.js,
            Express.js, Redis, and RabbitMQ. I care deeply about web
            performance (Core Web Vitals), accessibility (WCAG), and clean,
            maintainable code.
          </p>
        </motion.div>

        <motion.div
          className="glass-card rounded-xl p-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-[11px] text-text-muted uppercase tracking-[0.15em] mb-3 font-sans">
            Education & Certification
          </h3>
          <p className="text-[14px] text-text-primary font-sans">
            {EDUCATION.degree}
          </p>
          <p className="text-[13px] text-text-secondary font-sans mt-0.5">
            {EDUCATION.university}
          </p>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-[13px] text-green font-sans flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              {EDUCATION.certification}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 text-[12px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="glass-card px-3 py-1.5 rounded-md text-text-secondary font-sans">
            {PERSONAL.location}
          </span>
          <span className="glass-card px-3 py-1.5 rounded-md text-green font-sans flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
            Open to Relocation
          </span>
          <span className="glass-card px-3 py-1.5 rounded-md text-text-secondary font-sans">
            Notice: 30 days
          </span>
          <span className="glass-card px-3 py-1.5 rounded-md text-text-secondary font-sans">
            English (Professional) | Hindi (Native)
          </span>
        </motion.div>
      </div>

      <CodeBlock>
        <CodeLine>
          <LineNumber n={13} />
          {"  "}
          <Bracket>)</Bracket>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={14} />
          <Bracket>{"}"}</Bracket>
        </CodeLine>
      </CodeBlock>
    </motion.div>
  );
}
