import { motion } from "framer-motion";
import { GraduationCap, Search, FileText, PenTool, Check } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Academic Editing & Writing Support",
    desc: "For undergraduate, postgraduate, and doctoral level documents.",
    items: [
      "Thesis & dissertation editing",
      "Research manuscript proofreading",
      "Journal formatting adjustment",
      "Citation & reference correction (APA, MLA, Harvard, Chicago)",
      "Structural clarity improvement",
    ],
  },
  {
    icon: Search,
    title: "AI & Similarity Review + Rewriting Support",
    desc: "Refine AI-generated content and reduce similarity concerns.",
    items: [
      "AI-generated draft refinement",
      "Similarity analysis report",
      "Highlighted improvement sections",
      "Sentence restructuring",
      "Academic tone alignment",
    ],
  },
  {
    icon: FileText,
    title: "Professional & Official Letter Drafting",
    desc: "Polished documents for professional and official purposes.",
    items: [
      "Personal statements",
      "Statement of purpose (SOP)",
      "Explanation letters",
      "Character reference drafting assistance",
      "Immigration / official letters",
    ],
  },
  {
    icon: PenTool,
    title: "Editing & Proofreading (All Documents)",
    desc: "Comprehensive language and clarity enhancement.",
    items: [
      "Grammar correction",
      "Clarity improvement",
      "Readability enhancement",
      "Professional tone polishing",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 relative">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
          Our <span className="text-gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto">
          Comprehensive academic and professional document services tailored to international standards.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 lg:p-8 hover:shadow-glow hover:border-glow transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
              <s.icon size={26} className="text-accent" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-sm font-body mb-5">{s.desc}</p>
            <ul className="space-y-2.5">
              {s.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm font-body text-foreground/75">
                  <Check size={14} className="text-success mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
