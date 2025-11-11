import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand animate-fade-in">
              About ABOH
            </p>
            <h1 className="mb-6 animate-slide-up">
              We fuse elegant design with real AI impact.
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              Founded by engineers and strategists from leading AI labs, ABOH helps organizations translate AI hype into measurable outcomes.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="animate-slide-up">
                <h2 className="mb-6">Our story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ABOH launched in 2016 with a belief that AI should feel as seamless as the best consumer products. We build with intention—scoping responsibly, validating assumptions early, and tailoring every solution to the humans who rely on it.
                </p>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
                <h2 className="mb-6">Values we live by</h2>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand"></span>
                    Design for trust and transparency.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand"></span>
                    Obsess over performance and quality.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand"></span>
                    Collaborate deeply with every stakeholder.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="bg-accent/30 px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-wider text-brand">
                  Our approach
                </p>
                <h2 className="mb-6">Strategy, prototyping, release—without the silos.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cross-functional squads embed with your team to uncover the right problems, model solutions that scale, and ship maintainable products.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1">
                  <p className="font-semibold">Human-centered research</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1">
                  <p className="font-semibold">Responsible AI playbooks</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-medium hover:-translate-y-1">
                  <p className="font-semibold">Lifecycle partnerships</p>
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

export default About;
