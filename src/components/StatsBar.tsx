import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "50+", label: "Source Countries" },
  { value: "10K+", label: "Products Imported" },
  { value: "28", label: "Indian States Served" },
];

const StatsBar = () => (
  <section className="bg-primary border-y border-navy-light/30">
    <div className="container py-10 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-serif text-accent mb-1">{s.value}</div>
            <div className="text-sm text-primary-foreground/60 font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
