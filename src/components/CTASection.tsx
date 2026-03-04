import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-20 bg-primary">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
      >
        Ready to Get Professional Support?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
      >
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-body rounded-lg group">
          <Link to="/contact">
            Request a Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body rounded-lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
