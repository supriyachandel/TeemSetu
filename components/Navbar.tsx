"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-dark text-sm font-bold text-white">
            TS
          </div>
          <span className="hidden text-sm font-semibold text-brand-dark sm:block">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-brand-dark transition-colors hover:bg-surface"
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Book a Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-dark md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-brand-dark"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-dark hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-3 py-2 text-center text-sm font-medium text-white hover:bg-brand-dark"
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
