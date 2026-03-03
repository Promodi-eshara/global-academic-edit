import { motion } from "framer-motion";
import { Lock, Users, BookOpen, MessageCircle, Zap, Lightbulb, Globe } from "lucide-react";

const reasons = [
  { icon: Lock, label: "Strict Confidentiality Policy" },
  { icon: Users, label: "Human-Reviewed Editing" },
  { icon: BookOpen, label: "Academic Expertise" },
  { icon: MessageCircle, label: "Transparent Communication" },
  { icon: Zap, label: "Fast Turnaround" },
  { icon: Lightbulb, label: "Improvement-Focused Suggestions" },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 lg:py-28 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 font-bold">
          Why Clients <span className="text-gradient-blue">Choose Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.04, y: -4 }}
            className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover hover:border-accent/20 transition-all duration-500 group"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors"
            >
              <r.icon size={20} className="text-accent" />
            </motion.div>
            <span className="text-sm font-body font-medium text-foreground">{r.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-body"
      >
        <Globe size={16} className="text-accent" />
        <span>Serving international clients across multiple academic systems.</span>
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;
