import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Layers3, Workflow, MessageSquare, Rocket } from "lucide-react";
import {
  GoogleGeminiLogo,
  GoogleWorkspaceLogo,
  Microsoft365Logo,
  ModelContextProtocolLogo,
  OpenAILogo,
} from "@/components/icons/CredibilityLogos";

const credibilityPlatforms = [
  { name: "OpenAI", Icon: OpenAILogo },
  { name: "Gemini", Icon: GoogleGeminiLogo },
  { name: "Microsoft 365", Icon: Microsoft365Logo },
  { name: "Google Workspace", Icon: GoogleWorkspaceLogo },
  { name: "Model Context Protocol", Icon: ModelContextProtocolLogo },
];

const solutionCards = [
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "AI Systems & Automation",
    description:
      "We design and ship systems that remove manual work and give your team more time -- from data entry and workflow routing to internal co-pilots.",
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Conversational Agents",
    description:
      "Clear, accurate, and helpful agents for customer support, internal guidance, tourism, onboarding, and business insights.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "Intelligent Apps & Integrations",
    description:
      "Custom applications built on modern AI platforms, extending ChatGPT-style apps, 365, Workspace, CRMs, and internal systems.",
  },
];

const approachSteps = [
  {
    step: "1. Understand",
    description:
      "We speak with you to understand your challenges, processes, and what an ideal solution looks like for your team.",
  },
  {
    step: "2. Design",
    description:
      "We design a proof of concept and work with you to refine it -- making sure the solution is clear, efficient, and exactly what you need.",
  },
  {
    step: "3. Build & Integrate",
    description: "We build the final system or agent and integrate it directly into your business, tools, and workflows.",
  },
  {
    step: "4. Evolve",
    description:
      "As your company grows -- and AI evolves -- we refine, adapt, and upgrade the system so it continues to deliver value long after launch.",
  },
];

const studioHighlights = [
  {
    title: "FIT File Builder (Lab Project)",
    description:
      "An intelligent agent that generates structured workout files for Garmin, Zwift, and other training platforms using automated data modelling.",
    link: "/services",
  },
  {
    title: "MCP Experiments (Lab Project)",
    description:
      "Exploring next-generation local AI tooling, integrations, and agent capabilities using the Model Context Protocol.",
    link: "/services",
  },
  {
    title: "Industry Concepts",
    description:
      "Tourism assistance agents, internal workflow co-pilots, small-business automation prototypes, and more.",
    link: "/services",
  },
];

const blogFeature = {
  title: "What Are AI Agents?",
  summary: "A practical breakdown of how agents work and how businesses can use them today.",
  frequency: "New articles every week from the ABOH team.",
  link: "/blog/ai-agents-explained",
};

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABOH",
    description: "ABOH builds AI-centred systems, agents, and automations for real businesses.",
    url: "https://aboh.ai",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-010-2030",
      contactType: "Customer Service",
      email: "hello@aboh.ai",
    },
  };

  return (
    <Layout
      title="Practical AI Studio"
      description="ABOH builds intelligent systems, agents, and automations that plug directly into your operations."
      keywords="AI systems, AI automation, conversational agents, AI integrations, ABOH"
      structuredData={structuredData}
      background="none"
      theme="dark"
    >
      {/* Hero */}
      <section className="px-4 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">AI innovation studio</p>
          <h1 className="mb-6 text-4xl font-semibold text-white md:text-6xl">Practical AI for real businesses.</h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            ABOH builds intelligent systems using an AI-centred approach to ensure your operations are faster, easier, and more
            capable.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
            Every engagement is built with an AI-centred mindset so your team can move quickly without reinventing every
            workflow. Start with a conversation and leave with a plan.
          </p>
          <div className="flex flex-col items-center justify-center">
            <Link to={{ pathname: "/contact", search: "?via=agent" }}>
              <Button variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong">
                Let's talk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="px-4 pb-12">
        <div className="container mx-auto rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-center text-white/80">
          <p className="text-base font-medium text-white">Just some of the tools we blend into client systems.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-widest text-white/60">
            {credibilityPlatforms.map(({ name, Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-white/80"
              >
                <Icon className="text-white" />
                <span className="text-[11px] font-semibold tracking-[0.2em]">{name}</span>
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/70">We work with the tools your team already uses.</p>
        </div>
      </section>

      {/* What we do */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
            <h2 className="text-3xl font-semibold text-white">
              AI-centred business solutions, built for day-to-day impact.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950 p-6 sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">The ABOH approach</p>
            <h2 className="text-3xl font-semibold text-white">A simple, transparent way to move from idea to working AI.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((item) => (
              <article key={item.step} className="rounded-3xl border border-white/10 bg-black/40 p-6 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">{item.step}</p>
                <p className="mt-3 text-base text-white/80 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="px-4 py-20 md:py-24 border-t border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">From the ABOH Studio</p>
            <h2 className="text-3xl font-semibold text-white">Experiments and early technical work.</h2>
          </div>
          <div className="space-y-6">
            {studioHighlights.map((project) => (
              <article key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">{project.description}</p>
                  </div>
                  <Link to={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View details
                    <Rocket className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-950/70 p-6 sm:p-10">
          <div className="mb-6 flex flex-col gap-3 text-white">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Latest from the blog</p>
            <h2 className="text-3xl font-semibold">{blogFeature.title}</h2>
            <p className="text-base text-white/80">{blogFeature.summary}</p>
            <p className="text-sm text-white/60">{blogFeature.frequency}</p>
          </div>
          <Link to={blogFeature.link}>
            <Button variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong">
              Read the article
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-8 text-center text-white sm:px-8 sm:py-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Final call to action</p>
          <h2 className="text-3xl font-semibold">Let&apos;s design your next intelligent system.</h2>
          <p className="mt-4 text-base text-white/80">
            Start with the ABOH Agent or send us your project details -- we&apos;ll come back with clear ideas and a recommended
            approach.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to={{ pathname: "/contact", search: "?via=agent" }}>
              <Button variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong">
                Talk to the Agent
              </Button>
            </Link>
            <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
              <Link to={{ pathname: "/contact", search: "?via=message" }}>Send a Message</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
