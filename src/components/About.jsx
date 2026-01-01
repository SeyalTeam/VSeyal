import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Globe, Award, Target, Rocket, Heart } from 'lucide-react';
const officeImg = 'https://bucghzn379yrpbdu.public.blob.vercel-storage.com/VSeyal/about_office.png';
const codeImg = 'https://bucghzn379yrpbdu.public.blob.vercel-storage.com/VSeyal/about_code.png';
const teamImg = 'https://bucghzn379yrpbdu.public.blob.vercel-storage.com/VSeyal/about_team.png';
const abstractImg = 'https://bucghzn379yrpbdu.public.blob.vercel-storage.com/VSeyal/about_abstract.png';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6 text-brand-primary" /> },
    { number: "15+", label: "Expert Developers", icon: <Users className="w-6 h-6 text-brand-primary" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-6 h-6 text-brand-primary" /> },
    { number: "10+", label: "Years Experience", icon: <Award className="w-6 h-6 text-brand-primary" /> }
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark min-h-screen relative overflow-hidden font-sans">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
             <span className="h-px w-8 bg-cyan-500/60"></span>
             <span className="text-cyan-400 text-xs font-medium tracking-[0.25em] uppercase">Who We Are</span>
             <span className="h-px w-8 bg-cyan-500/60"></span>
          </motion.div>

          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              Engineering the <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">Future of Digital.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              At VSEYAL, we blend creativity with technology to build software that matters. 
              Passionate developers delivering premium digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-cyan-400">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-sm tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-cyan-400" />
              <h2 className="text-3xl font-light text-white">Our Mission</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              To empower businesses with cutting-edge digital solutions that drive growth and efficiency. 
              We believe in the power of code to solve real-world problems and create meaningful connections between brands and their audiences.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We don&apos;t just write code; we architect the future. Our approach is user-centric, data-driven, and quality-obsessed.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 pt-8">
               <img src={officeImg} alt="Modern Office" className="h-48 w-full object-cover rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300" />
               <img src={codeImg} alt="Coding Interface" className="h-32 w-full object-cover rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300" />
            </div>
            <div className="space-y-4">
               <img src={teamImg} alt="Team Collaboration" className="h-32 w-full object-cover rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300" />
               <img src={abstractImg} alt="Digital Innovation" className="h-48 w-full object-cover rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
