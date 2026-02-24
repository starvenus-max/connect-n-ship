const Footer = () => (
  <footer className="bg-primary border-t border-navy-light/30 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded bg-accent flex items-center justify-center font-serif text-accent-foreground text-sm font-bold">V</div>
            <span className="text-primary-foreground font-serif text-lg">Vexton Global</span>
          </div>
          <p className="text-primary-foreground/50 text-sm leading-relaxed">
            Bringing the world's best products to India's growing markets.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-medium text-sm mb-4">Services</h4>
          <ul className="space-y-2 text-primary-foreground/50 text-sm">
            <li><a href="#services" className="hover:text-accent transition-colors">Global Sourcing</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Customs & Compliance</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Pan-India Distribution</a></li>
            <li><a href="#services" className="hover:text-accent transition-colors">Market Entry Support</a></li>
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
            <li><a href="#" className="hover:text-accent transition-colors">Import Licence Info</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-light/30 pt-6 text-center text-primary-foreground/40 text-sm">
        © 2026 Vexton Global. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
