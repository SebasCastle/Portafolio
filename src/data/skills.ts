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
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwind" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "database",
    title: "Database",
    items: [
      { name: "SQL", icon: "sql" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Excel", icon: "excel" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Cloud",
    items: [
      { name: "Git/GitHub", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
  {
    id: "automation",
    title: "Automation",
    items: [
      { name: "Excel VBA", icon: "excel-vba" },
      { name: "Python", icon: "python" },
      { name: "Scripts", icon: "scripts" },
      { name: "Workflows", icon: "workflows" },
    ],
  },
]
