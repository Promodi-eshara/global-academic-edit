import { motion } from "framer-motion";
import { Lock, MessageSquare, Layers, Globe, UserCheck, Zap } from "lucide-react";

const reasons = [
  { icon: Lock, title: "Strict Confidentiality Policy" },
  { icon: UserCheck, title: "Human-Reviewed Editing" },
  { icon: Layers, title: "Academic Expertise" },
  { icon: MessageSquare, title: "Transparent Communication" },
  { icon: Zap, title: "Fast Turnaround" },
  { icon: Globe, title: "Improvement-Focused Suggestions" },
];

const WhyChooseUs = () => (
  <section className="py-20 gradient-section-alt" id="why-us">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Why Clients Choose Us</h2>
        <p className="text-muted-foreground font-body">Serving international clients across multiple academic systems.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon size={20} className="text-primary" />
            </div>
            <span className="font-body font-medium text-sm text-foreground">{r.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
