import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/pravesh2k25",
      label: "@pravesh2k25"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:info@pravesh2k25.com",
      label: "info@pravesh2k25.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+919876543210",
      label: "+91 98765 43210"
    }
  ];

  const quickLinks = [
    { title: "Event Details", href: "#details" },
    { title: "Book Tickets", href: "#booking" },
    { title: "Sponsors", href: "#sponsors" },
    { title: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-t from-background to-card/50 border-t border-pravesh-gold/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Event Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-pravesh bg-clip-text text-transparent mb-4">
                PRAVESH 2K25
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The ultimate freshers party experience awaits you. Join us for an unforgettable evening 
                of celebration, food, and friendships that will last a lifetime.
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-pravesh-gold mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Grand Banquet Hall</p>
                <p className="text-muted-foreground">
                  123 College Street<br />
                  University Campus<br />
                  City - 123456
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-pravesh-gold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-pravesh-red transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-bold text-pravesh-gold mb-6">Get In Touch</h4>
            <div className="space-y-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-muted-foreground hover:text-pravesh-blue transition-colors duration-300 group"
                >
                  <span className="text-pravesh-blue group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            {/* Event Countdown Mini */}
            <div className="bg-card/30 backdrop-blur-lg rounded-xl p-4 border border-pravesh-gold/20">
              <p className="text-sm text-muted-foreground mb-2">Next Event</p>
              <p className="font-bold text-pravesh-gold">October 11, 2025</p>
              <p className="text-xs text-muted-foreground">6:00 PM onwards</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pravesh-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Pravesh 2K25. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Made with ❤️ for the freshers of 2025
              </p>
            </div>

            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-muted-foreground hover:text-pravesh-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-pravesh-gold transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-muted-foreground hover:text-pravesh-gold transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-pravesh opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;