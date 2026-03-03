import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";

const challenges = [
  "High similarity or plagiarism concerns",
  "AI-generated drafts requiring human refinement",
  "Grammar and clarity issues",
  "Journal or university formatting requirements",
  "Professional document preparation",
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden gradient-section">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
        >
          Writing Challenges in a{" "}
          <span className="text-gradient-blue">Competitive</span> Global Environment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground font-body"
        >
          Students and professionals worldwide face challenges such as:
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3 mb-14">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card border border-border hover:shadow-card-hover hover:border-accent/20 transition-all duration-300"
          >
            <AlertTriangle size={18} className="text-accent mt-0.5 shrink-0" />
            <span className="text-foreground font-body text-sm">{c}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
        className="max-w-2xl mx-auto rounded-xl p-6 text-center bg-accent/5 border border-accent/20 shadow-glow"
      >
        <Sparkles size={20} className="text-accent mx-auto mb-3" />
        <p className="text-foreground font-body text-sm md:text-base leading-relaxed">
          We provide structured review, editing, and rewriting support to improve clarity and originality while maintaining your ownership of content.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
