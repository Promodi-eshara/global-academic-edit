import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  <section id="faq" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">Frequently Asked Questions</h2>
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
              className="bg-secondary rounded-lg border-none px-6"
            >
              <AccordionTrigger className="font-body font-medium text-foreground text-left hover:no-underline">
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
        className="mt-12 border border-border rounded-lg p-6 bg-secondary"
      >
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          <strong className="text-foreground">⚖ Important Disclaimer:</strong> We provide editing, rewriting, and drafting assistance services only. We do not write academic work on behalf of clients. Clients remain fully responsible for final submission and compliance with institutional or legal requirements.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
