import React, { useState, useEffect } from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
];
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="ClarityPulse Home">
            <Logo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-base font-medium">
              Log In
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-base font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              Get Started Free
            </Button>
          </div>
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-slate-200 px-5 space-y-3">
              <Button variant="ghost" className="w-full justify-start text-base font-medium">
                Log In
              </Button>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-base font-medium">
                Get Started Free
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}