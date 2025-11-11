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
      className="group rounded-lg border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-medium animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-smooth group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
};
