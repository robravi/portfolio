"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import {
  CodeBlock,
  CodeLine,
  LineNumber,
  Keyword,
  Str,
  Comment,
  Bracket,
  Fn,
  Type,
  Prop,
} from "@/components/CodeLine";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Hi Ramendra,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.open(
      `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
  }

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
          <Comment>contact.ts -- Get in Touch</Comment>
        </CodeLine>
        <CodeLine>
          <LineNumber n={2} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={3} />
          <Keyword>import</Keyword> <Bracket>{"{"}</Bracket> <Fn>send</Fn>{" "}
          <Bracket>{"}"}</Bracket> <Keyword>from</Keyword>{" "}
          <Str>@/mailer</Str>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={4} />
          <Keyword>import</Keyword> <Bracket>{"{"}</Bracket>{" "}
          <Fn>linkedin</Fn>, <Fn>github</Fn>, <Fn>email</Fn>{" "}
          <Bracket>{"}"}</Bracket> <Keyword>from</Keyword>{" "}
          <Str>@/socials</Str>;
        </CodeLine>
        <CodeLine>
          <LineNumber n={5} />
        </CodeLine>
        <CodeLine>
          <LineNumber n={6} />
          <Keyword>async function</Keyword> <Fn>sendMessage</Fn>
          <Bracket>(</Bracket>
          <Prop>args</Prop>
          <Bracket>:</Bracket> <Type>ContactForm</Type>
          <Bracket>)</Bracket> <Bracket>{"{"}</Bracket>
        </CodeLine>
      </CodeBlock>

      {/* Form styled as function body */}
      <motion.form
        onSubmit={handleSubmit}
        className="ml-8 mt-6 mb-6 space-y-5 max-w-lg border-l-2 border-accent/30 pl-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label className="text-[12px] text-text-muted font-mono block mb-1.5">
            <Prop>name</Prop>
            <Bracket>:</Bracket> <Type>string</Type>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full bg-bg-card/80 border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary outline-none transition-all placeholder:text-text-muted font-sans input-glow"
          />
        </div>

        <div>
          <label className="text-[12px] text-text-muted font-mono block mb-1.5">
            <Prop>email</Prop>
            <Bracket>:</Bracket> <Type>string</Type>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full bg-bg-card/80 border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary outline-none transition-all placeholder:text-text-muted font-sans input-glow"
          />
        </div>

        <div>
          <label className="text-[12px] text-text-muted font-mono block mb-1.5">
            <Prop>message</Prop>
            <Bracket>:</Bracket> <Type>string</Type>
          </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={5}
            className="w-full bg-bg-card/80 border border-border rounded-lg px-4 py-2.5 text-[14px] text-text-primary outline-none transition-all placeholder:text-text-muted font-sans resize-none input-glow"
          />
        </div>

        <button
          type="submit"
          className={`px-6 py-2.5 font-semibold rounded-lg text-[14px] font-sans transition-all ${
            sent
              ? "bg-green/10 text-green border border-green/20 shadow-[0_0_12px_rgba(74,222,128,0.1)]"
              : "btn-gradient"
          }`}
        >
          {sent ? "Email client opened!" : "await send(message)"}
        </button>
      </motion.form>

      <CodeBlock>
        <CodeLine>
          <LineNumber n={7} />
          <Bracket>{"}"}</Bracket>
        </CodeLine>
        <CodeLine>
          <LineNumber n={8} />
        </CodeLine>
      </CodeBlock>

      {/* Social links */}
      <motion.div
        className="mt-8 space-y-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-[11px] text-text-muted uppercase tracking-[0.15em] font-sans">
          Direct Links
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-accent transition-colors font-sans"
          >
            {PERSONAL.email}
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
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-accent transition-colors font-sans"
          >
            GitHub
          </a>
          <span className="glass-card px-4 py-2.5 rounded-lg text-[13px] text-text-secondary font-sans">
            {PERSONAL.phone}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
