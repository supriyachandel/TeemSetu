import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DashboardMockup from "@/components/DashboardMockup";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Admin Solution",
  description:
    "Complete organization-wide control with TeemSetu Admin dashboard — users, roles, permissions, subscriptions and more.",
};

const adminModules = [
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
  "User Management",
  "Roles",
  "Subscription",
  "Company Branding",
  "Settings",
];

export default function AdminSolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admin Solution"
        title="Complete Control Over Your Organization"
        description="Manage users, permissions, subscriptions and every aspect of your workforce from a powerful admin dashboard."
      />
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
                Organization-Wide Visibility
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                Admins get full access to every module in the platform. Configure
                roles and permissions, manage subscriptions, customize company
                branding and maintain complete oversight of workforce operations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {adminModules.map((mod) => (
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
                Explore Admin Features
              </Link>
            </div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl backdrop-blur-md animate-float">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand/5 to-blue-600/5 blur-lg opacity-40 pointer-events-none" />
              <DashboardMockup role="admin" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
