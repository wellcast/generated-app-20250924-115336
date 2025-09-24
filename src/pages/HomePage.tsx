import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
function CallToActionSection() {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          No credit card required. Cancel anytime.
        </p>
        <Button
          size="lg"
          className="mt-8 w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-50 text-lg font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          Get Started Free
        </Button>
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}