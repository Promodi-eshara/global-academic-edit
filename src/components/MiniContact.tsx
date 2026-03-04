import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Upload } from "lucide-react";
import { useState } from "react";

const MiniContact = () => {
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
    <section className="py-20 bg-background" id="mini-contact">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-2">Request a Quote</h2>
          <p className="text-muted-foreground font-body">We will respond within 24 hours.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-xl p-8 shadow-card border border-border space-y-5"
        >
          <input
            type="text"
            placeholder="Name"
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
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          />
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body rounded-lg">
            Submit Request
          </Button>
        </motion.form>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-muted-foreground font-body">
          <a href="mailto:consultantletter@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} /> consultantletter@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone size={14} /> +94 75 7047 144
          </span>
        </div>
      </div>
    </section>
  );
};

export default MiniContact;
