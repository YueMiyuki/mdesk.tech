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
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 rounded-lg overflow-hidden z-0 pointer-events-none">
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `linear-gradient(90deg, 
          rgba(99, 102, 241, 0) 0%, 
          rgba(99, 102, 241, 1) 25%, 
          rgba(168, 85, 247, 1) 50%, 
          rgba(99, 102, 241, 1) 75%, 
          rgba(99, 102, 241, 0) 100%)`,
                  backgroundSize: "200% 100%",
                  animation: "moveGradient 2s linear infinite",
                }}
              />
              <div className="absolute inset-[2px] rounded-lg bg-card" />
            </div>

            {/* Glow effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 -z-10 group-hover:opacity-30 rounded-lg"
              style={{
                animation: "slowGlow 4s ease-in-out infinite",
              }}
            />

            <div className="bg-card border border-transparent rounded-lg p-6 relative z-10">
              <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white inline-block mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-4">
                Our friendly team is here to help with any questions you might have.
              </p>
              <a
                href="mailto:hello@mdesk.tech"
                className="inline-flex items-center text-primary hover:text-gradient group-hover:font-medium transition-all duration-300"
              >
                hello@mdesk.tech
                <div className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx global>{`
  @keyframes moveGradient {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
  
  .text-gradient {
    background: linear-gradient(to right, #6366f1, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @keyframes slowGlow {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.1;
    }
  }
`}</style>
    </section>
  )
}

export default Contact

