const Footer = () => (
  <footer className="bg-primary border-t border-navy-light/30 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded bg-accent flex items-center justify-center font-serif text-accent-foreground text-sm font-bold">G</div>
            <span className="text-primary-foreground font-serif text-lg">GlobalTrade</span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">
            Your trusted partner for seamless international trade and logistics.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-primary-foreground/50 text-sm">
            <li><a href="#services" className="hover:text-accent transition-colors">Ocean Freight</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Air Freight</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Customs Clearance</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Warehousing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-primary-foreground/50 text-sm">
            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">News</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium text-sm mb-4">Legal</h4>
          <ul className="space-y-2 text-primary-foreground/50 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-light/30 pt-6 text-center text-primary-foreground/40 text-sm">
        © 2026 GlobalTrade. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
