import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-36 md:pt-48 overflow-hidden mesh-gradient">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold tracking-tighter mb-8 leading-[0.85]">
            {["CRAFTING", "CINEMATIC", "STORIES"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {word === "CINEMATIC" ? <span className="text-gradient-gold gold-glow">{word}</span> : word}
              </motion.span>
            ))}
          </h1>
          <div className="badge-gold liquid-gold mb-8">Creative Excellence</div>
          <p className="max-w-xl mx-auto text-base md:text-2xl text-muted-foreground mb-12 font-light leading-relaxed tracking-tight px-2">
            Rali Creative Media is a premium media agency specializing in high-end production, 
            cinematic storytelling, and distinctive brand identities.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-2">
            <Button size="lg" className="rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg bg-brand-gold text-brand-black hover:scale-105 transition-transform w-full sm:w-auto">
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 py-6 sm:py-7 text-base sm:text-lg glass-card border-none hover:scale-105 transition-transform w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5 fill-current" /> Watch Showreel
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative max-w-5xl mx-auto rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/40 glass"
          >
            <img 
              src="https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/657216006_989618123579709_2527394386845589822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGDs539MJxAwNbWPSCxajn83QtLJsSrh6LdC0smxKuHou4h3qa1hefUpmJnDr6OYcQiMi2BAt5MKOBH0chb-Wdq&_nc_ohc=zKdRYE9oMUoQ7kNvwExN81e&_nc_oc=AdrfonKffU86WnoZj54dOcJjXKwUUCkxMmkZeDV2pKMRH0SYBo9LL6mbCt2ze_t4W0cjL2nbUVBB83D5e9PwyL2P&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=pNCl_M0aVW3ZnkqeSqloVw&_nc_ss=7a3a8&oh=00_Af3ihWM_AFyV-yYpvMaDKs3il1fyVyqAUeAjAoUi1FSqxg&oe=69E56CCB" 
              alt="Rali Creative Media Brand" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Floating Glass Elements */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Cinematography', icon: (
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <rect x="4" y="10" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" />
                <path d="M34 17l10-5v24l-10-5V17z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="15" cy="21" r="5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                <rect x="8" y="36" width="6" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
                <rect x="26" y="36" width="6" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
              </svg>
            )},
            { label: 'Photography', icon: (
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <rect x="4" y="12" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="24" cy="26" r="8" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
                <path d="M16 12V9a2 2 0 012-2h12a2 2 0 012 2v3" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="37" cy="18" r="2" fill="currentColor" opacity="0.6" />
              </svg>
            )},
            { label: 'Branding', icon: (
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M24 4l5.5 11.1L42 17l-9 8.8L35.1 38 24 32.1 12.9 38 15 25.8 6 17l12.5-1.9L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M24 12l3 6.1 6.8 1-4.9 4.8 1.2 6.8L24 27.6l-6.1 3.1 1.2-6.8-4.9-4.8 6.8-1L24 12z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              </svg>
            )},
            { label: 'Marketing', icon: (
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M8 38V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M8 22l28-10v26L8 28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M36 16c3 0 6 2.7 6 6s-3 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 28l2 10h4l2-10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.6" />
              </svg>
            )},
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass-card p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2.5rem] flex flex-col items-center gap-3 sm:gap-4 group hover:bg-white/30"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center border-2 border-brand-gold/20 group-hover:border-brand-gold transition-all duration-500 shadow-xl text-brand-gold/60 group-hover:text-brand-gold group-hover:scale-110">
                {item.icon}
              </div>
              <span className="text-[10px] font-black tracking-[2px] uppercase opacity-70 group-hover:opacity-100 group-hover:text-brand-gold transition-all">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
