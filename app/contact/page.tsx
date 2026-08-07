import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo or get in touch with the TeemSetu team. We'd love to show you how we can help your organization.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a Demo"
        description="Fill out the form below and our team will reach out to schedule a personalized demo of TeemSetu."
      />
      <section className="py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
