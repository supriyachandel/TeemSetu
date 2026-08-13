import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DashboardMockup from "@/components/DashboardMockup";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "HR Solution",
  description:
    "Simplify everyday HR operations with TeemSetu — manage employees, attendance, leaves, payroll and workforce coordination.",
};

const hrModules = [
  "Employees",
  "Attendance",
  "Leaves",
  "Birthdays",
  "Holidays",
  "Payroll",
  "Projects",
  "Tasks",
  "Reports",
  "Notifications",
  "Chat",
  "Company Branding",
  "Settings",
];

export default function HRSolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="HR Solution"
        title="Simplify Everyday HR Operations"
        description="Manage the complete employee lifecycle — from onboarding to payroll — with tools designed for HR teams."
      />
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl backdrop-blur-md animate-float">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand/5 to-blue-600/5 blur-lg opacity-40 pointer-events-none" />
                <DashboardMockup role="hr" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
                HR Operations Made Effortless
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                HR teams can manage employees, track attendance, process leave
                requests, handle payroll and coordinate projects — all from a
                dedicated dashboard built for HR workflows.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {hrModules.map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {mod}
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-brand to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:scale-105 active:scale-98 transition-all duration-300"
              >
                Explore HR Features
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
