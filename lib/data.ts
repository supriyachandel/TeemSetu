export const siteConfig = {
  name: "TeemSetu",
  tagline: "Connecting Teams, Building Futures.",
  description:
    "Manage employees, attendance, leaves, payroll, projects, tasks, reports and company operations from one centralized platform.",
  loginUrl: "https://teemsetu-admin-api-rosy.vercel.app/",
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
    description: "Manage complete employee profiles, employment information and workforce records from one centralized platform.",
    overview: "Centralize all employee information in one secure and organized location.",
    icon: "users",
    keyFeatures: [
      "Employee directory",
      "Personal information",
      "Contact information",
      "Employment details",
      "Department management",
      "Designation management",
      "Joining date and employment status",
      "Employee documents",
      "Employee history",
      "Search and filtering",
      "Active/inactive employee management"
    ],
    benefits: [
      "Centralized workforce information",
      "Faster access to employee records",
      "Reduced manual record keeping",
      "Better employee data organization"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Attendance",
    description: "Track daily attendance, working hours and attendance history with clear visibility into employee availability.",
    overview: "Monitor employee attendance and working patterns while maintaining a complete attendance history.",
    icon: "clock",
    keyFeatures: [
      "Daily attendance",
      "Check-in and check-out",
      "Working hours",
      "Late arrivals",
      "Early departures",
      "Attendance history",
      "Attendance status",
      "Employee-wise attendance",
      "Department-wise attendance",
      "Attendance reports"
    ],
    benefits: [
      "Better workforce visibility",
      "Accurate attendance tracking",
      "Easier attendance monitoring",
      "Improved workforce planning"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Leave Management",
    description: "Submit, review and approve employee leave requests through structured role-based workflows.",
    overview: "Simplify the complete leave process for employees, managers and administrators.",
    icon: "calendar",
    keyFeatures: [
      "Leave application",
      "Leave approval workflow",
      "Leave rejection",
      "Leave balance",
      "Leave history",
      "Pending requests",
      "Approval status",
      "Manager approvals",
      "Leave types",
      "Employee-wise leave records"
    ],
    benefits: [
      "Faster leave approvals",
      "Transparent leave status",
      "Reduced manual coordination",
      "Better leave tracking"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Payroll",
    description: "Manage employee salary information, payroll records, allowances and deductions securely.",
    overview: "Keep payroll-related employee information organized while providing authorized users with access to relevant salary details.",
    icon: "wallet",
    keyFeatures: [
      "Salary information",
      "Compensation details",
      "Allowances",
      "Deductions",
      "Payroll records",
      "Employee salary history",
      "Payroll access control",
      "Payroll-related reports"
    ],
    benefits: [
      "Centralized payroll information",
      "Better salary record management",
      "Improved data accessibility",
      "Secure payroll visibility"
    ],
    accessRoles: ["Administrator", "HR Manager", "Employee (View own records)"]
  },
  {
    title: "Project Management",
    description: "Create, manage and monitor organizational projects while keeping teams aligned with project goals.",
    overview: "Manage projects, team members, deadlines and progress from a centralized workspace.",
    icon: "folder",
    keyFeatures: [
      "Project creation",
      "Project assignment",
      "Team assignment",
      "Project timelines",
      "Project status",
      "Progress tracking",
      "Project ownership",
      "Project overview",
      "Team visibility"
    ],
    benefits: [
      "Better project visibility",
      "Clear ownership",
      "Improved collaboration",
      "Easier project monitoring"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Task Management",
    description: "Assign tasks, define priorities and deadlines, track progress and manage team responsibilities.",
    overview: "Give managers and employees a structured way to organize daily responsibilities and monitor task completion.",
    icon: "check",
    keyFeatures: [
      "Task creation",
      "Task assignment",
      "Priority management",
      "Deadlines",
      "Task status",
      "Progress tracking",
      "Assigned employee",
      "Task history",
      "Team responsibilities"
    ],
    benefits: [
      "Better accountability",
      "Clear responsibilities",
      "Improved productivity",
      "Easier progress tracking"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Reports & Analytics",
    description: "Use dashboards and reports to understand workforce activity, attendance, leave and organizational performance.",
    overview: "Convert HR and workforce information into meaningful insights that help managers make better decisions.",
    icon: "chart",
    keyFeatures: [
      "Workforce reports",
      "Attendance reports",
      "Leave reports",
      "Employee analytics",
      "Project analytics",
      "Task analytics",
      "Workforce trends",
      "Management dashboards",
      "Data filtering"
    ],
    benefits: [
      "Better decision-making",
      "Improved workforce visibility",
      "Faster reporting",
      "Data-driven management"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager"]
  },
  {
    title: "Notifications",
    description: "Keep employees and managers informed about important activities, updates and workflow events.",
    overview: "Provide timely notifications for important actions across the HRMS platform.",
    icon: "bell",
    keyFeatures: [
      "Leave notifications",
      "Approval notifications",
      "Task notifications",
      "Project updates",
      "Attendance notifications",
      "Important announcements",
      "System notifications",
      "Notification history"
    ],
    benefits: [
      "Faster communication",
      "Fewer missed updates",
      "Better workflow visibility",
      "Improved employee awareness"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Chat",
    description: "Enable internal communication between employees, managers and teams directly within the platform.",
    overview: "Provide a centralized communication channel for quick discussions, updates and collaboration.",
    icon: "chat",
    keyFeatures: [
      "Employee-to-employee communication",
      "Manager communication",
      "Team conversations",
      "Internal messaging",
      "Conversation history",
      "Quick communication"
    ],
    benefits: [
      "Faster internal communication",
      "Better collaboration",
      "Reduced dependency on external communication tools"
    ],
    accessRoles: ["Administrator", "HR Manager", "Manager", "Employee"]
  },
  {
    title: "Roles & Permissions",
    description: "Control access to HRMS features and information based on user roles and organizational responsibilities.",
    overview: "Ensure users only have access to the modules and information relevant to their responsibilities.",
    icon: "shield",
    keyFeatures: [
      "Role-based access",
      "Admin permissions",
      "Manager permissions",
      "Employee permissions",
      "Module-level access",
      "View permissions",
      "Create permissions",
      "Edit permissions",
      "Delete permissions",
      "Approval permissions"
    ],
    benefits: [
      "Better security",
      "Controlled access",
      "Clear responsibilities",
      "Reduced unauthorized access"
    ],
    accessRoles: ["Administrator"]
  },
  {
    title: "Company Branding",
    description: "Customize the platform with your organization's identity, branding and company information.",
    overview: "Create a consistent company experience by configuring organization-facing branding elements.",
    icon: "palette",
    keyFeatures: [
      "Company name",
      "Company logo",
      "Brand identity",
      "Company information",
      "Organization profile",
      "Platform customization"
    ],
    benefits: [
      "Professional company experience",
      "Consistent branding",
      "Stronger organizational identity"
    ],
    accessRoles: ["Administrator", "HR Manager"]
  },
  {
    title: "Subscription",
    description: "Manage your organization's subscription plan, account information and available platform features.",
    overview: "Provide administrators with visibility into their organization's HRMS subscription and plan-related information.",
    icon: "credit",
    keyFeatures: [
      "Current plan",
      "Subscription status",
      "Plan information",
      "Available features",
      "Account information",
      "Subscription management"
    ],
    benefits: [
      "Clear subscription visibility",
      "Easier plan management",
      "Better understanding of available features"
    ],
    accessRoles: ["Administrator"]
  }
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
    question: "What is TeemSetu?",
    answer:
      "TeemSetu is an all-in-one workforce management platform that combines HR management, attendance, leave, payroll, projects, tasks, reporting and company administration in a single system.",
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
      "Absolutely. TeemSetu is designed to scale from small teams to large organizations with flexible subscription plans and enterprise-grade features.",
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
      "A step-by-step guide to setting up your organization on TeemSetu.",
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
