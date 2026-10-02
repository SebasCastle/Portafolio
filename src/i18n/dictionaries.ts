import type { Locale } from "./types"

export type Dictionary = {
  language: {
    label: string
    en: string
    es: string
    switchedTo: string
  }
  nav: {
    primary: string
    home: string
    projects: string
    skills: string
    journey: string
    contact: string
    contactMe: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    role: string
    headlineBefore: string
    headlineAutomate: string
    headlineAnd: string
    headlineInsights: string
    description: string
    greeting: string
    viewWork: string
    downloadCv: string
    loop: string
    loopItems: string[]
  }
  stats: {
    projects: string
    technologies: string
    experience: string
    passion: string
    ariaLabel: string
  }
  projects: {
    eyebrow: string
    title: string
    description: string
    viewAll: string
    allTitle: string
    allDescription: string
    searchLabel: string
    searchPlaceholder: string
    categoryFilters: string
    techFilters: string
    showing: string
    of: string
    projectsWord: string
    empty: string
    loadMore: string
    backHome: string
    backProjects: string
    liveDemo: string
    viewCode: string
    code: string
    justCode: string
    tapForLinks: string
    showLinks: string
    overview: string
    technologies: string
    keyFeatures: string
    architecture: string
    previewAlt: string
    categories: Record<string, string>
  }
  skills: {
    eyebrow: string
    title: string
    description: string
    categories: Record<string, string>
  }
  journey: {
    eyebrow: string
    title: string
    description: string
    items: Record<string, { title: string; description: string; period: string }>
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    email: string
    linkedin: string
    linkedinDesc: string
    github: string
    githubDesc: string
    openTitle: string
    openBody: string
    name: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
    mailSubject: string
    mailName: string
    mailEmail: string
    mailSomeone: string
  }
  footer: {
    builtBy: string
    rights: string
  }
  common: {
    loading: string
    backHome: string
    notFound: string
  }
  meta: {
    homeTitle: string
    homeDescription: string
    projectsTitle: string
    projectsDescription: string
  }
}

const en: Dictionary = {
  language: {
    label: "Language",
    en: "English",
    es: "Spanish",
    switchedTo: "Language set to English",
  },
  nav: {
    primary: "Primary",
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    journey: "Journey",
    contact: "Contact",
    contactMe: "Contact me",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    role: "Software Engineering Student · Full Stack Developer Jr",
    headlineBefore: "I build web apps,",
    headlineAutomate: "automate processes",
    headlineAnd: "and",
    headlineInsights: "turn data into insights.",
    description:
      "Focused on automation tools, dashboards, web applications, and scalable backend systems.",
    greeting: "Hi, I'm {name} — crafting practical digital solutions with a focus on clarity, speed, and reliability.",
    viewWork: "View my work",
    downloadCv: "Download CV",
    loop: "Loop",
    loopItems: ["Idea", "Code", "Automate", "Improve"],
  },
  stats: {
    projects: "Projects completed",
    technologies: "Technologies",
    experience: "Years of experience",
    passion: "Passion for learning",
    ariaLabel: "Highlights",
  },
  projects: {
    eyebrow: "Selected work",
    title: "Featured projects",
    description: "A focused set of builds across frontend, full-stack, automation, and WordPress.",
    viewAll: "View all projects",
    allTitle: "All Projects",
    allDescription: "Search and filter the full archive. Architecture supports growing to 20+ projects.",
    searchLabel: "Search projects",
    searchPlaceholder: "Search projects...",
    categoryFilters: "Category filters",
    techFilters: "Technology filters",
    showing: "Showing",
    of: "of",
    projectsWord: "projects",
    empty: "No projects match these filters.",
    loadMore: "Load more",
    backHome: "← Back to home",
    backProjects: "Back to projects",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    code: "Code",
    justCode: "Just Code",
    tapForLinks: "Tap for links",
    showLinks: "Show links for {title}",
    overview: "Overview",
    technologies: "Technologies",
    keyFeatures: "Key Features",
    architecture: "Architecture",
    previewAlt: "{title} preview",
    categories: {
      all: "All",
      "full-stack": "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      automation: "Automation",
      data: "Data",
      wordpress: "WordPress",
      other: "Other",
    },
  },
  skills: {
    eyebrow: "Skills",
    title: "Technologies I work with",
    description: "Organized by the areas I use most when shipping products and automations.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & Cloud",
      automation: "Automation",
    },
  },
  journey: {
    eyebrow: "Journey",
    title: "My Journey",
    description: "Key milestones across automation, product work, and continuous learning.",
    items: {
      falcon: {
        period: "2022 — 2023",
        title: "Automation Projects (Falcon Tools)",
        description:
          "Building advanced automation tools for business processes and data workflows using Excel.",
      },
      avis: {
        period: "2024 — 2025",
        title: "Data, design and QA Analyst (Avis)",
        description:
          "Code improvement and optimization with Nest, design with Tailwind and React, unit tests and analysis using Excel.",
      },
      freelance: {
        period: "2024 — 2025",
        title: "SQL & Database Design (Freelance)",
        description:
          "Database design and optimization, complex queries, WordPress sites, and design with Elementor and Breakdance.",
      },
      growth: {
        period: "Ongoing",
        title: "Personal Growth",
        description: "Continuous learning, coding, and growing on the software engineering path.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    description:
      "Open to internships, freelance builds, and collaboration on automation or product work.",
    email: "Email",
    linkedin: "LinkedIn",
    linkedinDesc: "Let's connect",
    github: "GitHub",
    githubDesc: "Check out my code",
    openTitle: "Open to new opportunities",
    openBody:
      "Currently exploring roles and projects where I can ship useful software and keep learning fast.",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send message",
    mailSubject: "Portfolio contact from {name}",
    mailName: "Name",
    mailEmail: "Email",
    mailSomeone: "someone",
  },
  footer: {
    builtBy: "Built by",
    rights: "All rights reserved.",
  },
  common: {
    loading: "Loading…",
    backHome: "← Home",
    notFound: "Something is wrong...",
  },
  meta: {
    homeTitle: "Sebastián | Creating digital solutions",
    homeDescription:
      "Sebastián CZ — Software Engineering Student & Full Stack Developer Jr. Web apps, automation, and data-driven solutions.",
    projectsTitle: "All Projects",
    projectsDescription:
      "Browse Sebastián's projects across full-stack, frontend, backend, automation, and WordPress.",
  },
}

const es: Dictionary = {
  language: {
    label: "Idioma",
    en: "Inglés",
    es: "Español",
    switchedTo: "Idioma cambiado a español",
  },
  nav: {
    primary: "Principal",
    home: "Inicio",
    projects: "Proyectos",
    skills: "Habilidades",
    journey: "Trayectoria",
    contact: "Contacto",
    contactMe: "Contáctame",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    role: "Estudiante de Ingeniería de Software · Desarrollador Full Stack Jr",
    headlineBefore: "Construyo apps web,",
    headlineAutomate: "automatizo procesos",
    headlineAnd: "y",
    headlineInsights: "convierto datos en insights.",
    description:
      "Enfocado en herramientas de automatización, dashboards, aplicaciones web y backends escalables.",
    greeting:
      "Hola, soy {name} — creo soluciones digitales prácticas con foco en claridad, velocidad y confiabilidad.",
    viewWork: "Ver mi trabajo",
    downloadCv: "Descargar CV",
    loop: "Ciclo",
    loopItems: ["Idea", "Código", "Automatizar", "Mejorar"],
  },
  stats: {
    projects: "Proyectos completados",
    technologies: "Tecnologías",
    experience: "Años de experiencia",
    passion: "Pasión por aprender",
    ariaLabel: "Destacados",
  },
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos destacados",
    description:
      "Una selección enfocada de builds en frontend, full-stack, automatización y WordPress.",
    viewAll: "Ver todos los proyectos",
    allTitle: "Todos los proyectos",
    allDescription:
      "Busca y filtra el archivo completo. La arquitectura soporta crecer a más de 20 proyectos.",
    searchLabel: "Buscar proyectos",
    searchPlaceholder: "Buscar proyectos...",
    categoryFilters: "Filtros por categoría",
    techFilters: "Filtros por tecnología",
    showing: "Mostrando",
    of: "de",
    projectsWord: "proyectos",
    empty: "Ningún proyecto coincide con estos filtros.",
    loadMore: "Cargar más",
    backHome: "← Volver al inicio",
    backProjects: "Volver a proyectos",
    liveDemo: "Demo en vivo",
    viewCode: "Ver código",
    code: "Código",
    justCode: "Solo código",
    tapForLinks: "Toca para enlaces",
    showLinks: "Mostrar enlaces de {title}",
    overview: "Resumen",
    technologies: "Tecnologías",
    keyFeatures: "Funciones clave",
    architecture: "Arquitectura",
    previewAlt: "Vista previa de {title}",
    categories: {
      all: "Todos",
      "full-stack": "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      automation: "Automatización",
      data: "Datos",
      wordpress: "WordPress",
      other: "Otros",
    },
  },
  skills: {
    eyebrow: "Habilidades",
    title: "Tecnologías con las que trabajo",
    description:
      "Organizadas por las áreas que más uso al entregar productos y automatizaciones.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      tools: "Herramientas y cloud",
      automation: "Automatización",
    },
  },
  journey: {
    eyebrow: "Trayectoria",
    title: "Mi trayectoria",
    description:
      "Hitos clave en automatización, trabajo de producto y aprendizaje continuo.",
    items: {
      falcon: {
        period: "2022 — 2023",
        title: "Proyectos de automatización (Falcon Tools)",
        description:
          "Construcción de herramientas avanzadas de automatización para procesos de negocio y flujos de datos con Excel.",
      },
      avis: {
        period: "2024 — 2025",
        title: "Analista de datos, diseño y QA (Avis)",
        description:
          "Mejora y optimización de código con Nest, diseño con Tailwind y React, pruebas unitarias y análisis con Excel.",
      },
      freelance: {
        period: "2024 — 2025",
        title: "SQL y diseño de bases de datos (Freelance)",
        description:
          "Diseño y optimización de bases de datos, consultas complejas, sitios WordPress y diseño con Elementor y Breakdance.",
      },
      growth: {
        period: "En curso",
        title: "Crecimiento personal",
        description:
          "Aprendizaje continuo, código y crecimiento en el camino de la ingeniería de software.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Trabajemos juntos",
    description:
      "Abierto a prácticas, freelance y colaboración en automatización o producto.",
    email: "Correo",
    linkedin: "LinkedIn",
    linkedinDesc: "Conectemos",
    github: "GitHub",
    githubDesc: "Mira mi código",
    openTitle: "Abierto a nuevas oportunidades",
    openBody:
      "Explorando roles y proyectos donde pueda entregar software útil y seguir aprendiendo rápido.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo",
    emailPlaceholder: "tu@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    send: "Enviar mensaje",
    mailSubject: "Contacto del portafolio de {name}",
    mailName: "Nombre",
    mailEmail: "Correo",
    mailSomeone: "alguien",
  },
  footer: {
    builtBy: "Hecho por",
    rights: "Todos los derechos reservados.",
  },
  common: {
    loading: "Cargando…",
    backHome: "← Inicio",
    notFound: "Algo salió mal...",
  },
  meta: {
    homeTitle: "Sebastián | Creando soluciones digitales",
    homeDescription:
      "Sebastián CZ — Estudiante de Ingeniería de Software y Desarrollador Full Stack Jr. Apps web, automatización y soluciones con datos.",
    projectsTitle: "Todos los proyectos",
    projectsDescription:
      "Explora los proyectos de Sebastián en full-stack, frontend, backend, automatización y WordPress.",
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, es }

export function interpolate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  )
}
