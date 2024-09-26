'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Completely open source',
    description: 'Powered by powerful open-source projects, standing on giants\' shoulders',
    icon: (
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-gray-700 rounded-lg transform rotate-6"></div>
        <div className="absolute inset-0 bg-gray-600 rounded-lg transform -rotate-3"></div>
        <div className="absolute inset-0 bg-gray-500 rounded-lg flex items-center justify-center">
          <span className="text-xs text-white">100%</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Dynamic HTML Streaming',
    description: 'Instantly stream UI from the server, integrated with the App Router and React Suspense.',
    icon: (
      <div className="relative w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
        <div className="absolute top-1 left-1 right-1 h-3 bg-gray-600 rounded-t-sm flex items-center">
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
        </div>
        <div className="absolute top-6 left-2 w-3/4 h-2 bg-gray-500 rounded-sm"></div>
        <div className="absolute top-10 left-2 w-1/2 h-2 bg-gray-500 rounded-sm"></div>
      </div>
    ),
  },
  {
    title: 'React Server Components',
    description: 'Add components without sending additional client-side JavaScript. Built on the latest React features.',
    icon: (
      <div className="relative w-16 h-16">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute w-4 h-4 bg-gray-500 rounded-full" style={{
            top: i === 0 ? '0' : '50%',
            left: i === 1 ? '0' : i === 2 ? '100%' : '50%',
            transform: i !== 0 ? 'translate(-50%, -50%)' : 'translate(-50%, 0)',
          }}></div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-500 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    title: 'AI-Powered Code Generation',
    description: 'Leverage machine learning to automate repetitive coding tasks and suggest optimizations.',
    icon: (
      <div className="relative w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-gray-500 border-t-gray-300 rounded-full animate-spin"></div>
      </div>
    ),
  },
  {
    title: 'Advanced Security Features',
    description: 'Built-in protection against common web vulnerabilities and automated security updates.',
    icon: (
      <div className="relative w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
        </div>
        <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
    ),
  },
  {
    title: 'Real-time Collaboration',
    description: 'Enable seamless team collaboration with live editing and version control integration with coder.',
    icon: (
      <div className="relative w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-2 left-2"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-2 right-2"></div>
        <div className="w-8 h-1 bg-gray-500 rotate-45"></div>
      </div>
    ),
  },
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features