"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Function to optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Find all third-party scripts
      const scripts = document.querySelectorAll(
        'script[src*="googletagmanager"], script[src*="analytics"]',
      );

      scripts.forEach((script) => {
        // Add defer attribute
        script.setAttribute("defer", "");

        // Add low priority hint
        script.setAttribute("fetchpriority", "low");

        // Move to bottom of body if possible
        if (script.parentNode) {
          document.body.appendChild(script);
        }
      });
    };

    // Function to optimize LCP elements
    const optimizeLcpElements = () => {
      const lcpElements = document.querySelectorAll("[data-lcp-element]");

      lcpElements.forEach((element) => {
        const priority = element.getAttribute("data-priority");

        if (
          element instanceof HTMLImageElement ||
          element instanceof HTMLLinkElement
        ) {
          if (priority === "high") {
            element.setAttribute("fetchpriority", "high");
          } else if (priority === "low") {
            element.setAttribute("fetchpriority", "low");
          }
        }

        // Mark as loaded
        element.classList.add("loaded");
      });
    };

    // Function to optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img");

      images.forEach((img) => {
        // Add loading lazy to non-critical images
        if (!img.hasAttribute("fetchpriority")) {
          img.setAttribute("loading", "lazy");
        }

        // Add decoding async
        img.setAttribute("decoding", "async");
      });
    };

    // Function to reduce layout shifts
    const reduceLayoutShifts = () => {
      // Find elements that might cause layout shifts
      const dynamicElements = document.querySelectorAll(".motion-safe");

      dynamicElements.forEach((element) => {
        // Set explicit dimensions if not already set
        if (element instanceof HTMLElement) {
          if (!element.style.height) {
            const rect = element.getBoundingClientRect();
            element.style.minHeight = `${rect.height}px`;
          }
        }
      });
    };

    // Execute optimizations at appropriate times
    // Critical optimizations immediately
    optimizeLcpElements();

    // Less critical optimizations during idle time
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(optimizeThirdPartyScripts);
      window.requestIdleCallback(optimizeImages);
      window.requestIdleCallback(reduceLayoutShifts);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(optimizeThirdPartyScripts, 1000);
      setTimeout(optimizeImages, 1500);
      setTimeout(reduceLayoutShifts, 2000);
    }

    // Clean up
    return () => {
      // Clean up any observers if needed
    };
  }, []);

  // This component doesn't render anything
  return null;
}
