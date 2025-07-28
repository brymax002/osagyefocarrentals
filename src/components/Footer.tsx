import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Airport Transfers",
    "Business Travel",
    "Family Trips",
    "Group Events",
    "Long Distance",
    "City Tours"
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Osagyefo</h3>
                <p className="text-sm text-primary-foreground/80">Car Rentals</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Your trusted partner for reliable, affordable, and comfortable transportation 
              in Accra and beyond. Quality vehicles at competitive prices.
            </p>
            <WhatsAppButton 
              text="Book Now" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80 flex items-center">
                  <span className="w-2 h-2 bg-secondary/60 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    H De Mod, Bush St<br />
                    North Kaneshie, Accra<br />
                    Ghana
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/233245720474"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors duration-300 text-sm font-medium"
                  >
                    +233 24 572 0474
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Email</p>
                  <a 
                    href="mailto:addoemma246@gmail.com"
                    className="text-secondary hover:text-secondary/80 transition-colors duration-300 text-sm font-medium"
                  >
                    addoemma246@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Available</p>
                  <p className="text-secondary text-sm font-medium">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Osagyefo Car Rentals. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-xs mt-1">
                Trusted car rental service in Accra, Ghana
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://maps.app.goo.gl/qkozKD115WMXPj2G7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
              >
                Find Us on Google Maps
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a 
                href="tel:+233245720474"
                className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;