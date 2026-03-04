import { motion } from "framer-motion";
import { AlertCircle, Bot, FileText, BookOpen } from "lucide-react";

const problems = [
  { icon: Bot, text: "AI-generated drafts requiring human refinement" },
  { icon: AlertCircle, text: "Grammar and clarity issues" },
  { icon: BookOpen, text: "Journal or university formatting requirements" },
  { icon: FileText, text: "Professional document preparation" },
];

const ProblemSection = () => (
  <section className="py-20 gradient-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Writing Challenges in a Competitive Global Environment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground font-body mb-10"
        >
          Students and professionals worldwide face challenges such as:
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border shadow-card text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon size={20} className="text-primary" />
              </div>
              <p className="text-sm text-foreground font-body">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
