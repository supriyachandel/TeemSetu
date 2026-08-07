import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { siteConfig, whyPoints } from "@/lib/data";


export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TeemSetu — the all-in-one workforce management platform built for modern organizations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Building the Future of Workforce Management"
        description="TeemSetu was built to solve a simple problem — HR, people and business operations shouldn't require a dozen different tools."
      />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-brand-dark">Our Mission</h2>
            <p className="mt-4 text-muted leading-relaxed">
              We believe every organization deserves access to modern workforce
              management tools — without the complexity of enterprise software
              or the limitations of basic HR templates. {siteConfig.name} brings
              together HR management, attendance, leave, payroll, projects,
              tasks, reporting and communication in one unified platform.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-brand-dark">
              What Makes Us Different
            </h2>
            <ul className="mt-6 space-y-4">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-brand-dark">
              Built on Real Product Experience
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Our marketing website reflects the actual product — with Admin, HR
              and Employee dashboards that serve real organizations every day.
              We don&apos;t promise features we haven&apos;t built, and we
              continuously improve based on customer feedback.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
