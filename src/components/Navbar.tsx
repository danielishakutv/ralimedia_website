import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import lightLogoSrc from '@/assets/light logo.webp';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{ scale: navScale }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-4 sm:pt-6'}`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${scrolled ? 'glass rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white/40' : 'bg-transparent px-0 py-0'}`}>
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={lightLogoSrc}
              alt="Rali Creative Media Logo" 
              className={`object-contain transition-all duration-500 ${scrolled ? 'w-16 h-16 sm:w-24 sm:h-24' : 'w-24 h-24 sm:w-44 sm:h-44'}`}
            />
            <div className="hidden sm:flex flex-col">
              <span className={`font-display font-bold tracking-tight transition-all duration-500 ${scrolled ? 'text-lg' : 'text-2xl'}`}>
                Rali<span className="text-gradient-gold"> Creative Media</span>
              </span>
              <span className={`tracking-[0.18em] text-brand-gold/70 font-medium italic transition-all duration-500 ${scrolled ? 'text-[8px]' : 'text-[9px]'}`}>
                creative. strategic. Reliable.
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] liquid-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button className="rounded-full bg-brand-gold text-brand-black hover:scale-105 transition-transform px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-gold">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full mt-2 left-4 right-4 sm:left-6 sm:right-6 glass rounded-3xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2 border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-full bg-brand-gold text-brand-black w-full">
            Get Started
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
