export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "automation"
  | "data"
  | "wordpress"
  | "other"

export interface ProjectDemo {
  label: string
  href: string
}

export interface Project {
  id: string
  slug: string
  title: string
  summary: string
  description: string
  overview?: string
  category: ProjectCategory
  technologies: string[]
  /** Filter ids used by home + /projects */
  techIds: string[]
  featured: boolean
  codeUrl?: string
  demos: ProjectDemo[]
  gradient: string
  icon: string
  image?: string
  features?: string[]
  architecture?: { label: string; items: string[] }[]
}

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "automation", label: "Automation" },
  { id: "data", label: "Data" },
  { id: "wordpress", label: "WordPress" },
]

/** Tech chip filters (kept for backwards-compatible filtering UX) */
export const techFilters = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "nestjs", label: "NestJS" },
  { id: "aws", label: "AWS" },
  { id: "sql", label: "SQL" },
  { id: "excel-vba", label: "Excel VBA" },
  { id: "wordpress", label: "WordPress" },
  { id: "tailwind", label: "Tailwind" },
] as const

export const projects: Project[] = [
  {
    id: "react-minigames",
    slug: "react-minigames",
    title: "React Mini Games",
    summary: "Interactive React demos including a word scramble game and GIF explorer.",
    description: "Mini games and UI experiments built with React, where you have to guess the word.",
    overview:
      "A set of small React applications used to practice hooks, state management, and API integration. Includes a scramble-words game and a Giphy-powered GIF search demo.",
    category: "frontend",
    technologies: ["React", "Tailwind", "TypeScript"],
    techIds: ["react", "tailwind"],
    featured: true,
    codeUrl:
      "https://github.com/SebasCastle/React-Practicas/tree/ba18c88b17d3fcb6d5174b0548e0e41ce66cc1cf/04-hooks-app/src",
    demos: [
      { label: "ScrambleGame", href: "/ScrambleGame" },
      { label: "GiftsApp", href: "/giftsApp" },
    ],
    gradient: "from-blue-500/30 via-cyan-500/10 to-indigo-500/20",
    icon: "⚛️",
    image: "/projects/react-mini-games.webp",
    features: [
      "Scramble words game with scoring and confetti feedback",
      "GIF search with debounce and previous searches",
      "Responsive layouts for mobile and desktop",
    ],
    architecture: [
      { label: "Frontend", items: ["React", "Vite", "Tailwind"] },
      { label: "APIs", items: ["Giphy API"] },
    ],
  },
  {
    id: "devtree",
    slug: "devtree",
    title: "DevTree",
    summary: "Link-in-bio style hub for social profiles with auth and API backend.",
    description:
      "Get all your social media links in one place. Try it — User: sebastian@gmail.com, pass: Sebastian2005. (Consider it is on a free server with limited resources.)",
    overview:
      "A full-stack link aggregator with authentication and a dashboard to manage social profiles. Deployed on a free tier for demo purposes.",
    category: "full-stack",
    technologies: ["React", "Tailwind", "Express", "API"],
    techIds: ["react", "nestjs", "sql", "tailwind"],
    featured: true,
    codeUrl: "https://github.com/SebasCastle",
    demos: [{ label: "Live Demo", href: "https://devtree-uag.netlify.app/Home" }],
    gradient: "from-emerald-500/25 via-blue-500/10 to-cyan-500/20",
    icon: "🛜",
    image: "/projects/devtree.webp",
    features: [
      "Centralized social links",
      "Auth demo credentials for exploration",
      "Responsive dashboard UI",
    ],
    architecture: [
      { label: "Frontend", items: ["React", "Tailwind"] },
      { label: "Backend", items: ["Express", "REST API"] },
    ],
  },
  {
    id: "vba-excel",
    slug: "vba-excel-automation",
    title: "VBA Excel Automation",
    summary: "Quote automation and logging macros for business workflows.",
    description: "Quote automation, creation of logs using forms and VBA macros.",
    overview:
      "Business process automation built with Excel forms and VBA macros to speed up quoting and keep structured logs.",
    category: "automation",
    technologies: ["Excel", "VBA"],
    techIds: ["excel-vba", "sql"],
    featured: true,
    codeUrl: "https://github.com/SebasCastle",
    demos: [],
    gradient: "from-green-500/25 via-emerald-500/10 to-lime-500/15",
    icon: "📈",
    image: "/projects/excel-vba.webp",
    features: [
      "Automated quote generation",
      "Form-driven logging",
      "Repeatable macros for daily operations",
    ],
  },
  {
    id: "wordpress-business",
    slug: "wordpress-business-websites",
    title: "WordPress Business Websites",
    summary: "Custom business sites optimized for performance and SEO.",
    description:
      "Custom business website with responsive modern design, optimized for performance and SEO.",
    overview:
      "Client-facing WordPress builds with modern page builders, responsive design, and SEO-minded structure.",
    category: "wordpress",
    technologies: ["WordPress", "Tailwind", "BreakDance", "Elementor"],
    techIds: ["wordpress", "tailwind"],
    featured: true,
    codeUrl: "https://github.com/SebasCastle",
    demos: [
      { label: "Lovemark", href: "https://lovemark.agency" },
      { label: "LIFSA", href: "https://lifsa.mx" },
    ],
    gradient: "from-orange-500/25 via-amber-500/10 to-rose-500/15",
    icon: "🌐",
    image: "/projects/wordpress.webp",
    features: [
      "Responsive modern layouts",
      "Performance and SEO basics",
      "Builder workflows with Elementor / Breakdance",
    ],
  },
  {
    id: "aws-data-sync",
    slug: "aws-data-sync",
    title: "AWS Data Sync",
    summary: "Cloud data synchronization across AWS with NestJS, workers, and BAT orchestration.",
    description:
      "Data sync pipeline for AWS instances using NestJS APIs, JavaScript workers, and BAT scripts for reliable job orchestration.",
    overview:
      "An integration-focused system that keeps business data in sync with AWS-hosted instances. NestJS exposes the API layer, JavaScript workers handle background processing, and Windows BAT scripts orchestrate scheduled or on-demand runs for RA/WPA-related workflows.",
    category: "data",
    technologies: ["AWS", "NestJS", "Node.js", "Worker JS", "BAT"],
    techIds: ["aws", "nestjs"],
    featured: true,
    codeUrl: "https://github.com/SebasCastle/API-de-RAs-y-WPAs",
    demos: [],
    gradient: "from-orange-500/30 via-sky-500/10 to-amber-500/20",
    icon: "☁️",
    image: "/projects/aws-data-sync.webp",
    features: [
      "AWS instance data synchronization",
      "NestJS API for sync and orchestration endpoints",
      "Background Worker JS processing",
      "BAT scripts for scheduled and manual job runs",
    ],
    architecture: [
      { label: "API", items: ["NestJS", "REST"] },
      { label: "Workers", items: ["JavaScript workers", "Background jobs"] },
      { label: "Ops", items: ["AWS instance", "BAT orchestration"] },
    ],
  },
  {
    id: "nestjs-backends",
    slug: "nestjs-backends",
    title: "NestJS Backends",
    summary: "Small backend projects exploring Nest.js patterns and validation.",
    description: "Just small back-end projects with Nest.js.",
    overview:
      "Backend practice projects using NestJS modules, validation, and structured APIs.",
    category: "backend",
    technologies: ["NestJS", "zod"],
    techIds: ["nestjs"],
    featured: false,
    codeUrl: "https://github.com/SebasCastle/nest",
    demos: [],
    gradient: "from-red-500/20 via-rose-500/10 to-orange-500/15",
    icon: "💻",
    image: "/projects/nestjs.webp",
    features: ["Modular NestJS structure", "Schema validation with zod"],
  },
  {
    id: "upcoming",
    slug: "more-projects",
    title: "More projects soon",
    summary: "Exploring AI, MCP, cloud platforms, and tooling.",
    description: "AI, MCP, Cloud, and more.",
    overview:
      "Upcoming work across AI tooling, MCP integrations, and cloud infrastructure.",
    category: "other",
    technologies: ["AWS", "Google Cloud", "GPT", "Linux"],
    techIds: ["aws", "cloud"],
    featured: false,
    codeUrl: "https://github.com/SebasCastle",
    demos: [],
    gradient: "from-violet-500/25 via-blue-500/10 to-fuchsia-500/15",
    icon: "🔜",
    image: "/projects/coming-soon.webp",
    features: ["AI / MCP experiments", "Cloud learning path"],
  },
]

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function filterProjects(options: {
  query?: string
  category?: string
  techId?: string
}): Project[] {
  const query = options.query?.trim().toLowerCase() ?? ""
  const category = options.category ?? "all"
  const techId = options.techId ?? "all"

  return projects.filter((project) => {
    const matchesCategory = category === "all" || project.category === category
    const matchesTech = techId === "all" || project.techIds.includes(techId)
    const haystack = [
      project.title,
      project.summary,
      project.description,
      project.category,
      ...project.technologies,
    ]
      .join(" ")
      .toLowerCase()
    const matchesQuery = !query || haystack.includes(query)
    return matchesCategory && matchesTech && matchesQuery
  })
}

export function isExternalHref(href: string) {
  return /^https?:\/\//.test(href)
}
