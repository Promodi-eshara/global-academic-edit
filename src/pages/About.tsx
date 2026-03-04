import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, Lock, Zap, Globe } from "lucide-react";

const focuses = [
  { icon: Eye, title: "Clarity", desc: "We prioritize clear structure, organized presentation, and professional formatting to ensure every document or project communicates effectively." },
  { icon: Lock, title: "Confidentiality", desc: "All client information and documents are handled with strict confidentiality and secure communication practices." },
  { icon: Zap, title: "Professional Execution", desc: "Every project is completed with attention to detail, structured workflow, and timely delivery." },
];

const AboutPage = () => (
  <>
    <Navbar />

    <section className="pt-28 pb-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          About Contora Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/70 font-body max-w-2xl mx-auto"
        >
          Contora Services provides professional academic, document, and business support solutions for clients across the United States, United Kingdom, and Canada. Our focus is structured execution, clear communication, and confidential handling of every project we undertake.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-12"
        >
          Our Focus
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {focuses.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="text-center bg-card rounded-xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <Globe size={40} className="text-primary mx-auto mb-6" />
        <h2 className="font-display text-3xl font-bold text-foreground mb-4">Serving Clients Across the US, UK & Canada</h2>
        <p className="text-muted-foreground font-body">
          Contora Services works with students, professionals, entrepreneurs, and small businesses throughout the United States, United Kingdom, and Canada. Our remote service model allows us to provide timely, reliable, and structured support regardless of location.
        </p>
      </div>
    </section>

    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Work With Contora Services</h2>
        <p className="text-primary-foreground/70 font-body text-sm mb-6">Let us support your academic, professional, or business needs with clarity and structured execution.</p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-lg">
          <Link to="/contact">Request a Quote</Link>
        </Button>
      </div>
    </section>

    <Footer />
  </>
);

export default AboutPage;
