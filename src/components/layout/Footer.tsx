import React from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin } from 'lucide-react';
const footerLinks = {
  Product: [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'API', href: '/developers/api' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Webinars', href: '/webinars' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};
const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];
export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Logo />
            <p className="text-base text-slate-500">
              Understand your team like never before.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-400 hover:text-slate-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-slate-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-slate-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-slate-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {footerLinks.Legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-slate-500 hover:text-slate-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="md:flex md:space-x-6">
            <p className="text-base text-slate-400">&copy; {new Date().getFullYear()} ClarityPulse, Inc. All rights reserved.</p>
            <p className="text-base text-slate-400 mt-2 md:mt-0">Built with ❤️ at Cloudflare</p>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-slate-500">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form
              className="mt-4 sm:flex sm:max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <Input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}