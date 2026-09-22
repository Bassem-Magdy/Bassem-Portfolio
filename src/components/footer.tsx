import { links, site } from "@/data/site";
import { Github, Linkedin } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-400 sm:flex-row sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {site.fullName}. Built with Next.js, Tailwind CSS &amp; Framer Motion.
        </p>
        <ul className="flex items-center gap-2">
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-brand/60 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-brand/60 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
