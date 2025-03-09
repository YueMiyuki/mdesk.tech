"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Code2, Server, BarChart, Check, ChevronRight, Sparkles, Layers, Zap } from "lucide-react"
import Link from "next/link"

interface ServiceFeature {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServicePlan {
  name: string
  description: string
  features: string[]
  popular?: boolean
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface Service {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  icon: React.ReactNode
  color: string
  gradient: string
  features: ServiceFeature[]
  plans: ServicePlan[]
  process: ProcessStep[]
}

const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    shortDescription: "Custom, responsive designs tailored to your brand.",
    longDescription:
      "Our design team creates beautiful, intuitive interfaces that reflect your brand identity and engage your users. We focus on responsive design, ensuring your website looks great on all devices.",
    icon: <Palette className="h-8 w-8" />,
    color: "text-blue-400",
    gradient: "from-blue-500 to-indigo-500",
    features: [
      {
        title: "User-Centered Design",
        description:
          "We create designs that prioritize your users' needs and goals, resulting in intuitive and engaging experiences.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "Responsive Layouts",
        description:
          "Our designs adapt seamlessly to all screen sizes, ensuring a consistent experience across devices.",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Brand Integration",
        description:
          "We carefully incorporate your brand elements to create a cohesive and recognizable digital presence.",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
    plans: [
      {
        name: "Essential",
        description: "Perfect for small businesses looking to establish an online presence",
        features: [
          "Custom responsive design",
          "Up to 5 pages",
          "Basic SEO optimization",
          "Contact form integration",
          "Mobile-friendly design",
        ],
      },
      {
        name: "Professional",
        description: "Ideal for growing businesses with more complex needs",
        popular: true,
        features: [
          "Everything in Essential",
          "Up to 10 pages",
          "Advanced animations",
          "Interactive elements",
          "Custom illustrations",
          "Advanced SEO optimization",
        ],
      },
      {
        name: "Enterprise",
        description: "Comprehensive solution for large businesses with complex requirements",
        features: [
          "Everything in Professional",
          "Unlimited pages",
          "Custom web applications",
          "Advanced user interactions",
          "Conversion optimization",
          "Ongoing design support",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Research",
        description:
          "We start by understanding your brand, target audience, and business goals to inform our design decisions.",
      },
      {
        step: "02",
        title: "Wireframing",
        description:
          "We create wireframes to establish the layout and structure of your website before adding visual elements.",
      },
      {
        step: "03",
        title: "Visual Design",
        description: "Our designers create stunning visual mockups that bring your brand to life in the digital space.",
      },
      {
        step: "04",
        title: "Prototyping",
        description:
          "We build interactive prototypes to test user flows and gather feedback before development begins.",
      },
      {
        step: "05",
        title: "Refinement",
        description:
          "Based on feedback, we refine the design to ensure it meets both user needs and business objectives.",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Robust, scalable web applications built with cutting-edge tech.",
    longDescription:
      "We build powerful web applications using the latest technologies like React, Next.js, and Node.js. Our development process ensures clean, maintainable code that can scale with your business.",
    icon: <Code2 className="h-8 w-8" />,
    color: "text-indigo-400",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      {
        title: "Modern Tech Stack",
        description:
          "We use the latest technologies like React, Next.js, and Node.js to build fast, scalable applications.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "Performance Optimization",
        description: "Our applications are optimized for speed and efficiency, providing a smooth user experience.",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Scalable Architecture",
        description: "We build with growth in mind, ensuring your application can scale as your business expands.",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
    plans: [
      {
        name: "Starter",
        description: "Basic web development for small projects",
        features: [
          "Static website development",
          "Basic CMS integration",
          "Contact form functionality",
          "Responsive development",
          "Cross-browser compatibility",
        ],
      },
      {
        name: "Advanced",
        description: "Dynamic websites with more complex functionality",
        popular: true,
        features: [
          "Everything in Starter",
          "Custom CMS development",
          "User authentication",
          "Database integration",
          "API development",
          "Payment gateway integration",
        ],
      },
      {
        name: "Custom",
        description: "Full-scale web applications with complex requirements",
        features: [
          "Everything in Advanced",
          "Custom web application",
          "Third-party API integrations",
          "Real-time features",
          "Advanced security measures",
          "Ongoing development support",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements Analysis",
        description: "We gather detailed technical requirements and define the scope of your project.",
      },
      {
        step: "02",
        title: "Architecture Planning",
        description: "Our engineers design a robust architecture that ensures scalability and performance.",
      },
      {
        step: "03",
        title: "Development",
        description: "We write clean, efficient code following industry best practices and coding standards.",
      },
      {
        step: "04",
        title: "Testing & QA",
        description: "Rigorous testing across multiple devices and browsers ensures your application works flawlessly.",
      },
      {
        step: "05",
        title: "Deployment",
        description: "We deploy your application to production with continuous integration and delivery pipelines.",
      },
      {
        step: "06",
        title: "Maintenance & Support",
        description:
          "Our team provides ongoing maintenance, updates, and support to keep your application running smoothly.",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting Solutions",
    shortDescription: "Reliable, secure hosting for your website or application.",
    longDescription:
      "Our hosting solutions provide the reliability, security, and performance your website needs. We offer managed hosting with 24/7 monitoring, automatic backups, and expert support.",
    icon: <Server className="h-8 w-8" />,
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-500",
    features: [
      {
        title: "99.9% Uptime Guarantee",
        description: "We ensure your website is always available with our reliable hosting infrastructure.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "Automatic Backups",
        description: "Your data is safe with regular automated backups, protecting against data loss.",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Advanced Security",
        description: "We implement robust security measures to protect your website from threats.",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
    plans: [
      {
        name: "Basic",
        description: "Affordable hosting for small websites",
        features: [
          "Shared hosting environment",
          "5GB storage",
          "Unlimited bandwidth",
          "Free SSL certificate",
          "Daily backups",
          "Email accounts",
        ],
      },
      {
        name: "Business",
        description: "Optimized hosting for business websites",
        popular: true,
        features: [
          "VPS hosting",
          "20GB SSD storage",
          "Unlimited bandwidth",
          "Free SSL certificate",
          "Daily backups",
          "CDN integration",
          "Advanced security features",
        ],
      },
      {
        name: "Premium",
        description: "High-performance hosting for demanding applications",
        features: [
          "Dedicated server",
          "100GB SSD storage",
          "Unlimited bandwidth",
          "Free SSL certificate",
          "Hourly backups",
          "Global CDN",
          "DDoS protection",
          "24/7 priority support",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Assessment",
        description: "We evaluate your current setup and requirements to recommend the optimal hosting solution.",
      },
      {
        step: "02",
        title: "Server Configuration",
        description: "Our team configures your server with the necessary software and security measures.",
      },
      {
        step: "03",
        title: "Migration",
        description:
          "We handle the migration of your website or application to our hosting platform with minimal downtime.",
      },
      {
        step: "04",
        title: "Security Setup",
        description: "We implement firewalls, SSL certificates, and other security measures to protect your data.",
      },
      {
        step: "05",
        title: "Monitoring Implementation",
        description: "We set up 24/7 monitoring systems to alert us of any issues before they affect your users.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO Optimization",
    shortDescription: "Improve your online visibility and search engine rankings.",
    longDescription:
      "Our SEO experts will help your website rank higher in search results, driving more organic traffic to your business. We use data-driven strategies to optimize your content and structure.",
    icon: <BarChart className="h-8 w-8" />,
    color: "text-pink-400",
    gradient: "from-pink-500 to-rose-500",
    features: [
      {
        title: "Keyword Research",
        description: "We identify the most valuable keywords for your business to target in your content.",
        icon: <Layers className="h-5 w-5" />,
      },
      {
        title: "On-Page Optimization",
        description: "We optimize your website's structure and content to improve search engine rankings.",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "Performance Analytics",
        description: "We provide detailed reports on your website's performance and search engine rankings.",
        icon: <Sparkles className="h-5 w-5" />,
      },
    ],
    plans: [
      {
        name: "Basic SEO",
        description: "Essential SEO services for small businesses",
        features: [
          "Keyword research",
          "On-page optimization",
          "Meta tag optimization",
          "Google My Business setup",
          "Monthly reporting",
        ],
      },
      {
        name: "Comprehensive",
        description: "Advanced SEO strategy for growing businesses",
        popular: true,
        features: [
          "Everything in Basic SEO",
          "Content strategy",
          "Link building",
          "Technical SEO audit",
          "Competitor analysis",
          "Local SEO optimization",
          "Bi-weekly reporting",
        ],
      },
      {
        name: "Enterprise",
        description: "Full-scale SEO campaign for maximum results",
        features: [
          "Everything in Comprehensive",
          "Advanced content marketing",
          "Authority building",
          "E-commerce SEO",
          "International SEO",
          "Custom dashboard",
          "Weekly reporting and strategy calls",
        ],
      },
    ],
    process: [
      {
        step: "01",
        title: "SEO Audit",
        description: "We conduct a comprehensive audit of your website to identify opportunities for improvement.",
      },
      {
        step: "02",
        title: "Keyword Strategy",
        description: "Our team researches and identifies the most valuable keywords for your business and industry.",
      },
      {
        step: "03",
        title: "On-Page Optimization",
        description:
          "We optimize your website's content, meta tags, and structure to improve search engine visibility.",
      },
      {
        step: "04",
        title: "Content Development",
        description:
          "We create high-quality, SEO-friendly content that engages users and ranks well in search results.",
      },
      {
        step: "05",
        title: "Link Building",
        description: "We build high-quality backlinks to increase your website's authority and improve rankings.",
      },
      {
        step: "06",
        title: "Monitoring & Reporting",
        description: "We continuously monitor your rankings and provide detailed reports on your SEO performance.",
      },
    ],
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const service = services.find((s) => s.id === activeService) || services[0]
  const [activeTab, setActiveTab] = useState("general")

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

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((s) => (
            <motion.button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeService === s.id
                  ? `bg-gradient-to-r ${s.gradient} text-white`
                  : "bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {s.icon}
              {s.title}
            </motion.button>
          ))}
        </div>

        {/* Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white mb-6`}
                >
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{service.longDescription}</p>

                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`mt-1 p-1.5 rounded-md bg-gradient-to-br ${service.gradient} text-white`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Decorative elements */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 blur-xl rounded-2xl`}
                />

                <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8 overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

                  <h3 className="text-xl font-bold mb-6">Choose Your Plan</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.plans.map((plan, index) => (
                      <div
                        key={index}
                        className={`relative p-5 rounded-lg border ${
                          plan.popular
                            ? `border-gradient-br-${service.gradient} bg-gradient-to-br from-${service.gradient.split(" ")[0]}/5 to-${service.gradient.split(" ")[2]}/5`
                            : "border-border/50 bg-card/30"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            Popular
                          </div>
                        )}
                        <h4 className="text-lg font-semibold mb-2">{plan.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          className={`w-full py-2 rounded-md text-sm font-medium transition-colors ${
                            plan.popular
                              ? `bg-gradient-to-r ${service.gradient} text-white hover:opacity-90`
                              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          }`}
                        >
                          Get Started
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Our {service.title} Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We follow a structured approach to deliver exceptional results for your {service.title.toLowerCase()}{" "}
                  needs.
                </p>
              </div>

              <div className="relative max-w-5xl mx-auto">
                {/* Process steps */}
                <div className="relative z-10">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-8 mb-12 last:mb-0 ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Step number */}
                      <div className="flex-shrink-0 relative">
                        <div
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white font-bold text-xl relative z-10`}
                        >
                          {step.step}
                        </div>
                        {/* Connecting line */}
                        {index !== service.process.length - 1 && (
                          <div
                            className={`absolute w-px bg-gradient-to-b from-indigo-500/50 to-purple-500/50 ${
                              index % 2 === 0 ? "left-8" : "right-8"
                            } top-16 h-24`}
                          />
                        )}
                      </div>

                      {/* Step content */}
                      <div className={`flex-1 pt-3 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 relative">
                          {/* Decorative gradient */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-lg`}
                          />
                          <div className="relative z-10">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Background decorative elements */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/4 -left-20 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Get answers to common questions about our {service.title.toLowerCase()} services.
                </p>
              </div>

              <div className="w-full">
                <div className="flex space-x-1 rounded-lg bg-muted p-1 mb-8">
                  <button
                    onClick={() => setActiveTab("general")}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "general"
                        ? "bg-background text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    General Questions
                  </button>
                  <button
                    onClick={() => setActiveTab("technical")}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === "technical"
                        ? "bg-background text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Technical Details
                  </button>
                </div>

                <div className="space-y-4">
                  {activeTab === "general" &&
                    service.id === "web-design" &&
                    [
                      {
                        question: "How long does it take to design a website?",
                        answer:
                          "The timeline for a website design project typically ranges from 2-8 weeks, depending on the complexity and scope. A simple 5-page website might take 2-3 weeks, while a more complex site with custom features could take 6-8 weeks or more.",
                      },
                      {
                        question: "Do you provide website maintenance after the design is complete?",
                        answer:
                          "Yes, we offer website maintenance packages to keep your site updated, secure, and performing optimally. Our maintenance services include regular updates, security monitoring, content updates, and technical support.",
                      },
                      {
                        question: "Will my website be mobile-friendly?",
                        answer:
                          "Absolutely! All our designs are fully responsive and optimized for all devices, including smartphones, tablets, and desktops. We follow a mobile-first approach to ensure your site looks and functions perfectly regardless of screen size.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "general" &&
                    service.id === "web-development" &&
                    [
                      {
                        question: "What technologies do you use for web development?",
                        answer:
                          "We specialize in modern web technologies including React, Next.js, Node.js, and TypeScript. For content management, we work with headless CMS solutions like Sanity, Contentful, and Strapi. Our tech stack is always chosen based on your specific project requirements.",
                      },
                      {
                        question: "How do you handle project management during development?",
                        answer:
                          "We follow an Agile development methodology with regular sprints and check-ins. You'll have access to a project management tool where you can track progress, provide feedback, and communicate with our team throughout the development process.",
                      },
                      {
                        question: "Do you provide documentation for the code you write?",
                        answer:
                          "Yes, we provide comprehensive documentation for all our development projects. This includes code comments, API documentation, deployment instructions, and user guides to ensure your team can maintain and extend the application in the future.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "general" &&
                    service.id === "hosting" &&
                    [
                      {
                        question: "What type of hosting do you provide?",
                        answer:
                          "We offer various hosting solutions including shared hosting, VPS (Virtual Private Server), dedicated servers, and cloud hosting. We'll recommend the best option based on your website's requirements, expected traffic, and budget.",
                      },
                      {
                        question: "How do you handle website backups?",
                        answer:
                          "We perform automated daily backups of your website files and database. These backups are stored securely off-site and retained for 30 days. In case of any issues, we can quickly restore your website to a previous working state.",
                      },
                      {
                        question: "What kind of uptime can I expect?",
                        answer:
                          "We guarantee a 99.9% uptime for all our hosting services. Our infrastructure is built on reliable cloud providers with redundancy across multiple data centers. We continuously monitor all servers and can quickly address any issues that arise.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "general" &&
                    service.id === "seo" &&
                    [
                      {
                        question: "How long does it take to see results from SEO?",
                        answer:
                          "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline depends on factors like your website's current state, competition in your industry, and the aggressiveness of your SEO campaign.",
                      },
                      {
                        question: "Do you guarantee first-page rankings?",
                        answer:
                          "We don't guarantee specific rankings as search engines constantly update their algorithms. However, we do guarantee that we'll follow SEO best practices and implement proven strategies to improve your visibility and organic traffic over time.",
                      },
                      {
                        question: "What reports will I receive to track SEO progress?",
                        answer:
                          "You'll receive comprehensive monthly reports showing key metrics like keyword rankings, organic traffic, conversion rates, and backlink profiles. We also provide actionable insights and recommendations based on the data to continuously improve your SEO performance.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "technical" &&
                    service.id === "web-design" &&
                    [
                      {
                        question: "What design tools do you use?",
                        answer:
                          "Our designers primarily work with industry-standard tools like Figma for UI/UX design, Adobe Creative Suite for graphic design, and Framer for interactive prototypes. These tools allow for efficient collaboration and seamless handoff to development.",
                      },
                      {
                        question: "Do you create custom illustrations or use stock images?",
                        answer:
                          "We can do both depending on your needs and budget. We have talented illustrators who can create custom graphics for your site, but we also have access to premium stock image libraries if that better suits your project requirements.",
                      },
                      {
                        question: "How do you ensure accessibility in your designs?",
                        answer:
                          "We follow WCAG 2.1 guidelines to ensure our designs are accessible to all users. This includes considerations for color contrast, text size, keyboard navigation, screen reader compatibility, and other accessibility best practices.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "technical" &&
                    service.id === "web-development" &&
                    [
                      {
                        question: "How do you handle website performance optimization?",
                        answer:
                          "We implement various performance optimization techniques including code splitting, lazy loading, image optimization, caching strategies, and server-side rendering where appropriate. We aim for a Lighthouse performance score of 90+ on all our projects.",
                      },
                      {
                        question: "What security measures do you implement?",
                        answer:
                          "We follow security best practices including input validation, proper authentication and authorization, protection against XSS and CSRF attacks, secure data storage, and regular security updates. We also perform security audits before launching any application.",
                      },
                      {
                        question: "Can you integrate with third-party services and APIs?",
                        answer:
                          "Yes, we have extensive experience integrating with various third-party services and APIs including payment gateways, CRM systems, marketing automation tools, social media platforms, and custom enterprise systems.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "technical" &&
                    service.id === "hosting" &&
                    [
                      {
                        question: "What server specifications do you provide?",
                        answer:
                          "Our server specifications vary based on the hosting plan. Our VPS plans typically include multi-core CPUs, SSD storage, and at least 2GB RAM. Dedicated servers offer higher specifications with up to 32 CPU cores, 64GB RAM, and 1TB SSD storage.",
                      },
                      {
                        question: "How do you handle server security?",
                        answer:
                          "We implement multiple layers of security including firewalls, intrusion detection systems, malware scanning, and DDoS protection. We also perform regular security updates and patches to protect against vulnerabilities.",
                      },
                      {
                        question: "Do you offer CDN integration?",
                        answer:
                          "Yes, all our hosting plans include integration with a global Content Delivery Network (CDN) to ensure fast loading times for your visitors regardless of their location. This also provides additional protection against DDoS attacks.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}

                  {activeTab === "technical" &&
                    service.id === "seo" &&
                    [
                      {
                        question: "How do you approach technical SEO?",
                        answer:
                          "Our technical SEO approach includes site structure optimization, XML sitemaps, robots.txt configuration, schema markup implementation, page speed optimization, mobile-friendliness improvements, and fixing crawl errors and broken links.",
                      },
                      {
                        question: "What link building strategies do you use?",
                        answer:
                          "We use white-hat link building strategies including content marketing, guest posting on relevant sites, resource link building, broken link building, and digital PR. We focus on quality over quantity to build a natural and authoritative backlink profile.",
                      },
                      {
                        question: "How do you handle algorithm updates?",
                        answer:
                          "We continuously monitor search engine algorithm updates and adjust our strategies accordingly. Our focus on ethical, white-hat SEO practices means our clients are less vulnerable to algorithm penalties. If an update does impact rankings, we quickly analyze and implement necessary changes.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                <div className="bg-background rounded-lg px-8 py-10">
                  <h2 className="text-3xl font-bold mb-4">
                    {service.id === "web-design" && "Ready to transform your digital presence?"}
                    {service.id === "web-development" && "Ready to build something amazing?"}
                    {service.id === "hosting" && "Ready for reliable, secure hosting?"}
                    {service.id === "seo" && "Ready to improve your search rankings?"}
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {service.id === "web-design" &&
                      "Let's create a stunning website that captures your brand essence and engages your audience. Our design team is ready to bring your vision to life."}
                    {service.id === "web-development" &&
                      "Our development team is ready to build a powerful, scalable web application that meets your business needs and exceeds your expectations."}
                    {service.id === "hosting" &&
                      "Ensure your website is always online, secure, and performing at its best with our reliable hosting solutions tailored to your specific needs."}
                    {service.id === "seo" &&
                      "Our SEO experts are ready to help you climb the search rankings and drive more organic traffic to your website with proven, data-driven strategies."}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:opacity-90"
                  >
                    {service.id === "web-design" && "Start Your Design Project"}
                    {service.id === "web-development" && "Start Your Development Project"}
                    {service.id === "hosting" && "Get Hosting Solutions"}
                    {service.id === "seo" && "Boost Your Rankings"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

