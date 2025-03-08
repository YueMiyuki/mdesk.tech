"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        className="relative w-8 h-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md transform rotate-45" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-500 rounded-md transform rotate-12 opacity-70" />
        <div className="absolute inset-1 bg-black rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-xs">m</span>
        </div>
      </motion.div>
      <motion.span
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        mdesk.tech
      </motion.span>
    </Link>
  )
}

export default Logo

