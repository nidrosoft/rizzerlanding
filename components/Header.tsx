'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'Story', href: '/story' },
    { label: 'How It Works', id: 'why-rizzer' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="/images/rizzer-logo.png"
              alt="Rizzer Logo"
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-rizzer-pink transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => item.id && scrollToSection(item.id)}
                  className="text-gray-700 hover:text-rizzer-pink transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            <button
              onClick={() => scrollToSection('download')}
              className="btn-gradient text-white px-6 py-2.5 rounded-full font-semibold shadow-lg"
            >
              Download Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-rizzer-pink transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white"
            >
              <div className="py-6 space-y-2 border-t border-gray-100 mt-4">
                {navItems.map((item) => (
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block w-full text-left text-gray-700 hover:text-rizzer-pink hover:bg-pink-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => item.id && scrollToSection(item.id)}
                      className="block w-full text-left text-gray-700 hover:text-rizzer-pink hover:bg-pink-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                    >
                      {item.label}
                    </button>
                  )
                ))}
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection('download')}
                    className="btn-gradient text-white px-6 py-3 rounded-full font-semibold shadow-lg w-full"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
