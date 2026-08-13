import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { roles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover how TeemSetu serves Admins, HR teams, Managers and Employees with role-based workforce management.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Built for Every Role in Your Organization"
        description="From organization-wide administration to employee self-service, each role gets a tailored experience."
      />
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.id}
                href={role.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-emerald-600 text-xl font-bold text-white shadow-lg shadow-brand/20">
                  {role.title[0]}
                </div>
                <h2 className="mt-6 text-2xl font-extrabold text-slate-800 transition-colors group-hover:text-brand">
                  {role.title} Solution
                </h2>
                <p className="mt-2 text-sm font-bold text-brand">{role.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium">{role.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-bold text-brand transition-colors group-hover:text-brand-light">
                  Learn more
                  <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
