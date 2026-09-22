import type { ComponentType, SVGProps } from "react";
import { skillGroups, type SkillGroup } from "@/data/site";
import { Cpu, Layout, Server, Wrench } from "./icons";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

const icons: Record<SkillGroup["id"], ComponentType<SVGProps<SVGSVGElement>>> = {
  frontend: Layout,
  backend: Server,
  algorithms: Cpu,
  tools: Wrench,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills matrix"
      title="A full toolkit, from pixels to algorithms"
      description="The technologies I use to design, build and ship, organised by discipline."
      className="bg-ink-900/60"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.id];
          return (
            <Reveal key={group.id} delay={(i % 2) * 0.1}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,.5)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-ink">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{group.title}</h3>
                    <p className="text-sm text-slate-400">{group.blurb}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-ink-800/80 px-3 py-1 font-mono text-[13px] text-slate-300 transition hover:border-brand/50 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
