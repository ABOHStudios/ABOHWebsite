import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Logoaboh.jpg";
import PillNav from "@/components/PillNav";

export const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3" aria-label="ABOH home">
          <img src={logo} alt="ABOH" className="h-16 w-16 object-contain" />
        </Link>
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
      </div>
    </header>
  );
};
