import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote Request from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:consultantletter@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Request a Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/70 font-body"
          >
            Send your requirement and deadline. We will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Contact Info Boxes */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Mail, label: "Email", value: "consultantletter@gmail.com", href: "mailto:consultantletter@gmail.com" },
              { icon: Phone, label: "WhatsApp", value: "+94 75 7047 144" },
              { icon: Clock, label: "Response Time", value: "Within 24 hours" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center"
              >
                <item.icon size={24} className="text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground font-body mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-body font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                ) : (
                  <p className="text-sm font-body font-medium text-foreground">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 shadow-card border border-border space-y-5 max-w-2xl mx-auto"
          >
            <h2 className="font-display text-xl font-bold text-foreground text-center mb-2">Contact Form</h2>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body rounded-lg">
              Submit Request
            </Button>
            <p className="text-center text-xs text-muted-foreground font-body">Thank you. We will respond within 24 hours.</p>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
