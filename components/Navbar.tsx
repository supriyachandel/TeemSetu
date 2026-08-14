"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between rounded-full border border-slate-200/50 bg-white/80 px-6 py-2.5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(15,23,42,0.06)]">
        <Logo height={42} />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={siteConfig.loginUrl}
            className="rounded-full px-5 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-brand"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-brand to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(34,197,94,0.2)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)]"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2.5 text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200 lg:hidden transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="mt-2 rounded-2xl border border-slate-200/50 bg-white/95 p-4 backdrop-blur-xl shadow-2xl lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-slate-100" />
            <Link
              href={siteConfig.loginUrl}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-3 py-2.5 text-center text-sm font-bold text-white hover:bg-brand-light transition-all"
              onClick={() => setOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
