import React from "react";
import { site, links } from "@/data/site";
import { Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {site.status}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{site.name}.</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-slate-300 leading-snug">
              I build full-stack .NET apps and solve complex problems.
            </p>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Full-Stack .NET Developer | Competitive Programmer (ICPC Mentor). Codeforces Expert, ECPC 2026 finalist, crafting scalable web applications with ASP.NET Core & modern React.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-500/25"
              >
                View Projects
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 transition-colors flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/50 text-slate-300 transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs text-slate-500 ml-2">bassem.ts</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">bassem</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{" "}
                  <span className="text-emerald-400">"Full-Stack .NET Dev"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">github:</span>{" "}
                  <span className="text-emerald-400">"Bassem-Magdy"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                  <span className="text-emerald-400">"C#"</span>,{" "}
                  <span className="text-emerald-400">"ASP.NET Core"</span>,{" "}
                  <span className="text-emerald-400">"EF Core"</span>,{" "}
                  <span className="text-emerald-400">"React"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">codeforces:</span> {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">handle:</span>{" "}
                  <span className="text-emerald-400">"bassem_magdy"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">rank:</span>{" "}
                  <span className="text-emerald-400">"Expert"</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">peak:</span>{" "}
                  <span className="text-amber-400">1621</span>,
                </div>
                <div className="pl-4">{"}"},</div>
                <div className="pl-4">
                  <span className="text-slate-400">solved:</span>{" "}
                  <span className="text-amber-400">1500</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openToWork:</span>{" "}
                  <span className="text-blue-400">true</span>,
                </div>
                <div>{"}"};</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
