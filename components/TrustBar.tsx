const stats = [
  { value: "500+", label: "Organizations" },
  { value: "50K+", label: "Employees managed" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "24/7", label: "Support available" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-dark">{stat.value}</p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
