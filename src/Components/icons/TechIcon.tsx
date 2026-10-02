import type { ComponentType } from "react"
import { FaAws, FaJava } from "react-icons/fa6"
import { PiMicrosoftExcelLogoFill } from "react-icons/pi"
import { Database, FileCode, GitBranch, type LucideProps } from "lucide-react"
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiLinux,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { cn } from "@/lib/utils"

type BrandIcon = ComponentType<{ className?: string }>
type LucideIcon = ComponentType<LucideProps>

const brandIcons: Record<string, BrandIcon> = {
  react: SiReact,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  html: SiHtml5,
  css: SiCss,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  express: SiExpress,
  java: FaJava,
  python: SiPython,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  excel: PiMicrosoftExcelLogoFill,
  git: SiGithub,
  linux: SiLinux,
  aws: FaAws,
  docker: SiDocker,
  vscode: VscVscode,
  "excel-vba": PiMicrosoftExcelLogoFill,
}

const lucideIcons: Record<string, LucideIcon> = {
  sql: Database,
  scripts: FileCode,
  workflows: GitBranch,
}

const brandColor: Partial<Record<string, string>> = {
  react: "text-[#61DAFB]",
  typescript: "text-[#3178C6]",
  tailwind: "text-[#38BDF8]",
  html: "text-[#E34F26]",
  css: "text-[#1572B6]",
  nodejs: "text-[#339933]",
  nestjs: "text-[#E0234E]",
  express: "text-muted-foreground",
  java: "text-[#ED8B00]",
  python: "text-[#3776AB]",
  mysql: "text-[#4479A1]",
  postgresql: "text-[#4169E1]",
  excel: "text-[#217346]",
  git: "text-foreground",
  linux: "text-foreground",
  aws: "text-[#FF9900]",
  docker: "text-[#2496ED]",
  vscode: "text-[#007ACC]",
  "excel-vba": "text-[#217346]",
  sql: "text-accent",
  scripts: "text-accent",
  workflows: "text-accent",
}

interface TechIconProps {
  id: string
  className?: string
}

export function TechIcon({ id, className }: TechIconProps) {
  const colorClass = brandColor[id] ?? "text-accent"

  const Lucide = lucideIcons[id]
  if (Lucide) {
    return (
      <Lucide
        className={cn("size-5 shrink-0", colorClass, className)}
        aria-hidden
        strokeWidth={1.75}
      />
    )
  }

  const Brand = brandIcons[id]
  if (!Brand) return null

  return (
    <Brand className={cn("size-5 shrink-0", colorClass, className)} aria-hidden />
  )
}
