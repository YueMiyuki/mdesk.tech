'use client'

import { motion } from 'framer-motion'

function NotFoundPage() {
	return (
        <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          404 - Not found.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Oops!</h3>
            <p className="text-gray-300 mb-6">
              We have absolutly no idea how you get here.
            </p>
            <p className="text-gray-300">
              You can travel back to home in the navbar.
            </p>
          </motion.div>
          <motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="w-full h-96 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-2xl"></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white bg-opacity-10 backdrop-blur-lg rounded-full overflow-hidden">
    
    <div className="absolute inset-0 opacity-70">
      <div className="absolute w-full h-full border-t-2 border-white/20 rounded-full" style={{ top: '10%' }}></div>
      <div className="absolute w-full h-full border-t-2 border-white/20 rounded-full" style={{ top: '25%' }}></div>
      <div className="absolute w-full h-full border-t-2 border-white/20 rounded-full" style={{ top: '40%' }}></div>
      <div className="absolute w-full h-full border-t-2 border-white/20 rounded-full" style={{ top: '55%' }}></div>
      <div className="absolute w-full h-full border-t-2 border-white/20 rounded-full" style={{ top: '70%' }}></div>
    </div>
    
    <div className="absolute inset-0 opacity-70">
      <div className="absolute w-full h-full border-l-2 border-white/20 rounded-full" style={{ left: '10%' }}></div>
      <div className="absolute w-full h-full border-l-2 border-white/20 rounded-full" style={{ left: '25%' }}></div>
      <div className="absolute w-full h-full border-l-2 border-white/20 rounded-full" style={{ left: '40%' }}></div>
      <div className="absolute w-full h-full border-l-2 border-white/20 rounded-full" style={{ left: '55%' }}></div>
      <div className="absolute w-full h-full border-l-2 border-white/20 rounded-full" style={{ left: '70%' }}></div>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
    )
}

export default NotFoundPage