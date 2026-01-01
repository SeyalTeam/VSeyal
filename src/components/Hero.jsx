import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';


// --- Universe Particle Field ---
function BackgroundParticles(props) {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(8000), { radius: 4 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00D4FF"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] bg-[#050505] overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <BackgroundParticles />
        </Canvas>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />

      {/* Main Content - Left Aligned Layout */}
      <div className="relative z-10 w-full h-full flex items-center px-6 md:px-16 lg:px-24">
        
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center pt-36"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-cyan-500/60"></span>
              <span className="text-cyan-400 text-xs font-medium tracking-[0.25em] uppercase">
                Strategic Technology Partner
              </span>
              <span className="h-px w-8 bg-cyan-500/60"></span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight mb-10">
              Actioning the <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">
                Future through <span className="text-cyan-400 inline-block font-mono">Innovation.</span>
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light mb-12">
              VSeyal bridges the gap between imagination and execution — architecting intelligent systems for the next digital era.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <button className="px-8 py-3 bg-white text-black text-sm font-semibold tracking-wide hover:bg-cyan-50 transition-colors rounded-sm">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>

      </div>



    </div>
  );
};

export default Hero;
