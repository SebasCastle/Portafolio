"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Link } from "react-router"

const filters = [
  { id: "all", label: "All" },
  { id: "react", label: "React" },
  { id: "nestjs", label: "NestJS" },
  { id: "sql", label: "SQL" },
  // { id: "python", label: "Python" },
  { id: "excel-vba", label: "Excel VBA" },
  { id: "wordpress", label: "WordPress" },
  // { id: "java-spring", label: "Java Spring Boot" },
  { id: "Tailwind", label: "Tailwind" },

]

const projects = [
  {
    id: 1,
    title: "React",
    url:"https://github.com/SebasCastle/React-Practicas/tree/ba18c88b17d3fcb6d5174b0548e0e41ce66cc1cf/04-hooks-app/src",
    page:["/ScrambleGame","/giftsApp"],
    description: "Mini game made with react, where you have to guess de word",
    technologies: ["React","Tailwind"],
    techIds: ["react","Tailwind"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: "⚛️",
  },
  {
    id: 2,
    title: "DevTree",
    url:"https://github.com/SebasCastle/React-Practicas/tree/ba18c88b17d3fcb6d5174b0548e0e41ce66cc1cf/04-hooks-app/src",
    description: "Get all your social media links in one place, try it  User:sebastian@gmail.com pass:Sebastian2005. (consider it is in a free server with limited resources)",
    page:["https://devtree-uag.netlify.app/Home"],
    technologies: ["React", "Tailwind","API", "Express","more.."],
    techIds: ["react", "nestjs", "sql"],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "🛜",
  },
  {
    id: 3,
    title: "VBA Excel",
    url:"https://github.com/SebasCastle",
    description: "Quote automation, creation of logs using forms and VBA macros.",
     page:[],
    technologies: ["Excel", "VBA"],
    techIds: ["python", "sql","excel-vba"],
    gradient: "from-green-500/20 to-emerald-500/20",
    icon: "📈",
  },
  {
    id: 4,
    title: "WordPress Business Website",
    url:"https://github.com/SebasCastle",
    description: "Custom business website with responsive modern design, optimized for performance and SEO.",
    technologies: ["WordPress","Tailwind","BreakDance","Elementor"],
    page:['https://lovemark.agency','https://lifsa.mx'],
    techIds: ["wordpress",'Tailwind'],
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Nest JS",
    url:"https://github.com/SebasCastle/nest",
    description: "just small back-end projects with Nest.js",
    technologies: ["Next","zod"],
    page:[],
    techIds: ["nestjs"],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "💻",
  },
  {
    id: 6,
    title: "More projects soon...",
    url:"https://github.com/SebasCastle",
    description: "IA, MCP, Cloud, etc",
    technologies: ["AWS","Google Cloud","GPT",'Linux', "more..."],
    page:['https://lovemark.agency','https://lifsa.mx'],
    techIds: ["API",'Cloud'],
    gradient: "from-green-500/20 to-blue-500/20",
    icon: "🔜",
  },
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.techIds.includes(activeFilter))

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Selected Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, automation, and data visualization.
          </p>
        </motion.div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:bg-white/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 h-full">
                  {/* Project Preview Area */}
                  <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden z-10`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="text-8xl relative  group-hover:scale-120 transition-transform duration-500">
                      {project.icon}
                    </span>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                      rel="noopener noreferrer"
                        href= {`${project.url}`}
                        target="blank"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <div
                      className="px-6 py-3 glass rounded-full text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.page.length !== 0 ?
                        project.page.map((link) => (
                        <Link
                        rel="noopener noreferrer"
                        target="blank"
                        to={link}
                          key={link}
                          className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                        >
                          {link.split('https://')}
                        </Link>
                      ))
                      :
                      <p>Just Code</p>
                      }
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground text-lg py-16">
            No projects found with this technology.
          </motion.p>
        )}
      </div>
    </section>
  )
}
