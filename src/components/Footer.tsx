import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Pin as Pinterest, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <ArrowRight className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-none">STAR WORLD</span>
                <span className="text-sm font-semibold text-secondary tracking-widest uppercase">Packer</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Star world packer - Leading packers and movers in Haridwar providing professional relocation services since 2014. Your safety is our priority.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-all text-white/70 hover:text-white">
                <Pinterest size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Why Choose Us', href: '/why-choose-us' },
                { name: 'Our Services', href: '/services' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Our Clients', href: '/clients' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-secondary transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Our Services</h4>
            <ul className="space-y-4">
              {['Home Relocation', 'Office Shifting', 'Car Transport', 'Bike Transport', 'Warehouse Storage', 'Local Shifting'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-400 hover:text-secondary transition-all flex items-center gap-2 group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400">123, Shivalik Nagar, BHEL, Haridwar, Uttarakhand</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400">+91 98765 43210</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400">info@packersmoversharidwar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Star world packer. All Rights Reserved.</p>
          <p>
            Designed & Developed By{' '}
            <a 
              href="https://www.webworldhub.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors font-semibold"
            >
              Web World Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
