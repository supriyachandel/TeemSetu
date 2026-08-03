import Link from "next/link";
import DashboardMockup from "./DashboardMockup";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface"
              >
                Book a Demo
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
              <DashboardMockup role="admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
