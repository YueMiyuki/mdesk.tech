"use client"

import { DialogDescription, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Code, Globe, Lock, Users, Zap, Layers } from "lucide-react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const Dialog = dynamic(() => import("@/components/ui/dialog").then((mod) => mod.Dialog), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-card/50 animate-pulse rounded-lg" />,
})

interface Feature {
  title: string
  description: string
  details: string
  icon: React.ReactNode
  color: string
  benefits: string[]
}

const features: Feature[] = [
  {
    title: "Responsive Design",
    description: "Websites that look and function perfectly on any device or screen size",
    details:
      "Our responsive design approach ensures your website adapts seamlessly to all devices - from desktops to tablets and smartphones. We use fluid grids, flexible images, and media queries to create an optimal viewing experience across all platforms.",
    icon: <Layers className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Improved user experience across all devices",
      "Higher engagement and lower bounce rates",
      "Better SEO rankings with mobile-friendly design",
      "Future-proof layouts that adapt to new screen sizes",
    ],
  },
  {
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth interactions for better user experience",
    details:
      "We optimize every aspect of your website for maximum performance. This includes code minification, image optimization, lazy loading, and implementing modern web technologies like HTTP/2 and browser caching to ensure your site loads quickly and runs smoothly.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Faster page load times and reduced server load",
      "Lower bounce rates and higher conversion rates",
      "Improved Core Web Vitals scores",
      "Better user experience on slow connections",
    ],
  },
  {
    title: "Accessibility Compliance",
    description: "Inclusive design that ensures your website is usable by everyone",
    details:
      "We build websites that follow WCAG guidelines, making them accessible to users with disabilities. This includes proper semantic HTML, keyboard navigation, screen reader compatibility, and appropriate color contrast to ensure your site is usable by everyone.",
    icon: <Users className="h-6 w-6" />,
    color: "from-orange-500 to-amber-500",
    benefits: [
      "Compliance with legal accessibility requirements",
      "Expanded audience reach and inclusivity",
      "Improved SEO through semantic markup",
      "Enhanced usability for all users",
    ],
  },
  {
    title: "SEO Fundamentals",
    description: "Built-in search engine optimization to improve your online visibility",
    details:
      "Our websites are built with SEO best practices from the ground up. We implement proper meta tags, semantic HTML, structured data, optimized images, and mobile-friendly designs to help your site rank higher in search engine results.",
    icon: <Globe className="h-6 w-6" />,
    color: "from-red-500 to-rose-500",
    benefits: [
      "Higher search engine rankings and visibility",
      "Increased organic traffic and qualified leads",
      "Improved local search presence",
      "Technical SEO foundation that supports content marketing",
    ],
  },
  {
    title: "Content Management",
    description: "Easy-to-use systems that let you update your website without technical knowledge",
    details:
      "We implement intuitive content management systems that empower you to update your website without coding knowledge. Our custom CMS solutions are tailored to your specific needs, making content updates, blog posts, and product listings simple to manage.",
    icon: <Code className="h-6 w-6" />,
    color: "from-violet-500 to-purple-500",
    benefits: [
      "Reduced dependency on developers for content updates",
      "Streamlined workflow for content creation and publishing",
      "Customized admin interfaces for your specific needs",
      "Version control and content scheduling capabilities",
    ],
  },
  {
    title: "Data Privacy & Security",
    description: "Robust protection for your website and your users' data",
    details:
      "We implement comprehensive security measures including SSL encryption, secure authentication, regular security audits, and GDPR compliance. Our approach ensures your website is protected against common vulnerabilities and your users' data remains private and secure.",
    icon: <Lock className="h-6 w-6" />,
    color: "from-pink-500 to-fuchsia-500",
    benefits: [
      "Protection against common security vulnerabilities",
      "GDPR and privacy regulation compliance",
      "Secure user authentication and data handling",
      "Regular security updates and monitoring",
    ],
  },
]

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature
  index: number
}) => {
  const [showDialog, setShowDialog] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
    }
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <>
      <div
        ref={cardRef}
        className="relative h-full cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowDialog(true)}
      >
        {/* Animated border */}
        {isHovering && (
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
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 -z-10 group-hover:opacity-20 rounded-lg" />

        <motion.div
          className="bg-card rounded-lg border border-border/50 p-6 group-hover:border-transparent group-hover:bg-black/40 transition-colors duration-300 h-full flex flex-col z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 grow">
            <div className={`p-2 rounded-md bg-linear-to-br ${feature.color} text-white`}>{feature.icon}</div>
            <div className="flex-1">
              <h3
                className={`text-xl font-semibold mb-2 transition-all duration-300 ${isHovering ? "text-gradient" : ""}`}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-2">{feature.description}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <div
              className={`text-primary inline-flex items-center transition-all duration-300 ${isHovering ? "text-gradient font-medium" : ""}`}
            >
              Learn more
              <div className={`ml-1 transition-transform duration-300 ${isHovering ? "translate-x-2" : ""}`}>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className={`p-2 rounded-md bg-linear-to-br ${feature.color} text-white`}>{feature.icon}</div>
              {feature.title}
            </DialogTitle>
            <DialogDescription>{feature.description}</DialogDescription>
          </DialogHeader>

          {/* Content outside of DialogDescription to avoid nesting issues */}
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">{feature.details}</p>

            <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="text-sm font-semibold mb-2">Key Benefits:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
      `}</style>
    </>
  )
}

const Features = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 relative overflow-hidden content-visibility: auto; contain-intrinsic-size: 0 500px;">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.1 } : { duration: 0.8 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-xs mb-4">
            <span className="text-xs font-medium text-muted-foreground">Why choose us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our development approach incorporates these essential features to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
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
      `}</style>
    </section>
  )
}

export default Features

