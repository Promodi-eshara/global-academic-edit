import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "stefan734",
    country: "United States",
    text: "I needed someone in a pinch. She came through for me within just a few minutes. My document came out perfect. Can't surpass that kind of quality and attention to detail!",
  },
  {
    name: "sameratalton",
    country: "United States",
    text: "Excellent work! The job offer letter was written clearly, professionally, and exactly to my specifications. Communication was smooth, and revisions were handled quickly. Highly recommend!",
    repeat: true,
  },
  {
    name: "bachjack53",
    country: "United States",
    text: "Great work fast response, great attention to detail.",
  },
  {
    name: "mr_ruparaj",
    country: "Singapore",
    text: "Very very professional and cooperative.",
  },
  {
    name: "douglasortiz429",
    country: "United States",
    text: "Excellent communication and professionalism, as well as fast shipping!",
  },
];

const SocialProof = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Feedback and Reviews</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border"
          >
            <Quote size={20} className="text-accent/40 mb-3" />
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">"{r.text}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-body font-semibold text-sm text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.country}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
            {r.repeat && (
              <span className="inline-block mt-2 text-[10px] font-body font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full">Repeat Client</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
