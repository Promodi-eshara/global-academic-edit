import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  { icon: ShieldCheck, label: "100% Confidential" },
  { icon: Users, label: "Human Reviewed" },
  { icon: Zap, label: "Fast Global Delivery" },
  { icon: Award, label: "Academic & Professional Standards" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
    {/* Decorative shapes */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-foreground/5 blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/5" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-28 lg:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-body font-medium text-primary-foreground/80">Serving clients internationally</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground mb-6 font-bold"
        >
          Professional Academic & Business{" "}
          <span className="text-accent">Support Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto font-body leading-relaxed"
        >
          Confidential academic editing, AI and similarity review with rewriting support, professional document drafting assistance, plus IT, virtual assistant, and digital marketing services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 rounded-lg group">
            <Link to="/contact">
              Request a Quote
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8 rounded-lg">
            <Link to="/contact">Upload Your Document</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-primary-foreground/60 text-sm font-body">
              <b.icon size={16} className="text-accent" />
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xs text-primary-foreground/40 mt-6 font-body"
        >
          Confidential Handling | Human-Reviewed | US/UK/Canada Clients | 24-Hour Quote
        </motion.p>
      </div>
    </div>
  </section>
);

export default HeroSection;
