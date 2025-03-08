"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Palette, Code2, Server, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface Service {
  title: string
  description: string
  details: string
  icon: React.ReactNode
  color: string
  benefits: string[]
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Custom, responsive designs tailored to your brand.",
    details:
      "Our design team creates beautiful, intuitive interfaces that reflect your brand identity and engage your users. We focus on responsive design, ensuring your website looks great on all devices.",
    icon: <Palette className="h-8 w-8" />,
    color: "from-blue-500 to-indigo-500",
    benefits: [
      "User-centered design approach",
      "Mobile-first responsive layouts",
      "Brand-aligned visual identity",
      "Accessibility compliance",
    ],
  },
  {
    title: "Web Development",
    description: "Robust, scalable web applications built with cutting-edge tech.",
    details:
      "We build powerful web applications using the latest technologies like React, Next.js, and Node.js. Our development process ensures clean, maintainable code that can scale with your business.",
    icon: <Code2 className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Modern tech stack (React, Next.js)",
      "Performance optimization",
      "Scalable architecture",
      "Comprehensive testing",
    ],
  },
  {
    title: "Hosting Solutions",
    description: "Reliable, secure hosting for your website or application.",
    details:
      "Our hosting solutions provide the reliability, security, and performance your website needs. We offer managed hosting with 24/7 monitoring, automatic backups, and expert support.",
    icon: <Server className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
    benefits: [
      "99.9% uptime guarantee",
      "Automatic daily backups",
      "24/7 monitoring and support",
      "Advanced security measures",
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and search engine rankings.",
    details:
      "Our SEO experts will help your website rank higher in search results, driving more organic traffic to your business. We use data-driven strategies to optimize your content and structure.",
    icon: <BarChart className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
    benefits: [
      "Keyword research and optimization",
      "Technical SEO improvements",
      "Content strategy development",
      "Performance analytics and reporting",
    ],
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openServiceDialog = (service: Service) => {
    setSelectedService(service)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      <div className="absolute inset-0 noise z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">What we offer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive web solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border/50 rounded-lg overflow-hidden group hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${service.color} text-white`}>{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-muted-foreground">{service.details}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-4 border-t border-border/50 bg-muted/20">
                <button
                  onClick={() => openServiceDialog(service)}
                  className="inline-flex items-center text-primary hover:underline"
                >
                  Learn more about {service.title.toLowerCase()}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-6 rounded-lg bg-card border border-border/50">
            <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-6">
              We can create a tailored package to meet your specific business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Service Details Dialog */}
      {selectedService && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                <div className={`p-3 rounded-md bg-gradient-to-br ${selectedService.color} text-white`}>
                  {selectedService.icon}
                </div>
                {selectedService.title}
              </DialogTitle>
              <DialogDescription>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-muted-foreground">{selectedService.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">What We Offer</h3>
                    <p className="text-muted-foreground">{selectedService.details}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-semibold mb-2">Our Approach</h3>
                    <p className="text-muted-foreground text-sm">
                      We follow a collaborative, client-centered approach to ensure your project meets your specific
                      needs and goals. Our process includes thorough planning, regular updates, and ongoing support
                      after launch.
                    </p>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

