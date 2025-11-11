import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-4 text-lg font-semibold">Let's build the next wave of AI experiences.</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href="mailto:hello@aboh.ai" className="hover:text-brand transition-smooth">
                  hello@aboh.ai
                </a>
              </p>
              <p>
                <a href="tel:+15550102030" className="hover:text-brand transition-smooth">
                  +1 (555) 010-2030
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block text-sm hover:text-brand transition-smooth"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-sm hover:text-brand transition-smooth"
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className="block text-sm hover:text-brand transition-smooth"
              >
                What we do
              </Link>
              <Link
                to="/contact"
                className="block text-sm hover:text-brand transition-smooth"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Location
            </h4>
            <address className="text-sm not-italic text-muted-foreground">
              255 Market Street, Suite 8<br />
              San Francisco, CA 94105
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} ABOH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
