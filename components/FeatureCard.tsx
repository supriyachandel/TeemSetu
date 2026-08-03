import Link from "next/link";
import { FeatureIcon } from "./icons";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  href?: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  href,
}: FeatureCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <FeatureIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-4 inline-flex items-center text-sm font-medium text-brand hover:text-brand-dark"
        >
          Explore {title}
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
