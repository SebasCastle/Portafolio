"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "NestJS", level: 80, icon: "🦅" },
  { name: "SQL", level: 75, icon: "🗄️" },
  { name: "java", level: 80, icon: "🍵" },
  { name: "Git/GitHub", level: 88, icon: "📂" },
  { name: "Linux", level: 60, icon: "🐧" },
  { name: "Tailwind", level: 92, icon: "💨" },
  { name: "JavaScript", level: 90, icon: "✨" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-5 sm:p-6 h-full hover:border-accent/30 transition-all duration-300 sm:hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-muted-foreground text-sm">{skill.level}%</p>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
