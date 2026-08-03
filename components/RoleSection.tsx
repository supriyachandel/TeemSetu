import Link from "next/link";
import { roles } from "@/lib/data";

export default function RoleSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark">
            One Platform for Every Role
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Whether you&apos;re an admin, HR professional or employee, Team Setu
            gives you the tools you need.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.id}
              className="flex flex-col rounded-xl border border-border bg-white p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-dark text-lg font-bold text-white">
                {role.title[0]}
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                {role.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand">
                {role.tagline}
              </p>
              <p className="mt-3 flex-1 text-sm text-muted">{role.description}</p>
              <ul className="mt-4 space-y-1">
                {role.modules.slice(0, 5).map((mod) => (
                  <li key={mod} className="flex items-center gap-2 text-sm text-brand-dark">
                    <svg className="h-4 w-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {mod}
                  </li>
                ))}
              </ul>
              <Link
                href={role.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Explore {role.title} Solution
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
