import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { resources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "HR guides, product documentation, FAQs and resources to help you get the most from TeemSetu.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Guides, Tips & Best Practices"
        description="Explore HR guides, product documentation and resources to help your organization succeed."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    {resource.category}
                  </span>
                  <span className="text-xs text-muted">{resource.date}</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-brand-dark">
                  {resource.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{resource.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <CTA
        heading="Need Help Getting Started?"
        description="Our team is here to help you configure and launch TeemSetu for your organization."
      />
    </>
  );
}
