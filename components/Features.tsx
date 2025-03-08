"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Globe, Lock, Users, Zap, Layers } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Feature {
  title: string
  description: string
  details: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Completely open source",
    description: "Powered by powerful open-source projects, standing on giants' shoulders",
    details:
      "We leverage the best open-source technologies like React, Next.js, and TailwindCSS to build robust, maintainable applications. This approach ensures transparency, security, and a vibrant ecosystem of support.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Dynamic HTML Streaming",
    description: "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
    details:
      "Our streaming technology allows for progressive rendering of content, dramatically improving perceived load times. Users see content appear incrementally rather than waiting for the entire page to load, creating a more responsive experience.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "React Server Components",
    description:
      "Add components without sending additional client-side JavaScript. Built on the latest React features.",
    details:
      "Server Components allow us to render complex UI on the server, reducing the JavaScript bundle sent to the client. This results in faster page loads, improved performance on mobile devices, and better SEO without sacrificing interactivity.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "AI-Powered Code Generation",
    description: "Leverage machine learning to automate repetitive coding tasks and suggest optimizations.",
    details:
      "Our AI tools analyze your codebase to identify patterns, suggest improvements, and even generate boilerplate code. This accelerates development while maintaining high quality standards and consistency across your project.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Advanced Security Features",
    description: "Built-in protection against common web vulnerabilities and automated security updates.",
    details:
      "We implement industry-standard security practices including HTTPS, content security policies, and protection against XSS, CSRF, and SQL injection attacks. Regular automated security scans ensure your application remains protected against emerging threats.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "Real-time Collaboration",
    description: "Enable seamless team collaboration with live editing and version control integration with coder.",
    details:
      "Our collaboration tools allow multiple team members to work on the same project simultaneously, with changes reflected in real-time. Built-in version control ensures nothing is ever lost, while commenting and approval workflows streamline the review process.",
    icon: <Users className="h-6 w-6" />,
  },
]

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <div className="group/card">
        <motion.div
          className="bg-card rounded-lg border border-border/50 p-6 hover:border-primary/50 transition-colors duration-300 overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onClick={() => setShowDialog(true)}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10 text-primary">{feature.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover/card:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-2">{feature.description}</p>
              <div className="h-0 group-hover/card:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover/card:opacity-100">
                <p className="text-muted-foreground mt-4 pt-4 border-t border-border/50">{feature.details}</p>
                <button
                  className="mt-4 text-primary hover:underline text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowDialog(true)
                  }}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="p-2 rounded-md bg-primary/10 text-primary">{feature.icon}</div>
              {feature.title}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-4 space-y-4">
                <p>{feature.description}</p>
                <p>{feature.details}</p>
                <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="text-sm font-semibold mb-2">Key Benefits:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Enhanced performance and reliability</li>
                    <li>Seamless integration with modern workflows</li>
                    <li>Scalable and future-proof solutions</li>
                    <li>Comprehensive documentation and support</li>
                  </ul>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">Why choose us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technologies with intuitive design to deliver exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

