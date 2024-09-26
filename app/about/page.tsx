'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl mb-6">
            At mdesk.tech, we're passionate about creating exceptional digital experiences. Our team of expert designers and developers work tirelessly to bring your vision to life.
          </p>
          <p className="text-xl mb-6">
            Founded in 2022, we've quickly established ourselves as a leader in web design and hosting solutions. Our commitment to innovation, quality, and customer satisfaction sets us apart in the industry.
          </p>
          <p className="text-xl">
            We believe in the power of the web to transform businesses and connect people. Let us help you make your mark in the digital world.
          </p>
        </motion.div>
      </div>
    </div>
  )
}