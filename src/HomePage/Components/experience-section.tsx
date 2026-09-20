"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2022-2023",
    title: "Automation Projects (Falcon Tools)",
    description: "Building advanced automation tools for business processes and data workflows using Excel.",
    icon: "🤖",
  },
  {
    year: "2024-2025",
    title: "Data, design and QA Analyst (Avis)",
    description: "Code improvement and optimization with Nest, as well as design with Tailwind and React, performing unit tests and analysis using Excel.",
    icon: "📝",
  },
  {
    year: "2024-2025",
    title: "SQL & Database Design (Freelance)",
    description: "Proficiency in database design and optimization, as well as the development of complex queries, for WordPress sites and design using Elementor and Breakdance.",
    icon: "🗄️",
  },
  {
    year: "Ongoing",
    title: "Personal Growth",
    description: "Continuous learning, coding and growing in the tech path.",
    icon: "💻",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Key milestones in my development career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 glow" />
              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
              }`}>
                <div className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className={`flex items-center gap-3 mb-3 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-accent font-mono text-sm">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
