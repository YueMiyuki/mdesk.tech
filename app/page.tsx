import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Services from "@/components/Services"
import About from "@/components/About"
import Contact from "@/components/Contact"
import PerformanceOptimizer from "@/components/PerformanceOptimizer"
import LcpOptimizer from "@/components/LcpOptimizer"

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <LcpOptimizer />
      <PerformanceOptimizer />
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

