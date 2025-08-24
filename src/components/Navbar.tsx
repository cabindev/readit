'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-orange-600">read</span>
                <span className="text-gray-800">it</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                หน้าแรก
              </a>
              <a
                href="/books"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                หนังสือ
              </a>
              <a
                href="/categories"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                หมวดหมู่
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                เกี่ยวกับ
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <a
              href="/login"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              เข้าสู่ระบบ
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
            <a
              href="/"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              หน้าแรก
            </a>
            <a
              href="/books"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              หนังสือ
            </a>
            <a
              href="/categories"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              หมวดหมู่
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              เกี่ยวกับ
            </a>
            <a
              href="/login"
              className="bg-orange-600 hover:bg-orange-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              เข้าสู่ระบบ
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}