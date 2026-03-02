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
  <section id="why-us" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">Why Clients Worldwide Choose Us</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 bg-secondary rounded-lg p-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon size={20} className="text-primary" />
            </div>
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
