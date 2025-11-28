import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Let's build the next wave of AI experiences.</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Email us at{" "}
                <a href="mailto:hello@aboh.studio" className="hover:text-white transition-smooth">
                  hello@aboh.studio
                </a>
              </p>
            </div>
            <div className="mt-4 flex gap-4 text-gray-300">
              <a
                href="https://twitter.com/aboh_studio"
                target="_blank"
                rel="noreferrer"
                aria-label="ABOH on Twitter"
                className="hover:text-white transition-smooth"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/aboh_studio"
                target="_blank"
                rel="noreferrer"
                aria-label="ABOH on Instagram"
                className="hover:text-sky-400 transition-smooth"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Navigation</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                About
              </Link>
              <a href="/#what-we-do" className="block text-sm text-gray-300 hover:text-white transition-smooth">
                What we do
              </a>
              <Link
                to="/ai-development-isle-of-man"
                className="block text-sm text-gray-300 hover:text-white transition-smooth"
              >
                Isle of Man AI
              </Link>
              <Link to="/contact" className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 space-y-3 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} ABOH. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 text-gray-400 sm:flex-row sm:justify-center sm:gap-6">
            <Link to="/privacy" className="hover:text-white transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
