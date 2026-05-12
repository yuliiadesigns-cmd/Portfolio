type Props = {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  role: string;
  year: string;
  client: string  
};

export default function CaseTemplate({
  title,
  subtitle,
  heroImage,
  overview,
  role,
  year,
}: Props) {
  return (
    <main className="px-10 py-20 max-w-[1200px] mx-auto">
      <div className="mb-12">
        <p className="text-sm opacity-50 mb-4">{year}</p>

        <h1 className="text-[72px] leading-none tracking-[-0.04em] mb-6">
          {title}
        </h1>

        <p className="text-[24px] max-w-[700px] opacity-80">
          {subtitle}
        </p>
      </div>

      <div className="rounded-[24px] overflow-hidden mb-16">
        <img
          src={heroImage}
          alt={title}
          className="w-full object-cover"
        />
      </div>

      <section className="grid grid-cols-2 gap-20">
        <div>
          <p className="text-sm opacity-50 mb-3">Role</p>
          <p className="text-[20px]">{role}</p>
        </div>

        <div>
          <p className="text-sm opacity-50 mb-3">Overview</p>
          <p className="text-[20px] leading-[1.7]">{overview}</p>
        </div>
      </section>
    </main>
  );
}