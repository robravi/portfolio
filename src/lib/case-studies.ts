/**
 * Long-form case study content, keyed by project slug.
 * Projects without an entry render the generic template from PROJECTS.
 */

export type Decision = {
  title: string;
  body: string;
  tradeoff: string;
};

export type ArchCell = {
  label: string;
  title: string;
  body: string;
  accent?: boolean;
};

export type CaseStudy = {
  eyebrow: string;
  headline: [string, string]; // two display lines; second is outlined
  intro: string;
  facts: { label: string; value: string; accent?: boolean }[];
  captureAlt: string;
  problem: string[];
  decisions: Decision[];
  architecture: ArchCell[];
  bug?: {
    title: string;
    body: string[];
    before: string;
    after: string;
  };
  results: { value: string; label: string; accent?: boolean }[];
};

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "chronos-3d": {
    eyebrow: "Case study 01 · Personal project · 2026",
    headline: ["Chronos", "3D"],
    intro:
      "A luxury-watch configurator where every model is generated procedurally in the browser and priced live by a .NET API. Built to prove I can own a product end to end: rendering, API, infra, QA.",
    facts: [
      { label: "Role", value: "Solo: design, frontend, API, infra" },
      { label: "Frontend", value: "Next.js 16, React Three Fiber v9" },
      { label: "Backend", value: "ASP.NET Core, .NET 10" },
      { label: "Infra", value: "Vercel + Azure, GitHub Actions" },
      { label: "Status", value: "Live, verified end to end", accent: true },
    ],
    captureAlt:
      "Chronos atelier: Calibre One in polished steel with a fluted bezel and sunburst blue dial, configurator panel on the right showing a $7,200 total",
    problem: [
      "Product configurators normally ship megabytes of GLB models and textures per variant. For a watch with eight editions and thousands of option combinations that means either a huge download or a server rendering farm. Neither is acceptable on a free hosting tier.",
      "The constraint I set myself: zero static 3D assets, a real pricing backend, and the whole thing deployed on free tiers with a proper CI pipeline.",
    ],
    decisions: [
      {
        title: "Procedural geometry instead of model files",
        body: "Cases, bezels, dials and straps are built from parametric primitives at runtime. Every edition is a JSON record, so a new edition is data, not a modelling job.",
        tradeoff:
          "Less sculptural detail than hand-modelled assets. Won back with PBR materials, environment lighting and bloom.",
      },
      {
        title: "Pricing lives in a .NET API, not the client",
        body: "The configurator posts selected options and gets back price and catalog rules. Business logic stays server-side and I got a real cross-origin, cross-cloud integration to get right.",
        tradeoff:
          "A free-tier API cold-starts. Handled with optimistic UI and a cached catalog so the model never waits on the network.",
      },
      {
        title: "Visual QA as a script, not a checklist",
        body: "Headless Chrome drives the live app, captures each edition from fixed angles and runs the interaction flows. The same harness renders the collection stills, so marketing images never drift from the product.",
        tradeoff:
          "Screenshots are not unit tests. They caught the bugs that mattered here: material and lighting regressions.",
      },
    ],
    architecture: [
      {
        label: "Browser",
        title: "Next.js 16 app",
        body: "Collection page, atelier configurator, R3F canvas, Zustand store",
        accent: true,
      },
      {
        label: "Vercel",
        title: "Static + edge",
        body: "Build-time env for the API URL, CDN-served, zero 3D assets",
      },
      {
        label: "Azure · Central India",
        title: ".NET 10 pricing API",
        body: "App Service F1, catalog and price endpoints, CORS allow-list",
      },
      {
        label: "CI / CD",
        title: "GitHub Actions",
        body: "Path-filtered workflow deploys the API on api/** changes; web deploys on push through Vercel",
      },
      {
        label: "QA",
        title: "Puppeteer harness",
        body: "Edition stills, interaction flows and visual regression from one script set",
      },
      {
        label: "Data",
        title: "editions.json",
        body: "Eight editions as parameter records; stills rendered from the same data",
      },
    ],
    bug: {
      title: "The bug worth telling",
      body: [
        "Titanium cases produced giant white orbs at certain camera angles. The cause was high anisotropy on a curved metal: the specular lobe created HDR spikes, and the bloom pass smeared them into blobs.",
        "Fix: cap anisotropy on curved case metals and keep the bloom threshold above the specular peak. The QA harness now shoots the angles that triggered it on every run.",
      ],
      before: "Before: bloom orb on titanium",
      after: "After: clean titanium",
    },
    results: [
      { value: "0 KB", label: "3D assets downloaded" },
      { value: "6,552", label: "Configurations" },
      { value: "8", label: "Editions, data-driven" },
      { value: "Live", label: "Vercel + Azure, verified", accent: true },
    ],
  },
};
