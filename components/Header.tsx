'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { medicalCategories } from '@/lib/medicalCategories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isMedicalMobileOpen, setIsMedicalMobileOpen] = useState(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsMedicalOpen(false);
    setIsMedicalMobileOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/HoldenHealth_logo_transparent.png"
              alt="Holden Health logo"
              width={320}
              height={96}
              className="h-14 w-auto sm:h-16 md:h-20"
              priority
            />
            <span className="sr-only">Holden Health</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMedicalOpen(true)}
              onMouseLeave={() => setIsMedicalOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors"
                aria-haspopup="true"
                aria-expanded={isMedicalOpen}
                onClick={() => setIsMedicalOpen((open) => !open)}
                onFocus={() => setIsMedicalOpen(true)}
              >
                Medical Product
                <svg
                  className={`w-4 h-4 transition-transform ${isMedicalOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMedicalOpen && (
                <div className="absolute left-0 top-full pt-2 w-72">
                  <div className="rounded-lg bg-white shadow-lg ring-1 ring-black/5 py-3">
                    {medicalCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span className="font-semibold block">{category.name}</span>
                        <span className="text-xs text-gray-500">{category.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/personal-care-hygiene" className="text-gray-700 hover:text-primary transition-colors">
              Personal Care &amp; Hygiene
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMedicalMobileOpen((open) => !open)}
                aria-expanded={isMedicalMobileOpen}
              >
                Medical Product
                <svg
                  className={`w-5 h-5 transition-transform ${isMedicalMobileOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMedicalMobileOpen && (
                <div className="pl-4 space-y-1">
                  {medicalCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={category.href}
                      className="block py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={closeAllMenus}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/personal-care-hygiene"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeAllMenus}
            >
              Personal Care &amp; Hygiene
            </Link>
            <Link
              href="/solutions"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeAllMenus}
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeAllMenus}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
