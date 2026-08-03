type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-4xl font-bold text-brand-dark">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{description}</p>
      </div>
    </section>
  );
}
