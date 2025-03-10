"use client"

import { useEffect, useRef } from "react"
import { preloadCriticalResources, optimizeLcpElement } from "@/lib/performance-utils"

// Define the LCP entry type
interface LargestContentfulPaintEntry extends PerformanceEntry {
  element: Element | null
  size: number
  startTime: number
  renderTime: number
  loadTime: number
  url?: string
  id?: string
}

export default function LcpOptimizer() {
  const optimized = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || optimized.current) return
    optimized.current = true

    // Preload critical resources
    preloadCriticalResources()

    // Optimize LCP element immediately
    optimizeLcpElement()

    // Register a PerformanceObserver to identify the actual LCP element
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        if (entries.length > 0) {
          // Cast to the correct type
          const lcpEntry = entries[entries.length - 1] as LargestContentfulPaintEntry
          console.debug("LCP element:", lcpEntry)

          // Now TypeScript knows lcpEntry.element exists
          if (lcpEntry.element && lcpEntry.element instanceof HTMLElement) {
            lcpEntry.element.setAttribute("data-lcp-element", "true")
            optimizeLcpElement() // Re-optimize with the confirmed LCP element
          }

          lcpObserver.disconnect()
        }
      })

      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
    }

    // Pre-allocate space for layout elements to prevent shifts
    const preAllocateSpace = () => {
      // Pre-allocate space for the grid pattern
      const gridPattern = document.querySelector(".grid-pattern")
      if (gridPattern instanceof HTMLElement) {
        gridPattern.style.height = "100%"
        gridPattern.style.width = "100%"
        gridPattern.style.position = "absolute"
        gridPattern.style.top = "0"
        gridPattern.style.left = "0"
        gridPattern.style.contain = "strict"

        // Use inline SVG as background to avoid network request
        const svgBackground = `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='rgba(255,255,255,0.05)' strokeWidth='1'/%3E%3C/svg%3E")`
        gridPattern.style.backgroundImage = svgBackground
        gridPattern.style.backgroundSize = "40px 40px"
      }

      // Pre-allocate space for the hero section
      const heroSection = document.querySelector("section")
      if (heroSection instanceof HTMLElement) {
        heroSection.style.minHeight = "100vh"
        heroSection.style.contain = "layout size"
      }
    }

    preAllocateSpace()

    // Optimize font display
    const optimizeFonts = () => {
      // Add font-display: swap to all font faces
      const style = document.createElement("style")
      style.textContent = `
        @font-face {
          font-display: swap !important;
        }
      `
      document.head.appendChild(style)
    }

    optimizeFonts()

    // Reduce JavaScript execution before LCP
    const optimizeJsExecution = () => {
      // Defer non-critical animations
      const deferAnimations = () => {
        // Add a class to the body to indicate that animations should be deferred
        document.body.classList.add("defer-animations")

        // After LCP, remove the class to enable animations
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(() => {
            document.body.classList.remove("defer-animations")
          })
        } else {
          setTimeout(() => {
            document.body.classList.remove("defer-animations")
          }, 1000) // Fallback for browsers without requestIdleCallback
        }
      }

      deferAnimations()
    }

    optimizeJsExecution()

    // Add resource hints for external domains
    const addResourceHints = () => {
      const domains = [
        { domain: "https://fonts.googleapis.com", rel: "preconnect" },
        { domain: "https://fonts.gstatic.com", rel: "preconnect", crossOrigin: "anonymous" },
      ]

      domains.forEach(({ domain, rel, crossOrigin }) => {
        if (!document.querySelector(`link[rel="${rel}"][href="${domain}"]`)) {
          const link = document.createElement("link")
          link.rel = rel
          link.href = domain
          if (crossOrigin) link.crossOrigin = crossOrigin
          document.head.appendChild(link)
        }
      })
    }

    addResourceHints()

    // Delay non-critical JavaScript
    const delayNonCriticalJS = () => {
      // Find all non-critical scripts
      document.querySelectorAll('script:not([data-priority="high"])').forEach((script) => {
        if (
          script instanceof HTMLScriptElement &&
          script.src &&
          !script.src.includes("chunk") &&
          !script.src.includes("main")
        ) {
          script.setAttribute("defer", "")
          script.setAttribute("async", "")
        }
      })
    }

    delayNonCriticalJS()
  }, [])

  return null
}

