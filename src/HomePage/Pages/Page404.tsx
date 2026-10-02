import { useI18n } from "@/i18n"

export const Page404 = () => {
  const { t } = useI18n()
  return (
    <div className="min-h-[100svh] flex items-center justify-center px-4">
      <p className="text-center font-extrabold text-3xl sm:text-5xl md:text-6xl text-foreground">
        {t.common.notFound}
      </p>
    </div>
  )
}
