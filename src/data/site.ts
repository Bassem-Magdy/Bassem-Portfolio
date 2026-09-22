/**
 * SINGLE SOURCE OF TRUTH
 * Edit content and links here; every component reads from this file.
 */

export const site = {
  name: "Bassem Magdy",
  fullName: "Bassem Magdy Hosny Ibrahim",
  role: "Full-Stack .NET Developer",
  tagline: "Full-Stack .NET Developer | Competitive Programmer (ICPC Mentor)",
  description:
    "Portfolio of Bassem Magdy: Full-Stack .NET Developer (ASP.NET Core, EF Core, React, Next.js) and competitive programmer. Codeforces Expert, ECPC 2026 finalist, and ICPC mentor at Beni Suef University.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bassem-magdy.github.io/Bassem-Portfolio/",
  location: "Beni Suef, Egypt",
  status: "Available for work & freelance",
  email: "bassem.magdy.dev@gmail.com", // أضف بريدك الإلكتروني هنا
  education: "CS Undergraduate, Faculty of Computers & AI (FCAI), Beni Suef University",
} as const;

export const links = {
  github: "https://github.com/Bassem-Magdy",
  linkedin: "https://www.linkedin.com/in/bassem-magdy", // أضف رابط LinkedIn الخاص بك هنا
  resume: "/Bassem-Magdy-Resume.pdf", 
  codeforces: "https://codeforces.com/profile/bassem_magdy",
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
    "I'm a Computer Science undergraduate at Beni Suef University's Faculty of Computers & AI, operating at the intersection of full-stack .NET development and competitive programming.",
    "Competitive programming trained me to write highly efficient algorithms, manage complexity, and account for edge cases. I bring this rigorous mindset into building robust backend APIs using ASP.NET Core, EF Core, and SQL Server, alongside responsive, modern frontends using React and Next.js.",
    "Outside of software development, I mentor the ICPC community at Beni Suef University and design visual identity graphics for its training events.",
  ],
  highlights: [
    { title: "Full-Stack .NET", text: "ASP.NET Core APIs, Entity Framework Core, SQL Server, and modern React/Next.js interfaces." },
    { title: "Algorithmic Depth", text: "1500+ problems solved; DP, graphs, segment trees, and DSU." },
    { title: "Clean Architecture", text: "Focus on maintainable code, optimized query execution, and performant UI." },
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
    id: "backend",
    title: "Back-End & Databases",
    blurb: "Robust APIs, clean architectures, and well-modelled data.",
    items: ["ASP.NET Core", ".NET Framework", "C#", "SQL Server", "T-SQL", "Entity Framework Core", "RESTful APIs"],
  },
  {
    id: "frontend",
    title: "Front-End Development",
    blurb: "Interfaces that are fast, accessible, and responsive.",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "algorithms",
    title: "Problem Solving & Foundations",
    blurb: "The engine behind clean, efficient, and optimized code.",
    items: ["C++", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Segment Trees", "DSU"],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    blurb: "A tidy workflow from architecture design to deploy.",
    items: ["Git & GitHub", "Visual Studio", "VS Code", "Cisco Packet Tracer", "Figma", "Canva"],
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
      "Mentoring fellow students in data structures, algorithms, and contest strategy, and designing visual identities for training events.",
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
    description: "Structured full-stack training covering C#, ASP.NET Core, SQL Server, and modern web development.",
  },
  {
    kind: "Training",
    org: "ITI, Beni Suef Branch",
    title: "Summer Training: Web Development with .NET",
    description: "Hands-on summer program building scalable web applications on the .NET stack.",
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
  demo?: string;
  code?: string;
};
export const projects: Project[] = [
  {
    slug: "cafe-shop",
    title: "Cafe Shop Platform",
    category: "Web",
    description:
      "A modern interactive web application for browsing cafe menus, ordering coffee items, and exploring custom beverage selections with a smooth responsive user interface.",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive Web Design"],
    demo: "https://bassem-magdy.github.io/CafeShop_project/",
    code: "https://github.com/Bassem-Magdy/CafeShop_project",
  },
  {
    slug: "ember-oak",
    title: "Ember & Oak Restaurant",
    category: "Web",
    description:
      "An elegant restaurant website platform featuring sophisticated UI components, online reservation showcases, and dynamic food menu layouts.",
    tech: ["JavaScript", "HTML5", "CSS3", "UI/UX Design"],
    demo: "https://bassem-magdy.github.io/-Ember-Oak/",
    code: "https://github.com/Bassem-Magdy/-Ember-Oak",
  },
];
