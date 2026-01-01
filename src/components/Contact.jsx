import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, MessageSquare, MapPin } from 'lucide-react';
import contactImg from '/Users/castromurugan/.gemini/antigravity/brain/be895798-3630-4ef2-8137-ad51d5df21ec/contact_support_avatar_1767257381810.png';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ firstName: '', lastName: '', email: '', message: '', agree: false });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
          >
            <div className="mb-8">
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2 block">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Let&apos;s Chat, Reach Out to Us</h2>
              <p className="text-gray-400 font-light">
                Have questions or feedback? We&apos;re here to help. Send us a message, and we&apos;ll respond within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Leave us a message"
                  rows="4"
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  required 
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  name="agree"
                  checked={formState.agree}
                  onChange={handleChange}
                  id="agree"
                  className="w-5 h-5 rounded border-gray-600 text-cyan-500 focus:ring-cyan-500 bg-transparent"
                  required
                />
                <label htmlFor="agree" className="text-sm text-gray-400 cursor-pointer select-none">
                  I agree to our friendly <a href="#" className="text-cyan-400 underline decoration-cyan-400/30 hover:decoration-cyan-400">privacy policy</a>
                </label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                    : 'bg-white text-black hover:bg-cyan-50'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Visual & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Image Card */}
            <div className="relative h-64 md:h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
              <img 
                src={contactImg} 
                alt="Support Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/20 mb-2">
                   <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                   <span className="text-xs text-cyan-300 font-medium">Online Now</span>
                </div>
                <h3 className="text-xl font-semibold text-white">Dedicated Support Team</h3>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Visit us at</p>
                  <p className="text-lg text-white font-medium">5A/510 Caldwell colony 5th street<br/>Thoothukudi-628008</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email us at</p>
                  <p className="text-lg text-white font-medium">hello@vseyal.com</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:bg-white/10 transition-colors group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call us at</p>
                  <p className="text-lg text-white font-medium">+91 6369693510</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
