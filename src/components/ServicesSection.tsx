   import { motion } from "framer-motion";

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">
          Our Business Focus
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Vexton Global Pvt. Ltd. specializes in sourcing and distributing
          high-demand consumer goods across India through structured wholesale
          and retail channels.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Global Sourcing
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Partnering with verified international manufacturers to source
            quality consumer products aligned with Indian market demand.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Import & Compliance
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Managing logistics, customs clearance, and regulatory compliance
            to ensure smooth and efficient imports.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Wholesale & Retail Distribution
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Supplying products through structured distribution networks across
            India to support growing retail demand.
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default ServicesSection;
