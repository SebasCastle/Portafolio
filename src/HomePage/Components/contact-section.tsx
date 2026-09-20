"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    name: "GitHub",
    description: "Check out my code",
    href: "https://github.com/SebasCastle",
    icon: Github,
  },
  {
    name: "LinkedIn",
    description: "Let&apos;s connect",
    href: "https://www.linkedin.com/in/sebasti%C3%A1ncz/",
    icon: Linkedin,
  },
  {
    name: "Email",
    description: "Get in touch",
    href: "mailto:sebastiancastillozamudio@hotmail.com",
    icon: Mail,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <link.icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                {link.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </h3>
              <p className="text-muted-foreground">{link.description.replace("&apos;", "'")}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="mailto:contact@example.com"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Send me a message
          </a>
        </motion.div>
      </div>
    </section>
  )
}
