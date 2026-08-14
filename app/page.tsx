import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import DashboardShowcase from "@/components/DashboardShowcase";
import RoleSection from "@/components/RoleSection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SectionHeader from "@/components/SectionHeader";
import DashboardMockup from "@/components/DashboardMockup";
import {
  coreFeatures,
  whyPoints,
  pricingPlans,
  featureShowcases,
} from "@/lib/data";

const homepageShowcases = featureShowcases.slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DashboardShowcase />
      <RoleSection />

      {/* Core Features Grid */}
      <section className="py-24 relative border-b border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Features"
            title="Everything You Need to Manage Your Workforce"
            description="A complete suite of HR and workforce management tools built for modern organizations."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreFeatures.slice(0, 8).map((feature) => (
              <FeatureCard key={feature.title} {...feature} href="/features" />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all hover:bg-slate-50 hover:border-brand/40 hover:text-brand hover:scale-105 active:scale-98"
            >
              View all features
              <svg className="ml-2 h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Showcases */}
      {homepageShowcases.map((showcase, i) => (
        <section
          key={showcase.title}
          className={`py-24 border-b border-slate-200/60 relative ${
            i % 2 === 1 ? "bg-slate-50/50 backdrop-blur-sm" : "bg-white"
          }`}
        >
          {/* Subtle background blob for visual richness */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-brand/5 blur-3xl opacity-30 pointer-events-none animate-glow" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <p className="text-sm font-bold uppercase tracking-widest text-brand">
                  Feature Highlight
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
                  {showcase.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-500 font-semibold">
                  {showcase.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {showcase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-slate-700"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative rounded-2xl border border-slate-200 bg-white p-3 shadow-xl backdrop-blur-md animate-float ${
                  i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand/5 to-blue-600/5 blur-xl opacity-40 pointer-events-none" />
                <DashboardMockup
                  role={i === 2 ? "employee" : i === 1 ? "hr" : "admin"}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* How It Works Step cards */}
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-24 text-slate-800 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl opacity-30 pointer-events-none animate-glow" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="One Platform. Three Powerful Experiences."
            description="Admin, HR and Employee workflows connect seamlessly — from organization setup to daily self-service."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Admin Sets Up",
                desc: "Configure organization, roles, permissions and subscriptions.",
              },
              {
                step: "02",
                title: "HR Manages",
                desc: "Handle employees, attendance, leaves, payroll and projects.",
              },
              {
                step: "03",
                title: "Employees Self-Serve",
                desc: "Access attendance, leave, tasks, payslips and communication.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand/40 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand/5"
              >
                <span className="text-3xl font-extrabold text-brand-light bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">{item.step}</span>
                <h3 className="mt-4 text-xl font-extrabold text-slate-800">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TeemSetu points */}
      <section className="py-24 relative border-b border-slate-200/60 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why TeemSetu"
            title="Built for Growing Organizations"
            description="Everything you need to manage your workforce efficiently, securely and at scale."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point) => (
              <div
                key={point}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-xl shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-bold leading-relaxed text-slate-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b border-slate-200/60 bg-slate-50/50 py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple, Transparent Pricing"
            description="Choose the plan that fits your organization. Upgrade as you grow."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-center">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/pricing"
              className="text-sm font-bold text-brand hover:text-brand-light transition-colors"
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
