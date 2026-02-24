import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Registered importer with DGFT & Indian Customs",
  "Strong supplier relationships in 50+ countries",
  "Pan-India distribution network across all major cities",
  "Competitive pricing through bulk sourcing and direct factory ties",
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-primary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">About Us</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-primary-foreground">
            From the World to India's Doorstep
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed mb-8">
            We are a dedicated import and distribution company based in India. We source quality products from trusted international manufacturers and make them available to businesses and consumers across the country — from metro cities to tier-2 and tier-3 towns.
          </p>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-0.5 flex-shrink-0" size={20} />
                <span className="text-primary-foreground/80 text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-navy-light rounded-lg p-10 md:p-14">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-serif text-accent">500+</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Retail Partners</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">₹200Cr+</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Annual Trade</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">100+</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">12</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Warehouses in India</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
