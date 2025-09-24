import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Scan, Edit3, Send, TrendingUp } from 'lucide-react';
const steps = [
  {
    name: '1. Pulse Check',
    description: 'Start with a quick sentiment check to gauge overall mood and openness.',
    icon: Scan,
  },
  {
    name: '2. Build & Approve',
    description: 'Craft targeted surveys on the fly. Get them approved with a simple workflow.',
    icon: Edit3,
  },
  {
    name: '3. Deploy & Analyze',
    description: 'Send surveys to everyone. Our AI provides instant insights and action plans.',
    icon: Send,
  },
  {
    name: '4. Act & Follow Up',
    description: 'Implement suggested actions and track their impact with continuous feedback loops.',
    icon: TrendingUp,
  },
];
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">
            How ClarityPulse Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From initial sentiment to measurable impact in four simple steps.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                className="text-center"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariants}
              >
                <div className="flex items-center justify-center mx-auto h-16 w-16 rounded-full bg-white shadow-md border border-slate-200">
                  <step.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-slate-900">{step.name}</h3>
                <p className="mt-2 text-base text-slate-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}