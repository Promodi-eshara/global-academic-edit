import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShieldCheck, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Academic Editing & Writing Support",
  "AI & Similarity Review + Rewriting",
  "Professional & Official Letter Drafting",
  "Editing & Proofreading",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const deadline = formData.get("deadline") as string;
    const instructions = formData.get("instructions") as string;

    const subject = encodeURIComponent(`Service Request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nDeadline: ${deadline || "Not specified"}\n\nInstructions:\n${instructions || "None"}`
    );

    window.location.href = `mailto:consultantletter@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Opening email client...",
        description: "Your email client should open with the request details.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            Fill out the form below to request a quote or upload your document.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 lg:p-8 shadow-glow-lg space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-sm text-foreground">Full Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" className="font-body bg-muted/50 border-border focus:border-accent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm text-foreground">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="font-body bg-muted/50 border-border focus:border-accent" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country" className="font-body text-sm text-foreground">Country</Label>
              <Input id="country" name="country" required placeholder="Your country" className="font-body bg-muted/50 border-border focus:border-accent" />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm text-foreground">Service Required</Label>
              <Select name="service" required>
                <SelectTrigger className="font-body bg-muted/50 border-border">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="glass-strong">
                  {services.map((s) => (
                    <SelectItem key={s} value={s} className="font-body">{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline" className="font-body text-sm text-foreground">Deadline</Label>
            <Input id="deadline" name="deadline" type="date" className="font-body bg-muted/50 border-border focus:border-accent" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file" className="font-body text-sm text-foreground">Upload Document</Label>
            <Input id="file" name="file" type="file" className="font-body bg-muted/50 border-border" accept=".doc,.docx,.pdf,.txt,.rtf" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions" className="font-body text-sm text-foreground">Additional Instructions</Label>
            <Textarea id="instructions" name="instructions" placeholder="Any specific requirements..." className="font-body min-h-[100px] bg-muted/50 border-border focus:border-accent" />
          </div>

          <Button type="submit" disabled={submitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-glow group">
            {submitting ? "Opening..." : (
              <>
                Submit Request
                <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs font-body">
            <ShieldCheck size={14} className="text-success" />
            <span>Secure file upload – Encrypted & Confidential</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
