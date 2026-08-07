"use client";

import { useState } from "react";
import DashboardMockup from "./DashboardMockup";
import SectionHeader from "./SectionHeader";
import { roles } from "@/lib/data";

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const activeRole = roles[active];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Preview"
          title="See the Platform in Action"
          description="Explore how Admin, HR and Employee dashboards work together in one unified platform."
        />

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-xl border border-border bg-surface p-1.5 shadow-sm">
            {roles.map((role, i) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? "bg-brand-dark text-white shadow-sm"
                    : "text-muted hover:text-brand-dark"
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-brand-dark">
              {activeRole.title} Experience
            </h3>
            <p className="mt-2 text-lg font-medium text-brand">
              {activeRole.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-muted">{activeRole.description}</p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {activeRole.modules.slice(0, 8).map((mod) => (
                <li
                  key={mod}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-brand-dark"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {mod}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl border border-border bg-white p-3 shadow-xl shadow-brand-dark/5">
              <DashboardMockup role={activeRole.id as "admin" | "hr" | "employee"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
