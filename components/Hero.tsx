"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Only enable client-side features after hydration
  useEffect(() => {
    // Mark LCP element as visible immediately
    const lcpElement = document.querySelector("[data-lcp-element]");
    if (lcpElement && lcpElement instanceof HTMLElement) {
      lcpElement.style.opacity = "1";
      lcpElement.style.visibility = "visible";
    }

    // Set isClient state to true after hydration
    setIsClient(true);

    // Check if on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Store mousemove handler reference for cleanup
    let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

    // Defer non-critical animations
    const deferAnimations = () => {
      if (typeof window !== "undefined") {
        window.requestAnimationFrame(() => {
          // Now initialize animations after LCP is rendered
          if (containerRef.current) {
            mouseMoveHandler = (e: MouseEvent) => {
              if (!containerRef.current) return;
              const { clientX, clientY } = e;
              const { left, top, width, height } =
                containerRef.current.getBoundingClientRect();
              const x = (clientX - left) / width;
              const y = (clientY - top) / height;
              mouseX.set(x);
              mouseY.set(y);
            };
            window.addEventListener("mousemove", mouseMoveHandler, {
              passive: true,
            });
          }
        });
      }
    };

    // Use requestIdleCallback to defer non-critical work
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(deferAnimations);
    } else {
      setTimeout(deferAnimations, 50);
    }

    // Cleanup function
    return () => {
      if (mouseMoveHandler) {
        window.removeEventListener("mousemove", mouseMoveHandler);
      }
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springConfig = useMemo(() => ({ damping: 40, stiffness: 300 }), []);
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  const xTransform = useTransform(xSpring, [0, 1], [-100, 100]);
  const yTransform1 = useTransform(ySpring, [0, 1], [-100, 100]);
  const yTransform2 = useTransform(ySpring, [0, 1], [100, -100]);
  const xTransform2 = useTransform(xSpring, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-20 composite-layer"
      style={{
        contain: "layout size",
        containIntrinsicSize: "0 100vh",
      }}
    >
      {/* Background elements with pre-allocated space */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0" />
      <div
        className="absolute inset-0 grid-pattern opacity-20 z-0"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          contain: "strict",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none' stroke='rgba(255,255,255,0.05)' strokeWidth='1'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 noise z-0" />

      {/* Animated gradient orbs - consistent across all devices */}
      {isClient && (
        <>
          <motion.div
            className="absolute rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 blur-3xl w-[500px] h-[500px]"
            style={{
              x: xTransform,
              y: yTransform1,
              willChange: "transform, opacity",
            }}
            animate={
              isMobile
                ? {
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    opacity: [0.2, 0.3, 0.2],
                  }
                : undefined
            }
            transition={
              isMobile
                ? {
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }
                : undefined
            }
          />

          <motion.div
            className="absolute rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-3xl w-[300px] h-[300px]"
            style={{
              x: xTransform2,
              y: yTransform2,
              willChange: "transform, opacity",
            }}
            animate={
              isMobile
                ? {
                    x: [0, -50, 50, 0],
                    y: [0, 30, -30, 0],
                    opacity: [0.2, 0.3, 0.2],
                  }
                : undefined
            }
            transition={
              isMobile
                ? {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }
                : undefined
            }
          />
        </>
      )}

      {/* Content */}
      <div
        className="container relative z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center composite-layer"
        style={{
          transform: "translateZ(0)",
        }}
      >
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-xs mb-6">
            <span className="text-xs font-medium text-muted-foreground">
              Cutting-edge web solutions
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight will-change-transform"
            data-lcp-element="true"
            style={{
              opacity: 1,
              visibility: "visible",
              contentVisibility: "visible",
            }}
          >
            Designing Your{" "}
            <span className="text-gradient glow-text">Digital Future</span>
          </h1>

          <p
            className="text-xl text-muted-foreground mb-8 max-w-lg"
            data-lcp-element="true"
            style={{
              contentVisibility: "visible",
              containIntrinsicSize: "0 50px",
            }}
          >
            Cutting-edge web design and reliable hosting solutions for
            businesses that want to stand out in the digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: shouldReduceMotion ? "auto" : "smooth",
                  });
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-secondary/80"
            >
              Our Services
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Modern</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Reliable</span>
            </div>
          </div>
        </div>

        {/* Only render browser mockup on client and non-mobile */}
        <div className="relative">
          {isClient ? (
            <BrowserMockup
              shouldReduceMotion={shouldReduceMotion}
              isMobile={isMobile}
            />
          ) : (
            <div className="lg:block" style={{ height: "400px" }} />
          )}
        </div>
      </div>

      {/* Scroll indicator - only on desktop and client */}
      {isClient && !isMobile && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion ? { duration: 0.1 } : { duration: 0.5, delay: 1 }
          }
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center"
            animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 8, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 0.1 }
                : {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "easeInOut",
                  }
            }
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// Browser mockup with consistent animations for all devices
const BrowserMockup = ({
  shouldReduceMotion,
  isMobile = false,
}: {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      className="relative w-full aspect-4/3 bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-lg border border-border/50 backdrop-blur-xs p-4 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-background/80 border-b border-border/50 rounded-t-lg flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="ml-4 h-5 w-1/2 bg-muted rounded-full text-xs flex items-center justify-center text-muted-foreground overflow-hidden">
          <span className="truncate px-2">https://mdesk.tech</span>
        </div>
      </div>

      {/* Browser content - simplified for better performance */}
      <div className="mt-8 space-y-4">
        <motion.div
          className="h-8 w-3/4 bg-muted/80 rounded-md"
          animate={{ width: ["60%", "75%", "60%"] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="h-4 w-1/2 bg-muted/80 rounded-md"
          animate={{ width: ["40%", "50%", "40%"] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="h-4 w-2/3 bg-muted/80 rounded-md"
          animate={{ width: ["55%", "65%", "55%"] }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="grid grid-cols-3 gap-3 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="aspect-video bg-muted/60 rounded-md"
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>

        <motion.div
          className="h-20 w-full bg-linear-to-r from-indigo-500/40 to-purple-500/40 rounded-md mt-6"
          animate={{
            background: [
              "linear-gradient(to right, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4))",
              "linear-gradient(to right, rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4))",
              "linear-gradient(to right, rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4))",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="h-full flex items-center justify-center">
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="h-4 w-4 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg"
        animate={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-1 bg-background rounded-md flex items-center justify-center">
          <Code className="h-6 w-6 text-primary" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-full shadow-lg"
        animate={{
          rotate: [0, -10, 10, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
          <Globe className="h-8 w-8 text-primary" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
