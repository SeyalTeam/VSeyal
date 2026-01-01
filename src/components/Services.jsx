import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, ShieldCheck, CloudLightning, LineChart, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Brain strokeWidth={1.5} className="w-10 h-10" />,
    title: "Cognitive Intelligence",
    description: "Deploying advanced neural networks and machine learning models to automate complex decision-making processes."
  },
  {
    icon: <Globe strokeWidth={1.5} className="w-10 h-10" />,
    title: "Digital Ecosystems",
    description: "Architecting scalable, high-performance web platforms that serve as the backbone of your digital presence."
  },
  {
    icon: <Smartphone strokeWidth={1.5} className="w-10 h-10" />,
    title: "Next-Gen Mobility",
    description: "Creating fluid, native mobile experiences that bridge the gap between users and enterprise systems."
  },
  {
    icon: <ShieldCheck strokeWidth={1.5} className="w-10 h-10" />,
    title: "Cyber Resilience",
    description: "Fortifying your infrastructure with military-grade security protocols and proactive threat detection."
  },
  {
    icon: <LineChart strokeWidth={1.5} className="w-10 h-10" />,
    title: "Data Foresight",
    description: "Transforming raw information into strategic assets through predictive analytics and visualization."
  },
  {
    icon: <CloudLightning strokeWidth={1.5} className="w-10 h-10" />,
    title: "Cloud Architecture",
    description: "Designing resilient, serverless environments that ensure 99.99% uptime and infinite scalability."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        {/* Section Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-cyan-500/60"></span>
            <span className="text-cyan-400 text-xs font-medium tracking-[0.25em] uppercase">
              Core Capabilities
            </span>
            <span className="h-px w-12 bg-cyan-500/60"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light text-white leading-tight"
          >
            Engineering the <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Infrastructure of Tomorrow.</span>
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hover Line Effect */}
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-6 text-cyan-400 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
