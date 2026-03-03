import { Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border relative bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-xl font-bold text-gradient-blue">Contora</a>
        <nav className="flex flex-wrap gap-6">
          {["Services", "How It Works", "FAQ", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-muted-foreground hover:text-accent text-sm font-body transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground/60 text-xs font-body">
          © {new Date().getFullYear()} Contora. All rights reserved. Editing & drafting assistance services only.
        </p>
        <a href="mailto:consultantletter@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-accent text-xs font-body transition-colors">
          <Mail size={12} />
          consultantletter@gmail.com
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
