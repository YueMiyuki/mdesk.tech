"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, Globe } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
              <span className="text-xs font-medium text-muted-foreground">Our story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>

            <p className="text-muted-foreground mb-6">
              At mdesk.tech, we're passionate about creating exceptional digital experiences. Our mission is to empower
              businesses with cutting-edge web solutions that drive growth and success in the digital landscape.
            </p>

            <p className="text-muted-foreground mb-8">
              Founded in 2023, our commitment to innovation, quality, and customer satisfaction sets us apart in the
              industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: <Calendar className="h-5 w-5" />, label: "Founded", value: "2023" },
                { icon: <Users className="h-5 w-5" />, label: "Team Members", value: "15+" },
                { icon: <Award className="h-5 w-5" />, label: "Projects", value: "100+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg bg-card border border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 rounded-full bg-primary/10 text-primary mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Animated background gradients */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute inset-10 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [0, -10, 0],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Main container with glass effect */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 backdrop-blur-sm">
                {/* Animated grid pattern */}
                <motion.div
                  className="absolute inset-0 grid-pattern opacity-20"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Animated grid of cards */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-5">
                  {/* Central animated element */}
                  <motion.div
                    className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Circular arrangement of cards */}
                  <div className="relative w-full h-full">
                    {[0, 1, 2, 3, 4, 5].map((i) => {
                      const angle = i * 60 * (Math.PI / 180)
                      const radius = 40 // % of container
                      const x = 50 + radius * Math.cos(angle)
                      const y = 50 + radius * Math.sin(angle)

                      return (
                        <motion.div
                          key={i}
                          className="absolute w-16 h-16 rounded-lg overflow-hidden bg-muted/30 backdrop-blur-sm border border-border/30"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.1,
                            borderColor: "rgba(99, 102, 241, 0.5)",
                            zIndex: 10,
                          }}
                        >
                          <motion.div
                            className="w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
                            animate={{
                              background: [
                                "linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
                                "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1))",
                                "linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
                              ],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: i * 2,
                            }}
                          />
                        </motion.div>
                      )
                    })}

                    {/* Animated connecting lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                      <motion.path
                        d="M50,10 L50,90 M10,50 L90,50 M25,25 L75,75 M25,75 L75,25"
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
                        style={{
                          transformOrigin: "center",
                          vectorEffect: "non-scaling-stroke",
                        }}
                      />
                    </svg>
                  </div>
                </div>
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

              {/* Additional floating element */}
              <motion.div
                className="absolute top-1/2 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 blur-xl"
                animate={{
                  x: [0, 10, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

