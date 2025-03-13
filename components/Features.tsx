"use client";

import {
  DialogDescription,
  DialogTitle,
  DialogHeader,
  DialogContent,
} from "@/components/ui/dialog";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Lock, Users, Zap, Layers } from "lucide-react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const Dialog = dynamic(
  () => import("@/components/ui/dialog").then((mod) => mod.Dialog),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-card/50 animate-pulse rounded-lg" />
    ),
  },
);

interface Feature {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    title: "Completely open source",
    description:
      "Powered by powerful open-source projects, standing on giants' shoulders",
    details:
      "We leverage the best open-source technologies like React, Next.js, and TailwindCSS to build robust, maintainable applications. This approach ensures transparency, security, and a vibrant ecosystem of support.",
    icon: <Code className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Transparent codebase with no vendor lock-in",
      "Community-driven improvements and security updates",
      "Reduced licensing costs and legal complications",
      "Flexibility to customize for specific business needs",
    ],
  },
  {
    title: "Dynamic HTML Streaming",
    description:
      "Instantly stream UI from the server, integrated with the App Router and React Suspense.",
    details:
      "Our streaming technology allows for progressive rendering of content, dramatically improving perceived load times. Users see content appear incrementally rather than waiting for the entire page to load, creating a more responsive experience.",
    icon: <Zap className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Faster perceived loading times for better user experience",
      "Improved Core Web Vitals scores for better SEO",
      "Reduced time-to-interactive for critical page elements",
      "Optimized rendering for both fast and slow connections",
    ],
  },
  {
    title: "React Server Components",
    description:
      "Add components without sending additional client-side JavaScript. Built on the latest React features.",
    details:
      "Server Components allow us to render complex UI on the server, reducing the JavaScript bundle sent to the client. This results in faster page loads, improved performance on mobile devices, and better SEO without sacrificing interactivity.",
    icon: <Layers className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-600",
    benefits: [
      "Smaller JavaScript bundles for faster page loads",
      "Direct database access without API endpoints",
      "Improved performance on low-powered devices",
      "Better SEO with fully rendered HTML content",
    ],
  },
  {
    title: "AI-Powered Code Generation",
    description:
      "Leverage machine learning to automate repetitive coding tasks and suggest optimizations.",
    details:
      "Our AI tools analyze your codebase to identify patterns, suggest improvements, and even generate boilerplate code. This accelerates development while maintaining high quality standards and consistency across your project.",
    icon: <Globe className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    benefits: [
      "Accelerated development with automated code generation",
      "Consistent code quality and style across projects",
      "Reduced time spent on repetitive tasks",
      "Intelligent suggestions for performance improvements",
    ],
  },
  {
    title: "Advanced Security Features",
    description:
      "Built-in protection against common web vulnerabilities and automated security updates.",
    details:
      "We implement industry-standard security practices including HTTPS, content security policies, and protection against XSS, CSRF, and SQL injection attacks. Regular automated security scans ensure your application remains protected against emerging threats.",
    icon: <Lock className="h-6 w-6" />,
    color: "from-indigo-600 to-purple-500",
    benefits: [
      "Protection against OWASP top 10 vulnerabilities",
      "Automated security scanning and updates",
      "Secure authentication and authorization systems",
      "Data encryption at rest and in transit",
    ],
  },
  {
    title: "Real-time Collaboration",
    description:
      "Enable seamless team collaboration with live editing and version control integration with coder.",
    details:
      "Our collaboration tools allow multiple team members to work on the same project simultaneously, with changes reflected in real-time. Built-in version control ensures nothing is ever lost, while commenting and approval workflows streamline the review process.",
    icon: <Users className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Simultaneous editing with conflict resolution",
      "Integrated version control and change tracking",
      "Contextual commenting and feedback systems",
      "Streamlined approval workflows for faster delivery",
    ],
  },
];

const FeatureCard = ({ feature }: { feature: Feature; index: number }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        ref={cardRef}
        className="relative h-full cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowDialog(true)}
      >
        {/* Animated border */}
        {isHovering && (
          <div className="absolute inset-0 rounded-lg overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: `linear-gradient(90deg, 
                  rgba(99, 102, 241, 0) 0%, 
                  rgba(99, 102, 241, 1) 25%, 
                  rgba(168, 85, 247, 1) 50%, 
                  rgba(99, 102, 241, 1) 75%, 
                  rgba(99, 102, 241, 0) 100%)`,
                backgroundSize: "200% 100%",
                animation: "moveGradient 2s linear infinite",
              }}
            />
            <div className="absolute inset-[2px] rounded-lg bg-card" />
          </div>
        )}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-500 opacity-0 blur-xl transition-opacity duration-500 -z-10 group-hover:opacity-20 rounded-lg" />

        <motion.div
          className="bg-card rounded-lg border border-border/50 p-6 group-hover:border-transparent group-hover:bg-black/40 transition-colors duration-300 h-full flex flex-col z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 grow">
            <div
              className={`p-2 rounded-md bg-linear-to-br ${feature.color} text-white`}
            >
              {feature.icon}
            </div>
            <div className="flex-1">
              <h3
                className={`text-xl font-semibold mb-2 transition-all duration-300 ${isHovering ? "text-gradient" : ""}`}
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-2">
                {feature.description}
              </p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <div
              className={`text-primary inline-flex items-center transition-all duration-300 ${isHovering ? "text-gradient font-medium" : ""}`}
            >
              Learn more
              <div
                className={`ml-1 transition-transform duration-300 ${isHovering ? "translate-x-2" : ""}`}
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div
                className={`p-2 rounded-md bg-linear-to-br ${feature.color} text-white`}
              >
                {feature.icon}
              </div>
              {feature.title}
            </DialogTitle>
            <DialogDescription>{feature.description}</DialogDescription>
          </DialogHeader>

          {/* Content outside of DialogDescription to avoid nesting issues */}
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">{feature.details}</p>

            <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="text-sm font-semibold mb-2">Key Benefits:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #6366f1, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </>
  );
};

const Features = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 relative overflow-hidden content-visibility: auto; contain-intrinsic-size: 0 500px;">
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion ? { duration: 0.1 } : { duration: 0.8 }
          }
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-xs mb-4">
            <span className="text-xs font-medium text-muted-foreground">
              Why choose us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technologies with intuitive
            design to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #6366f1, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Features;
