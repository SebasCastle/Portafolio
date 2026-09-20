"use client"

import { motion } from "framer-motion"
import { Breadcumbs } from "./custom/breadcumbs"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50 ">
      <div className="m-5 ml-0 text-white">
        <Breadcumbs currentPage="Portafolio"/>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            Built by <span className="text-foreground font-medium">Sebastián CZ</span>
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
