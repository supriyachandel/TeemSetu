import type { Metadata } from "next";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";
import { coreFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Everything You Need to Manage Your Workforce | TeemSetu",
  description:
    "A centralized HRMS platform designed to simplify employee management, automate HR processes, improve team collaboration and provide managers with complete visibility into their workforce.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* 1. SECTION HEADER */}
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-slate-50/50 py-16 text-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand/5 blur-3xl opacity-45 pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            12+ Integrated HR & Workforce Management Modules
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
            Everything You Need to Manage Your Workforce
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-500 font-semibold">
            A centralized HRMS platform designed to simplify employee management, automate HR processes, improve team collaboration and provide managers with complete visibility into their workforce.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400 font-semibold">
            From employee information and attendance to leave, payroll, projects, communication and analytics — manage your organization's everyday operations from one connected platform.
          </p>
        </div>
      </section>

      {/* 2. FEATURE CARDS GRID */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL SECTION: Built for Modern Workforce Management */}
      <section className="border-t border-slate-200/60 bg-slate-50/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
              Built for Modern Workforce Management
            </h2>
            <p className="mt-4 text-base text-slate-500 font-semibold leading-relaxed">
              Bring your people, processes and workforce operations together in one connected HRMS platform.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Box 1 */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h6" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800">Centralized Employee Data</h3>
              <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                Keep employee information, documents and employment records organized in one secure location.
              </p>
            </div>

            {/* Box 2 */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800">Simplified HR Workflows</h3>
              <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                Streamline everyday processes such as leave requests, approvals, attendance and employee management.
              </p>
            </div>

            {/* Box 3 */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800">Better Team Productivity</h3>
              <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                Connect projects, tasks, communication and workforce activity to improve collaboration and accountability.
              </p>
            </div>

            {/* Box 4 */}
            <div className="rounded-xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand mb-4">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-slate-800">Data-Driven Decisions</h3>
              <p className="mt-2 text-sm text-slate-500 font-semibold leading-relaxed">
                Use reports and workforce insights to understand organizational activity and make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="See These Features in Action"
        description="Book a personalized demo and explore how TeemSetu can transform your workforce management."
      />
    </>
  );
}
