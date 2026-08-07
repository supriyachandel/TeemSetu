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
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-lg hover:shadow-brand-dark/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <FeatureIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-base font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          Learn more
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
}
