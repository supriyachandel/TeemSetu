import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to your TeemSetu account to access your Admin, HR or Employee dashboard.",
};

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Login"
        title="Sign In to Your Account"
        description="Access your Admin, HR or Employee dashboard."
      />
      <section className="py-20">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
            <div className="mb-8 flex justify-center">
              <Logo height={84} linked={false} />
            </div>
            <form className="space-y-5" action="#" method="post">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-dark">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Sign In
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/contact" className="font-medium text-brand hover:text-brand-dark">
                Book a Demo
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
