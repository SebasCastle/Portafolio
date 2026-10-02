import { motion, useReducedMotion } from "framer-motion"
import { TechIcon } from "@/Components/icons/TechIcon"
import { SectionHeading } from "@/Components/ui/section-heading"
import { skillCategories } from "@/data/skills"
import { useI18n } from "@/i18n"

export function SkillsSection() {
  const reduceMotion = useReducedMotion()
  const { t } = useI18n()

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-0 h-72 w-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              className="glow-card rounded-2xl p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                {t.skills.categories[category.id] ?? category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2.5 min-h-11"
                  >
                    <TechIcon id={item.icon} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
