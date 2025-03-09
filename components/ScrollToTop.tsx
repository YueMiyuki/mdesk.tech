"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Use requestAnimationFrame for smoother scrolling
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(scrollToTop)
  }, [pathname, isMounted])

  return null
}

