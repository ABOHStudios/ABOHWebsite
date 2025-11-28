import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Logoaboh.jpg";
import PillNav from "@/components/PillNav";

export const Navigation = () => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(() => (typeof window !== "undefined" ? window.innerWidth >= 768 : true));
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#what-we-do" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const nextIsDesktop = window.innerWidth >= 768;
      setIsDesktop(nextIsDesktop);
      if (nextIsDesktop) setMobileOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3" aria-label="ABOH home">
          <img src={logo} alt="ABOH" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
        </Link>
        {isDesktop ? (
          <PillNav
            logo={logo}
            logoAlt="ABOH"
            items={navItems}
            activeHref={location.pathname}
            ease="power2.easeOut"
            baseColor="rgba(2,6,23,0.95)"
            pillColor="#ffffff"
            hoveredPillTextColor="#0f172a"
            pillTextColor="#0f172a"
            showLogo={false}
          />
        ) : (
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={toggleMobile}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}
      </div>
      {!isDesktop && mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 px-6 py-10">
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="ABOH home" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="ABOH" className="h-12 w-12 object-contain" />
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={toggleMobile}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-8 text-2xl font-semibold text-white">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href.split("#")[0];
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`inline-flex items-center justify-between border-b border-white/10 pb-3 ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
