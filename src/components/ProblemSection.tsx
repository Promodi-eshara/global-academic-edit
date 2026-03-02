import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const challenges = [
  "High similarity or plagiarism concerns",
  "AI-generated drafts requiring human refinement",
  "Grammar and clarity issues",
  "Journal or university formatting requirements",
  "Professional document preparation",
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-foreground mb-4"
        >
          Academic & Professional Writing Challenges in a Competitive Global Environment
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

      <div className="max-w-2xl mx-auto space-y-4 mb-12">
        {challenges.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 bg-background rounded-lg p-4 shadow-card"
          >
            <AlertTriangle size={18} className="text-accent mt-0.5 shrink-0" />
            <span className="text-foreground font-body text-sm">{c}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-primary rounded-xl p-6 text-center"
      >
        <p className="text-primary-foreground font-body text-sm md:text-base leading-relaxed">
          We provide structured review, editing, and rewriting support to improve clarity and originality while maintaining your ownership of content.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
