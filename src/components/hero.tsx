"use client";

import { motion, useReducedMotion } from "framer-motion";
import { links, site } from "@/data/site";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "./icons";
import { ButtonLink } from "./ui/button";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const child = reduce ? {} : { variants: item };

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid-lines [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-strong/25 blur-[120px]" />
      <div aria-hidden className="absolute right-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div {...anim}>
          <motion.p
            {...child}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {site.status}
          </motion.p>

          <motion.h1
            {...child}
            id="hero-title"
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m {site.name}.
            <span className="mt-2 block bg-brand-gradient bg-clip-text text-transparent">
              I build scalable full-stack .NET apps and solve complex problems.
            </span>
          </motion.h1>

          <motion.p {...child} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {site.tagline}. Codeforces Expert, ECPC 2026 finalist, crafting robust ASP.NET Core APIs and modern React applications.
          </motion.p>

          <motion.p {...child} className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-brand" /> {site.location}
          </motion.p>

          <motion.div {...child} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={links.resume} variant="primary" download>
              <Download className="h-4 w-4" /> Resume
            </ButtonLink>
            <ButtonLink href={links.github} aria-label="GitHub profile">
              <Github className="h-4 w-4" /> GitHub
            </ButtonLink>
            <ButtonLink href={links.linkedin} aria-label="LinkedIn profile">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </ButtonLink>
            <ButtonLink href="#projects" variant="ghost">
              View projects <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>
        </motion.div>

        <CodeCard />
      </div>
    </section>
  );
}

/** Decorative "developer profile" window, aria-hidden since content is repeated in text. */
function CodeCard() {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto w-full max-w-md animate-float"
    >
      <div className="absolute -inset-px rounded-2xl bg-brand-gradient opacity-40 blur-md" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/90 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">bassem.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
          <code>
            <span className="text-violet-400">const</span> <span className="text-cyan-300">bassem</span> = {"{"}
            {"\n  "}role: <span className="text-emerald-300">&quot;Full-Stack .NET Dev&quot;</span>,
            {"\n  "}stack: [<span className="text-emerald-300">&quot;ASP.NET Core&quot;</span>, <span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>],
            {"\n  "}codeforces: {"{"}
            {"\n    "}handle: <span className="text-emerald-300">&quot;bassem_magdy&quot;</span>,
            {"\n    "}rank: <span className="text-emerald-300">&quot;Expert&quot;</span>,
            {"\n    "}peak: <span className="text-amber-300">1621</span>,
            {"\n  "}{"}"},
            {"\n  "}solved: <span className="text-amber-300">1500</span>,
            {"\n  "}openToWork: <span className="text-violet-400">true</span>,
            {"\n"}{"}"};
          </code>
        </pre>
      </div>
    </motion.div>
  );
}
