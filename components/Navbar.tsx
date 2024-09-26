'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Logo />
        <div className="space-x-4">
          {['', 'services', 'about', 'contact'].map((page) => (
            <Link
              key={page}
              href={`/${page}`}
              className={`text-gray-300 hover:text-indigo-400 ${pathname === `/${page}` ? 'text-indigo-400' : ''}`}
            >
              {page === '' ? 'Home' : page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar