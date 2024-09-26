import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gray-900 text-gray-100">
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}