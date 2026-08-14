"use client";

import { motion } from "framer-motion";

export default function FloatingCards() {
  return (
    <>
      {/* Card 1: Employees (Top Left) */}
      <motion.div
        className="absolute -left-8 sm:-left-24 md:-left-36 top-2 sm:top-6 z-20 rounded-xl border border-slate-200/50 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 select-none pointer-events-none"
        style={{ transform: "translateZ(30px)" }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-brand/10 text-brand-light shadow-sm">
          <svg className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A9.342 9.342 0 0112.458 20c-1.22 0-2.385-.233-3.458-.658M21 12a3 3 0 11-6 0 3 3 0 016 0zM6 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v-1.5m-6 0v-1.5" />
          </svg>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-black text-slate-800 leading-tight">248+</h4>
          <p className="text-[7px] sm:text-[8px] font-bold text-slate-500">Employees</p>
          <p className="text-[6.5px] sm:text-[7.5px] font-bold text-brand-light">+12% this month</p>
        </div>
      </motion.div>

      {/* Card 2: Attendance Rate (Top Right) */}
      <motion.div
        className="absolute -right-8 sm:-right-24 md:-right-36 top-8 sm:top-14 z-20 rounded-xl border border-slate-200/50 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 select-none pointer-events-none"
        style={{ transform: "translateZ(45px)" }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="relative flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 items-center justify-center">
          <svg className="absolute h-7 w-7 sm:h-9 sm:w-9 -rotate-90">
            <circle cx="50%" cy="50%" r="38%" className="stroke-slate-100" strokeWidth="2" fill="transparent" />
            <circle cx="50%" cy="50%" r="38%" className="stroke-brand-light" strokeWidth="2" strokeDasharray={88} strokeDashoffset={1.76} fill="transparent" strokeLinecap="round" />
          </svg>
          <span className="text-[8px] sm:text-[9px] font-black text-slate-800">98%</span>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-black text-slate-800 leading-tight">98%</h4>
          <p className="text-[7px] sm:text-[8px] font-bold text-slate-500">Attendance Rate</p>
          <p className="text-[6.5px] sm:text-[7.5px] font-bold text-brand-light">On-time average</p>
        </div>
      </motion.div>

      {/* Card 3: Active Projects (Middle Right) */}
      <motion.div
        className="absolute -right-14 sm:-right-28 md:-right-40 top-32 sm:top-44 z-20 rounded-xl border border-slate-200/50 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 select-none pointer-events-none"
        style={{ transform: "translateZ(35px)" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 shadow-sm">
          <svg className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-black text-slate-800 leading-tight">24</h4>
          <p className="text-[7px] sm:text-[8px] font-bold text-slate-500">Active Projects</p>
          <p className="text-[6.5px] sm:text-[7.5px] font-bold text-brand-light">+8% this month</p>
        </div>
      </motion.div>

      {/* Card 4: Payroll Processed (Bottom Left) */}
      <motion.div
        className="absolute -left-12 sm:-left-28 md:-left-40 bottom-6 sm:bottom-12 z-20 rounded-xl border border-slate-200/50 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 select-none pointer-events-none"
        style={{ transform: "translateZ(30px)" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 shadow-sm">
          <span className="text-xs sm:text-sm font-black">₹</span>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-black text-slate-800 leading-tight">₹12.5L</h4>
          <p className="text-[7px] sm:text-[8px] font-bold text-slate-500">Payroll Processed</p>
          <p className="text-[6.5px] sm:text-[7.5px] font-bold text-brand-light">+18% this month</p>
        </div>
      </motion.div>

      {/* Card 5: Productivity (Bottom Right) */}
      <motion.div
        className="absolute -right-8 sm:-right-20 md:-right-32 bottom-2 sm:bottom-6 z-20 rounded-xl border border-slate-200/50 bg-white/90 p-2 sm:p-3 shadow-lg backdrop-blur-md flex items-center gap-2 sm:gap-3 select-none pointer-events-none"
        style={{ transform: "translateZ(50px)" }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 shadow-sm">
          <svg className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-black text-slate-800 leading-tight">98%</h4>
          <p className="text-[7px] sm:text-[8px] font-bold text-slate-500">Productivity</p>
          <p className="text-[6.5px] sm:text-[7.5px] font-bold text-brand-light">+14% this month</p>
        </div>
      </motion.div>
    </>
  );
}
