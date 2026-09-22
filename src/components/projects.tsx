"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ComponentType, type SVGProps } from "react";
import { links, projects, type Project, type ProjectCategory } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Code, Github, Palette, Route } from "./icons";
import { ButtonLink } from "./ui/button";
import { Section } from "./ui/section";

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", "Web", "Algorithms", "Design"];

const art: Record<ProjectCategory, { icon: ComponentType<SVGProps<SVGSVGElement>>; gradient: string }> = {
  Web: { icon: Code, gradient: "from-indigo-500/40 via-violet-500/25 to-cyan-400/30" },
  Algorithms: { icon: Route, gradient: "from-emerald-500/30 via-cyan-500/25 to-indigo-500/30" },
  Design: { icon: Palette, gradient: "from-fuchsia-500/30 via-violet-500/25 to-amber-400/25" },
};

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects I'm proud of"
      description="From academic platforms to algorithm simulators and brand design."
      className="bg-ink-900/60"
    >
      <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition duration-300",
              filter === f
                ? "border-transparent bg-brand-gradient font-semibold text-ink"
                : "border-white/15 text-slate-300 hover:border-brand/60 hover:text-white"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { icon: Icon, gradient } = art[project.category];
  const codeHref = project.code ?? links.github;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_60px_-24px_rgba(99,102,241,.55)]"
    >
      <div className={cn("relative grid h-44 place-items-center bg-gradient-to-br", gradient)} aria-hidden>
        <div className="absolute inset-0 bg-grid-lines [background-size:28px_28px] opacity-60" />
        <Icon className="relative h-14 w-14 text-white/90 transition duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">{project.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-slate-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-white/10 bg-ink-800/80 px-3 py-1 font-mono text-xs text-slate-300">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.demo && (
            <ButtonLink href={project.demo} variant="primary" aria-label={`Live demo of ${project.title}`}>
              Live Demo <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          )}
          <ButtonLink href={codeHref} aria-label={`Source code for ${project.title}`}>
            <Github className="h-4 w-4" /> Code
          </ButtonLink>
        </div>
      </div>
    </motion.li>
  );
}
