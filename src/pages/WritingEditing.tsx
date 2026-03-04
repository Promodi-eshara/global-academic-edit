import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Search, FileText, BookOpen, PenTool, CheckCircle, ArrowRight, AlertTriangle } from "lucide-react";

const WritingEditingPage = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Academic Editing, AI & Similarity Review Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/70 font-body max-w-2xl mx-auto mb-8"
        >
          Professional editing, AI and similarity review, rewriting support, and structured letter drafting assistance designed to improve clarity, tone, and presentation for academic and personal documents.
        </motion.p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-lg">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </div>
    </section>

    {/* Academic Editing */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <GraduationCap className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Academic Editing & Proofreading</h2>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {["Thesis editing", "Research paper proofreading", "Formatting support", "Reference checks (APA, MLA, Harvard, Chicago)", "Structural clarity improvement"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Search className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">AI & Similarity Review + Rewriting</h2>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {["Similarity analysis", "AI-content review", "Rewriting support", "Academic tone refinement", "Sentence restructuring"].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <p className="text-center text-xs text-muted-foreground font-body mt-8 italic">
          We provide editing and rewriting support only.
        </p>
      </div>
    </section>

    {/* SOP & LOR */}
    <section className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">SOP & LOR Assistance</h2>
          <p className="text-muted-foreground font-body text-sm">
            We provide structured drafting and editing assistance for Statements of Purpose (SOP) and Letters of Recommendation (LOR), ensuring clarity, professional tone, and organized presentation.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Clear and professional structure",
            "Strong and organized presentation of achievements",
            "Academic and professional tone refinement",
            "Flow and coherence improvement",
            "Formatting and final polish",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
            >
              <CheckCircle size={16} className="text-accent shrink-0" />
              <span className="font-body text-sm text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground font-body mt-6 italic">
          Drafting and editing assistance only. Final submission responsibility remains with the client.
        </p>
      </div>
    </section>

    {/* Professional Letters */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-12"
        >
          Professional Letters
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Character Reference Letters", desc: "Structured and professionally formatted character reference letters intended for court or administrative review." },
            { title: "Hardship Letters", desc: "Clear and respectful hardship letters for mortgage, loan, housing, or financial matters." },
            { title: "Criminal Background Explanation Letters", desc: "Organized and professional explanation letters for employment, licensing, or administrative requirements." },
            { title: "Court Apology Letters", desc: "Professionally structured apology letters for court proceedings." },
            { title: "Immigration Support Letters", desc: "Personal and family support letters structured for immigration-related purposes." },
            { title: "Employment & Verification Letter Drafts", desc: "Professionally formatted drafts based strictly on client-provided information." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border"
            >
              <FileText size={22} className="text-primary mb-3" />
              <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground font-body mt-8 italic">
          We provide drafting assistance only. We do not provide legal advice or create false documentation.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Need Academic Support?</h2>
        <p className="text-primary-foreground/70 font-body text-sm mb-6">Submit your document or requirement today and receive a professional quotation within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-lg">
            <Link to="/contact">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default WritingEditingPage;
