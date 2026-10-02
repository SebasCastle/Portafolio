"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-accent/5 rounded-full blur-3xl hidden sm:block"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -40, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
        <motion.p
          className="text-muted-foreground text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Software Engineering Student
        </motion.p>

        <motion.h1
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-5 sm:mb-8 break-words"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <span className="gradient-text">Sebastián CZ</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Full Stack Developer Jr
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-1"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Focused on building automation tools, dashboards, web applications, and scalable backend systems.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="min-h-12 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 sm:hover:scale-105 inline-flex items-center justify-center"
          >
            View Projects
          </a>
          <a
            href="https://github.com/SebasCastle"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 sm:hover:scale-105"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="#contact"
            className="min-h-12 px-6 sm:px-8 py-3 sm:py-4 glass rounded-full font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 sm:hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 sm:gap-6 mt-10 sm:mt-16"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <a
            href="https://github.com/SebasCastle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-11 min-w-11 inline-flex items-center justify-center"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1ncz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-11 min-w-11 inline-flex items-center justify-center"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sebastiancastillozamudio@hotmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-11 min-w-11 inline-flex items-center justify-center"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-hidden
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
