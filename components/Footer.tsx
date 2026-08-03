import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo height={48} linked={false} />
            <p className="mt-4 text-sm text-white/70">
              All-in-one workforce management for modern organizations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/features" className="text-sm text-white/80 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-white/80 hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-white/80 hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-white/80 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Get Started
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-white/80 hover:text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
