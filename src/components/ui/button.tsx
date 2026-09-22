import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-ink font-semibold shadow-[0_0_0_1px_rgba(255,255,255,.1)_inset] hover:shadow-[0_8px_30px_-6px_rgba(129,140,248,.55)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:border-brand/60 hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-slate-300 hover:text-white hover:bg-white/[0.06]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode };

export function ButtonLink({ variant = "secondary", className, children, ...rest }: LinkProps) {
  const external = typeof rest.href === "string" && /^https?:\/\//.test(rest.href);
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </a>
  );
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };
export function Button({ variant = "primary", className, ...rest }: BtnProps) {
  return <button {...rest} className={cn(base, styles[variant], className)} />;
}
