import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";

const sections = [
  {
    title: "Academic & Document Services",
    faqs: [
      { q: "Is my document kept confidential?", a: "Yes. All documents and personal information are handled privately and used only for the requested service. We do not share, sell, or distribute client content." },
      { q: "Do you guarantee plagiarism-free or AI-undetectable results?", a: "No. We provide similarity review, AI-content assessment, and rewriting support to improve clarity and originality. We do not guarantee specific detection outcomes. Final submission responsibility remains with the client." },
      { q: "What is included in AI & similarity review?", a: "We review your document using professional tools and provide: highlighted similarity areas, feedback on structure and clarity, rewriting support for readability, and academic tone improvement." },
      { q: "Do you write assignments or complete academic work on behalf of students?", a: "We provide editing, rewriting, and drafting assistance only. Clients are responsible for reviewing and submitting their work in accordance with institutional policies." },
      { q: "How long does academic editing take?", a: "Turnaround time depends on document length and urgency. Most projects are completed within 24–72 hours. Larger documents may require additional time." },
      { q: "What types of documents do you accept?", a: "We support research papers, theses & dissertations, journal manuscripts, SOP & LOR drafts, personal and professional letters, reports and structured documents." },
    ],
  },
  {
    title: "Letter Writing Services",
    faqs: [
      { q: "Do you provide legal advice?", a: "No. We provide drafting assistance only. We are not a law firm and do not offer legal representation or advice." },
      { q: "What types of letters do you help draft?", a: "We assist with character reference letters, court apology letters, hardship letters, criminal background explanation letters, immigration support letters, and employment and housing-related letter drafts. All letters are structured professionally based on client-provided information." },
      { q: "Do you create fake job letters or falsified documents?", a: "No. We do not create false, misleading, or fraudulent documentation. All information must be accurate and authorized." },
      { q: "Are hardship and explanation letters formatted according to US standards?", a: "Yes. Our letters follow standard US professional formatting and tone guidelines." },
    ],
  },
  {
    title: "Business & Digital Solutions",
    faqs: [
      { q: "What type of IT support do you provide?", a: "We provide basic remote technical support including website content updates, domain and hosting guidance, email configuration, contact form setup, basic troubleshooting, and analytics setup assistance. We do not provide advanced software development or cybersecurity services." },
      { q: "Do you offer ongoing virtual assistant support?", a: "Yes. We offer one-time tasks as well as ongoing support plans for administrative and digital assistance." },
      { q: "What digital marketing services do you offer?", a: "We provide social media management support, paid advertising setup and optimization, basic SEO improvements, website optimization guidance, and performance reporting assistance." },
      { q: "Do you guarantee marketing results?", a: "We do not guarantee specific results. Marketing performance depends on multiple factors including budget, competition, and industry conditions." },
    ],
  },
  {
    title: "Payments & Process",
    faqs: [
      { q: "How do I get pricing?", a: "Submit your requirement and deadline through our contact form. We will review and provide a quotation within 24 hours." },
      { q: "What payment methods do you accept?", a: "Payment details will be shared after quotation confirmation." },
      { q: "Do you offer revisions?", a: "Minor revisions related to the original scope are typically supported. Significant changes may require additional review." },
      { q: "Where are you located?", a: "Contora Services operates remotely and serves clients in the United States, United Kingdom, and Canada." },
    ],
  },
  {
    title: "Privacy & Confidentiality",
    faqs: [
      { q: "How is my data protected?", a: "All files and information are handled securely and used only for the purpose of delivering the requested service." },
      { q: "How quickly will I receive a response?", a: "We respond to inquiries within 24 hours." },
    ],
  },
];

const FAQPage = () => (
  <>
    <Navbar />

    <section className="pt-28 pb-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Frequently Asked Questions
        </motion.h1>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {sections.map((section, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.05 }}
            className="mb-12"
          >
            <h2 className="font-display text-xl font-bold text-foreground mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.faqs.map((faq, fi) => (
                <AccordionItem key={fi} value={`${si}-${fi}`} className="bg-card rounded-lg border border-border px-4">
                  <AccordionTrigger className="font-body font-medium text-sm text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}

        <div className="text-center mt-12 p-8 bg-card rounded-xl border border-border shadow-card">
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">Still Have Questions?</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-body mb-4">
            <a href="mailto:consultantletter@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} /> consultantletter@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +94 75 7047 144
            </span>
          </div>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body rounded-lg">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default FAQPage;
