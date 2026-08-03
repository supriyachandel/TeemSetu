"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const newErrors: Record<string, string> = {};
    if (!form.get("name")?.toString().trim()) newErrors.name = "Name is required";
    if (!form.get("company")?.toString().trim()) newErrors.company = "Company is required";
    const email = form.get("email")?.toString().trim();
    if (!email) newErrors.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email";
    if (!form.get("teamSize")?.toString()) newErrors.teamSize = "Team size is required";
    return newErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setState("submitting");
    await new Promise((r) => setTimeout(r, 800));
    setState("success");
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-brand-accent/30 bg-brand/5 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-brand-dark">
          Thank you for your enquiry!
        </h3>
        <p className="mt-2 text-sm text-muted">
          Our team will get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-dark">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          {errors.company && <p className="mt-1 text-xs text-red-600">{errors.company}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-dark">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="teamSize" className="block text-sm font-medium text-brand-dark">
          Team Size
        </label>
        <select
          id="teamSize"
          name="teamSize"
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        >
          <option value="" disabled>
            Select team size
          </option>
          <option value="1-25">1–25 employees</option>
          <option value="26-100">26–100 employees</option>
          <option value="101-500">101–500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
        {errors.teamSize && <p className="mt-1 text-xs text-red-600">{errors.teamSize}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" ? "Submitting..." : "Book a Demo"}
      </button>
    </form>
  );
}
