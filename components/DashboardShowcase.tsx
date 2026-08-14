"use client";

import { useState } from "react";
import DashboardMockup from "./DashboardMockup";
import SectionHeader from "./SectionHeader";
import { roles } from "@/lib/data";

export default function DashboardShowcase() {
  const [active, setActive] = useState(0);
  const activeRole = roles[active];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Product Preview"
          title="See the Platform in Action"
          description="Explore how Admin, HR and Employee dashboards work together in one unified platform."
        />

        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-100/60 p-1.5 shadow-sm backdrop-blur-md">
            {roles.map((role, i) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active === i
                    ? "bg-brand text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-black text-slate-800">
              {activeRole.title} Experience
            </h3>
            <p className="mt-2 text-lg font-semibold text-brand">
              {activeRole.tagline}
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">{activeRole.description}</p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {activeRole.modules.slice(0, 8).map((mod) => (
                <li
                  key={mod}
                  className="flex items-center gap-2.5 rounded-lg border border-slate-100 bg-white px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-200 transition-all duration-200 shadow-sm"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {mod}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-blue-600/5 blur-2xl opacity-40 rounded-2xl animate-glow" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 p-3 shadow-xl backdrop-blur-sm animate-float">
              <DashboardMockup role={activeRole.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
