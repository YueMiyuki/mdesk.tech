"use client";

import Link from "next/link";
import type React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Heart,
  Send,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function OpenSourceContent() {
  const [formState, setFormState] = useState({
    isOpenSourceForm: true,
    name: "",
    email: "",
    subject: "Open Source Project Application",
    message: "",
    projectName: "",
    projectUrl: "",
    caseId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate a case ID only once when the component mounts
    if (!formState.caseId) {
      setFormState((prev) => ({
        ...prev,
        caseId: uuidv4(),
      }));
    }
  }, [formState.caseId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formattedMessage = `
    OPEN SOURCE PROJECT APPLICATION
    ------------------------------
    Case ID: ${formState.caseId}
    Project Name: ${formState.projectName}
    Project URL: ${formState.projectUrl}
    
    Project Description:
    ${formState.message}
  `;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: `Open Source Application: ${formState.projectName}`,
          message: formattedMessage,
          caseId: formState.caseId,
          projectName: formState.projectName,
          projectUrl: formState.projectUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send application");
      }

      setIsSubmitted(true);
      setFormState({
        isOpenSourceForm: true,
        name: "",
        email: "",
        subject: "Open Source Project Application",
        message: "",
        projectName: "",
        projectUrl: "",
        caseId: data.caseId || formState.caseId,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send application. Please try again later.",
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Modern Web Presence",
      description:
        "We'll build a responsive, accessible website that showcases your project beautifully.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimized",
      description:
        "Fast loading times and optimized user experience to help your project shine.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer Friendly",
      description:
        "Clean code that's easy to maintain and extend as your project grows.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Focus",
      description:
        "Features that help you build and engage with your community of contributors and users.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-black">
      <section className="py-20 container px-6 relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xs mb-4">
            <span className="text-xs font-medium text-primary">
              Why Open Source Matters
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why We Support Open Source
          </h2>
          <p className="text-lg text-muted-foreground">
            Open source software is the backbone of modern technology. We
            believe in giving back to the community that has given us so much.
            By offering our design and development expertise, we hope to help
            open source projects thrive.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative h-full group"
              variants={itemVariants}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 blur-xl transition-opacity duration-500 -z-10 group-hover:opacity-20 rounded-lg`}
              />

              {mounted && (
                <div className="absolute inset-0 rounded-lg overflow-hidden z-0 pointer-events-none opacity-0 group-hover:opacity-100">
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

              {/* Card content */}
              <div className="flex flex-col h-full bg-card border border-border/50 rounded-lg overflow-hidden group-hover:border-transparent group-hover:bg-black/40 transition-all duration-300 z-10 relative p-6">
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-full bg-linear-to-br ${feature.color} text-white mb-4 w-14 h-14`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="apply"
        >
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

            {mounted && (
              <>
                <motion.div
                  className="absolute top-10 right-10 text-indigo-500/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Star size={24} />
                </motion.div>
                <motion.div
                  className="absolute bottom-20 left-10 text-purple-500/30"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 25,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Star size={16} />
                </motion.div>
              </>
            )}

            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 p-8 relative overflow-hidden">
                {mounted && (
                  <motion.div
                    className="absolute top-6 right-8 text-white/80"
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles size={28} />
                  </motion.div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-xl text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Get Your Free Website
                  </h2>
                </div>

                <p className="text-white/80 max-w-2xl">
                  Got an awesome open source project? We'd love to help you show
                  it off to the world! Tell us about your project below and
                  we'll see if we can build you a slick website - completely
                  free.
                </p>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <motion.div
                    className="py-12 px-4 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(99, 102, 241, 0.2)",
                          "0 0 0 20px rgba(99, 102, 241, 0)",
                          "0 0 0 0 rgba(99, 102, 241, 0.2)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <CheckCircle className="h-10 w-10 text-indigo-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      You're all set!
                    </h3>
                    <p className="text-white/70 mb-6 max-w-md mx-auto">
                      Thanks for telling us about your project! We'll take a
                      look and get back to you soon. No need to refresh your
                      inbox every 5 minutes (though we know you will).
                    </p>
                    <p className="text-sm mb-8 text-white/50">
                      Your reference:{" "}
                      <span className="font-mono font-medium text-indigo-400">
                        {formState.caseId}
                      </span>
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                      >
                        Submit Another Project
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white/80"
                          >
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white/80"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="projectName"
                          className="block text-sm font-medium text-white/80"
                        >
                          Project Name
                        </label>
                        <Input
                          id="projectName"
                          name="projectName"
                          value={formState.projectName}
                          onChange={handleChange}
                          placeholder="SuperCoolLib"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="projectUrl"
                          className="block text-sm font-medium text-white/80"
                        >
                          GitHub or GitLab URL
                        </label>
                        <Input
                          id="projectUrl"
                          name="projectUrl"
                          value={formState.projectUrl}
                          onChange={handleChange}
                          placeholder="https://github.com/username/project"
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-white/80"
                        >
                          Tell us about your project
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="What does your project do? Who's it for? Why should people care? Don't be shy - brag a little!"
                          rows={5}
                          required
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
                        />
                      </div>
                    </div>

                    {error && (
                      <motion.div
                        className="p-3 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {error}
                      </motion.div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white h-12 font-medium"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Your Project
                            <Send className="ml-2 h-4 w-4" />
                            <motion.div
                              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.5 }}
                            />
                          </>
                        )}
                      </Button>
                    </motion.div>

                    <p className="text-xs text-center text-white/50 mt-4">
                      By submitting, you agree to our{" "}
                      <a
                        href="/terms"
                        className="text-indigo-400 hover:text-indigo-300 underline"
                      >
                        Terms
                      </a>{" "}
                      &{" "}
                      <a
                        href="/privacy"
                        className="text-indigo-400 hover:text-indigo-300 underline"
                      >
                        Privacy Policy
                      </a>
                      . We promise not to spam you.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-[#0c0c16] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container px-6 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xs mb-4">
              <span className="text-xs font-medium text-primary">
                How We Choose
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Look For
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We wish we could help every project, but we've only got so many
              hours in the day. Here's what catches our eye:
            </p>

            <ul className="text-left space-y-4 mb-10">
              {[
                "Active projects with regular updates and maintenance",
                "Something that makes developers' lives better or easier",
                "Open source license (MIT, Apache, GPL - we're not picky)",
                "Friendly, inclusive community vibes",
                "Projects that could really use a visibility boost",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Don't check all the boxes? No worries! We look at each application
              individually. If your project is doing something cool, we want to
              hear about it.
            </p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
              >
                <Link href="#apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(99, 102, 241, 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
