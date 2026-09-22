import { timeline, type TimelineKind } from "@/data/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

const tone: Record<TimelineKind, string> = {
  Mentoring: "border-violet-400/30 bg-violet-400/10 text-violet-300",
  Competition: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Training: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
};

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & achievements"
      title="Mentoring, contests and training"
      description="Where I've competed, mentored and levelled up."
    >
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {timeline.map((item, i) => (
          <li key={item.org + item.title} className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden
              className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink bg-brand shadow-[0_0_0_4px_rgba(129,140,248,.2)]"
            />
            <Reveal delay={Math.min(i, 3) * 0.06}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-brand/40 hover:bg-white/[0.06]">
                <span className={cn("inline-block rounded-full border px-3 py-0.5 font-mono text-xs", tone[item.kind])}>
                  {item.kind}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm font-medium text-brand">{item.org}</p>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
