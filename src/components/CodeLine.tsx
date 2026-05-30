export function LineNumber({ n }: { n: number }) {
  return <span className="line-number">{n}</span>;
}

export function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-keyword font-semibold">{children}</span>;
}

export function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-string">&quot;{children}&quot;</span>;
}

export function Fn({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-function">{children}</span>;
}

export function Type({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-type">{children}</span>;
}

export function Comment({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-syntax-comment italic">
      {"// "}
      {children}
    </span>
  );
}

export function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-number">{children}</span>;
}

export function Prop({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-prop">{children}</span>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-syntax-tag">{children}</span>;
}

export function Bracket({ children }: { children: React.ReactNode }) {
  return <span className="text-text-muted">{children}</span>;
}

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[13px] leading-[1.8] whitespace-pre">
      {children}
    </div>
  );
}

export function CodeLine({ children }: { children: React.ReactNode }) {
  return <div className="code-line">{children}</div>;
}
