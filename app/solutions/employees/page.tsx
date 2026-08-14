import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import DashboardMockup from "@/components/DashboardMockup";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Employee Solution",
  description:
    "Give employees everything they need — self-service attendance, leave requests, tasks, projects, notifications, chat and payroll access.",
};

const employeeCapabilities = [
  "Profile management",
  "Attendance tracking",
  "Leave requests",
  "Holiday calendar",
  "Birthday reminders",
  "Task management",
  "Project visibility",
  "Notifications",
  "Internal chat",
  "Payroll & payslip access",
];

export default function EmployeeSolutionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Employee Solution"
        title="Give Employees Everything They Need"
        description="Empower your team with self-service tools that reduce dependency on HR for routine requests."
      />
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">
                A Simpler Workspace for Every Employee
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed font-medium">
                Employees get a clean, intuitive portal to manage their daily
                work — mark attendance, request leave, track tasks, view payslips
                and stay connected with their team.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {employeeCapabilities.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {cap}
                  </div>
                ))}
              </div>
              <Link
                href="/features"
                className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-brand to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:scale-105 active:scale-98 transition-all duration-300"
              >
                Explore Employee Features
              </Link>
            </div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl backdrop-blur-md animate-float">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand/5 to-blue-600/5 blur-lg opacity-40 pointer-events-none" />
              <DashboardMockup role="employee" />
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
