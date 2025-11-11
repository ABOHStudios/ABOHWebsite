import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:hello@aboh.ai?subject=Contact from ${formData.name || 'Website'}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening your email client...",
      description: "Your message details have been pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ABOH",
    "description": "Get in touch with ABOH for AI software development, ChatGPT applications, and AI consultancy services."
  };

  return (
    <Layout 
      title="Contact Us"
      description="Let's design your next AI milestone. Call, email, or drop us a note. We reply to every inquiry within two business days."
      keywords="contact ABOH, AI consultation, get in touch, AI services inquiry, schedule demo"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            Contact
          </p>
          <h1 className="mb-6 text-white animate-slide-up">
            Let's design your next AI milestone.
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Call, email, or drop us a note below. We reply to every inquiry within two business days.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="mb-8 text-white">Talk with us</h2>
                <p className="text-gray-300 mb-8">
                  Prefer a direct line? Reach out anytime.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10">
                  <div className="mb-2 flex items-center gap-2 text-sky-400">
                    <Phone size={18} />
                    <p className="text-sm font-medium uppercase tracking-wider">Phone</p>
                  </div>
                  <a 
                    href="tel:+15550102030" 
                    className="text-lg font-medium text-white hover:text-sky-400 transition-smooth"
                  >
                    +1 (555) 010-2030
                  </a>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10">
                  <div className="mb-2 flex items-center gap-2 text-sky-400">
                    <Mail size={18} />
                    <p className="text-sm font-medium uppercase tracking-wider">Email</p>
                  </div>
                  <a 
                    href="mailto:hello@aboh.ai" 
                    className="text-lg font-medium text-white hover:text-sky-400 transition-smooth"
                  >
                    hello@aboh.ai
                  </a>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10">
                  <div className="mb-2 flex items-center gap-2 text-sky-400">
                    <MapPin size={18} />
                    <p className="text-sm font-medium uppercase tracking-wider">HQ</p>
                  </div>
                  <p className="text-gray-300">
                    255 Market Street, Suite 8<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form 
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft"
              >
                <h2 className="mb-8 text-white">Send a message</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jordan Lee"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Studio One"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Project details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about the opportunity, timeline, and goals."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button type="submit" variant="brand" size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white">
                    Send email
                  </Button>
                  
                  <p className="text-sm text-gray-400">
                    Submitting will open your email client with the details pre-filled.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
