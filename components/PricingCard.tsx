import Link from "next/link";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border p-8 ${
        highlighted
          ? "border-brand bg-brand-dark text-white shadow-lg"
          : "border-border bg-white"
      }`}
    >
      <h3
        className={`text-lg font-semibold ${
          highlighted ? "text-white" : "text-brand-dark"
        }`}
      >
        {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span
          className={`text-4xl font-bold ${
            highlighted ? "text-white" : "text-brand-dark"
          }`}
        >
          {price}
        </span>
        {period && (
          <span className={highlighted ? "text-white/70" : "text-muted"}>
            {period}
          </span>
        )}
      </div>
      <p
        className={`mt-3 text-sm ${
          highlighted ? "text-white/80" : "text-muted"
        }`}
      >
        {description}
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <svg
              className={`mt-0.5 h-4 w-4 shrink-0 ${
                highlighted ? "text-brand-accent" : "text-brand"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlighted ? "text-white/90" : "text-brand-dark"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={cta === "Contact Sales" ? "/contact" : "/contact"}
        className={`mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
          highlighted
            ? "bg-white text-brand-dark hover:bg-surface"
            : "bg-brand text-white hover:bg-brand-dark"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
