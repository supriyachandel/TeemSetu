import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PricingCard from "@/components/PricingCard";
import CTA from "@/components/CTA";
import { pricingPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for TeemSetu. Choose Starter, Professional or Enterprise plans for your organization.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans That Scale With Your Team"
        description="Start with the essentials and upgrade as your organization grows. All plans include core workforce management features."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            Pricing shown is placeholder until the final subscription model is
            confirmed. Contact us for custom enterprise pricing.
          </p>
        </div>
      </section>
      <CTA
        heading="Not Sure Which Plan Is Right?"
        description="Book a demo and our team will help you find the perfect fit for your organization."
      />
    </>
  );
}
