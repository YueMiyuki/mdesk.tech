"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  Clock,
  Globe,
  Video,
  ClockIcon as Clock24,
} from "lucide-react";
import { useState, useCallback } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to send message");
        }

        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Failed to send message. Please try again later.",
        );
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState],
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-indigo-950/30 via-background to-background z-0" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xs mb-4">
                <span className="text-xs font-medium text-indigo-300">
                  Get in touch
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's start a{" "}
                <span className="text-gradient">conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Have a project in mind or just want to say hello? We'd love to
                hear from you. Fill out the form and we'll get back to you as
                soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Email us at
                    </div>
                    <div className="font-medium">hello@mdesk.tech</div>
                  </div>
                </motion.div>
              </div>

              {/* We Work Remotely Section */}
              <div className="p-6 rounded-lg bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-xs mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-lg font-semibold">We Work Remotely!</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our team is distributed across the globe, allowing us to serve
                  clients worldwide without geographical limitations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-2">
                    <Clock24 className="h-4 w-4 text-indigo-400 mt-1 shrink-0" />
                    <div className="text-sm">
                      <span className="font-medium">24/7 Availability</span>
                      <p className="text-muted-foreground">
                        Our team spans multiple time zones, ensuring someone is
                        always available to assist you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Video className="h-4 w-4 text-indigo-400 mt-1 shrink-0" />
                    <div className="text-sm">
                      <span className="font-medium">Virtual Meetings</span>
                      <p className="text-muted-foreground">
                        We schedule video calls at times that are convenient for
                        you, no matter where you're located.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Section */}
              <div className="p-6 rounded-lg bg-card/50 border border-indigo-500/20 backdrop-blur-xs">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-indigo-400" />
                  <h3 className="text-lg font-semibold">Office Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  These hours are in CST (China Standard Time), but our global
                  team is available outside these hours as well.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

                {/* Contact form card */}
                <div className="relative bg-card/80 backdrop-blur-xs border border-indigo-500/20 rounded-xl p-8 shadow-xl">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-20 h-20 mx-auto bg-linear-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="h-10 w-10 text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Thank you for reaching out. We'll get back to you as
                        soon as possible.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:from-indigo-600 hover:to-purple-600"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-indigo-500/10">
                          <MessageSquare className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h2 className="text-xl font-bold">Send us a message</h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-indigo-500/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden transition-colors"
                              placeholder="Your name"
                              aria-label="Your name"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-indigo-500/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden transition-colors"
                              placeholder="your.email@example.com"
                              aria-label="Your email address"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-card/50 border border-indigo-500/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden transition-colors"
                            placeholder="What's this about?"
                            aria-label="Subject of your message"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-card/50 border border-indigo-500/20 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden transition-colors resize-none"
                            placeholder="Tell us about your project or inquiry..."
                            aria-label="Your message"
                          />
                        </div>

                        {error && (
                          <div
                            className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                            role="alert"
                          >
                            {error}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:from-indigo-600 hover:to-purple-600 disabled:opacity-70"
                          aria-label="Send message"
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
                              Send Message
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? We've got answers. If you don't see what you're
              looking for, feel free to reach out to us directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of digital services including web design, web development, hosting solutions, and SEO optimization. Our team specializes in creating custom solutions tailored to your specific business needs.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex web applications can take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline specific to your project.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We provide custom quotes based on your specific requirements. Our pricing is transparent and competitive, with no hidden fees. Contact us for a free consultation and quote tailored to your project needs.",
              },
              {
                question: "Do you offer ongoing support after launch?",
                answer:
                  "We offer various maintenance and support packages to ensure your website continues to perform optimally. Our team is always available to address any issues, make updates, or implement new features as your business grows.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-xs border border-indigo-500/20 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(to right, #6366f1, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}
