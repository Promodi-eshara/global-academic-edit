import { motion } from "framer-motion";
import { ShieldCheck, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Aisha K.",
    location: "United Kingdom",
    text: "Contora transformed my thesis with meticulous editing. The clarity improvement was remarkable and helped me meet my university's standards.",
  },
  {
    name: "Carlos M.",
    location: "Brazil",
    text: "I needed my SOP polished for a US university application. The team delivered within 48 hours with outstanding quality.",
  },
  {
    name: "Yuki T.",
    location: "Japan",
    text: "The AI similarity review was thorough and professional. They highlighted every section that needed improvement and suggested clear alternatives.",
  },
  {
    name: "Fatima A.",
    location: "UAE",
    text: "Excellent service for my research manuscript. The formatting and citation corrections were spot-on for journal submission.",
  },
];

const SocialProof = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden gradient-section">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 font-bold">
          Trusted <span className="text-gradient-blue">Across Borders</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:border-accent/20 transition-all duration-500 relative"
          >
            <Quote size={20} className="text-accent/20 absolute top-5 right-5" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} size={14} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/75 text-sm font-body mb-5 leading-relaxed italic">"{t.text}"</p>
            <div>
              <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs font-body">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
          <ShieldCheck size={16} className="text-success" />
          <span>Confidentiality Guaranteed</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
          <ShieldCheck size={16} className="text-success" />
          <span>Secure File Handling</span>
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
