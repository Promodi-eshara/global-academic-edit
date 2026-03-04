import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, UserCheck, Megaphone, Target, CheckCircle, Upload, Clock, FileCheck } from "lucide-react";

const BusinessSolutionsPage = () => (
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
          Business Support & Digital Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-primary-foreground/70 font-body max-w-2xl mx-auto mb-8"
        >
          Remote IT support, virtual assistant services, and digital marketing assistance to help businesses streamline operations, strengthen online presence, and grow with structured support.
        </motion.p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-lg">
          <Link to="/contact">Request Business Support</Link>
        </Button>
      </div>
    </section>

    {/* Remote IT & Tech Support */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Monitor className="text-primary" size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Remote IT & Technical Support</h2>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {[
                "Website content updates",
                "Domain and hosting guidance",
                "Email configuration",
                "Contact form setup",
                "Basic troubleshooting",
                "Analytics setup assistance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">We do not provide advanced software development or cybersecurity services.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <UserCheck className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Virtual Assistant Services</h2>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              {[
                "Email management and inbox organization",
                "Calendar scheduling and appointment coordination",
                "Data entry and spreadsheet updates",
                "Online research and information gathering",
                "File organization and digital document management",
                "Document formatting and presentation support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">Flexible support available for one-time tasks or ongoing assistance.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Digital Marketing */}
    <section className="py-20 gradient-section-alt">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-12"
        >
          Digital Marketing Services
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <Megaphone size={24} className="text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Social Media Management</h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              {[
                "Content planning and scheduling",
                "Caption writing and formatting",
                "Engagement monitoring support",
                "Basic performance tracking",
                "Monthly activity summary",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl p-8 shadow-card border border-border"
          >
            <Target size={24} className="text-accent mb-4" />
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Paid Advertising Management</h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              {[
                "Google Ads campaign setup",
                "Keyword and audience targeting",
                "Budget monitoring and optimization",
                "Basic conversion tracking setup",
                "Performance reporting and insights",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">Results may vary depending on industry, competition, and advertising budget.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold text-foreground text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Upload, num: "01", title: "Share Your Requirement", desc: "Tell us your business goal or task details." },
            { icon: Clock, num: "02", title: "Receive Quote & Plan", desc: "We provide a clear service plan, pricing, and timeline." },
            { icon: FileCheck, num: "03", title: "Execution & Updates", desc: "We complete the task and provide structured updates or reporting." },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
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
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Grow Your Business with Structured Support</h2>
        <p className="text-primary-foreground/70 font-body text-sm mb-6">Let's simplify your operations and strengthen your online presence.</p>
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

export default BusinessSolutionsPage;
