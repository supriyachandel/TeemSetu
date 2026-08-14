type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/60 bg-slate-50/50 py-12 sm:py-14 text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-brand/5 blur-3xl opacity-45 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-500 font-semibold">
          {description}
        </p>
      </div>
    </section>
  );
}
