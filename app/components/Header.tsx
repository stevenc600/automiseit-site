"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand - visible on mobile */}
          <Link href="/" className="text-lg font-bold text-gray-900 md:hidden">
            AutomiseIT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
            <Link href="/" className="hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/digitalassessment" className="hover:text-violet-600 transition-colors">
              Assessment
            </Link>
            <Link href="/endusersupport" className="hover:text-violet-600 transition-colors">
              EUC Support
            </Link>
            <Link href="/about" className="hover:text-violet-600 transition-colors">
              About
            </Link>
            <Link href="/testimonials" className="hover:text-violet-600 transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-violet-600 hover:text-violet-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-violet-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/digitalassessment"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-violet-600 transition-colors"
            >
              Assessment
            </Link>
            <Link
              href="/endusersupport"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-violet-600 transition-colors"
            >
              EUC Support
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-violet-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-violet-600 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-violet-600 hover:text-violet-700 transition-colors"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
