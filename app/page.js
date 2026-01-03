"use client"

import { useState, useEffect } from 'react';

// Animated 3D Cubes component
const AnimatedCubes = () => {
  const cubes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 25,
    x: Math.random() * 100,
    y: Math.random() * 70,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * -10,
    rotateSpeed: Math.random() * 15 + 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: '1000px' }}>
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute"
          style={{
            width: cube.size,
            height: cube.size,
            left: `${cube.x}%`,
            top: `${cube.y}%`,
            transformStyle: 'preserve-3d',
            animation: `floatCube ${cube.duration}s ease-in-out infinite, rotateCube ${cube.rotateSpeed}s linear infinite`,
            animationDelay: `${cube.delay}s`,
          }}
        >
          {/* Front face */}
          <div 
            className="absolute border border-rose-500/40 bg-gradient-to-br from-rose-500/10 to-transparent backdrop-blur-sm"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateZ(${cube.size / 2}px)` 
            }}
          />
          {/* Back face */}
          <div 
            className="absolute border border-rose-500/20 bg-rose-500/5"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateZ(-${cube.size / 2}px) rotateY(180deg)` 
            }}
          />
          {/* Left face */}
          <div 
            className="absolute border border-rose-500/30 bg-rose-500/5"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateX(-${cube.size / 2}px) rotateY(-90deg)`,
              transformOrigin: 'right center'
            }}
          />
          {/* Right face */}
          <div 
            className="absolute border border-rose-500/30 bg-rose-500/5"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateX(${cube.size / 2}px) rotateY(90deg)`,
              transformOrigin: 'left center'
            }}
          />
          {/* Top face */}
          <div 
            className="absolute border border-rose-500/40 bg-gradient-to-b from-rose-500/15 to-rose-500/5"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateY(-${cube.size / 2}px) rotateX(90deg)`,
              transformOrigin: 'bottom center'
            }}
          />
          {/* Bottom face */}
          <div 
            className="absolute border border-rose-500/20 bg-rose-500/5"
            style={{ 
              width: cube.size, 
              height: cube.size,
              transform: `translateY(${cube.size / 2}px) rotateX(-90deg)`,
              transformOrigin: 'top center'
            }}
          />
        </div>
      ))}
    </div>
  );
};

// Floating background blocks
const FloatingBlocks = () => {
  const blocks = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 15,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.08 + 0.02,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="absolute border border-rose-500/20"
          style={{
            width: block.size,
            height: block.size,
            left: `${block.x}%`,
            top: `${block.y}%`,
            opacity: block.opacity,
            animation: `float ${block.duration}s ease-in-out infinite`,
            animationDelay: `${block.delay}s`,
            background: `linear-gradient(135deg, rgba(244,63,94,0.08) 0%, transparent 50%)`,
          }}
        />
      ))}
    </div>
  );
};

// Interactive blockchain chain visualization
const BlockchainVisualization = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);
  const chainBlocks = [
    { id: 1, label: 'AI', desc: 'Machine Learning' },
    { id: 2, label: 'DeFi', desc: 'Decentralized Finance' },
    { id: 3, label: 'Web3', desc: 'Next Internet' },
    { id: 4, label: 'Smart', desc: 'Contracts' },
  ];

  return (
    <div className="flex items-center justify-center gap-0 my-16 flex-wrap">
      {chainBlocks.map((block, index) => (
        <div key={block.id} className="flex items-center">
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredBlock(block.id)}
            onMouseLeave={() => setHoveredBlock(null)}
          >
            <div
              className={`w-24 h-24 md:w-28 md:h-28 border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                hoveredBlock === block.id
                  ? 'border-rose-400 bg-rose-400/20 scale-110 rotate-3'
                  : 'border-rose-500/40 bg-slate-900/50 hover:border-rose-400/70'
              }`}
              style={{
                animation: `pulse ${2 + index * 0.3}s ease-in-out infinite`,
              }}
            >
              <span className="text-rose-400 font-bold text-lg md:text-xl tracking-wider">
                {block.label}
              </span>
              <span className="text-slate-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {block.desc}
              </span>
            </div>
            {hoveredBlock === block.id && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-400 rotate-45" />
            )}
          </div>
          {index < chainBlocks.length - 1 && (
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-rose-500/60 to-rose-500/20 relative">
              <div
                className="absolute inset-0 bg-rose-400"
                style={{
                  animation: 'chainFlow 2s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// HUBC Logo SVG Component
const HUBCLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 70 L20 30 L50 12 L80 30 L80 50" 
      stroke="#a51c30" 
      strokeWidth="8" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M35 60 L35 45 L50 36 L65 45 L65 52" 
      stroke="#a51c30" 
      strokeWidth="5" 
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M80 30 L92 24" 
      stroke="#9ca3af" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M65 45 L77 39" 
      stroke="#9ca3af" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M80 50 L88 58" 
      stroke="#a51c30" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
  </svg>
);

// Main App component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'speakers', 'agenda'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * { font-family: 'Outfit', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        
        @keyframes floatCube {
          0%, 100% { 
            transform: translateY(0) translateX(0);
          }
          25% { 
            transform: translateY(-40px) translateX(15px);
          }
          50% { 
            transform: translateY(-20px) translateX(-10px);
          }
          75% { 
            transform: translateY(-50px) translateX(5px);
          }
        }
        
        @keyframes rotateCube {
          0% { 
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% { 
            transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          75% { transform: translateY(-25px) rotate(1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
          50% { box-shadow: 0 0 20px 5px rgba(244, 63, 94, 0.15); }
        }
        
        @keyframes chainFlow {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #fb7185 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-link {
          position: relative;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #f43f5e;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        
        .hero-title {
          animation: fadeSlideUp 1s ease-out forwards;
        }
        
        .hero-subtitle {
          animation: fadeSlideUp 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .hero-date {
          animation: fadeSlideUp 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .hero-cta {
          animation: fadeSlideUp 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      <FloatingBlocks />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-slate-950/50' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <div className="w-10 h-10 border-2 border-rose-500 flex items-center justify-center">
              <span className="text-rose-400 font-bold text-sm">B+AI</span>
            </div>
            <span className="hidden md:block text-white font-semibold tracking-wide">@ HARVARD 2026</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'about', label: 'About Us' },
              { id: 'speakers', label: 'Speakers' },
              { id: 'agenda', label: 'Agenda' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm uppercase tracking-widest transition-colors ${activeSection === item.id ? 'text-rose-400 active' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-5 py-2 bg-rose-500 text-white font-semibold text-sm uppercase tracking-wider hover:bg-rose-400 transition-colors">
              Save the Date
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-rose-500 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-rose-500 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-rose-500 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/98 backdrop-blur-lg transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-6 py-4 space-y-4">
            {['about', 'speakers', 'agenda'].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-slate-300 hover:text-rose-400 uppercase tracking-wider text-sm py-2">
                {id === 'about' ? 'About Us' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button className="w-full px-5 py-3 bg-rose-500 text-white font-semibold text-sm uppercase tracking-wider">
              Save the Date
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated 3D Cubes */}
        <AnimatedCubes />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="hero-title">
            <p className="text-rose-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 mono">April 17–18, 2026 • Cambridge, MA</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
              <span className="gradient-text">BLOCKCHAIN</span>
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-2">
              & <span className="font-bold">AI</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-400">
              Conference <span className="text-white">at Harvard</span>
            </h1>
          </div>

          <p className="hero-subtitle text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed">
            Exploring the intersection of artificial intelligence and decentralized technologies at the world's premier academic institution.
          </p>

          {/* Co-hosted by section - in hero */}
          <div className="hero-date mt-8 flex flex-col items-center gap-4">
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">Co-hosted by</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-rose-500/50 flex items-center justify-center text-rose-400 text-xs font-bold">
                  HLS
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-medium">Harvard Law School</p>
                  <p className="text-slate-400 text-xs">Fintech Initiative</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-700" />
              <div className="flex items-center gap-3">
                <HUBCLogo className="w-10 h-10" />
                <div className="text-left">
                  <p className="text-white text-sm font-medium">Harvard Undergraduate</p>
                  <p className="text-slate-400 text-xs">Blockchain Club</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button className="group px-8 py-4 bg-rose-500 text-white font-bold uppercase tracking-wider hover:bg-rose-400 transition-all hover:scale-105">
              Save the Date
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button onClick={() => scrollTo('about')} className="px-8 py-4 border border-slate-600 text-white uppercase tracking-wider hover:border-rose-500 hover:text-rose-400 transition-colors">
              Learn More
            </button>
          </div>

          <BlockchainVisualization />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-rose-400 uppercase tracking-[0.2em] text-sm mb-4 mono">About The Conference</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Where Innovation<br />
                <span className="gradient-text">Meets Academia</span>
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  The 2026 Blockchain and AI Conference brings together world-leading researchers, entrepreneurs, and policymakers to explore the transformative potential of these converging technologies.
                </p>
                <p>
                  Hosted at Harvard University, this two-day event features keynote speeches, interactive workshops, panel discussions, and networking opportunities designed to foster collaboration and innovation.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border border-slate-800 p-4 hover:border-rose-500/30 transition-colors">
                  <p className="text-3xl font-bold gradient-text">2</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Days</p>
                </div>
                <div className="border border-slate-800 p-4 hover:border-rose-500/30 transition-colors">
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-slate-400 text-sm uppercase tracking-wider mt-1">Expected Attendees</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square border border-slate-800 bg-slate-900/50 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-6">Presented By</p>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-rose-500 pl-4">
                      <h3 className="text-white font-semibold text-lg">Harvard Law School</h3>
                      <p className="text-slate-400 text-sm">Fintech Initiative</p>
                    </div>
                    <div className="border-l-2 border-rose-500 pl-4 flex items-start gap-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg">Harvard Undergraduate</h3>
                        <p className="text-slate-400 text-sm">Blockchain Club</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-slate-800">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Location</p>
                    <p className="text-white">Austin Hall</p>
                    <p className="text-slate-400 text-sm">Harvard Law School</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-rose-500/20" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-rose-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section - Coming Soon */}
      <section id="speakers" className="relative py-24 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 uppercase tracking-[0.2em] text-sm mb-4 mono">Featured Speakers</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Industry <span className="gradient-text">Leaders</span>
            </h2>
          </div>

          {/* Coming Soon State */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="grid grid-cols-3 gap-4 mb-8 opacity-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-24 h-24 md:w-32 md:h-32 border border-slate-700 bg-slate-800/50" />
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">Coming Soon</p>
              <p className="text-slate-400 max-w-md mx-auto">
                We're assembling an exceptional lineup of speakers from the worlds of AI, blockchain, and fintech. Stay tuned for announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section - Coming Soon */}
      <section id="agenda" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-rose-400 uppercase tracking-[0.2em] text-sm mb-4 mono">Conference Schedule</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Two Days of <span className="gradient-text">Innovation</span>
            </h2>
          </div>

          {/* Coming Soon State */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-lg space-y-4 mb-8 opacity-20">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-20 h-4 bg-slate-700 rounded" />
                  <div className="flex-1 h-16 border border-slate-700 bg-slate-800/50 rounded" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-3">To Be Announced</p>
              <p className="text-slate-400 max-w-md mx-auto">
                Our full agenda is being finalized. Check back soon for keynotes, panels, workshops, and networking sessions.
              </p>
            </div>
            
            {/* Dates Preview */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <div className="px-8 py-5 border border-slate-700 bg-slate-900/50 text-center">
                <p className="text-rose-400 font-bold text-lg">Day 1</p>
                <p className="text-white">April 17, 2026</p>
              </div>
              <div className="px-8 py-5 border border-slate-700 bg-slate-900/50 text-center">
                <p className="text-rose-400 font-bold text-lg">Day 2</p>
                <p className="text-white">April 18, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Be Part of the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join researchers, entrepreneurs, and innovators at Harvard for two days of groundbreaking discussions on AI and blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-10 py-4 bg-rose-500 text-white font-bold uppercase tracking-wider hover:bg-rose-400 transition-all">
              Save the Date
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
          <p className="text-slate-500 text-sm mt-4">April 17–18, 2026 • Austin Hall, Harvard Law School</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-rose-500 flex items-center justify-center">
                <span className="text-rose-400 font-bold text-sm">B+AI</span>
              </div>
              <div>
                <p className="text-white font-semibold">Blockchain & AI Conference 2026</p>
                <p className="text-slate-500 text-sm">Harvard University</p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-slate-400 text-sm">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span>Co-hosted by Harvard Law School Fintech Initiative &</span>
              <div className="flex items-center gap-1">
                <HUBCLogo className="w-5 h-5" />
                <span>Harvard Undergraduate Blockchain Club</span>
              </div>
            </div>
            <p>© 2026 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
