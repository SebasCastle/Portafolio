import { Bot, ClipboardCheck, Database, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

const journeyIcons = {
  falcon: Bot,
  avis: ClipboardCheck,
  freelance: Database,
  growth: TrendingUp,
} as const

const journeyAccent: Record<keyof typeof journeyIcons, string> = {
  falcon: "text-violet-400",
  avis: "text-sky-400",
  freelance: "text-emerald-400",
  growth: "text-accent",
}

interface JourneyIconProps {
  journeyId: string
  className?: string
}

export function JourneyIcon({ journeyId, className }: JourneyIconProps) {
  const Icon = journeyIcons[journeyId as keyof typeof journeyIcons]
  if (!Icon) return null

  const colorClass = journeyAccent[journeyId as keyof typeof journeyIcons] ?? "text-accent"

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10",
        className,
      )}
      aria-hidden
    >
      <Icon className={cn("size-5", colorClass)} strokeWidth={1.75} aria-hidden />
    </span>
  )
}
