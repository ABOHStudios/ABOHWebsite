import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABOH",
    url: "https://www.aboh.studio/about",
    description:
      "ABOH is an AI studio that designs and ships intelligent systems, automations, and conversational agents for modern teams.",
    sameAs: ["https://twitter.com/aboh_studio"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Business",
      email: "hello@aboh.studio",
    },
  };

  const pillars = [
    {
      title: "AI-first delivery",
      copy: "We design products, workflows, and data foundations with AI at the centre so teams move faster without sacrificing control.",
    },
    {
      title: "Operational clarity",
      copy: "We prioritise measurable wins, clear milestones, and adoption support so solutions actually get used.",
    },
    {
      title: "Secure by default",
      copy: "We build with privacy, compliance, and governance in mind - from data handling through deployment.",
    },
  ];

  const whatWeDo = [
    {
      title: "AI systems & automation",
      copy: "We ship AI-centred systems that clear manual work - data entry, routing, and co-pilots that keep teams moving.",
    },
    {
      title: "Conversational agents",
      copy: "Helpful, brand-safe agents for customer support, internal guidance, tourism, onboarding, and business insights.",
    },
    {
      title: "Intelligent apps & integrations",
      copy: "Custom apps on modern AI platforms, extending ChatGPT-style experiences, 365, Workspace, CRMs, and internal tools.",
    },
  ];

  return (
    <Layout
      title="About ABOH Studio | Isle of Man AI team"
      description="Learn about ABOH Studio, an Isle of Man AI studio building agents, automations, and intelligent products that plug into how teams really work."
      keywords="About ABOH Studio, ABOH Studio Isle of Man, AI studio, AI automation team, AI product studio"
      structuredData={structuredData}
      background="none"
    >
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About ABOH</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">ABOH Studio is an Isle of Man AI studio.</h1>
          <p className="max-w-3xl text-lg text-white/80">
            ABOH is an Isle of Man based AI studio focused on shipping AI-centred products. From automation and retrieval to
            conversational agents and full-stack products.
          </p>
          <p className="text-xs text-white/50">
            Looking for local delivery? See our{" "}
            <Link to="/ai-development-isle-of-man" className="text-white/60 underline-offset-4 hover:text-accent hover:underline">
              Isle of Man AI work
            </Link>
            .
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong">
              <Link to="/contact">Talk with the team</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
              <Link to="/ai-development-isle-of-man">Isle of Man AI services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-20">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">What we do</p>
            <h2 className="text-3xl font-semibold text-white">AI-centred business solutions, built for day-to-day impact.</h2>
            <p className="mt-3 text-base text-white/70">
              Practical builds that plug into your workflows so your team gets time back and your operations stay tight.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {whatWeDo.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-24">
        <div className="container mx-auto max-w-6xl space-y-8">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">What drives us</p>
            <h2 className="text-3xl font-semibold text-white">Principles we build with</h2>
            <p className="mt-3 text-base text-white/70">
              Every engagement is designed to be fast, measurable, and safe - aligning stakeholders without slowing delivery.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-5xl space-y-6">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="text-3xl font-semibold text-white">Questions teams ask about AI</h2>
            <p className="mt-2 text-base text-white/70">
              Straight answers on agents, automation, and how we deliver them for your team.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-lg font-semibold text-white">Can you build AI agents for customer support?</h3>
              <p className="mt-2 text-sm text-white/80">
                Yes. We design conversational agents with retrieval, brand tone, and guardrails so they stay accurate and on-message.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-lg font-semibold text-white">Do you integrate with 365, Workspace, or CRMs?</h3>
              <p className="mt-2 text-sm text-white/80">
                Absolutely. We connect to Microsoft 365, Google Workspace, CRMs, and internal systems to keep workflows intact.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-lg font-semibold text-white">How do you handle data privacy and compliance?</h3>
              <p className="mt-2 text-sm text-white/80">
                We design with least-privilege access, auditability, and clear data flows so security and regulatory needs are met.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-slate-950/70 p-6 sm:p-10">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How we work</p>
            <h2 className="text-3xl font-semibold text-white">Strategy, build, and evolution</h2>
          </div>
          <p className="text-white/80 leading-relaxed">
            We pair product strategy with engineering depth: discovery to define the problem, rapid pilots to prove value, and
            iterative releases that integrate with your tools and teams. You get clear ownership and measurable outcomes from a
            single partner.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="brand" size="lg" className="bg-accent text-white hover:bg-accent-strong">
              <Link to={{ pathname: "/contact", search: "?via=about" }}>Start a project</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-white/20 text-white hover:bg-white/10">
              <Link to="/blog/ai-agents-explained">Explore our thinking</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
