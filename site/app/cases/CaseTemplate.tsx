type Props = {
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  role: string;
  year: string;
  company: string;
  website: string;
  contribution: string;
};

export default function CaseTemplate({
  title,
  subtitle,
  heroImage,
  overview,
  role,
  year,
  company,
  website,
  contribution,
}: Props) {
  return (
    <>
      {/* your existing layout stays here */}
      {/* just make sure you use these props somewhere if needed */}

      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

        <p>{overview}</p>

        <p>{role}</p>
        <p>{year}</p>
        <p>{company}</p>

        <a href={`https://${website}`}>{website}</a>

        <p>{contribution}</p>
      </div>
    </>
  );
}