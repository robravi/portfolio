export const SITE_URL = "https://portfolio-ramendra-ravi.vercel.app";

export const PERSONAL = {
  name: "Ramendra Kumar Ravi",
  firstName: "Ramendra",
  middleName: "Kumar",
  lastName: "Ravi",
  role: "Full Stack Developer",
  company: "GAINSERV Infotech",
  tagline: "Full Stack Developer at GAINSERV Infotech · Bengaluru",
  summary:
    "Two years shipping a B2B SaaS product end to end: React, Next.js and TypeScript on the front, Node and .NET behind it, monorepo and CI/CD that have never needed a rollback.",
  email: "ramendra.ravi@gmail.com",
  phone: "+91 70799 74130",
  linkedin: "https://www.linkedin.com/in/ramendra-kumar-ravi/",
  github: "https://github.com/robravi",
  location: "Bengaluru, KA",
  resume: "/Ramendra_Kumar_Ravi-Resume.pdf",
};

/** Work-first stat bar. Order matters. */
export const METRICS = [
  { value: "30%", label: "Faster page load · at work" },
  { value: "0", label: "Production rollbacks · at work", accent: true },
  { value: "50%", label: "Less duplicated code · monorepo" },
  { value: "0 KB", label: "3D assets · Chronos (personal)" },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Sep 2024 — Present",
    start: "2024-09",
    context: "B2B SaaS · team of 8 · promoted from intern",
    location: "Bengaluru / Surat",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node",
      "Redis",
      "RabbitMQ",
      "Nx",
      "Azure DevOps",
    ],
    highlights: [
      "Built a React component library with memoization and lazy loading. Pages load 30% faster, re-renders down 25%.",
      "Architected an Nx / Turborepo monorepo shared across 3 product apps, removing 50% of duplicated code.",
      "Integrated REST and GraphQL APIs with retry and error handling. API response time down 35%.",
      "Own CI/CD on Azure DevOps. Zero rollback incidents. 20+ production issues resolved with no recurrence.",
      "Backend features in Node and Express: Redis caching, RabbitMQ and Bull queues for async jobs.",
    ],
    lead: true,
  },
  {
    role: "Web Development Intern",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Mar 2024 — Sep 2024",
    start: "2024-03",
    context: "Converted to full time in 6 months",
    location: "Surat, Gujarat",
    stack: ["React", "JavaScript", "CSS"],
    highlights: [
      "Built 20+ reusable React components adopted across the codebase.",
      "Wrote the architecture docs that cut new-joiner onboarding time by 25%.",
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
      "Azure",
    ],
    stackLine: "Next.js 16 · R3F · .NET 10 · Azure",
    summary:
      "Procedural R3F models, .NET pricing API on Azure, zero 3D assets downloaded. 6,552 configurations.",
    description:
      "Real-time 3D luxury watch configurator: a collection page of eight curated editions flowing into a cinematic 3D atelier. Every part of the watch is procedurally generated, with zero downloaded 3D assets, and pricing is verified server-side by an ASP.NET Core API on Azure.",
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
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    url: "https://ai-analyzer-neon-omega.vercel.app",
    github: "https://github.com/robravi",
    stack: ["Next.js (SSR)", "Zustand", "TanStack Query", "Groq AI", "Llama 3.3 70B"],
    stackLine: "Next.js · Groq · Llama 3.3 70B",
    summary:
      "Section-by-section resume scoring and ATS checks on Llama 3.3 70B via Groq, results in under 3 seconds.",
    description:
      "Full-stack AI-powered resume analysis platform that helps job seekers optimize their resumes using the Llama 3.3 70B model via Groq's low-latency inference engine.",
    features: [
      "Upload PDF/DOCX resumes and receive section-by-section scoring with actionable improvement suggestions in under 3 seconds.",
      "ATS (Applicant Tracking System) compatibility checker: analyzes formatting, keyword density, and structure.",
      "Job description matching: compares resume against specific job postings to identify skill gaps and optimization opportunities.",
      "Save and track analysis history to monitor resume improvement over time.",
      "Dark/light theme toggle, glassmorphism UI, fully responsive design.",
    ],
    metrics: [
      { label: "Analysis speed", value: "<3s" },
      { label: "ATS accuracy", value: "98%" },
      { label: "Model", value: "70B params" },
    ],
    year: "2025",
    kind: "Personal project",
  },
  {
    slug: "e-commerce",
    name: "E-Commerce App",
    url: "https://e-commerceapi-taupe.vercel.app",
    github: "https://github.com/robravi/e-Commerce",
    stack: ["React", "Redux Toolkit", "Vite", "Vitest", "REST API", "CSS3"],
    stackLine: "React · Redux Toolkit · Vite · Vitest",
    summary:
      "Catalog, cart and checkout with Redux Toolkit state and Vitest coverage. Fully responsive.",
    description:
      "A full-featured e-commerce storefront built with React and Redux Toolkit, consuming external product APIs with a focus on performance and accessibility.",
    features: [
      "Dynamic product filtering and search with real-time updates across categories, price ranges, and ratings.",
      "Persistent cart management with add/remove/quantity controls, powered by Redux Toolkit for predictable state.",
      "Complete checkout flow with form validation and order summary.",
      "Code splitting and lazy loading reduced initial bundle size by 35%.",
      "Fully responsive layout from mobile to desktop with WCAG-compliant accessible UI.",
    ],
    metrics: [
      { label: "Bundle reduction", value: "35%" },
      { label: "Commits", value: "80+" },
      { label: "Responsive", value: "All devices" },
    ],
    year: "2025",
    kind: "Personal project",
  },
];

export const ABOUT = {
  paragraphs: [
    "I'm Ramendra, a full stack developer in Bengaluru. I joined GAINSERV as an intern in 2024, was converted to full time in six months, and now own the frontend architecture and CI/CD for a B2B SaaS product used by paying customers.",
    "I care most about the part of the stack users touch. The things I'm proud of are boring on purpose: a monorepo that cut duplicated code in half, pipelines that have never needed a rollback, and a 3D configurator that ships no 3D assets.",
    "Looking next for a product team where frontend quality is a feature, not an afterthought.",
  ],
  facts: ["Bengaluru, KA", "Open to relocation / remote"],
};

export const PROCESS = [
  {
    title: "Monorepo",
    body: "Nx and Turborepo, shared packages, affected-only builds.",
  },
  {
    title: "Tests gate merges",
    body: "Vitest, Jest and Testing Library on every pull request.",
  },
  {
    title: "CI / CD",
    body: "Azure DevOps and GitHub Actions to Vercel and Azure App Service.",
  },
  {
    title: "Quality budgets",
    body: "Core Web Vitals and WCAG checks run in the pipeline.",
  },
];

export const TOOLS: { group: string; items: string[]; highlight?: string[] }[] = [
  {
    group: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Zustand / Redux",
      "TanStack Query",
      "R3F",
    ],
    highlight: ["TypeScript", "React", "Next.js"],
  },
  {
    group: "Backend & data",
    items: ["Node / Express", ".NET", "PostgreSQL", "Redis", "RabbitMQ / Bull", "GraphQL"],
  },
  {
    group: "AI integration",
    items: ["LLM APIs (Groq)", "Structured output", "Prompt evaluation"],
  },
  {
    group: "Delivery",
    items: [
      "Nx / Turborepo",
      "Vitest / Jest",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Core Web Vitals",
      "WCAG",
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech, Electrical & Electronics Engineering",
  university: "Vel Tech University, Chennai",
  certification: "TestDome Certified, Frontend Developer",
};

export const NAV = [
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
];
