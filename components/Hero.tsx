'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900" />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Designing Your Digital Future
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cutting-edge web design and reliable hosting solutions
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-indigo-600 text-gray-100 px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Get Started
          </motion.a>
        </div>
        <motion.div
            className="relative flex items-center justify-center w-full h-96 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            {/* Simulated Web Page */}
            <motion.div
                className="w-3/4 h-3/4 bg-gray-700 rounded-lg relative p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                {/* Simulated browser interface */}
                <div className="relative w-full h-full overflow-hidden">
                    {/* Browser Title Bar with Buttons */}
                    <motion.div
                        className="absolute top-0 left-0 right-0 h-6 bg-gray-600 rounded-t-md flex items-center space-x-1 px-2 pt-1"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </motion.div>

                    {/* Content Simulation */}
                    <div className="mt-8 flex flex-col space-y-3">

                        {/* First Paragraph */}
                        <motion.div
                            className="w-3/4 h-2 bg-gray-500 rounded-sm"
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{ delay: 1.1, duration: 0.7 }}
                        ></motion.div>

                        <motion.div
                            className="w-2/3 h-2 bg-gray-500 rounded-sm"
                            initial={{ width: "0%" }}
                            animate={{ width: "66%" }}
                            transition={{ delay: 1.3, duration: 0.7 }}
                        ></motion.div>
                        
                        <motion.div
                            className="w-5/6 h-2 bg-gray-500 rounded-sm"
                            initial={{ width: "0%" }}
                            animate={{ width: "83%" }}
                            transition={{ delay: 1.5, duration: 0.7 }}
                        ></motion.div>

                        {/* Spacer for new paragraph */}
                        <div className="mt-6 flex flex-col space-y-1">
                            {/* Second Paragraph */}
                            <motion.div
                                className="w-2/4 h-2 bg-gray-500 rounded-sm"
                                initial={{ width: "0%" }}
                                animate={{ width: "50%" }}
                                transition={{ delay: 1.7, duration: 0.7 }}
                            ></motion.div>

                            <motion.div
                                className="w-3/4 h-2 bg-gray-500 rounded-sm"
                                initial={{ width: "0%" }}
                                animate={{ width: "75%" }}
                                transition={{ delay: 1.9, duration: 0.7 }}
                            ></motion.div>
                        </div>

                        {/* Spacer for new paragraph */}
                        <div className="mt-6 flex flex-col space-y-1">
                            {/* Third Paragraph */}
                            <motion.div
                                className="w-2/3 h-2 bg-gray-500 rounded-sm"
                                initial={{ width: "0%" }}
                                animate={{ width: "66%" }}
                                transition={{ delay: 2.1, duration: 0.7 }}
                            ></motion.div>
                            
                            <motion.div
                                className="w-1/3 h-2 bg-gray-500 rounded-sm"
                                initial={{ width: "0%" }}
                                animate={{ width: "33%" }}
                                transition={{ delay: 2.3, duration: 0.7 }}
                            ></motion.div>
                        </div>
                        
                    </div>
                </div>
            </motion.div>
        </motion.div>
      </motion.div>
      <AnimatedLines />
    </section>
  )
}

const AnimatedLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {[...Array(10)].map((_, i) => (
        <motion.line
          key={i}
          x1="0%"
          y1={`${i * 10}%`}
          x2="100%"
          y2={`${i * 10}%`}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        />
      ))}
    </svg>
  )
}

export default Hero