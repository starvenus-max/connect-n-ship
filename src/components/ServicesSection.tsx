import { motion } from "framer-motion";
import { Ship, FileCheck, Package, Store, Globe, TrendingUp } from "lucide-react";

const services = [
  { icon: Ship, title: "Global Sourcing", desc: "We source high-quality products from manufacturers in China, Southeast Asia, Europe, and the Middle East." },
  { icon: FileCheck, title: "Customs & Compliance", desc: "Complete import documentation, duty calculation, and regulatory compliance under Indian customs law." },
  { icon: Package, title: "Warehousing & Storage", desc: "Bonded warehouses and distribution centers across key Indian cities for efficient storage." },
  { icon: Store, title: "Pan-India Distribution", desc: "Established dealer and retailer networks to sell imported goods across all 28 states." },
  { icon: Globe, title: "Product Sourcing Consultation", desc: "Help Indian businesses find reliable international suppliers and negotiate the best terms." },
  { icon: TrendingUp, title: "Market Entry Support", desc: "Helping international brands enter and establish themselves in the Indian market." },
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
