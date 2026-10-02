export interface JourneyItem {
  id: string
  period: string
  title: string
  description: string
}

export const journeyItems: JourneyItem[] = [
  {
    id: "falcon",
    period: "2022 — 2023",
    title: "Automation Projects (Falcon Tools)",
    description:
      "Building advanced automation tools for business processes and data workflows using Excel.",
  },
  {
    id: "avis",
    period: "2024 — 2025",
    title: "Data, design and QA Analyst (Avis)",
    description:
      "Code improvement and optimization with Nest, design with Tailwind and React, unit tests and analysis using Excel.",
  },
  {
    id: "freelance",
    period: "2024 — 2025",
    title: "SQL & Database Design (Freelance)",
    description:
      "Database design and optimization, complex queries, WordPress sites, and design with Elementor and Breakdance.",
  },
  {
    id: "growth",
    period: "Ongoing",
    title: "Personal Growth",
    description: "Continuous learning, coding, and growing on the software engineering path.",
  },
]
