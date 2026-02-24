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
          Our Product Categories
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Vexton Global Pvt. Ltd. imports and distributes high-demand consumer
          goods across India, serving wholesale and retail markets with
          structured sourcing and reliable supply chains.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Home & Lifestyle */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Home & Lifestyle
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Home décor, utility products, storage solutions, and home
            improvement essentials sourced from international markets.
          </p>
        </div>

        {/* Toys */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Toys & Recreation
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Educational toys, activity kits, and indoor & outdoor recreational
            products designed for growing consumer demand.
          </p>
        </div>

        {/* Sports */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Sports & Fitness
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sports accessories, gym equipment, and active lifestyle products
            distributed through wholesale and retail partners.
          </p>
        </div>

        {/* Apparel */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">
            Apparel & Accessories
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Selected consumer fashion items and seasonal accessories aligned
            with market trends.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
