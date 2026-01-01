import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, HeartPulse, Building2, Clapperboard, 
  Cpu, Flame, Factory, Plane, 
  Shield, Lock, Landmark, GraduationCap, 
  Truck, Trophy, Utensils, Sprout 
} from 'lucide-react';

const industries = [
  { name: "Ecommerce", icon: <ShoppingCart /> },
  { name: "Healthcare", icon: <HeartPulse /> },
  { name: "Real Estate", icon: <Building2 /> },
  { name: "Media & Entertainment", icon: <Clapperboard /> },
  { name: "AI Software", icon: <Cpu /> },
  { name: "Energy & Gas", icon: <Flame /> },
  { name: "Manufacturing", icon: <Factory /> },
  { name: "Travel & Hospitality", icon: <Plane /> },
  { name: "Insurance", icon: <Shield /> },
  { name: "Cyber Security", icon: <Lock /> },
  { name: "Fintech", icon: <Landmark /> },
  { name: "Education", icon: <GraduationCap /> },
  { name: "Logistics", icon: <Truck /> },
  { name: "Sports Tech", icon: <Trophy /> },
  { name: "Food Tech", icon: <Utensils /> },
  { name: "Agritech", icon: <Sprout /> }
];

const SpotlightCard = ({ item }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center p-4 h-full rounded-lg bg-white/5 border border-white/10 overflow-hidden group cursor-default transition-colors duration-300 hover:bg-white/10"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Border Highlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.4), transparent 40%)`,
        }}
      />

      <div className="relative z-10 mb-3 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
        {React.cloneElement(item.icon, { strokeWidth: 1.5, size: 20 })}
      </div>
      <span className="relative z-10 text-[10px] font-medium text-gray-300 tracking-wide text-center group-hover:text-white transition-colors uppercase">
        {item.name}
      </span>
    </div>
  );
};

const Industries = () => {
  return (
    <section className="py-24 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-cyan-500/60"></span>
            <span className="text-cyan-400 text-xs font-medium tracking-[0.25em] uppercase">
              Global Impact
            </span>
            <span className="h-px w-8 bg-cyan-500/60"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-white mb-6"
          >
            Transforming <span className="font-semibold">Every Sector.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From startups to Fortune 500s, we architect digital solutions that redefine industry standards.
          </motion.p>
        </div>

        {/* Static Spotlight Grid - Compact 2 Rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="h-full"
            >
              <SpotlightCard item={item} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
