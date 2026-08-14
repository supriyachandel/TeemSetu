import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { roles } from "@/lib/data";

export default function RoleSection() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Solutions"
          title="One Platform for Every Role"
          description="Whether you're an admin, HR professional or employee, TeemSetu gives you the tools you need."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-emerald-600 text-xl font-bold text-white shadow-lg shadow-brand/20">
                {role.title[0]}
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-slate-800">{role.title}</h3>
              <p className="mt-2 text-sm font-bold text-brand">{role.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                {role.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                {role.modules.slice(0, 5).map((mod) => (
                  <li key={mod} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <svg className="h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {mod}
                  </li>
                ))}
              </ul>
              <Link
                href={role.href}
                className="mt-8 inline-flex items-center text-sm font-bold text-brand transition-colors group-hover:text-brand-light"
              >
                Explore {role.title} Solution
                <svg className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
