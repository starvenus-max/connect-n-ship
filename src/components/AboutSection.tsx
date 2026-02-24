import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-muted/30">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-foreground">
            About Vexton Global Pvt. Ltd.
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Vexton Global Pvt. Ltd. is a registered import and distribution
            company based in Patna, Bihar. We focus on sourcing quality
            consumer goods from international markets and supplying them
            across India through structured wholesale and retail networks.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Our approach is built on responsible sourcing, compliance-driven
            import processes, and long-term business partnerships. As an
            emerging company, we are committed to building reliable supply
            chains and scalable distribution channels in the Indian market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-xl font-semibold">
              Why Partner With Us
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>✔ Structured global sourcing network</li>
              <li>✔ Transparent import & compliance handling</li>
              <li>✔ Wholesale and retail distribution model</li>
              <li>✔ Long-term partnership focus</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;
