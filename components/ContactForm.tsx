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

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name")?.toString() || "",
          email: form.get("email")?.toString() || "",
          phone: form.get("phone")?.toString() || "",
          source: "Demo Request",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setState("success");
    } catch (err) {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand shadow-sm">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Thank you for your enquiry!
        </h3>
        <p className="mt-2 text-sm text-slate-500 font-semibold">
          Our team will get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="rounded-xl border border-red-100 bg-red-50 p-8 text-center shadow-md">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-sm">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-800">
          Something went wrong!
        </h3>
        <p className="mt-2 text-sm text-slate-500 font-semibold">
          We couldn't submit your request. Please try again.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-4 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
          />
          {errors.name && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
          />
          {errors.company && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.company}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
          />
          {errors.email && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="teamSize" className="block text-sm font-semibold text-slate-700">
          Team Size
        </label>
        <select
          id="teamSize"
          name="teamSize"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold cursor-pointer"
        >
          <option value="" disabled className="bg-white text-slate-400">
            Select team size
          </option>
          <option value="1-25" className="bg-white text-slate-800">1–25 employees</option>
          <option value="26-100" className="bg-white text-slate-800">26–100 employees</option>
          <option value="101-500" className="bg-white text-slate-800">101–500 employees</option>
          <option value="500+" className="bg-white text-slate-800">500+ employees</option>
        </select>
        {errors.teamSize && <p className="mt-1.5 text-xs font-semibold text-red-500">{errors.teamSize}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-800 outline-none focus:bg-white focus:border-brand/40 focus:ring-2 focus:ring-brand/20 transition-all font-semibold"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-light disabled:opacity-60 sm:w-auto cursor-pointer"
      >
        {state === "submitting" ? "Submitting..." : "Book a Demo"}
      </button>
    </form>
  );
}
