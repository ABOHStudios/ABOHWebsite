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
import {
  SiOpenai,
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiPostgresql,
  SiFastapi,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si";

const differentiators = [
  {
    icon: <Users className="text-sky-400" size={20} />,
    title: "Human + machine synergy",
    description:
      "We co-create with clients so human intuition guides the mission while intelligent systems accelerate it.",
  },
  {
    icon: <Shield className="text-sky-400" size={20} />,
    title: "Built for real impact",
    description: "Every launch targets tangible outcomes, faster workflows, smarter decisions and measurable change.",
  },
  {
    icon: <Sparkles className="text-sky-400" size={20} />,
    title: "Always experimenting",
    description:
      "Curiosity drives our studio. We prototype, test, and learn relentlessly to push what’s possible with AI.",
  },
];

const techLogos = [
  { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
  { node: <SiHuggingface />, title: "Hugging Face", href: "https://huggingface.co" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://tensorflow.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
];

const insights = [
  {
    title: "How we build responsible AI",
    summary: "A playbook for aligning legal, product, and ML before code hits production.",
    link: "/services",
  },
  {
    title: "5 ways generative AI transforms workflows",
    summary: "Lessons from copilots launched across ops, finance, and creative teams.",
    link: "/portfolio",
  },
  {
    title: "Designing copilots people trust",
    summary: "Interface patterns that keep humans in the loop while delivering speed.",
    link: "/contact",
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
      background="beams"
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            AI software, applications, and consultancy
          </p>
          <h1 className="mb-6 text-white animate-slide-up">Building the next generation of intelligent software</h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            ABOH ships production AI software, conversational applications, and strategy engagements that translate
            emerging tech into measurable outcomes.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link to="/services">
              <Button variant="brand" size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
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
        <div className="container mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">What we do</p>
            <h2 className="text-white">Full-stack AI craftsmanship.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            <ServiceCard
              icon={<Lightbulb size={24} />}
              title="AI Consultancy"
              description="Align teams, roadmaps, and governance so AI ships responsibly."
              delay={200}
            />
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="px-4 py-16 md:py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-400">Why choose us</p>
            <h2 className="text-white">Values that anchor every partnership.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-soft">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  {item.icon}
                </div>
                <h3 className="text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-400">Technologies we trust</p>
          <h2 className="text-white">Modern stacks for resilient AI products.</h2>
          <p className="mt-4 text-base text-gray-300">
            We pair proven infrastructure with the latest LLM tooling so your roadmap scales with confidence.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-3xl">
            {techLogos.map((logo) => (
              <a
                key={logo.title}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:-translate-y-1"
                aria-label={logo.title}
              >
                {logo.node}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="px-4 py-20 md:py-28 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-sky-400">Latest insights</p>
              <h2 className="text-white">Ideas from the lab and the field.</h2>
            </div>
            <Link to="/portfolio" className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-smooth">
              See all insights →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <article
                key={post.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/40 p-6 shadow-soft hover:-translate-y-1 transition-smooth"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <Newspaper className="text-sky-400" size={20} />
                </div>
                <h3 className="text-white">{post.title}</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed flex-grow">{post.summary}</p>
                <Link to={post.link} className="mt-6 inline-flex text-sky-400 text-sm font-semibold hover:text-sky-300">
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
