import { motion } from "framer-motion";
import { Upload, Clock, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Submit Your Document",
    desc: "Upload securely or describe your requirement.",
  },
  {
    icon: Clock,
    num: "02",
    title: "Receive Quote Within 24 Hours",
    desc: "We assess your document and provide pricing + delivery timeline.",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Confirm & Receive Edited Version",
    desc: "Your improved document is delivered securely.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">How It Works</h2>
        <p className="text-muted-foreground font-body">Simple, transparent, and efficient.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4">
              <s.icon size={28} className="text-primary-foreground" />
            </div>
            <span className="text-accent font-body font-bold text-sm">{s.num}</span>
            <h3 className="font-display text-lg text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm font-body"
      >
        Most projects completed within <strong className="text-foreground">24–72 hours</strong>.
      </motion.p>
    </div>
  </section>
);

export default HowItWorks;
