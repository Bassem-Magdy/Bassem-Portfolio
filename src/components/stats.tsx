"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/data/site";
import { Reveal } from "./ui/reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setValue(to);
    const controls = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      <span aria-hidden>{value}{suffix}</span>
      <span className="sr-only">{to}{suffix}</span>
    </span>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.06]">
      <p className="bg-brand-gradient bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
        {typeof stat.value === "number" ? <Counter to={stat.value} suffix={stat.suffix} /> : stat.value}
      </p>
      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section aria-label="Key metrics" className="py-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <StatCard stat={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
