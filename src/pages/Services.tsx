import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "AI-powered Software Development",
      description: "We architect cloud-native platforms, internal tools, and data products that embed machine learning where it matters most.",
      features: [
        "Product and technical roadmapping",
        "Model selection, training, and evaluation",
        "Privacy, security, and MLOps foundations"
      ],
      link: "Start a build"
    },
    {
      title: "ChatGPT Application Development",
      description: "Custom GPT agents, copilots, and integrations that align with your data, workflows, and governance requirements.",
      features: [
        "Knowledge grounding and retrieval",
        "Persona and tone orchestration",
        "Multi-modal experiences across web, mobile, and voice"
      ],
      link: "Prototype a copilot"
    },
    {
      title: "AI Consultancy",
      description: "Strategic programs that identify AI-ready opportunities, align stakeholders, and build the operating model for continuous innovation.",
      features: [
        "Executive workshops and playbooks",
        "Responsible AI assessments",
        "Change management and training"
      ],
      link: "Book a consultation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-28">
          <div className="container mx-auto max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-brand animate-fade-in">
              What we deliver
            </p>
            <h1 className="mb-6 animate-slide-up">
              End-to-end AI programs built for scale.
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
              From discovery workshops through launch, we blend design, engineering, and change management to unlock value fast.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl space-y-8">
            {services.map((service, index) => (
              <article 
                key={service.title}
                className="rounded-lg border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-medium animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="mb-4">{service.title}</h2>
                <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start text-muted-foreground">
                      <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-brand font-medium transition-smooth hover:translate-x-1"
                >
                  {service.link} <ArrowRight className="ml-2" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
