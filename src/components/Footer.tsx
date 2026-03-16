import React, { useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Phone, Mail, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.072 3.138 9.412 7.577 11.169-.103-.949-.19-2.403.041-3.439.207-.93 1.338-5.673 1.338-5.673s-.341-.684-.341-1.696c0-1.59.922-2.777 2.069-2.777 0.975 0 1.446.733 1.446 1.611 0 .981-.625 2.448-.948 3.807-.269 1.139.572 2.068 1.695 2.068 2.035 0 3.599-2.146 3.599-5.244 0-2.742-1.97-4.66-4.785-4.66-3.26 0-5.174 2.445-5.174 4.972 0 .984.379 2.04 0.852 2.612.094.113.108.212.079.327-.087.362-.281 1.144-.319 1.3-.051.208-.168.252-.387.151-1.443-.671-2.344-2.777-2.344-4.47 0-3.642 2.645-6.989 7.633-6.989 4.01 0 7.126 2.857 7.126 6.677 0 3.984-2.513 7.189-6.002 7.189-1.171 0-2.272-.609-2.648-1.328 0 0-.579 2.204-.721 2.748-.261 1.002-.968 2.258-1.44 3.031 1.125.347 2.316.535 3.551.535 6.62 0 12.016-5.396 12.016-12.017C24.034 5.397 18.637 0 12.017 0z"/>
  </svg>
);

export const Footer = () => {
  useEffect(() => {
    // Google Translate Script
    const addGoogleTranslate = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: 'en', layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE },
          'google_translate_element'
        );
      };
    };

    if (!document.getElementById('google-translate-script')) {
      addGoogleTranslate();
    }

    // Inject custom styles for the widget
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-gadget-simple {
        background-color: transparent !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        border-radius: 8px !important;
        padding: 8px !important;
        width: 100%;
      }
      .goog-te-gadget-simple span {
        color: #fff !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value span {
        color: #fff !important;
      }
      .goog-te-gadget-icon {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    }
  }, []);

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="bg-white/90 p-3 rounded-xl shadow-lg inline-block">
  <img 
    src="/gallery/logo.png" 
    alt="Star World Packer Logo" 
    className="h-14 w-auto object-contain"
  />
</div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Star world packer - Leading packers and movers in Haridwar providing professional relocation services since 2014. Your safety is our priority.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Facebook size={20} />, href: "#", color: "hover:bg-blue-600" },
                { icon: <Twitter size={20} />, href: "#", color: "hover:bg-sky-500" },
                { icon: <Instagram size={20} />, href: "#", color: "hover:bg-pink-600" },
                { icon: <Linkedin size={20} />, href: "#", color: "hover:bg-blue-700" },
                { icon: <Youtube size={20} />, href: "#", color: "hover:bg-red-600" },
                { icon: <PinterestIcon size={20} />, href: "#", color: "hover:bg-red-700" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.15,
                    boxShadow: "0 10px 20px -5px rgba(0,0,0,0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href} 
                  className={`bg-white/10 p-3.5 rounded-2xl transition-all duration-300 text-white/80 hover:text-white border border-white/5 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Visitor Counter */}
            <div className="mt-10 bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 w-fit">
              <div className="bg-secondary/20 p-2 rounded-lg text-secondary">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Visitors</div>
                <div className="text-xl font-mono font-bold text-white tracking-widest">
                  {/* Mock counter */}
                  120
                </div>
              </div>
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
                { name: 'Our Certificates', href: '/certificates' },
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
              {['Home Relocation', 'Office Shifting', 'Car Transport', 'Bike Transport', 'Warehouse Storage', 'Local Shifting' ,'Interstate Shifting', 'Packing and Unpacking' ].map((service) => (
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
            <ul className="space-y-6 mb-8">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span className="text-slate-400">123, Shivalik Nagar, BHEL, Haridwar, Uttarakhand</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
                  <p className="text-slate-500">+91 94500 38615</p>              </li>
                  <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={20} />
     <p className="text-slate-500">+91 91206 22066</p>
     </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={20} />
                <p className="text-slate-500">Starworldpackers1988@gmail.com</p>
              </li>
            </ul>

            {/* Google Translate */}
            <div className="pt-6 border-t border-white/5">
              <div className="text-xs text-slate-500 uppercase font-bold mb-3 tracking-widest">Translate Site</div>
              <div id="google_translate_element" className="rounded-lg overflow-hidden"></div>
            </div>
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
