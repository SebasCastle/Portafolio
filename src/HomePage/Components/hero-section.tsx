import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { siteConfig } from "@/data/site"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
        <div>
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm text-muted-foreground tracking-[0.18em] uppercase mb-4"
          >
            {siteConfig.role}
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            I build web apps,{" "}
            <span className="text-gradient-brand">automate processes</span> and{" "}
            <span className="text-gradient-brand">turn data into insights.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            {siteConfig.description} Hi, I&apos;m {siteConfig.name} — crafting practical digital
            solutions with a focus on clarity, speed, and reliability.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="min-h-12 px-6 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              View my work
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href={siteConfig.cvUrl}
              className="min-h-12 px-6 inline-flex items-center justify-center gap-2 rounded-full glass font-semibold hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" aria-hidden />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="flex items-center gap-3"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full glass hover:bg-white/10"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full glass hover:bg-white/10"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="min-h-11 min-w-11 inline-flex items-center justify-center rounded-full glass hover:bg-white/10"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          aria-hidden
        >
          <div className="glow-card rounded-3xl p-4 sm:p-5 bg-[linear-gradient(180deg,rgba(30,41,59,.9),rgba(15,23,42,.95))]">
            <div className="rounded-2xl border border-white/10 bg-[#0b1220] overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-muted-foreground">portfolio.tsx</span>
              </div>
              <pre className="p-4 sm:p-5 text-[11px] sm:text-xs leading-relaxed text-sky-100/90 font-mono overflow-hidden">
{`const engineer = {
  name: "${siteConfig.shortName}",
  stack: ["React", "NestJS", "SQL"],
  focus: ["automation", "dashboards"],
  ship: () => "reliable UX",
}`}
              </pre>
            </div>
          </div>

          <motion.div
            className="absolute -right-2 sm:right-2 -bottom-4 sm:bottom-2 w-36 sm:w-44 rounded-2xl p-4 btn-gradient shadow-xl shadow-violet-500/20"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2">Loop</p>
            <ul className="space-y-1 text-sm font-semibold text-white">
              <li>Idea</li>
              <li>Code</li>
              <li>Automate</li>
              <li>Improve</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
