export const siteConfig = {
  name: "Team Setu",
  tagline: "Everything You Need to Run Your Workforce, in One Place.",
  description:
    "Manage employees, attendance, leaves, payroll, projects, tasks, reports and company operations from one centralized platform.",
  loginUrl: "/login",
};

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export const coreFeatures = [
  {
    title: "Employee Management",
    description:
      "Centralize employee profiles, employment details and workforce information.",
    icon: "users",
  },
  {
    title: "Attendance",
    description:
      "Track daily attendance, working hours and attendance history.",
    icon: "clock",
  },
  {
    title: "Leave Management",
    description:
      "Submit, review and approve leave requests with role-based workflows.",
    icon: "calendar",
  },
  {
    title: "Payroll",
    description:
      "Manage payroll-related information and provide employees access to relevant payroll details.",
    icon: "wallet",
  },
  {
    title: "Project Management",
    description: "Create, manage and monitor organizational projects.",
    icon: "folder",
  },
  {
    title: "Task Management",
    description:
      "Assign tasks, track progress and manage team responsibilities.",
    icon: "check",
  },
  {
    title: "Reports & Analytics",
    description:
      "Use dashboards and reports to understand workforce and business activity.",
    icon: "chart",
  },
  {
    title: "Notifications",
    description:
      "Keep employees and managers informed about important activities.",
    icon: "bell",
  },
  {
    title: "Chat",
    description: "Support internal communication within the platform.",
    icon: "chat",
  },
  {
    title: "Roles & Permissions",
    description: "Control access based on user role and responsibilities.",
    icon: "shield",
  },
  {
    title: "Company Branding",
    description: "Customize company-facing platform identity and branding.",
    icon: "palette",
  },
  {
    title: "Subscription",
    description: "Manage organization subscription and plan information.",
    icon: "credit",
  },
];

export const roles = [
  {
    id: "admin",
    title: "Admin",
    tagline: "Powerful administration and organization-wide control.",
    description:
      "Manage your workforce, users, permissions and operations from one platform.",
    href: "/solutions/admin",
    modules: [
      "Employees",
      "Attendance",
      "Leaves",
      "Payroll",
      "Projects",
      "Tasks",
      "Reports",
      "User Management",
      "Roles",
      "Subscription",
      "Company Branding",
      "Settings",
    ],
  },
  {
    id: "hr",
    title: "HR",
    tagline: "Make HR operations effortless.",
    description:
      "Manage employees, attendance, leaves, payroll and HR activities efficiently.",
    href: "/solutions/hr",
    modules: [
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
    ],
  },
  {
    id: "employee",
    title: "Employee",
    tagline: "A simpler workspace for every employee.",
    description:
      "Manage your attendance, leaves, tasks, payroll information and daily work from one place.",
    href: "/solutions/employees",
    modules: [
      "Profile",
      "Attendance",
      "Leave Requests",
      "Holidays",
      "Birthdays",
      "Tasks",
      "Projects",
      "Notifications",
      "Chat",
      "Payroll & Payslips",
    ],
  },
];

export const whyPoints = [
  "Centralized workforce information",
  "Role-based access and permissions",
  "Simple employee self-service",
  "HR and business operations in one platform",
  "Project and task visibility",
  "Reports and dashboards for decision-making",
  "Scalable for growing organizations",
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For small teams getting started with workforce management.",
    target: "Small teams",
    features: [
      "Employee Management",
      "Attendance",
      "Leave Management",
      "Basic Reports",
      "Up to 25 employees",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing companies that need full HR operations.",
    target: "Growing companies",
    features: [
      "Everything in Starter",
      "Payroll",
      "Projects",
      "Tasks",
      "Advanced Reports",
      "Chat",
      "Up to 100 employees",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger organizations with advanced needs.",
    target: "Larger organizations",
    features: [
      "Everything in Professional",
      "Advanced permissions",
      "Company branding",
      "Custom configuration",
      "Dedicated support",
      "Unlimited employees",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const faqs = [
  {
    question: "What is Team Setu?",
    answer:
      "Team Setu is an all-in-one workforce management platform that combines HR management, attendance, leave, payroll, projects, tasks, reporting and company administration in a single system.",
  },
  {
    question: "Who can use the platform?",
    answer:
      "The platform serves business owners and admins, HR teams, managers and employees — each with role-based access tailored to their responsibilities.",
  },
  {
    question: "What can Admins manage?",
    answer:
      "Admins have organization-wide control including user management, roles and permissions, subscriptions, company branding, and access to all modules across the platform.",
  },
  {
    question: "What can HR manage?",
    answer:
      "HR teams can manage employees, attendance, leaves, payroll, projects, tasks, reports and internal communication — all from a dedicated HR dashboard.",
  },
  {
    question: "Can employees manage leave and attendance themselves?",
    answer:
      "Yes. Employees can mark attendance, submit leave requests, view holidays, track tasks and access payroll information through a self-service employee portal.",
  },
  {
    question: "Does the platform support payroll?",
    answer:
      "Yes. Payroll management is available on Professional and Enterprise plans, allowing HR to manage payroll information and employees to access relevant payroll details.",
  },
  {
    question: "Can roles and permissions be customized?",
    answer:
      "Yes. Admins can configure roles and permissions to control access based on each user's responsibilities within the organization.",
  },
  {
    question: "Can the platform support growing teams?",
    answer:
      "Absolutely. Team Setu is designed to scale from small teams to large organizations with flexible subscription plans and enterprise-grade features.",
  },
];

export const featureShowcases = [
  {
    title: "Employee Management",
    description:
      "Keep all employee profiles, employment details and workforce data in one centralized place. HR and admins get a complete view of the organization at a glance.",
    items: ["Employee profiles", "Department management", "Employment history"],
  },
  {
    title: "Attendance & Leave",
    description:
      "Track daily attendance and manage leave workflows with role-based approvals. Employees can request leave and view their attendance history self-service.",
    items: ["Daily attendance tracking", "Leave request workflows", "Holiday calendar"],
  },
  {
    title: "Payroll",
    description:
      "Manage payroll-related information and give employees secure access to their payroll details and payslips through the employee portal.",
    items: ["Payroll management", "Payslip access", "Salary information"],
  },
  {
    title: "Projects & Tasks",
    description:
      "Create projects, assign tasks and track team progress. Managers get visibility into project status and individual task completion.",
    items: ["Project creation", "Task assignment", "Progress tracking"],
  },
  {
    title: "Reports & Analytics",
    description:
      "Use dashboards and reports to understand workforce activity, attendance trends, leave patterns and business performance.",
    items: ["Workforce dashboards", "Attendance reports", "Custom analytics"],
  },
];

export const resources = [
  {
    title: "Getting Started with HRMS",
    category: "Guide",
    excerpt:
      "A step-by-step guide to setting up your organization on Team Setu.",
    date: "Jul 15, 2026",
  },
  {
    title: "Best Practices for Leave Management",
    category: "HR Guide",
    excerpt:
      "How to configure leave policies and workflows that work for your team.",
    date: "Jul 8, 2026",
  },
  {
    title: "Role-Based Access: A Complete Guide",
    category: "Guide",
    excerpt:
      "Understanding roles and permissions for Admin, HR and Employee access.",
    date: "Jun 28, 2026",
  },
  {
    title: "5 Ways to Improve Employee Self-Service",
    category: "HR Guide",
    excerpt:
      "Reduce HR workload by empowering employees with self-service tools.",
    date: "Jun 20, 2026",
  },
];
