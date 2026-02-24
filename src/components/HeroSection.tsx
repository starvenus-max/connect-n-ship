import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ship.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Container ship carrying imported goods" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/75" />
    </div>

    <div className="container relative z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <div className="inline-block bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
          <span className="text-accent text-sm font-medium tracking-wide">Trusted importers serving pan-India markets</span>
        </div>

        <p className="mt-6 text-lg text-muted-foreground">
  Import & Distribution Company supplying quality consumer goods across India through structured wholesale and retail networks.
</p>

        <p className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed" style={{ color: "hsl(var(--primary-foreground) / 0.7)" }}>
          We source quality products from global manufacturers and distribute them across India — handling customs, logistics, and everything in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded font-bold text-base hover:bg-gold-dark transition-colors"
          >
            Partner With Us <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-accent/40 px-8 py-3.5 rounded font-medium text-base text-accent hover:bg-accent/10 transition-colors"
          >
            What We Do
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
