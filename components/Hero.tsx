import Link from "next/link";
import DashboardMockup from "./DashboardMockup";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-sm font-medium text-brand">
              Workforce Management Platform
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
              Everything You Need to Run Your{" "}
              <span className="text-brand">Workforce</span>, in One Place
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-3 text-sm font-medium text-brand-dark/70">
              {siteConfig.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-light hover:shadow-md"
              >
                Book a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-8 py-3.5 text-sm font-semibold text-brand-dark shadow-sm transition-all hover:border-brand-dark/20 hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free onboarding support
              </span>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-brand/10 to-brand-dark/5 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-white p-3 shadow-2xl shadow-brand-dark/10">
              <DashboardMockup role="admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
