import Link from "next/link";

type CTAProps = {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
  variant?: "default" | "dark";
};

export default function CTA({
  heading = "Ready to Simplify Your Workforce?",
  description = "Bring HR, people and business operations together in one powerful platform.",
  primaryLabel = "Book a Demo",
  secondaryLabel = "Get Started",
  primaryHref = "/contact",
  secondaryHref = "/contact",
  variant = "dark",
}: CTAProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-20 ${isDark ? "bg-brand-dark" : "bg-surface"}`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold ${
            isDark ? "text-white" : "text-brand-dark"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            isDark ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className={`inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors ${
              isDark
                ? "bg-white text-brand-dark hover:bg-surface"
                : "bg-brand text-white hover:bg-brand-dark"
            }`}
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className={`inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors ${
              isDark
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-border bg-white text-brand-dark hover:bg-surface"
            }`}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
