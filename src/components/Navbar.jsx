import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Terminal, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenTerminal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'WORK', to: '/work' },
    { label: 'SERVICES', to: '/services' },
    { label: 'PROCESS', to: '/process' },
    { label: 'ABOUT', to: '/about' },
    { label: 'AUDIT', to: '/audit' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-surface-stroke py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-background/60 backdrop-blur-md border-b border-surface-stroke/50 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded border border-electric-gold/60 bg-surface-container flex items-center justify-center text-electric-gold font-mono text-sm font-bold shadow-[0_0_12px_rgba(250,204,21,0.2)] group-hover:border-electric-gold transition-all duration-300">
              Æ
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold tracking-tighter text-base sm:text-lg text-pure-white group-hover:text-electric-gold transition-colors duration-300 flex items-center gap-2">
                Aether Digital
                <span className="hidden sm:inline-block text-[9px] font-mono font-medium text-electric-gold/80 border border-electric-gold/30 px-1.5 py-0.5 rounded tracking-normal">
                  OS.9
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-sans text-[11px] font-bold tracking-[0.15em] transition-all duration-300 relative py-1 group ${
                    isActive
                      ? 'text-electric-gold font-extrabold'
                      : 'text-on-surface-variant hover:text-electric-gold'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-[2px] bg-electric-gold transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenTerminal}
              title="Open System Terminal"
              className="text-on-surface-variant hover:text-electric-gold p-2 rounded border border-surface-stroke hover:border-electric-gold/50 hover:bg-surface-elevated transition-all flex items-center gap-1.5 text-xs font-mono"
            >
              <Terminal className="w-4 h-4 text-electric-gold" />
              <span className="hidden xl:inline text-[11px] text-on-surface-variant">CLI</span>
            </button>

            <Link
              to="/start-project"
              className="bg-electric-gold text-black font-sans text-[11px] font-extrabold tracking-[0.15em] px-5 py-2.5 rounded hover:bg-white transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(250,204,21,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu & Terminal Trigger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="text-electric-gold p-2 border border-surface-stroke rounded hover:bg-surface-elevated"
              title="Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-on-surface p-2 rounded border border-surface-stroke hover:text-electric-gold hover:border-electric-gold transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-obsidian-deep border-l border-surface-stroke p-6 pt-24 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-6">
            <div className="border-b border-surface-stroke pb-4 mb-2">
              <span className="font-mono text-[11px] text-electric-gold uppercase tracking-widest block mb-1">
                SYSTEM NAVIGATION
              </span>
              <span className="font-mono text-xs text-on-surface-variant">
                Node Uplink: Alpha // Verified
              </span>
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-sans text-lg font-bold tracking-wider py-2 flex items-center justify-between border-b border-surface-stroke/40 ${
                    isActive ? 'text-electric-gold pl-2' : 'text-on-surface hover:text-electric-gold hover:pl-2'
                  } transition-all duration-200`
                }
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-electric-gold opacity-50">→</span>
              </NavLink>
            ))}
          </div>

          <div className="pt-6 border-t border-surface-stroke space-y-4">
            <Link
              to="/start-project"
              className="w-full bg-electric-gold text-black font-sans text-xs font-extrabold tracking-widest py-3.5 rounded text-center flex items-center justify-center gap-2"
            >
              <span>INITIALIZE SEQUENCE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full bg-transparent border border-surface-stroke text-on-surface-variant hover:text-electric-gold hover:border-electric-gold font-mono text-xs py-3 rounded flex items-center justify-center gap-2 transition-colors"
            >
              <Terminal className="w-4 h-4 text-electric-gold" />
              <span>LAUNCH TERMINAL CLI</span>
            </button>

            <div className="text-center font-mono text-[10px] text-on-surface-variant/60 pt-2">
              SYS.VER // 9.0.4 • ENCRYPTED
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
