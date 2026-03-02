import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: ShieldCheck, label: "100% Confidential" },
  { icon: Users, label: "Human Reviewed" },
  { icon: Zap, label: "Fast Global Delivery" },
  { icon: Award, label: "Academic & Professional Standards" },
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-navy opacity-90" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 lg:py-32">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-primary-foreground mb-6"
        >
          Professional Academic Editing & AI/Plagiarism Review Services – Worldwide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl font-body leading-relaxed"
        >
          Confidential human-reviewed support to improve originality, clarity, and academic quality for global students and professionals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8">
            <a href="#contact">Request a Quote</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8">
            <a href="#contact">Upload Your Document</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-primary-foreground/70 text-sm font-body">
              <b.icon size={16} className="text-accent" />
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="text-primary-foreground/50 text-xs mt-6 font-body"
        >
          Serving clients internationally
        </motion.p>
      </div>
    </div>
  </section>
);

export default HeroSection;
