"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import {
  CodeBlock,
  CodeLine,
  LineNumber,
  Comment,
  Keyword,
  Str,
  Bracket,
  Type,
} from "@/components/CodeLine";

export default function ProjectsPage() {
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
          <Comment>projects/ -- Key Projects</Comment>
        </CodeLine>
        <CodeLine>
          <LineNumber n={2} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={3} />
          <Keyword>import</Keyword> <Bracket>{"{"}</Bracket>{" "}
          <Type>Project</Type> <Bracket>{"}"}</Bracket>{" "}
          <Keyword>from</Keyword> <Str>@/types</Str>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={4} />
        </CodeLine>
      </CodeBlock>

      <div className="space-y-8 mt-4">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.4 }}
            className="glass-card glow-border rounded-xl overflow-hidden"
          >
            {/* File header */}
            <div className="px-5 py-3 border-b border-border/50 flex items-center justify-between">
              <span className="text-[13px] text-text-secondary font-mono flex items-center gap-2">
                <span className="text-syntax-type">src/</span>
                projects/{project.name.toLowerCase().replace(/ /g, "-")}/
              </span>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[11px] text-text-muted hover:text-text-primary rounded-md border border-border hover:border-text-muted transition-colors font-sans"
                  >
                    Source
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-[11px] btn-gradient rounded-md font-sans"
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-[20px] font-bold gradient-text font-sans inline-block">
                {project.name}
              </h3>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="skill-core px-2.5 py-0.5 text-[11px] rounded-md border font-mono transition-all hover:shadow-[0_0_8px_rgba(96,165,250,0.15)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-[14px] text-text-secondary mt-4 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Metrics row */}
              {project.metrics && (
                <div className="flex flex-wrap gap-3 mt-5">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="glass-card rounded-lg px-4 py-3 text-center min-w-[100px]"
                    >
                      <div className="text-[18px] font-bold gradient-text font-mono">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5 font-sans">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Features list */}
              {project.features && (
                <div className="mt-5">
                  <p className="text-[11px] text-text-muted uppercase tracking-[0.15em] mb-3 font-sans">
                    Key Features
                  </p>
                  <div className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="diff-add py-2 rounded-md text-[13px]"
                      >
                        <span className="text-green mr-2 font-mono">+</span>
                        <span className="text-text-secondary font-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Terminal-style command */}
              <div className="mt-5 glass-card rounded-lg px-4 py-3 text-[12px] font-mono">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow/70" />
                  <span className="w-2 h-2 rounded-full bg-green/70" />
                </div>
                <div className="mt-2">
                  <span className="text-green">$</span>{" "}
                  <span className="text-text-muted">
                    open{" "}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {project.url.replace("https://", "")}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
