import { motion, useReducedMotion } from "framer-motion"
import { heroStats } from "@/data/site"

export function StatsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section aria-label="Highlights" className="px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {heroStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
            className="glow-card rounded-2xl p-4 sm:p-5"
          >
            <p className="text-2xl sm:text-3xl font-bold text-gradient-brand mb-1">{stat.value}</p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
