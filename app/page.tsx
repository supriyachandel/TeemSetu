import Link from "next/link";
import Hero from "@/components/Hero";
import DashboardShowcase from "@/components/DashboardShowcase";
import RoleSection from "@/components/RoleSection";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import DashboardMockup from "@/components/DashboardMockup";
import {
  coreFeatures,
  whyPoints,
  pricingPlans,
  featureShowcases,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <DashboardShowcase />
      <RoleSection />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Everything You Need to Manage Your Workforce
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              A complete suite of HR and workforce management tools built for
              modern organizations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {coreFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                href="/features"
              />
            ))}
          </div>
        </div>
      </section>

      {featureShowcases.map((showcase, i) => (
        <section
          key={showcase.title}
          className={`py-20 ${i % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-3xl font-bold text-brand-dark">
                  {showcase.title}
                </h2>
                <p className="mt-4 text-lg text-muted">{showcase.description}</p>
                <ul className="mt-6 space-y-2">
                  {showcase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-brand-dark"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`rounded-xl border border-border bg-white p-2 shadow-md ${
                  i % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <DashboardMockup
                  role={
                    i === 4 ? "admin" : i === 3 ? "hr" : i === 2 ? "employee" : "admin"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              One Platform. Three Powerful Experiences.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Admin, HR and Employee workflows connect seamlessly — from
              organization setup to daily self-service.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Admin Sets Up",
                desc: "Configure organization, roles, permissions and subscriptions.",
              },
              {
                step: "2",
                title: "HR Manages",
                desc: "Handle employees, attendance, leaves, payroll and projects.",
              },
              {
                step: "3",
                title: "Employees Self-Serve",
                desc: "Access attendance, leave, tasks, payslips and communication.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-lg font-bold text-brand-dark">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Why Team Setu
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-5"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-brand-dark">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Simple, Transparent Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Choose the plan that fits your organization. Upgrade as you grow.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="mt-8 text-center">
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
