"use client";

import { useState } from "react";
import { FeatureIcon } from "./icons";

type FeatureCardProps = {
  title: string;
  description: string;
  overview: string;
  icon: string;
  keyFeatures: string[];
  benefits: string[];
  accessRoles: string[];
  href?: string;
};

export default function FeatureCard({
  title,
  description,
  overview,
  icon,
  keyFeatures,
  benefits,
  accessRoles,
}: FeatureCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Feature Card container clickable to trigger detail view modal */}
      <div 
        onClick={() => setIsOpen(true)}
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl shadow-sm cursor-pointer select-none"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-brand transition-all group-hover:bg-brand group-hover:text-white group-hover:border-brand shadow-sm">
          <FeatureIcon name={icon} className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-base font-extrabold text-slate-800">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 font-semibold">{description}</p>
        <div className="mt-5 inline-flex items-center text-sm font-bold text-brand transition-colors hover:text-brand-light">
          Explore Module
          <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 animate-fadeIn">
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl p-6 md:p-8 animate-scaleIn max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-brand shadow-sm">
                  <FeatureIcon name={icon} className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800">{title}</h2>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand mt-0.5">HRMS Module</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close details"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-6 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 font-semibold">{overview}</p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features</h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-semibold">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Benefits</h4>
                <ul className="mt-3 space-y-2">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 font-semibold">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Access Roles */}
              <div className="border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Who Can Use It</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {accessRoles.map((role, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center rounded-full bg-slate-50 border border-slate-200/85 px-3 py-1 text-xs font-bold text-slate-600 shadow-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 flex justify-end border-t border-slate-100 pt-5">
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-brand hover:bg-brand-light text-white px-6 py-2.5 text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
