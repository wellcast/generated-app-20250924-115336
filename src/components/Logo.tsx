import React from 'react';
export function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      <svg
        className="h-8 w-8 text-indigo-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
      <span className="font-bold text-2xl font-display text-slate-900">
        ClarityPulse
      </span>
    </div>
  );
}