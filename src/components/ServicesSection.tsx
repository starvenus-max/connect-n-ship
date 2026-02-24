import { motion } from "framer-motion";
import { Ship, Plane, FileCheck, BarChart3, Warehouse, Globe } from "lucide-react";

const services = [
  { icon: Ship, title: "Ocean Freight", desc: "FCL & LCL shipping across all major trade lanes with competitive rates." },
  { icon: Plane, title: "Air Freight", desc: "Express and standard air cargo solutions for time-sensitive shipments." },
  { icon: FileCheck, title: "Customs Clearance", desc: "Full documentation, compliance, and duty management handled for you." },
  { icon: Warehouse, title: "Warehousing", desc: "Bonded and free-zone storage with inventory management systems." },
  { icon: Globe, title: "Trade Consulting", desc: "Market entry strategy, sourcing, and regulatory guidance worldwide." },
  { icon: BarChart3, title: "Supply Chain", desc: "End-to-end visibility, analytics, and optimization of your supply chain." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-medium text-sm tracking-widest uppercase">What We Do</span>
        <h2 className="text-3xl md:text-5xl font-serif mt-3 text-foreground">Our Services</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-card border border-border rounded-lg p-7 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <s.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-serif text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
