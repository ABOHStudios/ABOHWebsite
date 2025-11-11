import { Layout } from "@/components/Layout";

const Portfolio = () => {
  const caseStudies = [
    {
      eyebrow: "AI Consultancy · Healthcare",
      title: "HealthPulse Diagnostics",
      description: "Built a clinician support assistant that surfaces insights from multimodal records, reducing diagnostic time by 34%.",
      quote: `"ABOH translated complex AI decisions into a calm interface we trust daily." — Chief Medical Officer`
    },
    {
      eyebrow: "AI Software · Retail",
      title: "Nova Commerce",
      description: "Deployed personalization engines and demand forecasts that boosted average order value by 22% and cut waste by 15%.",
      quote: `"They feel like an internal product team that never misses a detail." — VP Digital, Nova`
    },
    {
      eyebrow: "ChatGPT Application · SaaS",
      title: "Zenith Support",
      description: "Integrated a knowledge-grounded copilot into their ticketing platform, resolving 60% of tier-1 inquiries automatically.",
      quote: `"Our agents now focus on complex cases while AI handles the routine. It's transformative." — CTO, Zenith`
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ABOH Portfolio - AI Case Studies",
    "description": "Proof that elegant AI drives business lift. From healthcare copilots to retail personalization engines, ABOH ships measurable outcomes.",
    "itemListElement": caseStudies.map((study, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": study.title,
      "description": study.description
    }))
  };

  return (
    <Layout 
      title="Portfolio & Case Studies"
      description="Proof that elegant AI drives business lift. From healthcare copilots to retail personalization engines, ABOH ships measurable outcomes."
      keywords="AI case studies, AI portfolio, AI success stories, machine learning projects, AI transformation"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            Case studies
          </p>
          <h1 className="mb-6 text-white animate-slide-up">
            Proof that elegant AI drives business lift.
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            From healthcare copilots to retail personalization engines, ABOH ships measurable outcomes.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article 
                key={study.title}
                className="group rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="mb-3 text-sm font-medium text-sky-400">
                  {study.eyebrow}
                </p>
                <h3 className="mb-4 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {study.description}
                </p>
                <p className="text-sm italic text-gray-400 border-l-2 border-sky-400 pl-4">
                  {study.quote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
