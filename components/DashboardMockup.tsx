type Role = "admin" | "hr" | "employee";

const roleConfig: Record<
  Role,
  { title: string; nav: string[]; stats: { label: string; value: string }[] }
> = {
  admin: {
    title: "Admin Dashboard",
    nav: ["Employees", "Attendance", "Leaves", "Payroll", "Projects", "Reports", "Settings"],
    stats: [
      { label: "Total Employees", value: "248" },
      { label: "Present Today", value: "231" },
      { label: "Pending Leaves", value: "12" },
      { label: "Active Projects", value: "18" },
    ],
  },
  hr: {
    title: "HR Dashboard",
    nav: ["Employees", "Attendance", "Leaves", "Payroll", "Birthdays", "Holidays", "Reports"],
    stats: [
      { label: "Employees", value: "248" },
      { label: "On Leave", value: "8" },
      { label: "Leave Requests", value: "5" },
      { label: "Payroll Due", value: "3 days" },
    ],
  },
  employee: {
    title: "Employee Portal",
    nav: ["My Profile", "Attendance", "Leave", "Tasks", "Projects", "Payslips", "Chat"],
    stats: [
      { label: "Attendance", value: "96%" },
      { label: "Leave Balance", value: "12 days" },
      { label: "Active Tasks", value: "4" },
      { label: "Projects", value: "2" },
    ],
  },
};

export default function DashboardMockup({ role = "admin" }: { role?: Role }) {
  const config = roleConfig[role];

  return (
    <div
      className="flex overflow-hidden rounded-lg bg-white"
      role="img"
      aria-label={`${config.title} interface mockup showing workforce management modules`}
    >
      <aside className="hidden w-36 shrink-0 bg-brand-dark p-3 sm:block">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-brand-accent" />
          <span className="text-xs font-semibold text-white">Team Setu</span>
        </div>
        <ul className="space-y-1">
          {config.nav.map((item, i) => (
            <li
              key={item}
              className={`rounded px-2 py-1.5 text-xs ${
                i === 0
                  ? "bg-brand/30 font-medium text-white"
                  : "text-white/60"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0 flex-1 p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-brand-dark">{config.title}</h3>
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded-full bg-brand-accent/30" />
            <div className="hidden h-6 w-6 rounded-full bg-surface sm:block" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {config.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-surface p-2 sm:p-3"
            >
              <p className="text-[10px] text-muted sm:text-xs">{stat.label}</p>
              <p className="mt-0.5 text-sm font-bold text-brand-dark sm:text-lg">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-border p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-brand-dark">Recent Activity</span>
            <span className="text-[10px] text-brand">View all</span>
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-accent" />
                <div className="h-2 flex-1 rounded bg-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
