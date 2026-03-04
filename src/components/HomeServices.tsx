import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeServices = () => (
  <section className="py-20 bg-background" id="services">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border group"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Academic & Document Services</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
            Professional editing, AI and similarity review, rewriting support, and structured letter drafting assistance designed to improve clarity, tone, and presentation for academic and personal documents.
          </p>
          <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors rounded-lg">
            <Link to="/writing-editing">
              Explore Academic Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow border border-border group"
        >
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <Briefcase className="text-accent" size={28} />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">Business & Digital Solutions</h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
            Remote IT support, virtual assistant services, and digital marketing assistance to help businesses streamline operations, strengthen online presence, and grow with structured support.
          </p>
          <Button asChild variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors rounded-lg">
            <Link to="/business-solutions">
              Explore Business Solutions <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HomeServices;
