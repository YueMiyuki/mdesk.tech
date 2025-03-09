"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Calendar, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const About = () => {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "story", label: "Our Story" },
    { id: "team", label: "Our Team" },
  ]

  const tabContent = {
    mission: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Empowering Digital Transformation</h3>
        <p className="text-muted-foreground">
          At mdesk.tech, we're passionate about creating exceptional digital experiences. Our mission is to empower
          businesses with cutting-edge web solutions that drive growth and success in the digital landscape.
        </p>
        <div className="space-y-4 mt-6">
          {[
            "Innovative web design and development",
            "Reliable hosting solutions",
            "Exceptional customer service",
            "Cutting-edge technology",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    story: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Our Journey</h3>
        <p className="text-muted-foreground">
          Founded in 2023, mdesk.tech began with a simple vision: to bridge the gap between complex technology and
          beautiful design. What started as a small team of passionate developers has grown into a full-service digital
          agency serving clients worldwide.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="text-3xl font-bold text-primary mb-1">2023</div>
            <div className="text-sm text-muted-foreground">Company founded</div>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Team members</div>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="text-3xl font-bold text-primary mb-1">100+</div>
            <div className="text-sm text-muted-foreground">Projects delivered</div>
          </div>
        </div>
      </div>
    ),
    team: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Meet Our Experts</h3>
        <p className="text-muted-foreground">
          Our diverse team brings together expertise in design, development, and digital strategy. We're united by our
          passion for creating exceptional digital experiences and our commitment to client success.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { role: "Design", count: 4 },
            { role: "Development", count: 6 },
            { role: "Strategy", count: 3 },
            { role: "Support", count: 2 },
          ].map((team, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg bg-card border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="text-2xl font-bold mb-1">{team.count}</div>
              <div className="text-sm text-muted-foreground">{team.role}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/about" className="inline-flex items-center text-primary hover:underline">
            Meet the full team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    ),
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/50 z-0" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-2xl" />
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYweiIvPjxwYXRoIGQ9Ik0zMCAzMGgzMHYzMEgzMHoiLz48cGF0aCBkPSJNMzAgMGgzMHYzMEgzMHoiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIvPjxwYXRoIGQ9Ik0wIDBoMzB2MzBIMHoiLz48L2c+PC9zdmc+')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">Our story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground text-lg">
            We're passionate about creating exceptional digital experiences that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-start max-w-6xl mx-auto">
          {/* Left column - 3D animated element */}
          <motion.div
            className="order-2 lg:order-1 mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Floating cards animation */}
              <div className="floating-cards-container">
                {/* Central logo card with heart */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/30 shadow-lg flex items-center justify-center">
                    <div className="heart-container">
                      <div className="heart"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Orbiting cards - first layer */}
                {[
                  { icon: <Calendar className="h-8 w-8 text-primary/80" />, delay: 0 },
                  { icon: <Users className="h-8 w-8 text-primary/80" />, delay: 2 },
                  { icon: <Award className="h-8 w-8 text-primary/80" />, delay: 4 },
                  { content: <div className="text-xl font-bold text-gradient">2023</div>, delay: 6 },
                  { content: <div className="text-xl font-bold text-gradient">100+</div>, delay: 8 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 z-10"
                    animate={{
                      x: [
                        Math.cos((index * 72 * Math.PI) / 180) * 100,
                        Math.cos(((index * 72 + 360) * Math.PI) / 180) * 100,
                      ],
                      y: [
                        Math.sin((index * 72 * Math.PI) / 180) * 100,
                        Math.sin(((index * 72 + 360) * Math.PI) / 180) * 100,
                      ],
                      rotate: [0, 360],
                      scale: [1, 1.05, 0.95, 1],
                    }}
                    transition={{
                      x: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: item.delay,
                      },
                      y: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: item.delay,
                      },
                      rotate: {
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: item.delay,
                      },
                      scale: {
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: item.delay,
                      },
                    }}
                  >
                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 shadow-lg flex items-center justify-center">
                      {item.icon || item.content}
                    </div>
                  </motion.div>
                ))}

                {/* Second layer of smaller orbiting elements */}
                {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <motion.div
                    key={`small-orbit-${index}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 z-5"
                    animate={{
                      x: [
                        Math.cos((index * 45 * Math.PI) / 180) * 140,
                        Math.cos(((index * 45 + 360) * Math.PI) / 180) * 140,
                      ],
                      y: [
                        Math.sin((index * 45 * Math.PI) / 180) * 140,
                        Math.sin(((index * 45 + 360) * Math.PI) / 180) * 140,
                      ],
                      rotate: [0, 360],
                    }}
                    transition={{
                      x: {
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: index * 0.5,
                      },
                      y: {
                        duration: 30,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        delay: index * 0.5,
                      },
                      rotate: {
                        duration: 15,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-500/10 shadow-md flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                    </div>
                  </motion.div>
                ))}

                {/* Floating text elements */}
                {[
                  { text: "Design", x: -80, y: -60, delay: 1 },
                  { text: "Develop", x: 80, y: -40, delay: 1.5 },
                  { text: "Deploy", x: -70, y: 70, delay: 2 },
                  { text: "Support", x: 60, y: 50, delay: 2.5 },
                ].map((item, index) => (
                  <motion.div
                    key={`text-${index}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-15"
                    animate={{
                      x: [item.x, item.x + 10, item.x - 5, item.x],
                      y: [item.y, item.y - 10, item.y + 5, item.y],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                  >
                    <div className="text-xs font-medium text-primary/70 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-sm">
                      {item.text}
                    </div>
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <div className="absolute inset-0 z-0">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <motion.path
                      d="M100,100 L180,130 M100,100 L150,50 M100,100 L50,50 M100,100 L20,130 M100,100 L100,190"
                      stroke="rgba(99, 102, 241, 0.2)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      fill="none"
                      animate={{
                        strokeDashoffset: [0, 100],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    {/* Additional connecting lines for second layer */}
                    <motion.path
                      d="M100,100 L200,100 M100,100 L170,170 M100,100 L100,0 M100,100 L30,170 M100,100 L0,100"
                      stroke="rgba(99, 102, 241, 0.1)"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      fill="none"
                      animate={{
                        strokeDashoffset: [0, -100],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </svg>
                </div>

                {/* Glowing center point */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/30 blur-sm z-5"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Particle effects */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-primary/40"
                    style={{
                      width: 2 + Math.random() * 4,
                      height: 2 + Math.random() * 4,
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                    }}
                    animate={{
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5 + Math.random() * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 blur-xl"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="flex border-b border-border mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 font-medium text-sm relative ${
                    activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[300px]">
              <AnimatedTabContent activeTab={activeTab} content={tabContent} />
            </div>

            {/* CTA */}
            <motion.div
              className="mt-12 p-6 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready to work with us?</h3>
                  <p className="text-muted-foreground">Let's create something amazing together.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 whitespace-nowrap"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .floating-cards-container {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 300px;
        }
        
        .heart-container {
          position: relative;
          width: 40px;
          height: 40px;
          transform: rotate(45deg);
          animation: heartbeat 1.5s infinite ease-in-out;
        }
        
        .heart {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
        }
        
        .heart:before,
        .heart:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          border-radius: 50%;
        }
        
        .heart:before {
          top: -50%;
          left: 0;
        }
        
        .heart:after {
          top: 0;
          left: -50%;
        }
        
        @keyframes heartbeat {
          0% { transform: scale(1) rotate(45deg); }
          14% { transform: scale(1.1) rotate(45deg); }
          28% { transform: scale(1) rotate(45deg); }
          42% { transform: scale(1.2) rotate(45deg); }
          70% { transform: scale(1) rotate(45deg); }
        }
      `}</style>
    </section>
  )
}

// Animated tab content with fade transition
interface TabContentProps {
  activeTab: string
  content: Record<string, React.ReactNode>
}

const AnimatedTabContent = ({ activeTab, content }: TabContentProps) => {
  return (
    <div className="relative">
      {Object.keys(content).map((key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: activeTab === key ? 1 : 0,
            x: activeTab === key ? 0 : 20,
            position: activeTab === key ? "relative" : "absolute",
            zIndex: activeTab === key ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {content[key]}
        </motion.div>
      ))}
    </div>
  )
}

export default About

