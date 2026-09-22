import { about, site } from "@/data/site";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="Where clean UI meets clean algorithms">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-sm text-slate-400">
            <span className="font-medium text-slate-300">{site.fullName}</span>. {site.education}.
          </p>
        </Reveal>

        <ul className="grid gap-4">
          {about.highlights.map((h, i) => (
            <li key={h.title}>
              <Reveal delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-brand/40 hover:bg-white/[0.06]">
                  <h3 className="font-semibold text-white">{h.title}</h3>
                  <p className="mt-1 text-slate-400">{h.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
