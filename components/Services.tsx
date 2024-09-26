'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Web Design',
    description: 'Custom, responsive designs tailored to your brand.',
    icon: '🎨',
  },
  {
    title: 'Web Development',
    description: 'Robust, scalable web applications built with cutting-edge tech.',
    icon: '💻',
  },
  {
    title: 'Hosting Solutions',
    description: 'Reliable, secure hosting for your website or application.',
    icon: '🌐',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your online visibility and search engine rankings.',
    icon: '📈',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services