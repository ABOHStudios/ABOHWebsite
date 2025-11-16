import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import {
  Settings,
  MessageSquare,
  Lightbulb,
  Shield,
  Users,
  Sparkles,
  Newspaper,
} from "lucide-react";

const differentiators = [
  {
    icon: <Users className="text-white" size={20} />,
    title: "Human + machine synergy",
    description:
      "We co-create with clients so human intuition guides the mission while intelligent systems accelerate it.",
  },
  {
    icon: <Shield className="text-white" size={20} />,
    title: "Built for real impact",
    description: "Every launch targets tangible outcomes, faster workflows, smarter decisions and measurable change.",
  },
  {
    icon: <Sparkles className="text-white" size={20} />,
    title: "Always experimenting",
    description:
      "Curiosity drives our studio. We prototype, test, and learn relentlessly to push what’s possible with AI.",
  },
];

const technologyHighlights = [
  "State of the art language, vision, and multimodal models tuned for each workload",
  "Secure data pipelines, vector search, and monitoring that keep deployments reliable",
  "Elastic cloud infrastructure with automated scaling, observability, and governance",
  "Modern product engineering workflows that let us prototype fast and ship safely",
];

const insights = [
  {
    title: "AI Agents Explained Simply",
    summary: "What autonomous agents are, how they work, and why they’ll reshape every operating model.",
    link: "/blog/ai-agents-explained",
    week: "Week of 10 Nov 2025",
  },
];

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABOH",
    description: "AI Innovation Studio delivering AI-powered software, ChatGPT applications, and strategic consultancy",
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
      title="AI Innovation Studio"
      description="ABOH delivers AI-powered software, ChatGPT applications, and strategic consultancy with elegance and innovation. Transform your business with human-centered AI."
      keywords="AI software, ChatGPT applications, AI consultancy, machine learning, artificial intelligence, AI innovation"
      structuredData={structuredData}
      background="none"
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent animate-fade-in">
            AI software and applications
          </p>
          <h1 className="mb-6 text-white animate-slide-up">Building the next generation of intelligent software</h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-white animate-slide-up" style={{ animationDelay: "100ms" }}>
            ABOH ships production AI software, conversational applications, and strategy engagements that translate
            emerging tech into measurable outcomes.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link to="/services">
              <Button variant="brand" size="lg" className="bg-accent text-black hover:bg-accent-strong">
                Explore services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto rounded-[32px] border border-white/10 bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-slate-950/80 px-6 py-12 shadow-[0_40px_120px_rgba(2,6,23,0.65)]">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">What we do</p>
            <h2 className="text-white">Full-stack AI craftsmanship.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <ServiceCard
              icon={<Settings size={24} />}
              title="AI Software Development"
              description="Ship bespoke platforms that weave AI into everyday workflows."
              delay={0}
            />
            <ServiceCard
              icon={<MessageSquare size={24} />}
              title="ChatGPT Application Development"
              description="Launch copilots and assistants grounded in your data and brand."
              delay={100}
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/5 pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">Why choose us</p>
            <h2 className="text-white">Values that anchor every partnership.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-soft">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                  {item.icon}
                </div>
                <h3 className="text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Commitment */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-transparent p-8 md:p-12">
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">Technologies we trust</p>
            <h2 className="text-white">Built on the latest AI and engineering stacks.</h2>
          </div>
          <p className="text-base text-white mb-8">
            Every engagement pairs cutting edge AI research with proven software craft. We select model providers,
            infrastructure, and tooling based on the problem, not vendor hype, so your roadmap stays flexible as the
            ecosystem evolves.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {technologyHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-white flex items-start gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="px-4 py-20 md:py-28 border-t border-b border-white/10 bg-slate-950/60">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent">Weekly blog post</p>
              <h2 className="text-white">Blogs every week · Week of 10 Nov</h2>
          
            </div>
            
          </div>
          <div className="grid gap-6 md:grid-cols-1">
            {insights.map((post) => (
              <article
                key={post.title}
                className="flex flex-col md:flex-row md:items-center gap-6 rounded-3xl border border-white/10 bg-black/40 p-8 md:p-10 shadow-soft hover:-translate-y-1 transition-smooth"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 shrink-0">
                  <Newspaper className="text-white" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-2xl">{post.title}</h3>
                  {post.week && (
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60 mt-2">{post.week}</p>
                  )}
                  <p className="mt-3 text-base text-white leading-relaxed">{post.summary}</p>
                </div>
                <Link
                  to={post.link}
                  className="text-white text-sm font-semibold hover:text-white/70 whitespace-nowrap self-start md:self-center"
                >
                  Continue reading →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
