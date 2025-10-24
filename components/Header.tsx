'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { medicalCategories } from '@/lib/medicalCategories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMedicalOpen, setIsMedicalOpen] = useState(false);
  const [isMedicalMobileOpen, setIsMedicalMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsMedicalOpen(false);
    setIsMedicalMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-white/90">1-800-HOLDEN-H</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white/90">info@holdenhealth.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs font-semibold tracking-wider text-white/90">MEDICAL EXCELLENCE</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/95 shadow-lg' : ''}`}>
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
            <Link
              href="/"
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMedicalOpen(true)}
              onMouseLeave={() => setIsMedicalOpen(false)}
            >
              <button
                type="button"
                className="relative flex items-center gap-1 text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
                aria-haspopup="true"
                aria-expanded={isMedicalOpen}
                onClick={() => setIsMedicalOpen((open) => !open)}
                onFocus={() => setIsMedicalOpen(true)}
              >
                Medical Product
                <svg
                  className={`w-4 h-4 transition-all duration-300 ${isMedicalOpen ? 'rotate-180 text-cyan-400' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isMedicalOpen && (
                <div className="absolute left-0 top-full pt-3 w-96 animate-slideDown">
                  <div className="rounded-xl bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-gray-200/50 overflow-hidden border border-cyan-100/50">
                    <div className="bg-gradient-to-r from-primary to-cyan-600 px-4 py-3">
                      <p className="text-sm font-semibold text-white tracking-wide">MEDICAL PRODUCTS</p>
                    </div>
                    <div className="py-2 max-h-[500px] overflow-y-auto">
                      {medicalCategories.map((category, index) => (
                        <Link
                          key={category.slug}
                          href={category.href}
                          className="group flex items-center gap-3 px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-300 border-b border-gray-100 last:border-b-0"
                          onClick={closeAllMenus}
                        >
                          {category.cardImage && (
                            <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100 ring-2 ring-transparent group-hover:ring-cyan-400 transition-all duration-300">
                              <Image
                                src={category.cardImage}
                                alt={category.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-0.5">
                              {category.name}
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-2">{category.description}</p>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/personal-care-hygiene"
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Personal Care &amp; Hygiene
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/solutions"
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-primary transition-all duration-300 font-medium group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-primary transition-all duration-300 group-hover:w-full"></span>
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
    </>
  );
}
