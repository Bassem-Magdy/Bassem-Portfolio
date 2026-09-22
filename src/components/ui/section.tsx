import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/** Consistent section wrapper: spacing, heading hierarchy, a11y labelling. */
export function Section({ id, eyebrow, title, description, children, className }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative scroll-mt-20 py-24 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description && <p className="mt-4 text-lg leading-relaxed text-slate-400">{description}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
