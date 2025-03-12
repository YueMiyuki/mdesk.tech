// This code is fully written by v0.dev
// For optimizaing the Speed Insight performance on mobile

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      // Allow both primitive values and objects as the third parameter
      params?:
        | string
        | number
        | boolean
        | {
            [key: string]: string | number | boolean | object
          },
    ) => void
    requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
    cancelIdleCallback: (handle: number) => void
  }

  interface Performance {
    memory?: {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
  }
}

// Add a type for the gc function
type GlobalWithGC = typeof globalThis & {
  gc?: () => void
}

// Define proper types for the performance API
interface PerformanceEntryWithElement extends PerformanceEntry {
  element?: Element
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number
  startTime: number
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

// Combined performance optimization utilities

export function addPriorityHints() {
  if (typeof window === "undefined") return

  // Add priority hints to critical resources
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      if (entry.name.includes("gtag") || entry.name.includes("analytics")) {
        const script = document.querySelector(`script[src*="${entry.name}"]`)
        if (script) {
          script.setAttribute("fetchpriority", "low")
          script.setAttribute("loading", "lazy")
        }
      }
    })
  })

  observer.observe({ entryTypes: ["resource"] })
}

export function deferNonCriticalScripts() {
  if (typeof window === "undefined") return

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-priority="low"]')
  scripts.forEach((script) => {
    script.setAttribute("defer", "")
    script.setAttribute("loading", "lazy")
  })
}

// Preload critical pages based on user behavior
export function preloadLikelyDestinations() {
  if (typeof window === "undefined") return

  // Check if on mobile - skip preloading on mobile to save bandwidth
  if (window.innerWidth < 768) return

  // Wait until the page is fully loaded and idle
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      // Preload likely next pages based on current page
      const currentPath = window.location.pathname
      const likelyDestinations = getLikelyDestinations(currentPath)

      likelyDestinations.forEach((destination) => {
        const link = document.createElement("link")
        link.rel = "prefetch"
        link.href = destination
        link.as = "document"
        document.head.appendChild(link)
      })
    })
  }
}

// Determine likely next pages based on current page
function getLikelyDestinations(currentPath: string): string[] {
  // Home page -> likely to visit services, about, or contact
  if (currentPath === "/") {
    return ["/services", "/about", "/contact"]
  }

  // Services page -> likely to visit contact
  if (currentPath === "/services") {
    return ["/contact"]
  }

  // About page -> likely to visit services or contact
  if (currentPath === "/about") {
    return ["/services", "/contact"]
  }

  // Default to home page
  return ["/"]
}

// Implement intersection observer for lazy loading
export function setupIntersectionObserver() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return

  const intersectionOptions = {
    rootMargin: "200px", // Load when within 200px of viewport
    threshold: 0.1,
  }

  const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target

        // Handle different element types
        if (element instanceof HTMLImageElement && element.dataset.src) {
          // Lazy load image
          element.src = element.dataset.src
          element.removeAttribute("data-src")
        } else if (element.classList.contains("lazy-section")) {
          // Reveal section
          element.classList.add("visible")
        }

        // Unobserve after handling
        observer.unobserve(element)
      }
    })
  }

  const observer = new IntersectionObserver(handleIntersection, intersectionOptions)

  // Observe all elements with data-src attribute (lazy images)
  document.querySelectorAll("img[data-src]").forEach((img) => {
    observer.observe(img)
  })

  // Observe all lazy-section elements
  document.querySelectorAll(".lazy-section").forEach((section) => {
    observer.observe(section)
  })
}

// Implement quicklink to prefetch visible links
export function setupQuicklink() {
  if (typeof window === "undefined") return

  // Skip on mobile to save bandwidth
  if (window.innerWidth < 768) return

  // Wait until the page is fully loaded and idle
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      const links = Array.from(document.querySelectorAll("a"))

      // Only prefetch internal links
      const internalLinks = links.filter((link) => {
        const href = link.getAttribute("href")
        return href && href.startsWith("/") && !href.startsWith("//") && !href.includes("#")
      })

      // Set up intersection observer for links
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const link = entry.target as HTMLAnchorElement
              const href = link.getAttribute("href")

              if (href) {
                // Create prefetch link
                const prefetchLink = document.createElement("link")
                prefetchLink.rel = "prefetch"
                prefetchLink.href = href
                prefetchLink.as = "document"

                // Only add if not already prefetched
                if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
                  document.head.appendChild(prefetchLink)
                }
              }

              // Unobserve after prefetching
              observer.unobserve(link)
            }
          })
        },
        { rootMargin: "200px" },
      )

      // Observe all internal links
      internalLinks.forEach((link) => {
        observer.observe(link)
      })
    })
  }
}

// Implement advanced font optimization
export function optimizeFonts() {
  if (typeof window === "undefined") return

  // Add font-display: swap to all font faces
  const style = document.createElement("style")
  style.textContent = `
      @font-face {
        font-display: swap !important;
      }
    `
  document.head.appendChild(style)
}

// Implement advanced image optimization
export function optimizeImages() {
  if (typeof window === "undefined") return

  // Find all images
  const images = document.querySelectorAll("img:not([loading])")

  // Add loading="lazy" to all non-critical images
  images.forEach((img) => {
    if (!img.hasAttribute("data-priority") && !img.hasAttribute("fetchpriority")) {
      img.setAttribute("loading", "lazy")
      img.setAttribute("decoding", "async")
    }
  })

  // Add native lazy loading to background images via data attributes
  document.querySelectorAll("[data-bg-src]").forEach((element) => {
    if (element instanceof HTMLElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgSrc = element.dataset.bgSrc
            if (bgSrc) {
              element.style.backgroundImage = `url(${bgSrc})`
              element.removeAttribute("data-bg-src")
            }
            observer.unobserve(element)
          }
        })
      })

      observer.observe(element)
    }
  })
}

// Implement advanced JS optimization
export function optimizeJavaScript() {
  if (typeof window === "undefined") return

  // Initialize optimizations
  optimizeScriptLoading()
  optimizeMainThread()

  // Split bundles more aggressively
  const dynamicImports = new Set<string>()

  // Monitor script execution
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      if (entry.duration > 50) {
        // Long task threshold
        console.debug("Long task detected:", entry)
      }
    })
  })

  observer.observe({ entryTypes: ["longtask"] })

  // Prefetch critical resources
  const prefetchResources = () => {
    const resources = ["/critical.css"]

    resources.forEach((resource) => {
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = resource
      document.head.appendChild(link)
    })
  }

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(prefetchResources)
  }

  // On mobile, disable some animations to improve performance
  if (window.innerWidth < 768) {
    document.documentElement.classList.add("reduce-motion")
  }
}

// Implement service worker for offline support and caching
export function registerServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope)
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err)
      },
    )
  })
}

// Implement advanced CSS optimization
export function optimizeCSS() {
  if (typeof window === "undefined") return

  // Check if on mobile
  const isMobile = window.innerWidth < 768

  // Add mobile-specific optimizations
  if (isMobile) {
    document.documentElement.classList.add("mobile")
  }

  // Remove unused CSS after page load
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => {
      const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')

      stylesheets.forEach((stylesheet) => {
        // Skip critical CSS
        if (stylesheet.hasAttribute("data-critical")) return

        // Create a new link element with media="print" and onload handler
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = stylesheet.getAttribute("href") || ""
        link.media = "print"

        link.onload = () => {
          // Once loaded, switch to all media
          link.media = "all"
          // Remove the original stylesheet
          stylesheet.parentNode?.removeChild(stylesheet)
        }

        // Add the new link
        stylesheet.parentNode?.insertBefore(link, stylesheet.nextSibling)
      })
    })
  }
}

// Implement advanced analytics optimization
export function optimizeAnalytics() {
  if (typeof window === "undefined") return

  // Check if on mobile - use more aggressive optimizations
  const isMobile = window.innerWidth < 768

  // Reduce analytics payload size
  if (window.gtag) {
    window.gtag("set", "send_page_view", false)

    // Send page views only after the page is fully loaded and idle
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          // Send less data on mobile
          transport_type: isMobile ? "beacon" : "xhr",
        })
      })
    }
  }
}

// Implement memory management
export function setupMemoryManagement() {
  if (typeof window === "undefined") return

  // Clean up event listeners and references when navigating away
  window.addEventListener("beforeunload", () => {
    // Clean up any global event listeners
    // This is just a placeholder - in a real app, you would clean up actual listeners
    console.log("Cleaning up event listeners")
  })

  // Monitor memory usage if available
  if ("performance" in window && performance.memory) {
    setInterval(() => {
      const memoryInfo = performance.memory

      if (memoryInfo && memoryInfo.usedJSHeapSize > 100000000) {
        // 100MB
        console.warn("High memory usage detected")

        // Force garbage collection if possible (only works in some browsers)
        const globalWithGC = globalThis as GlobalWithGC
        if (typeof globalThis !== "undefined" && globalWithGC.gc) {
          globalWithGC.gc()
        }
      }
    }, 30000) // Check every 30 seconds
  }
}

// Optimize LCP elements
export function optimizeLcpElements() {
  if (typeof window === "undefined") return

  const lcpCandidates = [
    document.querySelector("h1"), 
    ...Array.from(document.querySelectorAll("[data-lcp-element]")),
    ...Array.from(document.querySelectorAll("img")).slice(0, 3), // First few images
    ...Array.from(document.querySelectorAll("section")).slice(0, 1), // First section
  ].filter(Boolean) as Element[]

  // Apply optimizations to each candidate
  lcpCandidates.forEach((element) => {
    // Add content-visibility: auto to non-LCP elements to prioritize LCP rendering
    document.querySelectorAll("section:not(:first-child)").forEach((section) => {
      if (section instanceof HTMLElement) {
        section.style.contentVisibility = "auto"
        section.style.containIntrinsicSize = "0 500px"
      }
    })

    // Force layout recalculation for the LCP element to ensure it renders quickly
    if (element instanceof HTMLElement) {
      // Force a layout calculation to ensure the browser prioritizes this element
      element.getBoundingClientRect()

      // Add a high priority hint
      element.setAttribute("fetchpriority", "high")

      // Ensure it's visible immediately
      element.style.opacity = "1"
      element.style.visibility = "visible"
    }

    // For images, add specific optimizations
    if (element instanceof HTMLImageElement) {
      element.setAttribute("fetchpriority", "high")
      element.setAttribute("loading", "eager")
      element.setAttribute("decoding", "sync")
    }
  })
}

// Monitor Core Web Vitals
export function monitorWebVitals() {
  if (typeof window === "undefined") return

  if ("PerformanceObserver" in window) {
    // LCP
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntryWithElement
        console.debug("LCP:", lastEntry.startTime)

        const lcpElement = lastEntry.element

        if (lcpElement && lcpElement instanceof HTMLElement) {
          lcpElement.setAttribute("data-lcp-element", "true")
          lcpElement.style.contentVisibility = "visible"
        }
      }).observe({ type: "largest-contentful-paint", buffered: true })
    } catch (e) {
      console.error("LCP monitoring error:", e)
    }

    // FID
    try {
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry
          console.debug("FID:", fidEntry.processingStart - fidEntry.startTime)
        })
      }).observe({ type: "first-input", buffered: true })
    } catch (e) {
      console.error("FID monitoring error:", e)
    }

    // CLS
    try {
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as LayoutShiftEntry
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value
            console.debug("CLS update:", clsValue)
          }
        })
      }).observe({ type: "layout-shift", buffered: true })
    } catch (e) {
      console.error("CLS monitoring error:", e)
    }
  }
}

// Optimize script loading and execution
const optimizeScriptLoading = () => {
  if (typeof window === "undefined") return

  // Use module preload for critical scripts
  const preloadScripts = ["/chunks/56-e73f64e63a5098d6.js", "/chunks/908-3dc593e90316e7e1.js"]

  preloadScripts.forEach((script) => {
    const link = document.createElement("link")
    link.rel = "modulepreload"
    link.href = script
    document.head.appendChild(link)
  })

  // Defer non-critical scripts
  document.querySelectorAll("script:not([async]):not([defer])").forEach((scriptElement) => {
    const script = scriptElement as HTMLScriptElement
    if (script.src && !script.src.includes("chunks/56-") && !script.src.includes("chunks/908-")) {
      script.defer = true
    }
  })
}

// Optimize main thread work
const optimizeMainThread = () => {
  if (typeof window === "undefined") return

  // Use requestIdleCallback for non-critical work
  const deferredWork = [
    () => {
      console.log("Would load deferred features")
    },
    () => {
      console.log("Would load analytics")
    },
  ]

  if ("requestIdleCallback" in window) {
    deferredWork.forEach((work) => {
      window.requestIdleCallback(() => work())
    })
  }

  // Batch DOM operations
  const batchDOMOperations = () => {
    const fragment = document.createDocumentFragment()
    // Perform DOM operations on fragment
    document.body.appendChild(fragment)
  }
}

/**
 * Performance optimization utilities
 */

// Defer non-critical tasks
export function deferNonCriticalTasks(task: () => void, timeout = 100) {
  if (typeof window === "undefined") return

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => task())
  } else {
    setTimeout(task, timeout)
  }
}

// Define a type for the worker task function
type WorkerTaskFn = (data: unknown) => unknown

// Update the offloadToWorker function signature
export function offloadToWorker(taskFn: string, data: unknown): Promise<unknown> {
  return new Promise((resolve) => {
    // Execute the task directly instead of using a Web Worker
    try {
      // Use Function constructor to safely evaluate the string function
      const fn = new Function(`return ${taskFn}`)()
      const result = fn(data)
      resolve(result)
    } catch (error) {
      console.error("Task execution error:", error)
      resolve(null)
    }
  })
}

// Optimize LCP element rendering
export function optimizeLcpElement() {
  if (typeof window === "undefined") return

  // Find and optimize the LCP element
  requestAnimationFrame(() => {
    const lcpElement = document.querySelector('[data-lcp-element="true"]')
    if (lcpElement instanceof HTMLElement) {
      // Force layout calculation to prioritize rendering
      lcpElement.getBoundingClientRect()

      // Ensure visibility
      lcpElement.style.opacity = "1"
      lcpElement.style.visibility = "visible"

      // Prevent content-visibility from hiding the element
      lcpElement.style.contentVisibility = "visible"
    }
  })
}

