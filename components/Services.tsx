"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Palette, Code2, Server, BarChart, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Service {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

const services: Service[] = [
  {
    title: "Web Design",
    description: "Custom, responsive designs tailored to your brand.",
    details:
      "Our design team creates beautiful, intuitive interfaces that reflect your brand identity and engage your users. We focus on responsive design, ensuring your website looks great on all devices.",
    icon: <Palette className="h-8 w-8" />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Web Development",
    description:
      "Robust, scalable web applications built with cutting-edge tech.",
    details:
      "We build powerful web applications using the latest technologies like React, Next.js, and Node.js. Our development process ensures clean, maintainable code that can scale with your business.",
    icon: <Code2 className="h-8 w-8" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Hosting Solutions",
    description: "Reliable, secure hosting for your website or application.",
    details:
      "Our hosting solutions provide the reliability, security, and performance your website needs. We offer managed hosting with 24/7 monitoring, automatic backups, and expert support.",
    icon: <Server className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and search engine rankings.",
    details:
      "Our SEO experts will help your website rank higher in search results, driving more organic traffic to your business. We use data-driven strategies to optimize your content and structure.",
    icon: <BarChart className="h-8 w-8" />,
    color: "from-pink-500 to-rose-500",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Icon animation based on index
  const iconAnimations = [
    // Pulse with glow
    {
      animate: {
        scale: [1, 1.2, 1],
        filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
        transition: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    // Float up and down
    {
      animate: {
        y: [0, -8, 0],
        filter: [
          "drop-shadow(0 0 0px rgba(99, 102, 241, 0.5))",
          "drop-shadow(0 0 8px rgba(99, 102, 241, 0.8))",
          "drop-shadow(0 0 0px rgba(99, 102, 241, 0.5))",
        ],
        transition: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    // Subtle scale with color shift
    {
      animate: {
        scale: [1, 1.1, 0.95, 1],
        filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
    // Gentle side-to-side
    {
      animate: {
        x: [0, 5, -5, 0],
        filter: [
          "drop-shadow(0 0 0px rgba(168, 85, 247, 0.5))",
          "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))",
          "drop-shadow(0 0 0px rgba(168, 85, 247, 0.5))",
        ],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        },
      },
    },
  ];

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
          className="flex flex-col h-full bg-card border border-border/50 rounded-lg overflow-hidden group-hover:border-transparent group-hover:bg-black/40 transition-all duration-300 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grow p-8">
            <div className="flex items-start gap-6">
              <motion.div
                className={`p-4 rounded-lg bg-linear-to-br ${service.color} text-white`}
                animate={
                  isHovering
                    ? iconAnimations[index % iconAnimations.length].animate
                    : {}
                }
              >
                {service.icon}
              </motion.div>
              <div className="flex-1">
                <h2
                  className={`text-2xl font-semibold mb-2 transition-all duration-300 ${isHovering ? "text-gradient" : ""}`}
                >
                  {service.title}
                </h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-4 border-t border-border/50 bg-muted/20 mt-auto">
            <div
              className={`inline-flex items-center text-primary transition-all duration-300 ${isHovering ? "text-gradient font-medium" : ""}`}
            >
              Learn more about {service.title.toLowerCase()}
              <div
                className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-2" : ""}`}
              >
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <motion.div
                className={`p-3 rounded-md bg-linear-to-br ${service.color} text-white`}
                {...iconAnimations[index % iconAnimations.length]}
              >
                {service.icon}
              </motion.div>
              {service.title}
            </DialogTitle>
            <DialogDescription>{service.description}</DialogDescription>
          </DialogHeader>

          {/* Content outside of DialogDescription to avoid nesting issues */}
          <div className="mt-4 space-y-4">
            <p className="text-muted-foreground">{service.details}</p>

            <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-border">
              <h4 className="text-sm font-semibold mb-2">Key Benefits:</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enhanced performance and reliability</li>
                <li>Seamless integration with modern workflows</li>
                <li>Scalable and future-proof solutions</li>
                <li>Comprehensive documentation and support</li>
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

const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/50 to-background/0 z-0" />
      <div className="absolute inset-0 noise z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-xs mb-4">
            <span className="text-xs font-medium text-muted-foreground">
              What we offer
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive web solutions to help your business thrive
            in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-full">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
