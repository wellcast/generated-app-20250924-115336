import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl font-display tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Unlock Your Team's</span>
            <span className="block text-indigo-600">True Potential</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-slate-600 sm:text-xl md:mt-8 md:max-w-3xl">
            ClarityPulse helps you understand team sentiment, build targeted surveys, and drive meaningful action. Go from insight to impact, effortlessly.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started for Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg font-medium group"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}