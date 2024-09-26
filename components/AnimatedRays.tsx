'use client'

import { motion } from 'framer-motion'

const AnimatedRays = () => {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ray-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgba(79, 70, 229, 0.4)" />
          <stop offset="100%" stopColor="rgba(79, 70, 229, 0)" />
        </radialGradient>
      </defs>
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 100 + '%'}
          cy={Math.random() * 100 + '%'}
          r="100"
          fill="url(#ray-gradient)"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.5, 1],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </svg>
  )
}

export default AnimatedRays