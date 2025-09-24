import React from 'react';
import { BarChart, MessageSquare, Zap, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
const features = [
  {
    name: 'Gauge Sentiment',
    description: 'Quickly get a pulse on employee morale and willingness to provide open feedback.',
    icon: BarChart,
  },
  {
    name: 'Build Smart Surveys',
    description: 'Create and deploy targeted surveys with an intuitive builder and approval workflows.',
    icon: MessageSquare,
  },
  {
    name: 'Actionable Insights',
    description: 'Our platform analyzes results and suggests concrete actions to improve engagement.',
    icon: Zap,
  },
  {
    name: 'Track Progress',
    description: 'Follow up with employees and measure the impact of your initiatives over time.',
    icon: CheckCircle,
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
      delay: i * 0.1,
    },
  }),
};
export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A better way to listen to your team
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            ClarityPulse provides everything you need to foster a culture of open communication and continuous improvement.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-5">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-slate-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}