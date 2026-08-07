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
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">
                Organization-Wide Visibility
              </h2>
              <p className="mt-4 text-muted">
                Admins get full access to every module in the platform. Configure
                roles and permissions, manage subscriptions, customize company
                branding and maintain complete oversight of workforce operations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {adminModules.map((mod) => (
                  <div
                    key={mod}
                    className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-brand-dark"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {mod}
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Explore Admin Features
              </Link>
            </div>
            <div className="rounded-xl border border-border bg-white p-2 shadow-lg">
              <DashboardMockup role="admin" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
