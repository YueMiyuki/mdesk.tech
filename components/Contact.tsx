"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
      <div className="absolute inset-0 noise z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">Let's talk</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">Ready to start your next project? We'd love to hear from you!</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="bg-card border border-border/50 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary inline-block mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              Our friendly team is here to help with any questions you might have.
            </p>
            <a href="mailto:hello@mdesk.tech" className="inline-flex items-center text-primary hover:underline">
              hello@mdesk.tech
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

