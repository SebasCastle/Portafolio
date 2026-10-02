export interface SkillItem {
  name: string
  icon: string
}

export interface SkillCategory {
  id: string
  title: string
  items: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind", icon: "💨" },
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎨" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "NestJS", icon: "🦅" },
      { name: "Express", icon: "🚂" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "SQL", icon: "🗄️" },
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Excel", icon: "📊" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    items: [
      { name: "Git/GitHub", icon: "📂" },
      { name: "Linux", icon: "🐧" },
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "VS Code", icon: "💻" },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    items: [
      { name: "Excel VBA", icon: "📈" },
      { name: "Python", icon: "🐍" },
      { name: "Scripts", icon: "⚙️" },
      { name: "Workflows", icon: "🔁" },
    ],
  },
]
