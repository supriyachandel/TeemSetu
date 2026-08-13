"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about TeemSetu."
        />

        <div className="mt-12 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          {faqs.map((faq, i) => (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-sm font-bold text-slate-800">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-brand transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-5">
                  <p className="text-sm leading-relaxed text-slate-500 font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
