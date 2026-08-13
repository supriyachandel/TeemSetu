"use client";

import React, { useRef, useState, useEffect } from "react";

type Role = "admin" | "hr" | "employee";

interface Config {
  title: string;
  totalEmployees: string;
  employeesSub: string;
  employeesTrendColor: string;
  employeesData: number[];
  
  attendanceRate: string;
  attendanceSub: string;
  attendanceTrendColor: string;
  attendanceData: number[];
  
  newHires: string;
  hiresSub: string;
  hiresTrendColor: string;
  newHiresData: number[];
  
  activeProjects: string;
  projectsSub: string;
  projectsTrendColor: string;
  projectsData: number[];
  
  progressPercent: number;
  progressTooltip: string;
  
  heatmapHighlightRow: string;
  heatmapHighlightCol: number;
}

const roleConfigs: Record<Role, Config> = {
  admin: {
    title: "Admin Dashboard",
    totalEmployees: "220",
    employeesSub: "↑ 2.5% vs last month",
    employeesTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    employeesData: [30, 50, 40, 70, 45, 90, 65],
    
    attendanceRate: "98%",
    attendanceSub: "↓ 4.1% vs last month",
    attendanceTrendColor: "text-red-600 bg-red-50 border-red-100",
    attendanceData: [80, 70, 95, 60, 85, 75, 70],
    
    newHires: "05",
    hiresSub: "↑ 2.6% vs last month",
    hiresTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    newHiresData: [40, 30, 60, 45, 70, 50, 65],
    
    activeProjects: "143",
    projectsSub: "↑ 6.2% vs last month",
    projectsTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    projectsData: [50, 70, 60, 90, 75, 95, 80],
    
    progressPercent: 55,
    progressTooltip: "Thursday 55% (28)",
    heatmapHighlightRow: "13:00",
    heatmapHighlightCol: 3
  },
  hr: {
    title: "HR Dashboard",
    totalEmployees: "248",
    employeesSub: "↑ 3.8% vs last month",
    employeesTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    employeesData: [45, 55, 60, 80, 50, 95, 70],
    
    attendanceRate: "96%",
    attendanceSub: "↑ 1.2% vs last month",
    attendanceTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    attendanceData: [75, 85, 90, 96, 80, 90, 85],
    
    newHires: "12",
    hiresSub: "↑ 4.8% vs last month",
    hiresTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    newHiresData: [30, 50, 40, 70, 60, 85, 90],
    
    activeProjects: "24",
    projectsSub: "↑ 12% vs last month",
    projectsTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    projectsData: [60, 80, 70, 85, 90, 95, 99],
    
    progressPercent: 78,
    progressTooltip: "Wednesday 78% (18)",
    heatmapHighlightRow: "15:00",
    heatmapHighlightCol: 2
  },
  employee: {
    title: "Employee Portal",
    totalEmployees: "01",
    employeesSub: "Me",
    employeesTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    employeesData: [100, 100, 100, 100, 100, 100, 100],
    
    attendanceRate: "99%",
    attendanceSub: "On-time Shift",
    attendanceTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    attendanceData: [95, 98, 100, 99, 100, 98, 99],
    
    newHires: "00",
    hiresSub: "0 Pending Tasks",
    hiresTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    newHiresData: [0, 0, 0, 0, 0, 0, 0],
    
    activeProjects: "04",
    projectsSub: "Active workspaces",
    projectsTrendColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    projectsData: [20, 40, 60, 80, 50, 70, 90],
    
    progressPercent: 90,
    progressTooltip: "Friday 90% (4)",
    heatmapHighlightRow: "11:00",
    heatmapHighlightCol: 4
  }
};

export default function DashboardMockup({ role = "admin" }: { role?: string }) {
  const activeRole = (role === "hr" || role === "employee" || role === "admin" ? role : "admin") as Role;
  const config = roleConfigs[activeRole];

  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const containerWidth = entry.contentRect.width;
        const child = container.firstElementChild as HTMLElement;
        if (child) {
          // Reset styles temporarily to measure natural dimensions
          const originalTransform = child.style.transform;
          const originalTransformOrigin = child.style.transformOrigin;
          const originalPosition = child.style.position;
          child.style.transform = "none";
          child.style.transformOrigin = "";
          child.style.position = "static";

          const naturalWidth = child.offsetWidth;
          const naturalHeight = child.offsetHeight;

          child.style.transform = originalTransform;
          child.style.transformOrigin = originalTransformOrigin;
          child.style.position = originalPosition;

          if (naturalWidth > containerWidth && containerWidth > 0) {
            const scale = containerWidth / naturalWidth;
            setDimensions({ scale, height: naturalHeight * scale });
          } else {
            setDimensions({ scale: 1, height: naturalHeight });
          }
        }
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Helper arrays for UI mapping
  const heatmapRows = [
    { label: "19:00", cells: [0.1, 0.05, 0.12, 0.08, 0.1, 0.03, 0.02] },
    { label: "17:00", cells: [0.08, 0.15, 0.2, 0.12, 0.15, 0.05, 0.03] },
    { label: "15:00", cells: [0.12, 0.25, 0.35, 0.5, 0.2, 0.08, 0.05] },
    { label: "13:00", cells: [0.15, 0.3, 0.45, 0.9, 0.35, 0.1, 0.08] },
    { label: "11:00", cells: [0.2, 0.35, 0.4, 0.6, 0.45, 0.15, 0.1] }
  ];

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div 
      ref={containerRef}
      className="w-full relative overflow-visible flex justify-center"
      style={{ height: dimensions.height ? `${dimensions.height}px` : "auto" }}
    >
      <div
        style={{
          transform: dimensions.scale !== 1 ? `scale(${dimensions.scale})` : undefined,
          transformOrigin: "top left",
          position: dimensions.scale !== 1 ? "absolute" : "relative",
          width: "max-content",
          top: 0,
          left: 0,
        }}
      >
        <div 
          className="flex h-[200px] w-[310px] sm:h-[280px] sm:w-[450px] md:h-[350px] md:w-[580px] lg:h-[430px] lg:w-[780px] overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300"
          role="img"
          aria-label={`${config.title} Command Center`}
        >
      {/* 1. Left Sidebar */}
      <aside className="w-20 sm:w-28 md:w-36 shrink-0 border-r border-slate-100 bg-slate-50/80 p-1.5 sm:p-2.5 flex flex-col justify-between">
        <div>
          {/* Logo symbol */}
          <div className="mb-4 sm:mb-6 px-1 flex items-center gap-1.5 sm:gap-2">
            <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded bg-brand text-[8px] sm:text-[10px] font-black">
              <span className="text-white">T</span>
            </div>
            <span className="text-[8px] sm:text-[10px] font-bold text-slate-800 tracking-wider">TeemSetu</span>
          </div>

          <ul className="space-y-0.5 sm:space-y-1">
            {[
              { label: "Dashboard", active: true, icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
              { label: "Employees", active: false, icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { label: "Attendance", active: false, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { label: "Projects", active: false, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { label: "Time Tracker", active: false, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Leave Management", active: false, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Recruitment & Hiring", active: false, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { label: "Payroll", active: false, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Settings", active: false, icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            ].map((item) => (
              <li
                key={item.label}
                className={`rounded-md px-1.5 py-1 text-[7.5px] sm:text-[9px] md:text-[10px] font-bold flex items-center gap-1.5 sm:gap-2.5 transition-all ${
                  item.active
                    ? "bg-slate-200/60 text-slate-900 border border-slate-200/10 shadow-sm"
                    : "text-slate-500 hover:text-slate-700 cursor-pointer"
                }`}
              >
                <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-inherit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="hidden sm:inline">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* 2. Right Main Panel */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#FFFFFF]">
        {/* Header Bar */}
        <header className="h-8 sm:h-11 md:h-12 border-b border-slate-100 px-3 sm:px-5 flex items-center justify-between shrink-0">
          <span className="text-[8px] sm:text-[10px] md:text-xs font-black text-slate-800 tracking-widest uppercase">{config.title}</span>
          
          {/* Time range selectors */}
          <div className="flex gap-1 sm:gap-2">
            {["1D", "7D", "1M", "6M", "1Y"].map((range) => (
              <span
                key={range}
                className={`px-1.5 py-0.5 rounded text-[7px] sm:text-[8px] md:text-[9.5px] font-extrabold cursor-pointer transition-all ${
                  range === "1M"
                    ? "bg-slate-100 text-slate-800"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {range}
              </span>
            ))}
          </div>
        </header>

        {/* Console Content Area */}
        <div className="p-2 sm:p-4 md:p-5 flex-1 flex flex-col gap-2.5 sm:gap-4 md:gap-5 overflow-y-auto">
          {/* Row 1: 4 Statistics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 shrink-0">
            {/* Card 1: Total Employees */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 sm:p-3 flex flex-col justify-between h-[68px] sm:h-[88px] md:h-[110px]">
              <div>
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Employees</span>
                <span className="text-sm sm:text-lg md:text-2xl font-black text-slate-800 leading-none mt-0.5 sm:mt-1 block">{config.totalEmployees}</span>
              </div>
              <div className="flex items-end justify-between mt-1 sm:mt-1.5 gap-1">
                <span className={`inline-flex items-center px-1 py-0.5 rounded text-[5px] sm:text-[6.5px] md:text-[7.5px] font-bold border ${config.employeesTrendColor}`}>
                  {config.employeesSub}
                </span>
                {/* Custom bar chart */}
                <div className="flex items-end gap-0.5 h-4 sm:h-6 md:h-8 shrink-0">
                  {config.employeesData.map((val, i) => (
                    <div key={i} style={{ height: `${val}%` }} className="w-0.5 sm:w-1 rounded-sm bg-gradient-to-t from-brand to-emerald-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Attendance Rate */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 sm:p-3 flex flex-col justify-between h-[68px] sm:h-[88px] md:h-[110px]">
              <div>
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Attendance Rate</span>
                <span className="text-sm sm:text-lg md:text-2xl font-black text-slate-800 leading-none mt-0.5 sm:mt-1 block">{config.attendanceRate}</span>
              </div>
              <div className="flex items-end justify-between mt-1 sm:mt-1.5 gap-1">
                <span className={`inline-flex items-center px-1 py-0.5 rounded text-[5px] sm:text-[6.5px] md:text-[7.5px] font-bold border ${config.attendanceTrendColor}`}>
                  {config.attendanceSub}
                </span>
                {/* Custom bar chart */}
                <div className="flex items-end gap-0.5 h-4 sm:h-6 md:h-8 shrink-0">
                  {config.attendanceData.map((val, i) => (
                    <div key={i} style={{ height: `${val}%` }} className="w-0.5 sm:w-1 rounded-sm bg-gradient-to-t from-brand to-emerald-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: New Hires */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 sm:p-3 flex flex-col justify-between h-[68px] sm:h-[88px] md:h-[110px]">
              <div>
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider block">New Hires</span>
                <span className="text-sm sm:text-lg md:text-2xl font-black text-slate-800 leading-none mt-0.5 sm:mt-1 block">{config.newHires}</span>
              </div>
              <div className="flex items-end justify-between mt-1 sm:mt-1.5 gap-1">
                <span className={`inline-flex items-center px-1 py-0.5 rounded text-[5px] sm:text-[6.5px] md:text-[7.5px] font-bold border ${config.hiresTrendColor}`}>
                  {config.hiresSub}
                </span>
                {/* Custom bar chart */}
                <div className="flex items-end gap-0.5 h-4 sm:h-6 md:h-8 shrink-0">
                  {config.newHiresData.map((val, i) => (
                    <div key={i} style={{ height: `${val}%` }} className="w-0.5 sm:w-1 rounded-sm bg-gradient-to-t from-emerald-600 to-emerald-500" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: Active Projects */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 sm:p-3 flex flex-col justify-between h-[68px] sm:h-[88px] md:h-[110px]">
              <div>
                <span className="text-[6.5px] sm:text-[7.5px] md:text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Active Projects</span>
                <span className="text-sm sm:text-lg md:text-2xl font-black text-slate-800 leading-none mt-0.5 sm:mt-1 block">{config.activeProjects}</span>
              </div>
              <div className="flex items-end justify-between mt-1 sm:mt-1.5 gap-1">
                <span className={`inline-flex items-center px-1 py-0.5 rounded text-[5px] sm:text-[6.5px] md:text-[7.5px] font-bold border ${config.projectsTrendColor}`}>
                  {config.projectsSub}
                </span>
                {/* Custom bar chart */}
                <div className="flex items-end gap-0.5 h-4 sm:h-6 md:h-8 shrink-0">
                  {config.projectsData.map((val, i) => (
                    <div key={i} style={{ height: `${val}%` }} className="w-0.5 sm:w-1 rounded-sm bg-gradient-to-t from-brand to-emerald-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Attendance Heatmap & Project Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-[110px] sm:min-h-[140px] md:min-h-[170px]">
            {/* Left Box: Attendance Grid Heatmap */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2.5 sm:p-3.5 md:p-4 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 sm:pb-2.5 mb-1 sm:mb-2 shrink-0">
                <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-slate-800 uppercase tracking-wider">Attendance Overview</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-slate-100/55 text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-bold text-slate-500">
                  <span>This week</span>
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Attendance Value and stats */}
              <div className="flex items-baseline gap-1.5 sm:gap-2 mb-1 sm:mb-2 shrink-0">
                <span className="text-sm sm:text-base md:text-xl font-black text-slate-800">{config.attendanceRate}</span>
                <span className="inline-flex items-center text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-bold text-emerald-600">
                  ↑ 2.5% <span className="text-slate-400 ml-1">vs last week</span>
                </span>
              </div>

              {/* Heatmap Matrix */}
              <div className="flex-grow flex flex-col justify-center min-h-[60px] sm:min-h-[90px]">
                <div className="space-y-0.5 sm:space-y-1">
                  {heatmapRows.map((row) => (
                    <div key={row.label} className="flex items-center gap-1.5 sm:gap-2">
                      {/* Row Label */}
                      <span className="w-5 sm:w-7 text-[5.5px] sm:text-[7px] md:text-[8px] font-bold text-slate-400 leading-none">{row.label}</span>
                      
                      {/* Cells */}
                      <div className="flex-1 flex gap-0.5 sm:gap-1">
                        {row.cells.map((cell, cIdx) => {
                          const isHigh = row.label === config.heatmapHighlightRow && cIdx === config.heatmapHighlightCol;
                          return (
                            <div
                              key={cIdx}
                              className={`flex-1 h-2 sm:h-3.5 rounded-sm transition-all duration-300 ${
                                isHigh
                                  ? "bg-slate-800 shadow-[0_3px_8px_rgba(15,23,42,0.15)]"
                                  : cell > 0.4
                                  ? "bg-brand/25"
                                  : cell > 0.2
                                  ? "bg-brand/15"
                                  : cell > 0.09
                                  ? "bg-brand/8"
                                  : "bg-slate-100"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Weekdays row */}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                  <span className="w-5 sm:w-7" />
                  <div className="flex-1 flex justify-around text-center">
                    {weekdays.map((day) => (
                      <span key={day} className="flex-1 text-[6px] sm:text-[7.5px] md:text-[8.5px] font-bold text-slate-400 leading-none">{day}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Project Donut Chart */}
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-2.5 sm:p-3.5 md:p-4 flex flex-col justify-between h-full relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 sm:pb-2.5 mb-1 sm:mb-2 shrink-0">
                <span className="text-[8px] sm:text-[9.5px] md:text-xs font-bold text-slate-800 uppercase tracking-wider">Project Overview</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 bg-slate-100/55 text-[6.5px] sm:text-[7.5px] md:text-[8.5px] font-bold text-slate-500">
                  <span>This week</span>
                  <svg className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Project metrics text indicators */}
              <div className="flex gap-3 sm:gap-4 mb-1 sm:mb-2 shrink-0">
                <div>
                  <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold text-slate-400 uppercase tracking-wider block">In Progress</span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-slate-800">24</span>
                </div>
                <div>
                  <span className="text-[6.5px] sm:text-[7.5px] md:text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Completed</span>
                  <span className="text-xs sm:text-sm md:text-base font-black text-slate-800">19</span>
                </div>
              </div>

              {/* Progress Wheel and Tooltip */}
              <div className="flex-grow flex items-center justify-center relative min-h-[60px] sm:min-h-[90px]">
                <div className="relative h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center">
                  {/* Gauge */}
                  <svg className="absolute h-full w-full -rotate-90">
                    <circle cx="50%" cy="50%" r="40%" className="stroke-slate-100" strokeWidth="4" fill="transparent" />
                    <circle 
                      cx="50%" 
                      cy="50%" 
                      r="40%" 
                      className="stroke-brand" 
                      strokeWidth="4" 
                      strokeDasharray={220} 
                      strokeDashoffset={220 - (220 * config.progressPercent) / 100} 
                      fill="transparent" 
                      strokeLinecap="round" 
                    />
                  </svg>

                  {/* Tooltip Overlay */}
                  <div className="absolute right-[-14px] sm:right-[-10px] top-4 sm:top-6 z-20 rounded-md border border-slate-200 bg-slate-800 px-1.5 py-0.5 text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-bold shadow-md text-white">
                    <p className="leading-none">{config.progressTooltip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
