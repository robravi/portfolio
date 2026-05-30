"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";
import {
  CodeBlock,
  CodeLine,
  LineNumber,
  Keyword,
  Str,
  Comment,
  Bracket,
  Type,
  Prop,
} from "@/components/CodeLine";

const SKILL_CLASSES: Record<string, string> = {
  Core: "skill-core",
  "State/API": "skill-state",
  Backend: "skill-backend",
  "DX/Ops": "skill-dxops",
};

export default function SkillsPage() {
  let lineNum = 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <CodeBlock>
        <CodeLine>
          <LineNumber n={lineNum++} />
          <Comment>skills.config.ts -- Technical Stack</Comment>
        </CodeLine>
        <CodeLine>
          <LineNumber n={lineNum++} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={lineNum++} />
          <Keyword>import</Keyword> <Bracket>{"{"}</Bracket>{" "}
          <Type>SkillConfig</Type> <Bracket>{"}"}</Bracket>{" "}
          <Keyword>from</Keyword> <Str>@/types</Str>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={lineNum++} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={lineNum++} />
          <Keyword>export const</Keyword> <Prop>skills</Prop>
          <Bracket>:</Bracket> <Type>SkillConfig</Type> ={" "}
          <Bracket>{"{"}</Bracket>
        </CodeLine>
      </CodeBlock>

      {/* Interactive skill groups */}
      <div className="space-y-8 mt-6 ml-4">
        {Object.entries(SKILLS).map(([category, skills], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: catIdx * 0.15, duration: 0.4 }}
          >
            <div className="text-[13px] font-mono mb-3 flex items-center gap-2">
              <span className="text-text-muted">{"  "}</span>
              <Prop>{category}</Prop>
              <span className="text-text-muted">: [</span>
              <span className="text-[11px] text-text-muted font-sans ml-1">
                {skills.length} skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5 ml-8 mb-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIdx * 0.15 + i * 0.04 }}
                  className={`px-3.5 py-1.5 text-[12px] font-sans rounded-lg border cursor-default
                    transition-all duration-200 hover:scale-110 ${
                      SKILL_CLASSES[category] || ""
                    }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="text-[13px] font-mono text-text-muted">
              {"  "}],
            </div>
          </motion.div>
        ))}
      </div>

      <CodeBlock>
        <div className="mt-4">
          <CodeLine>
            <LineNumber n={lineNum++} />
            <Bracket>{"}"}</Bracket>;
          </CodeLine>
        </div>
      </CodeBlock>
    </motion.div>
  );
}
