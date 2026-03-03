import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgPattern from "@/assets/bg-pattern.jpg";

const badges = [
  { icon: ShieldCheck, label: "100% Confidential" },
  { icon: Users, label: "Human Reviewed" },
  { icon: Zap, label: "Fast Global Delivery" },
  { icon: Award, label: "Academic & Professional Standards" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <img src={bgPattern} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
    </div>

    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
    <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/3 blur-3xl" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-28 lg:py-40">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-body font-medium text-accent">Serving clients internationally</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.1] text-foreground mb-6 font-bold"
        >
          Professional Academic{" "}
          <span className="text-gradient-blue">Editing</span> &{" "}
          <span className="text-gradient-blue">AI/Plagiarism</span>{" "}
          Review Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-body leading-relaxed"
        >
          Confidential human-reviewed support to improve originality, clarity, and academic quality for global students and professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 shadow-blue group">
            <a href="#contact">
              Request a Quote
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/30 text-foreground hover:bg-accent/5 hover:border-accent/50 font-body text-base px-8">
            <a href="#contact">Upload Your Document</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-muted-foreground text-sm font-body">
              <b.icon size={16} className="text-accent" />
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
