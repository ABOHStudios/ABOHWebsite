import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Our Portfolio" },
    { to: "/services", label: "What we do" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
          <img src={logo} alt="ABOH" className="h-10 w-auto rounded-none" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.to
                  ? "text-white"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button variant="brand" size="sm" className="ml-2 bg-sky-500 hover:bg-sky-600 text-white">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed right-0 top-16 z-50 h-[calc(100vh-4rem)] w-full border-l border-white/10 bg-black/90 backdrop-blur-xl p-6 shadow-medium animate-fade-in md:hidden">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
                      location.pathname === link.to
                        ? "bg-white/10 text-white"
                        : "text-gray-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="mt-2">
                  <Button variant="brand" className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
