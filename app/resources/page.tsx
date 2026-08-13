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
      <section className="py-20 relative bg-white">
        {/* Decorative background glow blobs */}
        <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-brand/5 blur-3xl opacity-30 pointer-events-none animate-glow" />
        <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl opacity-30 pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-xl shadow-sm"
              >
                {/* Ambient glow accent */}
                <div className="absolute -inset-px rounded-2xl border border-transparent bg-gradient-to-br from-brand/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand-light">
                      {resource.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{resource.date}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold text-slate-800 transition-colors group-hover:text-brand">
                    {resource.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500 font-medium">{resource.excerpt}</p>
                </div>

                <div className="relative mt-6 flex items-center gap-1.5 text-xs font-bold text-brand group-hover:text-brand-light transition-colors">
                  Read Article
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
