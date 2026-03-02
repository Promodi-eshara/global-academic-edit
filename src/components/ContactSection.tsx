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
import { ShieldCheck } from "lucide-react";
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
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request received!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">Get in Touch</h2>
          <p className="text-muted-foreground font-body text-sm">
            Fill out the form below to request a quote or upload your document.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-background rounded-xl p-6 lg:p-8 shadow-card space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-body text-sm">Full Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-body text-sm">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="font-body" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="country" className="font-body text-sm">Country</Label>
              <Input id="country" name="country" required placeholder="Your country" className="font-body" />
            </div>
            <div className="space-y-2">
              <Label className="font-body text-sm">Service Required</Label>
              <Select name="service" required>
                <SelectTrigger className="font-body">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s} className="font-body">{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline" className="font-body text-sm">Deadline</Label>
            <Input id="deadline" name="deadline" type="date" className="font-body" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="file" className="font-body text-sm">Upload Document</Label>
            <Input id="file" name="file" type="file" className="font-body" accept=".doc,.docx,.pdf,.txt,.rtf" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions" className="font-body text-sm">Additional Instructions</Label>
            <Textarea id="instructions" name="instructions" placeholder="Any specific requirements..." className="font-body min-h-[100px]" />
          </div>

          <Button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-navy-light font-body font-semibold">
            {submitting ? "Submitting..." : "Submit Request"}
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
