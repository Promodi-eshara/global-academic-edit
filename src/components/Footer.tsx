const Footer = () => (
  <footer className="py-10 bg-primary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-display text-xl text-primary-foreground">Contora</a>
        <nav className="flex flex-wrap gap-6">
          {["Services", "How It Works", "FAQ", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm font-body transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center">
        <p className="text-primary-foreground/40 text-xs font-body">
          © {new Date().getFullYear()} Contora. All rights reserved. Editing & drafting assistance services only.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
