import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Let's build the next wave of AI experiences.</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <a href="mailto:hello@aboh.ai" className="hover:text-sky-400 transition-smooth">
                  hello@aboh.ai
                </a>
              </p>
              <p>
                <a href="tel:+15550102030" className="hover:text-sky-400 transition-smooth">
                  +1 (555) 010-2030
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                What we do
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Location
            </h4>
            <address className="text-sm not-italic text-gray-300">
              255 Market Street, Suite 8<br />
              San Francisco, CA 94105
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} ABOH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
