import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/Components/ui/section-heading"
import { journeyItems } from "@/data/journey"
import { useI18n } from "@/i18n"

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()
  const { t } = useI18n()

  return (
    <section id="journey" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow={t.journey.eyebrow}
          title={t.journey.title}
          description={t.journey.description}
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-violet-500/40 to-transparent" />

          <ol className="space-y-5 sm:space-y-6">
            {journeyItems.map((item, index) => {
              const copy = t.journey.items[item.id]
              return (
                <motion.li
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
                  className="relative pl-14 sm:pl-20"
                >
                  <span className="absolute left-4 sm:left-6 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
                  <article className="glow-card rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl" aria-hidden>
                        {item.icon}
                      </span>
                      <span className="text-accent font-mono text-xs sm:text-sm">
                        {copy?.period ?? item.period}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {copy?.title ?? item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {copy?.description ?? item.description}
                    </p>
                  </article>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
