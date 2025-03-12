// Utility functions for optimizing LCP

// Pre-allocate space for elements to prevent layout shifts
export function preAllocateSpace(
  selector: string,
  dimensions: { width?: string; height?: string },
) {
  if (typeof window === "undefined") return;

  const element = document.querySelector(selector);
  if (element instanceof HTMLElement) {
    if (dimensions.width) element.style.width = dimensions.width;
    if (dimensions.height) element.style.height = dimensions.height;
    element.style.contain = "strict";
  }
}

// Optimize LCP element
export function optimizeLcpElement(selector: string) {
  if (typeof window === "undefined") return;

  const element = document.querySelector(selector);
  if (element instanceof HTMLElement) {
    // Force layout calculation
    element.getBoundingClientRect();

    // Set high priority
    element.setAttribute("fetchpriority", "high");

    // Ensure visibility
    element.style.opacity = "1";
    element.style.visibility = "visible";

    // Add hardware acceleration
    element.style.transform = "translateZ(0)";
  }
}

// Preload critical resources
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof window === "undefined") return;

  if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    if (as === "font") link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

// Defer non-critical JavaScript
export function deferNonCriticalJS() {
  if (typeof window === "undefined") return;

  document
    .querySelectorAll('script:not([data-priority="high"])')
    .forEach((script) => {
      if (
        script instanceof HTMLScriptElement &&
        script.src &&
        !script.src.includes("chunk") &&
        !script.src.includes("main")
      ) {
        script.defer = true;
        script.async = true;
      }
    });
}

// Monitor LCP
export function monitorLcp(callback?: (lcpTime: number) => void) {
  if (typeof window === "undefined" || !("PerformanceObserver" in window))
    return;

  try {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const lcpEntry = entries[entries.length - 1];
        const lcpTime = lcpEntry.startTime;

        console.debug("LCP time:", lcpTime);
        if (callback) callback(lcpTime);
      }
    }).observe({ type: "largest-contentful-paint", buffered: true });
  } catch (e) {
    console.error("LCP monitoring error:", e);
  }
}
