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
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
        highlighted
          ? "scale-[1.02] border-brand bg-gradient-to-b from-[#0B2B66] to-[#071023] text-white shadow-[0_24px_60px_rgba(15,23,42,0.3)] ring-1 ring-brand/40"
          : "border-slate-200 bg-white text-gray-900 shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white shadow-lg shadow-brand/25">
          Most Popular
        </span>
      )}
      <h3 className={`text-lg font-bold ${highlighted ? "text-white" : "text-gray-900"}`}>
        {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-4xl font-extrabold tracking-tight ${highlighted ? "text-white" : "text-gray-900"}`}>
          {price}
        </span>
        {period && (
          <span className={highlighted ? "text-white/70 font-semibold" : "text-gray-500 font-semibold"}>{period}</span>
        )}
      </div>
      <p className={`mt-3 text-sm leading-relaxed ${highlighted ? "text-white/80" : "text-gray-600"}`}>
        {description}
      </p>
      <ul className="mt-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg
              className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? "text-brand-light" : "text-brand"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={highlighted ? "text-white/90 font-medium" : "text-gray-700 font-medium"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-98 ${
          highlighted
            ? "bg-gradient-to-r from-brand to-emerald-600 text-white shadow-[0_4px_15px_rgba(34,197,94,0.25)] hover:shadow-[0_6px_25px_rgba(34,197,94,0.45)]"
            : "border border-slate-300 bg-white text-gray-800 hover:border-brand hover:bg-brand/[0.04] hover:text-brand"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
