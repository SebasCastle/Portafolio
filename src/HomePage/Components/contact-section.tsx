import { useState, type FormEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react"
import { SectionHeading } from "@/Components/ui/section-heading"
import { siteConfig } from "@/data/site"

const contactCards = [
  {
    name: "Email",
    description: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    description: "Let's connect",
    href: siteConfig.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    description: "Check out my code",
    href: siteConfig.github,
    icon: Github,
  },
]

export function ContactSection() {
  const reduceMotion = useReducedMotion()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${name || "someone"}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to internships, freelance builds, and collaboration on automation or product work."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-5 sm:gap-6">
          <div className="space-y-4">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.name}
                href={card.href}
                target={card.name === "Email" ? undefined : "_blank"}
                rel={card.name === "Email" ? undefined : "noopener noreferrer"}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
                className="glow-card rounded-2xl p-5 flex items-center gap-4 hover:border-accent/40 transition-colors min-h-[5.5rem]"
              >
                <span className="min-h-12 min-w-12 rounded-xl bg-accent/15 text-accent inline-flex items-center justify-center">
                  <card.icon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-semibold">{card.name}</span>
                  <span className="block text-sm text-muted-foreground break-all">
                    {card.description}
                  </span>
                </span>
              </motion.a>
            ))}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glow-card rounded-2xl p-5 flex items-start gap-3 border-accent/30"
            >
              <Sparkles className="w-5 h-5 text-accent mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold mb-1">Open to new opportunities</p>
                <p className="text-sm text-muted-foreground">
                  Currently exploring roles and projects where I can ship useful software and keep
                  learning fast.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glow-card rounded-2xl p-5 sm:p-7 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full min-h-11 rounded-xl bg-secondary/80 border border-border px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-h-11 rounded-xl bg-secondary/80 border border-border px-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl bg-secondary/80 border border-border px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y min-h-32"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full min-h-12 rounded-full btn-gradient text-white font-semibold inline-flex items-center justify-center gap-2"
            >
              Send message
              <ArrowRight className="w-4 h-4" aria-hidden />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
