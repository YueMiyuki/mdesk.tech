"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Award, CheckCircle, ArrowRight, Star, Code, Zap, Globe, Palette, Rocket } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Logo from "@/components/Logo"

export default function About() {
  const [activeSection, setActiveSection] = useState("mission")

  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and audience to ensure our solution addresses your specific needs.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy that outlines the approach, technologies, and timeline.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers create intuitive, engaging interfaces that reflect your brand and resonate with your audience.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Our development team brings the designs to life with clean, efficient code and cutting-edge technologies.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      number: "05",
      title: "Testing & Launch",
      description:
        "We rigorously test every aspect of your project before launch to ensure a flawless user experience.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "Our relationship doesn't end at launch. We provide ongoing support and optimization to ensure long-term success.",
      gradient: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements - using a different style than home page */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-background to-background z-0" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.15) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(168, 85, 247, 0.15) 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Hero Section - Horizontal layout instead of vertical */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm mb-4">
                <span className="text-xs font-medium text-indigo-300">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We're building the future of <span className="text-gradient">digital experiences</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Founded in 2023, mdesk.tech began with a simple vision: to bridge the gap between complex technology and
                beautiful design. What started as a small team of passionate developers has grown into a full-service
                digital agency.
              </p>

              <div className="flex flex-wrap gap-4">
                {["Innovative", "Reliable", "Passionate", "Client-focused"].map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50"
                  >
                    <Star className="h-3.5 w-3.5 text-indigo-400" />
                    <span className="text-xs font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Simple gradient background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl" />

                {/* Simple visual element */}
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="w-full h-full p-12">
                    <div className="w-full h-full rounded-xl border border-indigo-500/20 bg-card/50 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center">
                      <div className="mb-6">
                        <Logo hideText={true} />
                      </div>

                      <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                      <p className="text-muted-foreground text-sm">
                        Creating exceptional digital experiences that transform businesses and delight users.
                      </p>

                      <div className="mt-6 relative">
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 transform -translate-y-1/2 z-0"></div>

                        <div className="relative z-10 flex justify-between">
                          {[
                            { step: "Design", icon: <Palette className="h-3.5 w-3.5" /> },
                            { step: "Develop", icon: <Code className="h-3.5 w-3.5" /> },
                            { step: "Deploy", icon: <Rocket className="h-3.5 w-3.5" /> },
                          ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center mb-2">
                                {item.icon}
                              </div>
                              <span className="text-xs font-medium text-indigo-400">{item.step}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 text-xs text-muted-foreground text-center">
                          Our seamless end-to-end process
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Navigation Tabs - Horizontal scrolling tabs */}
      <section className="py-8 border-y border-border/30 sticky top-20 bg-background/80 backdrop-blur-md z-20">
        <div className="container mx-auto px-6">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: "mission", label: "Our Mission" },
              { id: "journey", label: "Our Journey" },
              { id: "team", label: "Our Team" },
              { id: "values", label: "Our Values" },
              { id: "approach", label: "Our Approach" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-5 py-2.5 whitespace-nowrap rounded-full text-sm font-medium transition-all ${
                  activeSection === tab.id
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`py-16 ${activeSection === "mission" ? "block" : "hidden"}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At mdesk.tech, we're on a mission to transform how businesses connect with their audiences in the
                digital world. We believe that exceptional digital experiences are built at the intersection of
                cutting-edge technology, beautiful design, and strategic thinking.
              </p>
              <p className="text-muted-foreground mb-8">
                We're committed to creating digital solutions that not only look stunning but also drive real business
                results. Our approach combines technical expertise with creative innovation to deliver websites and
                applications that stand out in today's crowded digital landscape.
              </p>

              <div className="space-y-4">
                {[
                  "Create exceptional digital experiences that drive growth",
                  "Empower businesses with technology that works for them",
                  "Build long-term partnerships based on trust and results",
                  "Push the boundaries of what's possible in web design and development",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3 w-3 text-indigo-400" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-indigo-500/20 rounded-2xl p-8 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

                <h3 className="text-xl font-bold mb-4">Why We Exist</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Star className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Excellence</h4>
                      <p className="text-sm text-muted-foreground">
                        We're committed to delivering work that exceeds expectations in every detail.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Partnership</h4>
                      <p className="text-sm text-muted-foreground">
                        We build lasting relationships with our clients based on trust and mutual success.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Innovation</h4>
                      <p className="text-sm text-muted-foreground">
                        We constantly explore new technologies and approaches to solve complex problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - Timeline */}
      <section id="journey" className={`py-16 ${activeSection === "journey" ? "block" : "hidden"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              From our humble beginnings to where we are today, our journey has been defined by growth, learning, and a
              relentless pursuit of excellence.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-indigo-500/50" />

            {/* Timeline items */}
            {[
              {
                year: "2023",
                title: "Founded",
                description: "mdesk.tech was founded with a vision to create exceptional digital experiences.",
                icon: <Calendar className="h-5 w-5" />,
                position: "left",
              },
              {
                year: "2023",
                title: "First Client",
                description: "Secured our first major client and delivered a project that exceeded expectations.",
                icon: <Star className="h-5 w-5" />,
                position: "right",
              },
              {
                year: "2023",
                title: "Team Growth",
                description: "Expanded our team to include specialists in design, development, and strategy.",
                icon: <Users className="h-5 w-5" />,
                position: "left",
              },
              {
                year: "2024",
                title: "New Office",
                description: "Moved into our new headquarters to accommodate our growing team.",
                icon: <Globe className="h-5 w-5" />,
                position: "right",
              },
              {
                year: "2024",
                title: "International Expansion",
                description: "Started working with clients across Europe, Asia, and North America.",
                icon: <Award className="h-5 w-5" />,
                position: "left",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 ${
                  item.position === "left" ? "ml-0 mr-auto pr-12 text-right" : "ml-auto mr-0 pl-12 text-left"
                } w-1/2`}
                initial={{ opacity: 0, y: 20, x: item.position === "left" ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center z-10"
                  style={{
                    [item.position === "left" ? "right" : "left"]: "-20px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div
                  className={`bg-card border border-border/50 rounded-lg p-6 ${
                    item.position === "left" ? "rounded-tr-none" : "rounded-tl-none"
                  }`}
                >
                  <div className="text-sm font-medium text-indigo-400 mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-16 ${activeSection === "team" ? "block" : "hidden"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Our diverse team brings together expertise in design, development, and digital strategy. We're united by
              our passion for creating exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "With over 10 years of experience in web development and digital strategy, Alex leads our team with vision and expertise.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                name: "Sarah Chen",
                role: "Lead Designer",
                bio: "Sarah brings creative vision and user-centered design principles to every project, ensuring beautiful and functional experiences.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                name: "Marcus Williams",
                role: "Head of Development",
                bio: "Marcus oversees our development team, bringing technical excellence and innovation to complex challenges.",
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                name: "Priya Patel",
                role: "UX Specialist",
                bio: "Priya ensures our digital products are intuitive, accessible, and deliver exceptional user experiences.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                name: "David Kim",
                role: "Full-Stack Developer",
                bio: "David's expertise spans front-end and back-end technologies, creating seamless and powerful applications.",
                gradient: "from-purple-500 to-indigo-500",
              },
              {
                name: "Emma Rodriguez",
                role: "Project Manager",
                bio: "Emma keeps our projects on track, ensuring timely delivery and clear communication with clients.",
                gradient: "from-pink-500 to-purple-500",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/50 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`h-3 bg-gradient-to-r ${member.gradient}`} />
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-muted/50 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gradient">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-sm text-indigo-400 mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:from-indigo-600 hover:to-purple-600"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className={`py-16 ${activeSection === "values" ? "block" : "hidden"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground">
              These core principles guide everything we do, from how we work with clients to how we build our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from the code we write to the designs we create.",
                icon: <Star className="h-6 w-6" />,
                color: "bg-indigo-500/10 text-indigo-400",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches to solve complex problems and create better solutions.",
                icon: <Zap className="h-6 w-6" />,
                color: "bg-purple-500/10 text-purple-400",
              },
              {
                title: "Collaboration",
                description:
                  "We believe the best work happens when diverse perspectives come together toward a common goal.",
                icon: <Users className="h-6 w-6" />,
                color: "bg-indigo-500/10 text-indigo-400",
              },
              {
                title: "Integrity",
                description:
                  "We're honest, transparent, and committed to doing what's right for our clients and our team.",
                icon: <Award className="h-6 w-6" />,
                color: "bg-purple-500/10 text-purple-400",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <h4 className="text-sm font-medium mb-3">How we live this value:</h4>
                  <ul className="space-y-2">
                    {[1, 2, 3].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-indigo-500/50 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {index === 0 && i === 0 && "Rigorous code reviews and quality assurance"}
                          {index === 0 && i === 1 && "Continuous learning and skill development"}
                          {index === 0 && i === 2 && "Attention to detail in every deliverable"}

                          {index === 1 && i === 0 && "Exploring emerging technologies"}
                          {index === 1 && i === 1 && "Regular innovation workshops"}
                          {index === 1 && i === 2 && "Encouraging creative problem-solving"}

                          {index === 2 && i === 0 && "Cross-functional team collaboration"}
                          {index === 2 && i === 1 && "Open and transparent communication"}
                          {index === 2 && i === 2 && "Valuing diverse perspectives"}

                          {index === 3 && i === 0 && "Honest client relationships"}
                          {index === 3 && i === 1 && "Ethical business practices"}
                          {index === 3 && i === 2 && "Taking responsibility for our work"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className={`py-16 ${activeSection === "approach" ? "block" : "hidden"}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-muted-foreground">
              We follow a collaborative, client-centered approach to ensure your project meets your specific needs and
              goals.
            </p>
          </motion.div>

          {/* Process steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - updated with gradient and better positioning */}
            <div
              className="absolute left-[31px] lg:left-[39px] top-[40px] bottom-8 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-indigo-500/50"
              style={{
                backgroundSize: "1px 8px",
                backgroundImage: "linear-gradient(to bottom, rgb(99 102 241 / 0.3) 50%, transparent 50%)",
              }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex items-start gap-8 mb-12 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step number - updated with better visual connection to line */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-sm" />
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 flex items-center justify-center">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Step content - updated with better spacing */}
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-card border border-indigo-500/20 rounded-2xl p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Contact us today to discuss your project and see how we can
                help bring your vision to life.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:from-indigo-600 hover:to-purple-600"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
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
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
      `}</style>
    </div>
  )
}

