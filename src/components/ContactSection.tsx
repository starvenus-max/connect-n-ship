import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-medium text-sm tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-foreground">
            Let's Do Business Together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're a retailer looking for imported products or an international brand wanting to enter India, we'd love to hear from you.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="text-foreground font-medium">info@vextonglobal.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <div className="text-foreground font-medium">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Head Office</div>
                <div className="text-foreground font-medium">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <input className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" placeholder="Rahul Sharma" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
              <input className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" placeholder="Your Company" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <input type="email" className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40" placeholder="rahul@company.in" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">I'm Interested In</label>
            <select className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40">
              <option>Buying Imported Products</option>
              <option>Becoming a Distribution Partner</option>
              <option>Product Sourcing from Abroad</option>
              <option>Entering the Indian Market (International Brand)</option>
              <option>Other Enquiry</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <textarea rows={4} className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none" placeholder="Tell us what you're looking for..." />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded font-bold text-sm hover:bg-gold-dark transition-colors"
          >
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
