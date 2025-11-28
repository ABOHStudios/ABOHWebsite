import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Rocket, Shield, Sparkles } from "lucide-react";

const IsleOfManAI = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "ABOH AI Studio",
      url: "https://www.aboh.studio/ai-development-isle-of-man",
      image: "https://www.aboh.studio/logoaboh.png",
      description:
        "ABOH builds AI agents, automation, and intelligent products for organisations across the Isle of Man.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Douglas",
        addressRegion: "Isle of Man",
        addressCountry: "IM",
        postalCode: "IM1",
      },
      areaServed: "Isle of Man",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Business",
        email: "hello@aboh.studio",
        availableLanguage: ["English"],
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI development and automation for Isle of Man businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversational agents for tourism, financial services, and local government",
          },
        },
      ],
      sameAs: ["https://twitter.com/aboh_studio"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you build AI systems locally for Isle of Man businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We design and deploy AI systems, agents, and automation for Isle of Man organisations with local compliance and data practices in mind.",
          },
        },
        {
          "@type": "Question",
          name: "Can you integrate with our existing tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We integrate with Microsoft 365, Google Workspace, CRMs, and internal systems so AI fits into your current workflows.",
          },
        },
      ],
    },
  ];

  const services = [
    {
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      title: "AI Systems & Automation",
      copy:
        "We design and ship systems that remove manual work and give your team more time -- from data entry and workflow routing to internal co-pilots.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
      title: "Conversational Agents",
      copy:
        "Clear, accurate, and helpful agents for customer support, internal guidance, tourism, onboarding, and business insights.",
    },
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "Intelligent Apps & Integrations",
      copy:
        "Custom applications built on modern AI platforms, extending ChatGPT-style apps, 365, Workspace, CRMs, and internal systems.",
    },
  ];

  const proofPoints = [
    "On-island focus: built for Isle of Man operators, tourism teams, and financial services.",
    "Hybrid delivery: remote engineering with local workshops so stakeholders stay aligned.",
    "Full stack: from data and retrieval to UI, agent design, and workflow integration.",
    "Clear ownership: one partner for discovery, build, launch, and ongoing optimisation.",
  ];

  const faqItems = [
    {
      question: "Do you build AI systems locally for Isle of Man businesses?",
      answer: "Yes. We design and deploy AI systems, agents, and automation for Isle of Man organisations with local compliance and data practices in mind.",
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "We connect to Microsoft 365, Google Workspace, CRMs, and internal systems so AI fits into your current workflows.",
    },
  ];

  return (
    <Layout
      title="Isle of Man AI Development | ABOH Studio"
      description="ABOH Studio delivers AI development, automation, and conversational agents for organisations across the Isle of Man."
      keywords="ABOH Studio Isle of Man, ABOH Studio IOM, AI development Isle of Man, AI automation Douglas, conversational AI Isle of Man, AI consultants Isle of Man, AI agents Isle of Man"
      structuredData={structuredData}
      background="none"
    >
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" />
            Isle of Man (IOM) AI development & automation
          </div>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            AI development for Isle of Man (IOM) businesses that want to move first.
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            ABOH Studio designs and ships AI systems for organisations on the Isle of Man - from intelligent customer experiences to
            back-office automation and compliant data pipelines. Start local, launch fast, and keep the advantage.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong" asChild>
              <Link to={{ pathname: "/contact", search: "?via=isle-of-man" }}>Contact Us</Link>
            </Button>
            <Button variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10" asChild>
              <Link to="/blog/ai-agents-explained">Read how agents work</Link>
            </Button>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            AI development | Automation | Conversational agents | Retrieval & data pipelines
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-24">
        <div className="container mx-auto max-w-6xl space-y-6">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">What we build</p>
            <h2 className="text-3xl font-semibold text-white">AI-centred business solutions, built for day-to-day impact.</h2>
            <p className="mt-3 text-base text-white/70">Built for Isle of Man teams that want real-world adoption.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-slate-950/70 p-6 sm:p-10">
          <div className="mb-6">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Why now</p>
            <h2 className="text-3xl font-semibold text-white">Keep the Isle of Man at the front of AI adoption.</h2>
          </div>
          <div className="space-y-4">
            {proofPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 text-white/80">
                <CheckCircle2 className="mt-1 h-5 w-5 text-accent" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="text-3xl font-semibold text-white">Questions Isle of Man businesses ask about AI</h2>
            <p className="mt-2 text-base text-white/70">
              Quick answers to how we deliver AI systems, agents, and automation for the island.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm text-white/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default IsleOfManAI;
