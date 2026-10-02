import { motion, useReducedMotion } from "framer-motion"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion()
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 sm:mb-14 max-w-3xl ${alignment}`}
    >
      {eyebrow && (
        <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
