"use client";

import { useState } from "react";
import DashboardMockup from "./DashboardMockup";
import { roles } from "@/lib/data";

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const activeRole = roles[active];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-dark">
            See the Product in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Explore how Admin, HR and Employee dashboards work together in one
            unified platform.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-surface p-1">
            {roles.map((role, i) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  active === i
                    ? "bg-brand text-white shadow-sm"
                    : "text-muted hover:text-brand-dark"
                }`}
              >
                {role.title} Dashboard
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-2 shadow-md">
            <DashboardMockup role={activeRole.id as "admin" | "hr" | "employee"} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-dark">
              {activeRole.title} Experience
            </h3>
            <p className="mt-2 text-lg font-medium text-brand">
              {activeRole.tagline}
            </p>
            <p className="mt-4 text-muted">{activeRole.description}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2">
              {activeRole.modules.slice(0, 8).map((mod) => (
                <li
                  key={mod}
                  className="flex items-center gap-2 text-sm text-brand-dark"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  {mod}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
