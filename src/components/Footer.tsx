import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/writing-editing" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Writing & Editing</Link>
            <Link to="/business-solutions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Business Solutions</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Academic Services</h4>
          <div className="flex flex-col gap-2">
            <span className="text-sm opacity-80">Thesis Editing</span>
            <span className="text-sm opacity-80">AI & Similarity Review</span>
            <span className="text-sm opacity-80">SOP & LOR Assistance</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/faq" className="text-sm opacity-80 hover:opacity-100 transition-opacity">FAQ</Link>
            <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:consultantletter@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
              <Mail size={14} /> consultantletter@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm opacity-80">
              <Phone size={14} /> +94 75 7047 144
            </span>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm opacity-60 font-body">
          © {new Date().getFullYear()} Contora Services. All rights reserved.
        </p>
        <p className="text-xs opacity-50 font-body max-w-lg text-center md:text-right">
          We provide editing, rewriting, and drafting assistance services only. We do not write academic work on behalf of clients.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
