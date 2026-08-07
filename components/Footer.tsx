import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="inline-block rounded-2xl bg-white p-4 shadow-lg">
              <Logo height={80} linked={false} />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/70">
              {siteConfig.tagline} All-in-one workforce management for modern
              organizations.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Product
            </h3>
            <ul className="mt-5 space-y-3">
              {["Features", "Solutions", "Pricing"].map((label) => (
                <li key={label}>
                  <Link
                    href={`/${label.toLowerCase()}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get Started
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-white/75 hover:text-white">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-white/75 hover:text-white">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white/70"
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
