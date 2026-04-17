import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import t1 from "@/assets/Testimony/testimonial 1.jpg";
import t2 from "@/assets/Testimony/testimonial 2.jpg";
import t3 from "@/assets/Testimony/testimonial 3.jpg";
import t4 from "@/assets/Testimony/testimonial 4.jpg";

const testimonials = [
  { id: 1, src: t1, alt: 'Mrs. Dorathy Danladi — Media & Communications Officer, The Kukah Center' },
  { id: 2, src: t2, alt: 'Peter Kundum — Multimedia & Event Consultant, Creative Associates International' },
  { id: 3, src: t3, alt: 'Moses Alago — Programmes Officer, CRUDAN' },
  { id: 4, src: t4, alt: 'Mahmud Isa Yola — Media Strategist, SA to NDLEA Chairman' },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [current, setCurrent] = useState(0);

  // Track selected slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  // Auto-slide every 30 s; resets whenever slide changes (manual or auto)
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setTimeout(() => emblaApi.scrollNext(), 30000);
    return () => clearTimeout(timer);
  }, [emblaApi, current]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 sm:py-24 bg-secondary/10 overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Client Feedback
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed"
          >
            Don't just take our word for it. Here's what our clients have to say
            about their experience with Rali Creative Media.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Embla viewport */}
          <div ref={emblaRef} className="overflow-hidden rounded-3xl">
            <div className="flex gap-5">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  /* basis-full on mobile, half on sm+ */
                  className="group relative shrink-0 basis-full sm:basis-[calc(50%-10px)]
                    rounded-3xl overflow-hidden
                    border border-white/20 dark:border-white/10
                    shadow-xl shadow-black/10
                    hover:shadow-2xl hover:shadow-brand-gold/15
                    hover:border-brand-gold/45
                    transition-all duration-500
                    hover:-translate-y-1"
                >
                  {/* Gold top accent revealed on hover */}
                  <div
                    className="absolute top-0 left-0 w-full h-[3px] liquid-gold z-20
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-contain block
                      transition-transform duration-700 ease-out
                      group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 -left-5 md:-left-14 z-10
              p-3 rounded-full glass-card
              border-white/30 hover:bg-brand-gold hover:text-brand-black
              shadow-lg transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 -right-5 md:-right-14 z-10
              p-3 rounded-full glass-card
              border-white/30 hover:bg-brand-gold hover:text-brand-black
              shadow-lg transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-10 liquid-gold'
                  : 'w-2 bg-foreground/20 hover:bg-foreground/40'
              }`}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 text-center">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://www.facebook.com/RaliCreative/posts/pfbid0x5497onWYTiEg4p2ULpywvDmZU4tmbpLcCyMKSuXsMvMwieKq79uKphr3Y8cmwKCl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-gold font-bold
              hover:underline underline-offset-4 group transition-all duration-200"
          >
            <span>View more reviews on Facebook</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
