import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Licensed customs brokerage in 40+ countries",
  "ISO 9001 & AEO certified operations",
  "Dedicated account managers for every client",
  "Real-time shipment tracking portal",
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
            Your Reliable Partner in International Trade
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed mb-8">
            Since 1998, GlobalTrade has connected manufacturers, distributors, and retailers across six continents. We combine deep regulatory expertise with cutting-edge logistics technology to ensure your goods move seamlessly across borders.
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
                <div className="text-primary-foreground/50 text-sm mt-1">Active Clients</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">$2B+</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Trade Volume</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">350+</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-accent">18</div>
                <div className="text-primary-foreground/50 text-sm mt-1">Global Offices</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
