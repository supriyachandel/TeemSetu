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

      <section className="py-24">
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
          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-flex items-center rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:border-brand/30 hover:shadow-md"
            >
              View all features
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {homepageShowcases.map((showcase, i) => (
        <section
          key={showcase.title}
          className={`py-24 ${i % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                  Feature Highlight
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                  {showcase.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  {showcase.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {showcase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-brand-dark"
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
                className={`rounded-2xl border border-border bg-white p-3 shadow-xl shadow-brand-dark/5 ${
                  i % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <DashboardMockup
                  role={i === 2 ? "employee" : i === 1 ? "hr" : "admin"}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-brand-dark py-24 text-white">
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
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <span className="text-3xl font-bold text-brand-light">{item.step}</span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
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
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium leading-relaxed text-brand-dark">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
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
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="text-sm font-semibold text-brand hover:text-brand-dark"
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
