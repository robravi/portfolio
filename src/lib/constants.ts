export const PERSONAL = {
  name: "Ramendra Kumar Ravi",
  role: "Full Stack Developer",
  tagline: "React.js | Next.js | TypeScript | Monorepo | CI/CD",
  email: "ramendra.ravi@gmail.com",
  phone: "+91 70799 74130",
  linkedin: "https://www.linkedin.com/in/ramendra-kumar-ravi/",
  github: "https://github.com/robravi",
  location: "Bengaluru, KA",
};

export const METRICS = [
  { value: 30, suffix: "%", label: "Faster Page Load" },
  { value: 35, suffix: "%", label: "Faster API Response" },
  { value: 50, suffix: "%", label: "Less Code Duplication" },
  { value: 0, suffix: "", label: "Production Rollbacks" },
];

export const SKILLS = {
  Core: [
    "React.js",
    "Next.js (SSR/SSG/ISR)",
    "TypeScript",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "State/API": [
    "Redux Toolkit",
    "Zustand",
    "Context API",
    "RESTful APIs",
    "GraphQL",
    "TanStack Query",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Redis",
    "RabbitMQ",
    "Bull Queue",
    "PostgreSQL",
    "ClickHouse",
  ],
  "DX/Ops": [
    "Jest",
    "Vitest",
    "RTL",
    "Nx/Turborepo",
    "Azure DevOps",
    "Docker",
    "Git",
    "Core Web Vitals",
    "WCAG",
  ],
};

export const EXPERIENCE = [
  {
    hash: "a3f7b2d",
    role: "Full Stack Developer",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Sep 2024 - Present",
    context: "B2B SaaS | Team of 8 | Promoted from Intern | Bengaluru / Surat",
    highlights: [
      "Engineered scalable React component library with memoization & lazy loading -- improved load speed by 30%, reduced rerenders by 25%.",
      "Architected Monorepo (Nx/Turborepo) with shared libraries across 3 product apps -- eliminated 50% code duplication.",
      "Integrated REST & GraphQL APIs with error handling and retry logic, cutting API response time by 35%.",
      "Owned CI/CD pipelines via Azure DevOps -- zero rollback incidents across all releases. Resolved 20+ production issues with 0% recurrence.",
      "Collaborated on backend features: Node.js, Express.js, Redis caching, RabbitMQ/Bull Queue for async job processing.",
    ],
  },
  {
    hash: "e1c9f04",
    role: "Web Development Intern",
    company: "GAINSERV Infotech Pvt. Ltd.",
    period: "Mar 2024 - Sep 2024",
    context: "Converted to full-time after 6 months | Surat, Gujarat",
    highlights: [
      "Built 20+ reusable React components adopted across the codebase, boosting team velocity by 30%.",
      "Authored architecture docs that cut onboarding time by 25%.",
    ],
  },
];

export const PROJECTS = [
  {
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
    description:
      "Real-time 3D luxury watch configurator: a collection page of eight curated editions flowing into a cinematic 3D atelier. Every part of the watch is procedurally generated -- zero downloaded 3D assets -- and pricing is verified server-side by an ASP.NET Core API on Azure.",
    features: [
      "Fully procedural 3D: lathe-profile case, 96-facet fluted bezel, sunburst dial driven by a generated anisotropy map, Roman numerals assembled from metal bars -- total 3D asset weight 0 KB",
      "Server-authoritative pricing: instant optimistic totals on the client, re-validated by /api/quote at cart time; tampered or incompatible configs rejected with 400, covered by xUnit tests",
      "The URL is the configuration -- every design is a shareable deep link; state hydrates from the query string and mirrors back via debounced replaceState",
      "Celestial zodiac complication: the dial becomes a night sky tinted by the chosen dial color, with the sign's constellation glowing in its traditional power color",
      "Cinematic per-part camera focus with critically-damped springs, ~220 ms material transitions, postprocessing gated by PerformanceMonitor with adaptive DPR",
      "CI/CD: GitHub Actions tests and deploys the API to Azure App Service; Vercel builds and deploys the web app",
    ],
    metrics: [
      { label: "3D Asset Weight", value: "0 KB" },
      { label: "Configurations", value: "6,552" },
      { label: "Curated Editions", value: "8" },
    ],
  },
  {
    name: "AI Resume Analyzer",
    url: "https://ai-analyzer-neon-omega.vercel.app",
    github: "https://github.com/robravi",
    stack: [
      "Next.js (SSR)",
      "Zustand",
      "TanStack Query",
      "Groq AI",
      "Llama 3.3 70B",
    ],
    description:
      "Full-stack AI-powered resume analysis platform that helps job seekers optimize their resumes using the Llama 3.3 70B model via Groq's low-latency inference engine.",
    features: [
      "Upload PDF/DOCX resumes and receive section-by-section scoring with actionable improvement suggestions in under 3 seconds",
      "ATS (Applicant Tracking System) compatibility checker with 98% accuracy -- analyzes formatting, keyword density, and structure",
      "Job description matching -- compares resume against specific job postings to identify skill gaps and optimization opportunities",
      "Save & track analysis history to monitor resume improvement over time",
      "Dark/light theme toggle, glassmorphism UI, fully responsive design",
    ],
    metrics: [
      { label: "Analysis Speed", value: "<3s" },
      { label: "ATS Accuracy", value: "98%" },
      { label: "Model", value: "70B params" },
    ],
  },
  {
    name: "E-Commerce App",
    url: "https://e-commerceapi-taupe.vercel.app",
    github: "https://github.com/robravi/e-Commerce",
    stack: ["React", "Redux Toolkit", "Vite", "Vitest", "REST API", "CSS3"],
    description:
      "A full-featured e-commerce storefront built with React and Redux Toolkit, consuming external product APIs with a focus on performance and accessibility.",
    features: [
      "Dynamic product filtering and search with real-time updates across categories, price ranges, and ratings",
      "Persistent cart management with add/remove/quantity controls, powered by Redux Toolkit for predictable state",
      "Complete checkout flow with form validation and order summary",
      "Code splitting and lazy loading reduced initial bundle size by 35%",
      "Fully responsive layout from mobile to desktop with WCAG-compliant accessible UI",
    ],
    metrics: [
      { label: "Bundle Reduction", value: "35%" },
      { label: "Commits", value: "80+" },
      { label: "Responsive", value: "All devices" },
    ],
  },
];

export const EDUCATION = {
  degree: "B.Tech -- Electrical & Electronics Engineering",
  university: "Vel Tech University, Chennai",
  certification: "TestDome Certified -- Frontend Developer",
};

export const FILE_TREE = [
  { name: "about.tsx", path: "/about" },
  { name: "experience.tsx", path: "/experience" },
  { name: "skills.config.ts", path: "/skills" },
  { name: "projects/", path: "/projects" },
  { name: "contact.ts", path: "/contact" },
];
