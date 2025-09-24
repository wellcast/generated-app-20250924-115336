import React from 'react';
import { motion } from 'framer-motion';
const testimonials = [
  {
    quote:
      "ClarityPulse transformed how we approach employee feedback. We've seen a 40% increase in engagement since we started using it. The insights are invaluable.",
    author: 'Sarah Johnson',
    title: 'VP of People, TechCorp',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote:
      "The platform is incredibly intuitive. We went from signing up to sending our first survey in under an hour. It's a game-changer for our HR team.",
    author: 'Michael Chen',
    title: 'HR Director, Innovate Inc.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    quote:
      "Finally, a tool that gives us actionable data, not just more charts. The suggested actions have helped us make real, positive changes in our workplace culture.",
    author: 'Emily Rodriguez',
    title: 'CEO, Growth Solutions',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">
            Loved by HR Leaders Worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
            >
              <blockquote className="flex flex-col h-full">
                <p className="text-lg text-slate-700 flex-grow">"{testimonial.quote}"</p>
                <footer className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.author} />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-slate-900">{testimonial.author}</div>
                      <div className="text-base text-slate-500">{testimonial.title}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}