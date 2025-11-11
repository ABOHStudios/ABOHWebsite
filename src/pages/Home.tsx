import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Settings, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="gradient-subtle px-4 py-20 md:py-32 lg:py-40">
          <div className="container mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand animate-fade-in">
              AI Innovation Studio
            </p>
            <h1 className="mb-6 animate-slide-up">
              Smarter experiences powered by human-centered AI.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              ABOH crafts AI software, ChatGPT applications, and strategic consultancy that feel effortless
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Link to="/services">
                <Button variant="brand" size="lg">
                  Explore services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" size="lg">
                  Schedule a demo <ArrowRight className="ml-1" size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto">
            <div className="mb-16 max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
                What we do
              </p>
              <h2>Full-stack AI craftsmanship.</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Settings size={24} />}
                title="AI-powered Software"
                description="Custom platforms that weave machine learning into intuitive digital experiences."
                delay={0}
              />
              <ServiceCard
                icon={<MessageSquare size={24} />}
                title="ChatGPT Applications"
                description="Conversational agents, copilots, and assistants tuned to your brand voice."
                delay={100}
              />
              <ServiceCard
                icon={<Lightbulb size={24} />}
                title="AI Consultancy"
                description="Strategic guidance to uncover value, align teams, and ship responsibly."
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="bg-accent/30 px-4 py-20 md:py-28">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
                  Performance-first
                </p>
                <h2 className="mb-6">Responsive by design, optimized for every device.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We obsess over millisecond load times and pixel-perfect layouts, ensuring ABOH experiences feel premium on mobile, desktop, and everything in between.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium">
                  <p className="font-semibold">95+ Lighthouse score</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium">
                  <p className="font-semibold">Edge-ready delivery</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium">
                  <p className="font-semibold">Measured conversions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
