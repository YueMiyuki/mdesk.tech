"use client"

import { motion } from "framer-motion"
import Logo from "@/components/Logo"
import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:hello@mdesk.tech", label: "Email" },
  ]

  return (
    <footer className="border-t border-border/40 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 noise z-0 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-md">
              Designing and hosting your digital future with cutting-edge web solutions that drive growth and success.
            </p>

            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-muted/30 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "#services", isScroll: true },
                { name: "About", href: "#about", isScroll: true },
                { name: "Contact", href: "#contact", isScroll: true },
              ].map((link, index) => (
                <li key={index}>
                  {link.isScroll ? (
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.href.substring(1))
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <a href="mailto:hello@mdesk.tech" className="hover:text-primary transition-colors">
                  hello@mdesk.tech
                </a>
              </li>
              <li className="text-muted-foreground">
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} mdesk.tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

