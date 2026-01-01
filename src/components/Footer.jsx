import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">VSEYAL</h2>
            <p className="text-gray-400 max-w-sm">
              We build the future of digital interaction with premium engineering and design.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-black transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-primary hover:text-black transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vseyal Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
