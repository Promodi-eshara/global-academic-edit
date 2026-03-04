import { motion } from "framer-motion";
import { Upload, Clock, CheckCircle } from "lucide-react";

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
    icon: CheckCircle,
    num: "03",
    title: "Confirm & Receive Edited Version",
    desc: "Your improved document is delivered securely.",
  },
];

const HowItWorks = () => (
  <section className="py-20 bg-background" id="how-it-works">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">How It Works</h2>
        <p className="text-muted-foreground font-body">Simple, transparent, and efficient.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon size={28} className="text-primary" />
            </div>
            <span className="text-xs font-body font-bold text-accent tracking-widest">{s.num}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center text-sm text-muted-foreground font-body mt-10"
      >
        Most projects completed within 24–72 hours.
      </motion.p>
    </div>
  </section>
);

export default HowItWorks;
