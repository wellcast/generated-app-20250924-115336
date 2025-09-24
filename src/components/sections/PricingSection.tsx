import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
const tiers = [
  {
    name: 'Starter',
    price: '29',
    description: 'For small teams getting started with employee feedback.',
    features: [
      'Up to 50 employees',
      'Sentiment analysis',
      'Basic survey templates',
      'Email support',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '79',
    description: 'For growing companies that need more power and customization.',
    features: [
      'Up to 250 employees',
      'Advanced survey builder',
      'AI-powered insights',
      'Approval workflows',
      'Priority support',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs and security requirements.',
    features: [
      'Unlimited employees',
      'Custom integrations',
      'Dedicated account manager',
      'Single Sign-On (SSO)',
      'Advanced security',
    ],
    isPopular: false,
  },
];
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};
export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Choose the plan that's right for your organization.
          </p>
        </div>
        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-x-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={cn(
                'relative flex flex-col rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
                tier.isPopular ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-slate-200'
              )}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
            >
              <div className="p-8">
                {tier.isPopular && (
                  <div className="absolute top-0 -translate-y-1/2">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-4 text-slate-500">{tier.description}</p>
                <div className="mt-6">
                  {tier.price === 'Custom' ? (
                    <p className="text-5xl font-extrabold text-slate-900">Custom</p>
                  ) : (
                    <p className="text-5xl font-extrabold text-slate-900">
                      ${tier.price}
                      <span className="text-base font-medium text-slate-500">/mo</span>
                    </p>
                  )}
                </div>
              </div>
              <div className="p-8 pt-0 flex-1 flex flex-col justify-between">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-teal-500" />
                      </div>
                      <p className="ml-3 text-base text-slate-600">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    className={cn(
                      'w-full text-lg',
                      tier.isPopular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    )}
                  >
                    {tier.price === 'Custom' ? 'Contact Sales' : 'Choose Plan'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}