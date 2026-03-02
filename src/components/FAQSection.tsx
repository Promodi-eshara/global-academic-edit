import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

const faqs = [
  {
    q: "Is my document confidential?",
    a: "Yes. All documents are handled securely and never shared with third parties. We maintain strict confidentiality at every stage.",
  },
  {
    q: "Do you guarantee plagiarism removal?",
    a: "We provide rewriting and improvement support to reduce similarity and enhance originality. Final submission responsibility remains with the client.",
  },
  {
    q: "Do you work with international universities?",
    a: "Yes. We support clients globally across various academic systems, including universities in the UK, US, Australia, Canada, Europe, Middle East, and Asia.",
  },
  {
    q: "What formats do you accept?",
    a: "We accept Word documents, PDFs, research manuscripts, and professional documents in all common formats.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 gradient-dark-accent" />
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl border-none px-6"
            >
              <AccordionTrigger className="font-body font-medium text-foreground text-left hover:no-underline hover:text-accent transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 border border-accent/20 rounded-xl p-6 glass"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle size={16} className="text-accent mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground font-body leading-relaxed">
            <strong className="text-foreground">Important Disclaimer:</strong> We provide editing, rewriting, and drafting assistance services only. We do not write academic work on behalf of clients. Clients remain fully responsible for final submission and compliance with institutional or legal requirements.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
