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
          <div className="relative">
            {/* Ambient background glow */}
            <div className="absolute -inset-2 bg-gradient-to-br from-brand/10 to-blue-600/10 blur-xl opacity-40 rounded-2xl pointer-events-none" />

            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl text-slate-800">
              <div className="mb-8 flex justify-center">
                <Logo height={72} linked={false} className="brightness-0" />
              </div>
              <form className="space-y-5" action="#" method="post">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-brand-light transition-all duration-300 cursor-pointer"
                >
                  Sign In
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-slate-500 font-semibold">
                Don&apos;t have an account?{" "}
                <Link href="/contact" className="font-bold text-brand hover:text-brand-light transition-colors">
                  Book a Demo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
