import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => (
  <section className="py-20 lg:py-28 relative overflow-hidden">
    {/* Decorative bg */}
    <div className="absolute inset-0 bg-accent/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-bold"
      >
        Ready to <span className="text-gradient-blue">Improve</span> Your Document?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground font-body max-w-lg mx-auto mb-8"
      >
        Submit your file today and receive a personalized quotation within 24 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
      >
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 shadow-blue group">
          <a href="#contact">
            Request Quote Now
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-accent/30 text-foreground hover:bg-accent/5 hover:border-accent/50 font-body text-base px-8">
          <a href="mailto:consultantletter@gmail.com">
            <Mail size={18} className="mr-2" />
            Email Us
          </a>
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="text-muted-foreground/60 text-xs font-body"
      >
        Limited daily review slots to maintain quality.
      </motion.p>
    </div>
  </section>
);

export default CTASection;
