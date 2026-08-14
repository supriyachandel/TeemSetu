import Link from "next/link";

type CTAProps = {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function CTA({
  heading = "Ready to Simplify Your Workforce?",
  description = "Bring HR, people and business operations together in one powerful platform.",
  primaryLabel = "Book a Demo",
  secondaryLabel,
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-white py-28 text-center">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px] pointer-events-none animate-glow opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,162,68,0.04),transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed font-semibold">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-emerald-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_4px_12px_rgba(34,197,94,0.2)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.35)] hover:scale-105 active:scale-98 transition-all duration-300"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-8 py-3.5 text-sm font-bold text-slate-700 backdrop-blur-sm transition-all hover:bg-slate-100 hover:border-slate-400 hover:scale-105 active:scale-98 duration-300"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
