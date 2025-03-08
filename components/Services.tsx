"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palette, Code2, Server, BarChart } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Service {
  title: string
  description: string
  details: string
  icon: React.ReactNode
  color: string
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Custom, responsive designs tailored to your brand.",
    details:
      "Our design team creates beautiful, intuitive interfaces that reflect your brand identity and engage your users. We focus on responsive design, ensuring your website looks great on all devices.",
    icon: <Palette className="h-8 w-8" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Web Development",
    description: "Robust, scalable web applications built with cutting-edge tech.",
    details:
      "We build powerful web applications using the latest technologies like React, Next.js, and Node.js. Our development process ensures clean, maintainable code that can scale with your business.",
    icon: <Code2 className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Hosting Solutions",
    description: "Reliable, secure hosting for your website or application.",
    details:
      "Our hosting solutions provide the reliability, security, and performance your website needs. We offer managed hosting with 24/7 monitoring, automatic backups, and expert support.",
    icon: <Server className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and search engine rankings.",
    details:
      "Our SEO experts will help your website rank higher in search results, driving more organic traffic to your business. We use data-driven strategies to optimize your content and structure.",
    icon: <BarChart className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
  },
]

const ServiceCard = ({ service }: { service: Service }) => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <div className="group/card">
        <motion.div
          className="relative cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onClick={() => setShowDialog(true)}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br rounded-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-gradient-to-r ${service.color}`}
          />

          <div className="bg-card border border-border/50 rounded-lg p-6 transition-all duration-300 group-hover/card:border-primary/50 h-full flex flex-col">
            <div
              className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
            >
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover/card:text-gradient transition-all duration-300">
              {service.title}
            </h3>

            <p className="text-muted-foreground flex-grow">{service.description}</p>

            <div className="h-0 group-hover/card:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover/card:opacity-100">
              <p className="text-muted-foreground mt-4 pt-4 border-t border-border/50">{service.details}</p>
            </div>

            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                setShowDialog(true)
              }}
              className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Learn more
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover/card:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className={`p-2 rounded-md bg-gradient-to-br ${service.color} text-white`}>{service.icon}</div>
              {service.title}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-4 space-y-4">
                <p>{service.description}</p>
                <p>{service.details}</p>
                <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
                  <h4 className="text-sm font-semibold mb-2">Our Approach:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Collaborative planning and design process</li>
                    <li>Regular updates and transparent communication</li>
                    <li>Rigorous testing and quality assurance</li>
                    <li>Ongoing support and maintenance</li>
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

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background/0 z-0" />
      <div className="absolute inset-0 noise z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">What we offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive web solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

