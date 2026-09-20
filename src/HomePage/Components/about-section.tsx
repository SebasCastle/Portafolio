"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-3xl p-10 md:p-16"
        >
          <div className="space-y-6 text-center">
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
              I&apos;m a software engineering student passionate about building real-world solutions through automation, dashboards, web applications, and backend systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy learning modern technologies and continuously improving my technical and personal skills. My focus is on creating efficient, scalable, and user-friendly applications that solve real problems.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-accent font-medium">Problem Solver</span>
              </div>
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-accent font-medium">Continuous Learner</span>
              </div>
              <div className="glass px-6 py-3 rounded-full">
                <span className="text-accent font-medium">Detail Oriented</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
