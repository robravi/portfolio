/**
 * Single source of truth for site copy.
 * Every claim here must be traceable to public/Ramendra_Kumar_Ravi-Resume.pdf
 * or to the live project itself. No invented metrics.
 */

export const SITE_URL = "https://portfolio-ramendra-ravi.vercel.app";

export const PERSONAL = {
  name: "Ramendra Kumar Ravi",
  firstName: "Ramendra",
  middleName: "Kumar",
  lastName: "Ravi",
  role: "Full Stack Developer",
  company: "GAINSERV Infotech",
  tagline: "Full Stack Developer at GAINSERV Infotech · Open to remote & relocation",
  summary:
    "Two years shipping customer-facing SaaS features end to end: React and Next.js on the front, C#/.NET and PostgreSQL behind it, CI/CD on GitHub Actions and Azure DevOps.",
  email: "robravi.ravi@gmail.com",
  phone: "+91 70799 74130",
  linkedin: "https://www.linkedin.com/in/ramendra-kumar-ravi/",
  github: "https://github.com/robravi",
  location: "Surat, India",
  availability: "Open to remote roles & relocation worldwide",
  resume: "/Ramendra_Kumar_Ravi-Resume.pdf",
};

/** Work-first stat bar. Every value is on the resume or measurable on a live project. */
export const METRICS = [
  { value: "2+", label: "Years shipping SaaS · at work" },
  { value: "20+", label: "Reusable React components · team standard", accent: true },
  { value: "94 / 100", label: "Lighthouse mobile / desktop · AI Resume Analyzer" },
  { value: "0 KB", label: "3D assets · Chronos (personal)" },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Sep 2024 — Present",
    start: "2024-09",
    context: "Multi-tenant B2B SaaS · promoted from intern",
    location: "Surat, India",
    stack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Angular",
      "C# / .NET",
      "PostgreSQL",
      "Nx",
      "GitHub Actions",
      "Azure DevOps",
    ],
    highlights: [
      "Own feature modules in the multi-tenant Next.js SaaS dashboard: billing, SSO, integrations, and team and role management. App Router, React 19, Tailwind.",
      "Architected Auth.js/OIDC session handling with protected routes at edge middleware, plus two-way login isolation between the admin panel and tenant dashboard via OpenIddict.",
      "Build and maintain the shared React component library with design tokens in an Nx monorepo, with a Next.js design-system docs site. Replaced duplicated per-app UI code.",
      "Eliminated redundant API calls on data-heavy screens with TanStack Query caching and request deduplication, tracked through Lighthouse and Core Web Vitals.",
      "Design and ship C#/.NET REST APIs over PostgreSQL, with GraphQL endpoints and async job workflows on Redis and RabbitMQ/Bull that power AI-driven product features.",
      "Own the BYOK (bring-your-own-key) AI configuration module in the Angular admin panel: lazy-loaded standalone component, reactive forms, RxJS debounced search, paginated provider and model catalogs.",
      "Build and maintain CI/CD across GitHub Actions and Azure DevOps, and own production triage from diagnosis to the deployed fix.",
    ],
    lead: true,
  },
  {
    role: "Web Development Intern",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Mar 2024 — Sep 2024",
    start: "2024-03",
    context: "Converted to full time in 6 months",
    location: "Surat, India",
    stack: ["React", "JavaScript", "CSS"],
    highlights: [
      "Built 20+ reusable React components and UI patterns adopted as the team's standard building blocks.",
      "Authored the frontend architecture and onboarding documentation for the monorepo codebase.",
    ],
    lead: false,
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  github: string;
  stack: string[];
  /** Short mono stack line shown in the work row. */
  stackLine: string;
  /** One sentence for the work row. */
  summary: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
  year: string;
  kind: "Personal project";
  /** Screenshot under /public/work, 1600x1000. */
  image: string;
  imageAlt: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "chronos-3d",
    name: "Chronos 3D Watch Configurator",
    url: "https://chronos-3d.vercel.app",
    github: "https://github.com/robravi/chronos-3d",
    stack: [
      "Next.js 16",
      "React Three Fiber",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      ".NET 10 API",
      "xUnit",
      "Azure",
    ],
    stackLine: "Next.js 16 · R3F · .NET 10 · Azure",
    summary:
      "Fully procedural R3F watch with 0 KB of 3D assets, 6,552 shareable configurations, pricing verified by a .NET API on Azure.",
    description:
      "Real-time 3D watch configurator: a collection page of eight curated editions flowing into a 3D atelier. Every part of the watch is procedurally generated, with zero downloaded 3D assets, and pricing is verified server-side by an ASP.NET Core API on Azure.",
    features: [
      "Fully procedural 3D: lathe-profile case, 96-facet fluted bezel, sunburst dial driven by a generated anisotropy map, Roman numerals assembled from metal bars. Total 3D asset weight 0 KB.",
      "Server-authoritative pricing: instant optimistic totals on the client, re-validated by /api/quote at cart time. Tampered or incompatible configs rejected with 400, covered by xUnit tests.",
      "The URL is the configuration. Every design is a shareable deep link; state hydrates from the query string and mirrors back via debounced replaceState.",
      "Celestial zodiac complication: the dial becomes a night sky tinted by the chosen dial color, with the sign's constellation glowing in its traditional power color.",
      "Cinematic per-part camera focus with critically-damped springs, ~220 ms material transitions, postprocessing gated by PerformanceMonitor with adaptive DPR.",
      "CI/CD: GitHub Actions tests and deploys the API to Azure App Service; Vercel builds and deploys the web app.",
    ],
    metrics: [
      { label: "3D asset weight", value: "0 KB" },
      { label: "Configurations", value: "6,552" },
      { label: "Curated editions", value: "8" },
    ],
    year: "2026",
    kind: "Personal project",
    image: "/work/chronos-3d.jpg",
    imageAlt:
      "Chronos atelier: a polished steel watch with a fluted bezel and sunburst blue dial beside the configurator panel",
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    url: "https://ai-analyzer-neon-omega.vercel.app",
    github: "https://github.com/robravi/Ai-analyzer",
    stack: ["Next.js (SSR)", "Zustand", "TanStack Query", "Groq", "Llama 3.3 70B"],
    stackLine: "Next.js · Groq · Llama 3.3 70B",
    summary:
      "Upload a resume, get real-time AI feedback on skill gaps and ATS compatibility. Llama 3.3 70B via Groq. Lighthouse 94 mobile, 100 desktop.",
    description:
      "Full-stack AI resume analyzer: upload a resume and get real-time feedback on skill gaps and ATS compatibility. Next.js SSR with Llama 3.3 70B via Groq for low-latency inference.",
    features: [
      "Upload PDF or DOCX resumes and receive section-by-section scoring with actionable improvement suggestions.",
      "ATS compatibility check across formatting, keyword density and structure.",
      "Job description matching: compares the resume against a specific posting to surface skill gaps.",
      "Save and track analysis history to monitor improvement over time.",
      "Lighthouse performance 94 on mobile and 100 on desktop, with zero cumulative layout shift.",
    ],
    metrics: [
      { label: "Lighthouse mobile", value: "94" },
      { label: "Lighthouse desktop", value: "100" },
      { label: "Cumulative layout shift", value: "0" },
    ],
    year: "2025",
    kind: "Personal project",
    image: "/work/ai-resume-analyzer.jpg",
    imageAlt:
      "AI Resume Analyzer landing page: 'Your Resume, Perfected', powered by Llama 3.3 70B on Groq",
  },
];

export const ABOUT = {
  paragraphs: [
    "I'm Ramendra, a full stack developer at GAINSERV Infotech. I joined as an intern in 2024, was converted to full time in six months, and now own feature modules across a multi-tenant SaaS dashboard: billing, SSO, integrations, team and role management, and the AI configuration module.",
    "I like owning a feature from component architecture and state management through API design and deployment. The work I'm proudest of is unglamorous: a shared component library that replaced duplicated UI across apps, auth that isolates tenants properly, and a 3D configurator that ships no 3D assets.",
    "I ship daily with agentic AI tooling inside a normal review-and-test workflow. Looking next for a product team where frontend quality is a feature, not an afterthought.",
  ],
  facts: ["Surat, India", "Open to remote & relocation worldwide"],
};

export const PROCESS = [
  {
    title: "Monorepo",
    body: "Nx workspace with a shared component library, design tokens and a docs site consumed by every product app.",
  },
  {
    title: "Tests gate merges",
    body: "Jest, Vitest and React Testing Library on the front, xUnit on .NET services.",
  },
  {
    title: "CI / CD",
    body: "GitHub Actions and Azure DevOps pipelines, deploying to Vercel and Azure App Service.",
  },
  {
    title: "Measured, then shipped",
    body: "Lighthouse and Core Web Vitals tracked on data-heavy screens; WCAG accessibility as a baseline.",
  },
];

export const TOOLS: { group: string; items: string[]; highlight?: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "C#", "HTML5", "CSS3"],
    highlight: ["TypeScript", "C#"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "WCAG accessibility",
    ],
    highlight: ["React", "Next.js"],
  },
  {
    group: "Backend & data",
    items: [".NET", "Node.js", "Express", "REST", "GraphQL", "PostgreSQL", "Redis", "RabbitMQ / Bull"],
  },
  {
    group: "Testing",
    items: ["Jest", "Vitest", "React Testing Library", "xUnit"],
  },
  {
    group: "AI & tooling",
    items: ["Claude Code", "Codex", "LLM APIs (Groq)", "Azure DevOps", "GitHub Actions", "Docker", "Nx", "Git"],
  },
];

export const EDUCATION = {
  degree: "B.Tech, Electrical & Electronics Engineering",
  university: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
};

export const NAV = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
];
