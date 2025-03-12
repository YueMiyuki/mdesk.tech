export function addPriorityHints() {
  if (typeof window === "undefined") return;

  // Add priority hints to critical resources
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name.includes("gtag") || entry.name.includes("analytics")) {
        const script = document.querySelector(`script[src*="${entry.name}"]`);
        if (script) {
          script.setAttribute("fetchpriority", "low");
          script.setAttribute("loading", "lazy");
        }
      }
    });
  });

  observer.observe({ entryTypes: ["resource"] });
}

export function deferNonCriticalScripts() {
  if (typeof window === "undefined") return;

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-priority="low"]');
  scripts.forEach((script) => {
    script.setAttribute("defer", "");
    script.setAttribute("loading", "lazy");
  });
}
