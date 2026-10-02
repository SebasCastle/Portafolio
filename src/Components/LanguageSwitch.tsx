import { LOCALES, useI18n, type Locale } from "@/i18n"
import { cn } from "@/lib/utils"

interface LanguageSwitchProps {
  className?: string
  compact?: boolean
}

export function LanguageSwitch({ className, compact = false }: LanguageSwitchProps) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={cn(
        "inline-flex items-center rounded-full glass p-1 gap-0.5",
        className
      )}
    >
      {LOCALES.map((code) => {
        const active = locale === code
        const label = code === "en" ? t.language.en : t.language.es
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setLocale(code as Locale)}
            className={cn(
              "min-h-9 min-w-9 sm:min-h-10 sm:min-w-10 rounded-full text-xs font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              compact ? "px-2.5" : "px-3",
              active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {t.language.switchedTo}
      </span>
    </div>
  )
}
