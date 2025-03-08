"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MessageCircle, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    } catch (err) {
      setError("Failed to send message. Please try again later.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10 z-0" />
      <div className="absolute inset-0 noise z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4">
            <span className="text-xs font-medium text-muted-foreground">Let's talk</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">Ready to start your next project? We'd love to hear from you!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              {[
                { icon: <Mail className="h-5 w-5" />, label: "Email", value: "hello@mdesk.tech" },
                { icon: <MapPin className="h-5 w-5" />, label: "Address", value: "We work remotely!" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">{item.icon}</div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-lg bg-card border border-border/50">
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            {isSubmitted ? (
              <motion.div
                className="bg-card border border-border/50 rounded-lg p-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  />
                </div>

                {error && <div className="text-destructive text-sm">{error}</div>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
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
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

