import { motion } from "framer-motion";
import { GraduationCap, Search, Briefcase, Building2, Rocket, User } from "lucide-react";

const people = [
  { icon: GraduationCap, label: "Students" },
  { icon: Search, label: "Researchers" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Building2, label: "Small Businesses" },
  { icon: Rocket, label: "Startups" },
  { icon: User, label: "Entrepreneurs" },
];

const WhoWeHelp = () => (
  <section className="py-20 gradient-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
      >
        Who We Help
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {people.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 150 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl shadow-card border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <p.icon size={22} className="text-primary" />
            </div>
            <span className="font-body font-medium text-sm text-foreground">{p.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeHelp;
