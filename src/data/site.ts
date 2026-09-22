/**
 * SINGLE SOURCE OF TRUTH
 * Edit content and links here; every component reads from this file.
 * Items marked TODO are placeholders that need your real URLs/files.
 */

export const site = {
  name: "Bassem Magdy",
  fullName: "Bassem Magdy Hosny Ibrahim",
  role: "Front-End Web Developer",
  tagline: "Front-End Web Developer | Competitive Programmer (ICPC Mentor)",
  description:
    "Portfolio of Bassem Magdy: front-end web developer (React, Next.js, Tailwind) and competitive programmer. Codeforces Expert, ECPC 2026 finalist and ICPC mentor at Beni Suef University.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bassem-magdy.vercel.app", // TODO: your real domain
  location: "Beni Suef, Egypt",
  status: "Available for work & freelance",
  email: "your.email@example.com", // TODO: your real email
  education: "CS Undergraduate, Faculty of Computers & AI (FCAI), Beni Suef University",
} as const;

export const links = {
  github: "https://github.com/Bassem-star",
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO: your real LinkedIn URL
  resume: "/Bassem-Magdy-Resume.pdf", // TODO: put your PDF in /public with this name
  codeforces: "https://codeforces.com/profile/Hero_777",
  codechef: "https://www.codechef.com/users/bassem_magdy",
  atcoder: "https://atcoder.jp/users/bassem_magdy",
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export type Stat = { label: string; value: number | string; suffix?: string };
export const stats: Stat[] = [
  { label: "Problems Solved", value: 1500, suffix: "+" },
  { label: "Codeforces Expert (Peak Rating)", value: 1621 },
  { label: "ECPC 2026 Finals", value: "Finalist" },
  { label: "Projects Built", value: 10, suffix: "+" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at Beni Suef University's Faculty of Computers & AI, and I live in two worlds that feed each other: crafting polished, responsive interfaces with React and Next.js, and solving algorithmic problems in C++.",
    "Competitive programming trained me to think in complexity, edge cases and clean abstractions. I bring that same rigour to the front end, where it shows up as fast, accessible and maintainable code. On the back end, I build APIs with ASP.NET Core and SQL Server, so I can take a feature from database to UI.",
    "Outside of contests, I mentor the ICPC community at Beni Suef University and design the visual identity for its training events.",
  ],
  highlights: [
    { title: "Frontend craft", text: "React, Next.js and Tailwind with a focus on performance and UX." },
    { title: "Algorithmic depth", text: "1500+ problems solved; DP, graphs, segment trees and DSU." },
    { title: "Full-stack reach", text: "ASP.NET Core APIs, EF Core and SQL Server behind the UI." },
  ],
} as const;

export type SkillGroup = {
  id: "frontend" | "backend" | "algorithms" | "tools";
  title: string;
  blurb: string;
  items: string[];
};
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Front-End Development",
    blurb: "Interfaces that are fast, accessible and responsive.",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: "backend",
    title: "Back-End & Databases",
    blurb: "Robust APIs and well-modelled data.",
    items: ["ASP.NET Core", ".NET Framework", "C#", "SQL Server", "T-SQL", "Entity Framework Core"],
  },
  {
    id: "algorithms",
    title: "Problem Solving & Foundations",
    blurb: "The engine behind clean, efficient code.",
    items: ["C++", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Segment Trees", "DSU"],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    blurb: "A tidy workflow from design to deploy.",
    items: ["Git & GitHub", "VS Code", "Visual Studio", "Cisco Packet Tracer", "Figma", "Canva"],
  },
];

export type TimelineKind = "Mentoring" | "Competition" | "Training";
export type TimelineItem = {
  kind: TimelineKind;
  org: string;
  title: string;
  description: string;
};
export const timeline: TimelineItem[] = [
  {
    kind: "Mentoring",
    org: "ICPC Community, Beni Suef University",
    title: "Competitive Programming Mentor",
    description:
      "Mentoring fellow students in data structures, algorithms and contest strategy, and designing the visual identity for training events.",
  },
  {
    kind: "Competition",
    org: "ECPC 2026 (Egyptian Collegiate Programming Contest)",
    title: "Finals Finalist & Honorable Mention",
    description: "Ranked 32nd in the qualification stage and advanced to the national finals.",
  },
  {
    kind: "Competition",
    org: "Nile Collegiate Programming Contest",
    title: "Competitor",
    description: "Competed in Nile CPC, solving timed algorithmic problem sets as part of a team.",
  },
  {
    kind: "Training",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    title: "Full-Stack .NET Development Track",
    description: "Structured full-stack training covering C#, ASP.NET Core, SQL Server and modern web development.",
  },
  {
    kind: "Training",
    org: "ITI, Beni Suef Branch",
    title: "Summer Training: Web Development with .NET",
    description: "Hands-on summer program building web applications on the .NET stack.",
  },
  {
    kind: "Training",
    org: "NTI (National Telecommunication Institute)",
    title: "IT Technical Support Training",
    description: "Practical training in IT support and networking fundamentals.",
  },
  {
    kind: "Training",
    org: "SEF Academy",
    title: "Front-End Web Development Diploma (React JS)",
    description: "Diploma focused on building modern, component-driven interfaces with React.",
  },
];

export type ProjectCategory = "Web" | "Algorithms" | "Design";
export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  /** Leave undefined to hide the button. Code falls back to the GitHub profile. */
  demo?: string;
  code?: string;
};
export const projects: Project[] = [
  {
    slug: "gradbox",
    title: "GradBox",
    category: "Web",
    description:
      "An academic showcase platform that presents approved university graduation projects to faculty members and potential employers.",
    tech: ["React.js / Next.js", "Tailwind CSS", "ASP.NET Core API"],
    demo: undefined, // TODO: live URL
    code: undefined, // TODO: repo URL (falls back to your GitHub profile)
  },
  {
    slug: "maze-solver",
    title: "Autonomous Maze-Solving Simulator",
    category: "Algorithms",
    description:
      "A Python-based robot simulator that runs graph search algorithms to navigate complex mazes autonomously.",
    tech: ["Python", "Algorithms", "Graph Theory"],
    demo: undefined,
    code: undefined, // TODO: repo URL
  },
  {
    slug: "icpc-bsu-branding",
    title: "ICPC BSU Branding & UI Designs",
    category: "Design",
    description:
      "Visual branding, promotional media and posters created for ICPC Beni Suef University training events.",
    tech: ["Figma", "Canva", "Branding"],
    demo: undefined, // TODO: Behance / Drive link
    code: undefined,
  },
];
