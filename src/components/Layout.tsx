import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import Beams from "./Beams";
import LightRays from "./LightRays";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  structuredData?: object;
  background?: "beams" | "lightRays" | "none";
  theme?: "dark" | "plain";
}

export const Layout = ({
  children,
  title,
  description,
  keywords,
  structuredData,
  background = "lightRays",
  theme = "dark",
}: LayoutProps) => {
  const location = useLocation();
  const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.aboh.studio";
  const BASE_TITLE = "ABOH Studio";
  const hasBrandInTitle = title?.toLowerCase().includes("aboh");
  const pageTitle = title ? (hasBrandInTitle ? title : `${title} | ${BASE_TITLE}`) : BASE_TITLE;
  const canonicalPath = location.pathname || "/";
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const defaultOgImage = `${SITE_URL}/logoaboh.png`;
  const pageDescription =
    description ||
    "ABOH Studio builds intelligent systems, AI agents, and automations for teams across the Isle of Man and beyond.";
  const isPlain = theme === "plain";

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:site_name" content={BASE_TITLE} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:image:alt" content="ABOH logo" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={defaultOgImage} />

        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        )}
      </Helmet>

      <div className={`relative min-h-screen ${isPlain ? "bg-white text-slate-900" : "bg-black text-white"}`}>
        {!isPlain && (
          <div className="fixed inset-0 z-0 bg-black">
            {background === "beams" && (
              <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#0EA5E9"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
              />
            )}
            {background === "lightRays" && (
              <LightRays
                raysOrigin="top-center"
                raysColor="#00ffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="opacity-90"
              />
            )}
          </div>
        )}

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
