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
  secondaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,162,68,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-light hover:shadow-md"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center rounded-lg border border-white/25 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
