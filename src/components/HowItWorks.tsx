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
  <section id="how-it-works" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-dark-accent" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
          How It <span className="text-gradient-gold">Works</span>
        </h2>
        <p className="text-muted-foreground font-body">Simple, transparent, and efficient.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
            )}
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 shadow-glow">
              <s.icon size={28} className="text-accent" />
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
        Most projects completed within <strong className="text-accent">24–72 hours</strong>.
      </motion.p>
    </div>
  </section>
);

export default HowItWorks;
