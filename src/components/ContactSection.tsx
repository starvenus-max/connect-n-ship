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
          <span className="text-accent font-medium text-sm tracking-widest uppercase">
            Contact
          </span>

          <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-foreground">
            Global Imports. Local Distribution.
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Vexton Global Pvt. Ltd. specializes in importing high-quality products 
            from international markets and distributing them across India through 
            structured wholesale and retail channels. We are committed to reliable 
            sourcing, competitive pricing, and long-term business partnerships.
          </p>

          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <Mail className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <a
                  href="mailto:info@vextonglobal.com"
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  info@vextonglobal.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <Phone className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Phone</div>
                <a
                  href="tel:+911234567890"
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  +91 1234567890
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Registered Office
                </div>
                <div className="text-foreground font-medium leading-relaxed">
                  Vexton Global Pvt. Ltd.<br />
                  Maner, Danapur,<br />
                  Patna, Bihar,<br />
                  India – 801108
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
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
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Full Name
              </label>
              <input
                className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Company Name
              </label>
              <input
                className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
              placeholder="email@company.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Business Enquiry Type
            </label>
            <select className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40">
              <option>Wholesale Purchase Enquiry</option>
              <option>Retail Supply Enquiry</option>
              <option>Distribution Partnership</option>
              <option>International Supplier Collaboration</option>
              <option>Other Business Enquiry</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
              placeholder="Tell us about your requirement..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground py-3 rounded font-bold text-sm hover:bg-gold-dark transition-colors"
          >
            Submit Business Enquiry
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;
