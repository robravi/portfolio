"use client";

import { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/constants";

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === 0) {
      setCount(0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-bold gradient-text tabular-nums">
      {count}
      {suffix}
    </div>
  );
}

export default function MetricsCounter() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {METRICS.map((m) => (
        <div
          key={m.label}
          className={`glass-card rounded-xl p-5 text-center relative ${
            m.value === 0 ? "metric-zero" : ""
          }`}
        >
          <AnimatedNumber target={m.value} suffix={m.suffix} />
          <div className="text-[12px] text-text-muted mt-2 font-sans">
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
