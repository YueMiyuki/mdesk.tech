'use client'

import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Web Design', description: 'Custom, responsive designs tailored to your brand.' },
            { title: 'Web Development', description: 'Robust, scalable web applications built with cutting-edge tech.' },
            { title: 'Hosting Solutions', description: 'Reliable, secure hosting for your website or application.' },
            { title: 'SEO Optimization', description: 'Improve your online visibility and search engine rankings.' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}