"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16"
        >
          <div className="space-y-5 sm:space-y-6 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
              I&apos;m a software engineering student passionate about building real-world solutions through automation, dashboards, web applications, and backend systems.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I enjoy learning modern technologies and continuously improving my technical and personal skills. My focus is on creating efficient, scalable, and user-friendly applications that solve real problems.
            </p>
            <div className="pt-4 sm:pt-6 flex flex-wrap justify-center gap-2 sm:gap-4">
              <div className="glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-full min-h-11 inline-flex items-center">
                <span className="text-accent font-medium text-sm sm:text-base">Problem Solver</span>
              </div>
              <div className="glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-full min-h-11 inline-flex items-center">
                <span className="text-accent font-medium text-sm sm:text-base">Continuous Learner</span>
              </div>
              <div className="glass px-4 sm:px-6 py-2.5 sm:py-3 rounded-full min-h-11 inline-flex items-center">
                <span className="text-accent font-medium text-sm sm:text-base">Detail Oriented</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
