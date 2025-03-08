"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "@/components/Logo"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40" : "bg-background/50 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={(e) => {
                if (link.path.startsWith("#")) {
                  e.preventDefault()
                  const element = document.querySelector(link.path)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    if (link.path.startsWith("#")) {
                      e.preventDefault()
                      const element = document.querySelector(link.path)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

