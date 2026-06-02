import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, FolderOpen, Mail } from 'lucide-react';
import AICore from '../components/3d/AICore';
import { useMousePosition } from '../hooks/useMousePosition';

/* ─── Floating particle dots rendered as CSS ─── */
const PARTICLES = [
  { top: '10%', left: '10%', size: 4, delay: '0s',   dur: '5s'  },
  { top: '20%', left: '80%', size: 3, delay: '1s',   dur: '7s'  },
  { top: '70%', left: '15%', size: 5, delay: '2s',   dur: '6s'  },
  { top: '80%', left: '75%', size: 3, delay: '0.5s', dur: '8s'  },
  { top: '50%', left: '90%', size: 4, delay: '1.5s', dur: '5.5s'},
  { top: '35%', left: '5%',  size: 3, delay: '3s',   dur: '7.5s'},
  { top: '60%', left: '50%', size: 2, delay: '0.8s', dur: '6.5s'},
];

const Home = () => {
  const navigate    = useNavigate();
  const mousePosition = useMousePosition();

  const handleProjects = useCallback(() => navigate('/projects'), [navigate]);
  const handleContact  = useCallback(() => navigate('/contact'),  [navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">

      {/* ── 3D Background Canvas ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <AICore mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* ── Hero Content ─────────────────────────────────────── */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 py-24">

          {/* ── LEFT: Text Content ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x:   0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex-1 text-center lg:text-left pointer-events-none"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y:   0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/30 text-xs font-mono text-accent mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Greeting */}
            <h2 className="text-lg md:text-xl font-mono text-gray-400 mb-2 tracking-widest uppercase">
              Hi, I'm
            </h2>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-4 neon-text-blue leading-tight">
              Nathiya J
            </h1>

            {/* Type animation */}
            <div className="h-10 md:h-14 text-xl md:text-3xl font-mono text-gray-300 mb-4">
              <TypeAnimation
                sequence={[
                  'AI & Data Science Student',  2000,
                  'Software Developer',         2000,
                  'Future Data Scientist',      2000,
                  'Web Technology Enthusiast',  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Sub-description */}
            <p className="text-sm md:text-base text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
              Building intelligent solutions at the intersection of AI, data,
              and design. Passionate about transforming complex data into
              actionable insights and premium digital experiences.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y:  0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pointer-events-auto"
            >
              {/* View Projects */}
              <button
                onClick={handleProjects}
                className="group relative px-7 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/50 hover:border-primary rounded-full transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10 text-white font-semibold flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-primary/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Contact Me */}
              <button
                onClick={handleContact}
                className="group px-7 py-3 glass-card glass-card-hover rounded-full transition-all duration-300 flex items-center gap-2 font-semibold text-white pointer-events-auto"
              >
                <Mail className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Contact Me
              </button>

              {/* Download Resume */}
              <a
  href="https://drive.google.com/file/d/1Usf47B_M5OMZ_nsKCPo1ii4pHncGd076/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
  className="group px-7 py-3 glass-card glass-card-hover rounded-full transition-all duration-300 flex items-center gap-2 font-semibold text-gray-300 hover:text-white"
>
  <FileText className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
  Resume
</a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Photo ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x:  0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex-shrink-0 flex items-center justify-center relative"
          >
            {/* Outer glow blob */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(37,99,235,0.35) 0%, rgba(139,92,246,0.15) 55%, transparent 75%)',
                filter: 'blur(30px)',
                transform: 'scale(1.4)',
              }}
            />

            {/* Rotating outer ring */}
            <div
              aria-hidden="true"
              className="absolute animate-spin-cw pointer-events-none"
              style={{ width: 320, height: 320 }}
            >
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="160" cy="160" r="155"
                  stroke="url(#ring-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="12 20"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient id="ring-grad" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="0.5" stopColor="#8b5cf6" />
                    <stop offset="1"   stopColor="#06b6d4" />
                  </linearGradient>                                                                             
                </defs>
              </svg>
            </div>

            {/* Counter-rotating inner ring */}
            <div
              aria-hidden="true"
              className="absolute animate-spin-ccw pointer-events-none"
              style={{ width: 280, height: 280 }}
            >
              <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="140" cy="140" r="136"
                  stroke="#06b6d4"
                  strokeWidth="1"
                  strokeDasharray="6 30"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Floating particle dots */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ width: 320, height: 320 }}>
              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-primary"
                  style={{
                    top: p.top, left: p.left,
                    width:  p.size, height: p.size,
                    opacity: 0.7,
                    animation: `particle-drift ${p.dur} ${p.delay} ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Photo container — floating + glow */}
            <div className="animate-float relative z-10" style={{ width: 260, height: 260 }}>
              <div
                className="profile-glow-border transition-all duration-500 cursor-default"
                style={{
                  width: '100%', height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(139,92,246,0.1))',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '2px solid rgba(37,99,235,0.5)',
                  padding: 4,
                }}
              >
                <img
                  src="/Nathiya_AI_Portfolio_Portrait.png"
                  alt="Nathiya J — AI & Data Science Student"
                  draggable={false}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    display: 'block',
                    imageRendering: '-webkit-optimize-contrast' as React.CSSProperties['imageRendering'],
                  }}
                />
              </div>

              {/* Status badge on the photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full glass-card border border-primary/40 text-xs font-mono text-white whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </motion.div>
            </div>

            {/* Responsive size classes (md screens get a bigger photo) */}
            <style>{`
              @media (min-width: 768px) {
                .hero-photo-wrap { width: 310px !important; height: 310px !important; }
              }
              @media (min-width: 1024px) {
                .hero-photo-wrap { width: 360px !important; height: 360px !important; }
              }
            `}</style>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase mb-2 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
