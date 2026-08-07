import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";
import { coreFeatures } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all features of TeemSetu — employee management, attendance, leave, payroll, projects, tasks, reports and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything Your Workforce Needs"
        description="A comprehensive set of modules designed to manage every aspect of your organization's workforce operations."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
      <CTA
        heading="See These Features in Action"
        description="Book a personalized demo and explore how TeemSetu can transform your workforce management."
      />
    </>
  );
}
