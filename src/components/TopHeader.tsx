import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const PinterestIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.017 0C5.396 0 0 5.397 0 12.017c0 5.072 3.138 9.412 7.577 11.169-.103-.949-.19-2.403.041-3.439.207-.937 1.338-5.677 1.338-5.677s-.341-.683-.341-1.693c0-1.587.921-2.771 2.065-2.771 0.974 0 1.444.731 1.444 1.607 0 0.98-.624 2.446-.946 3.805-.269 1.139.572 2.068 1.695 2.068 2.035 0 3.6-2.146 3.6-5.245 0-2.741-1.97-4.658-4.782-4.658-3.257 0-5.167 2.443-5.167 4.966 0 0.984.379 2.04 0.852 2.612.094.114.107.214.079.329-.087.363-.281 1.146-.319 1.303-.05.21-.164.255-.378.156-1.41-.656-2.29-2.715-2.29-4.368 0-3.556 2.583-6.822 7.452-6.822 3.912 0 6.95 2.788 6.95 6.512 0 3.886-2.451 7.014-5.852 7.014-1.143 0-2.218-.593-2.585-1.294l-.704 2.68c-.254.978-.942 2.203-1.402 2.946 1.114.344 2.294.53 3.518.53 6.62 0 12.017-5.396 12.017-12.017C24.034 5.397 18.637 0 12.017 0z" />
  </svg>
);

export const TopHeader = () => {
  return (
    <div className="bg-primary text-white py-2 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-[10px] lg:text-xs font-medium uppercase tracking-wider">
          {/* Left Side: GST & Udyam */}
          <div className="flex gap-4 lg:gap-6">
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">GST NO:</span>
              <span className="text-white/90">05ABCDE1234F1Z5</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-secondary font-bold">UDYAM:</span>
              <span className="text-white/90">UDYAM-UK-06-0012345</span>
            </div>
          </div>

          {/* Right Side: Contact & Socials */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="flex items-center gap-3 lg:gap-4">
              <a href="mailto:info@starworldpacker.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                <Mail size={12} className="text-secondary" />
                <span className="lowercase">info@starworldpacker.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-secondary transition-colors border-l border-white/20 pl-3 lg:pl-4">
                <Phone size={12} className="text-secondary" />
                <span>+91 98765 43210</span>
              </a>
            </div>

            <div className="flex items-center gap-3 lg:gap-4 border-l border-white/20 pl-3 lg:pl-4">
              <a href="#" className="hover:text-secondary transition-colors" title="Facebook"><Facebook size={14} /></a>
              <a href="#" className="hover:text-secondary transition-colors" title="Twitter"><Twitter size={14} /></a>
              <a href="#" className="hover:text-secondary transition-colors" title="Instagram"><Instagram size={14} /></a>
              <a href="#" className="hover:text-secondary transition-colors" title="YouTube"><Youtube size={14} /></a>
              <a href="#" className="hover:text-secondary transition-colors" title="LinkedIn"><Linkedin size={14} /></a>
              <a href="#" className="hover:text-secondary transition-colors" title="Pinterest"><PinterestIcon size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
