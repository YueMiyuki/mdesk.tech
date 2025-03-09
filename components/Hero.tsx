"use client"

import { useRef, useEffect, useMemo } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Code, Globe, Zap } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width
      const y = (clientY - top) / height

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = useMemo(() => ({ damping: 40, stiffness: 300 }), [])
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-background to-background/80 z-0" />
      <div className="absolute inset-0 grid-pattern opacity-20 z-0" />
      <div className="absolute inset-0 noise z-0" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
        style={{
          x: useTransform(xSpring, [0, 1], [-100, 100]),
          y: useTransform(ySpring, [0, 1], [-100, 100]),
        }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
        style={{
          x: useTransform(xSpring, [0, 1], [100, -100]),
          y: useTransform(ySpring, [0, 1], [100, -100]),
        }}
      />

      {/* Content */}
      <motion.div
        className="container relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{ y, opacity }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-xs mb-6"
          >
            <span className="text-xs font-medium text-muted-foreground">Cutting-edge web solutions</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Designing Your <span className="text-gradient glow-text">Digital Future</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cutting-edge web design and reliable hosting solutions for businesses that want to stand out in the digital
            landscape.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Modern</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Reliable</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <BrowserMockup />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
const BrowserMockup = () => {
  return (
    <div className="relative w-full aspect-4/3 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-border/50 backdrop-blur-xs p-4 shadow-xl">
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background/80 border-b border-border/50 rounded-t-lg flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="ml-4 h-5 w-1/2 bg-muted rounded-full text-xs flex items-center justify-center text-muted-foreground overflow-hidden">
          <span className="truncate px-2">https://mdesk.tech</span>
        </div>
      </div>

      {/* Browser content */}
      <div className="mt-8 space-y-4">
        <motion.div
          className="h-8 w-3/4 bg-muted/80 rounded-md"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.div
          className="h-4 w-1/2 bg-muted/80 rounded-md"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        <motion.div
          className="h-4 w-2/3 bg-muted/80 rounded-md"
          initial={{ width: 0 }}
          animate={{ width: "66%" }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        <div className="grid grid-cols-3 gap-3 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="aspect-video bg-muted/60 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
            />
          ))}
        </div>

        <motion.div
          className="h-20 w-full bg-linear-to-r from-indigo-500/40 to-purple-500/40 rounded-md mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="h-full flex items-center justify-center">
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="h-4 w-4 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
          <Code className="h-6 w-6 text-primary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
          <Globe className="h-8 w-8 text-primary" />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero

