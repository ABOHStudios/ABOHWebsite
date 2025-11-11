import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <article 
      className="group rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 transition-smooth group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </article>
  );
};
