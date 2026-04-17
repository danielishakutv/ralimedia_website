import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=%2B2348134933164&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NzYzMzU4NDksInBob25lIjoiKzIzNDgxMzQ5MzMxNjQiLCJjb250ZXh0IjoiQWZoN01wd2RSSzBzRXNiS0FPaGpxdDZwQlpCcWVnYXN3WUVFTWdLcmM2U2lxMmtySThtLXh1YlBiWUU1elVxcl9mOW9iTTMtRDlLb0JsN29ybDBIMkpOSHptTmtvNnZleEFTM1ZJREpuR1VPelFsWU1KUno4MWxZbXFNeldpNTlMMzg4Ni05aDkwdUNib3VYVnVRY2cyczBNUSIsInNvdXJjZSI6IkZCX1BhZ2UiLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicGFnZV9jdGEifQ.iExX6qylwoOtx7cndPFq3P7GTDHyhV6l6cJhHMZyhz8y1f3fjjFU1awu_zE-erXTgEXz8IYVPr0x-AfKosJTgw&fbclid=IwY2xjawRMS3FleHRuA2FlbQIxMABicmlkETFIamMxRHdtaDVoT3ZPbUJFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnpZ1Tjg1QsGoJ_EEu2KeEDgjRFF00a0bc2TwW7_Otr1aDqH6rS4fEkJMow8_aem_dvHQWFLdZ9JyDL2IBKo9Aw";

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-title">Get In Touch</div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-8">Let's Create <br /><span className="text-brand-gold">Something Great</span></h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Ready to elevate your project? Get in touch with us today to discuss your vision 
              and see how Rali Creative Media can help you stand out.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'ralienterprise18@gmail.com', color: 'from-blue-500/40 to-blue-600/20' },
                { icon: Phone, label: 'Call Us', value: '+234 813 493 3164', color: 'from-green-500/40 to-green-600/20' },
                { icon: MapPin, label: 'Visit Us', value: 'Shop #4, Udi Hills Close, Karewa GRA-Jimeta, Yola, Nigeria, 640101', color: 'from-red-500/40 to-red-600/20' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-3xl glass-card group hover:bg-white/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity`} />
                    <div className="absolute inset-0 backdrop-blur-2xl border border-white/40 shadow-inner" />
                    <item.icon className={`h-8 w-8 relative z-10 text-brand-gold drop-shadow-lg group-hover:scale-110 transition-transform`} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium group-hover:text-brand-gold transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-4 rounded-3xl glass-card border-brand-gold/20 hover:border-brand-gold/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all relative overflow-hidden shadow-2xl bg-green-600/20">
                  <svg className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.547 4.108 1.506 5.848L0 24l6.352-1.506C8.892 23.453 10.89 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.701 0-3.361-.406-4.859-1.179l-.348-.2-3.613.859.859-3.613-.2-.348C1.588 15.361 1.182 13.701 1.182 12c0-5.449 4.387-9.836 9.818-9.836 5.449 0 9.836 4.387 9.836 9.836 0 5.449-4.387 9.818-9.836 9.818z"/>
                    <path d="M18.556 15.897c-.305-.153-1.81-.894-2.091-.996-.281-.102-.486-.153-.691.153-.204.305-.791.996-.969 1.201-.178.204-.357.229-.662.076-.305-.153-1.293-.477-2.463-1.519-.911-.835-1.524-1.866-1.702-2.171-.178-.305-.019-.471.134-.624.137-.137.305-.357.458-.535.153-.178.204-.305.305-.509.102-.204.051-.382-.025-.535-.076-.153-.691-1.661-.947-2.274-.248-.595-.501-.514-.691-.524-.178-.009-.382-.012-.587-.012-.204 0-.535.076-.815.382-.281.305-1.071 1.045-1.071 2.554 0 1.509 1.097 2.963 1.25 3.167.153.204 2.159 3.293 5.231 4.619.73.317 1.298.504 1.741.645.733.236 1.401.201 1.927.122.588-.088 1.81-.74 2.063-1.455.254-.715.254-1.327.178-1.455-.076-.128-.281-.204-.587-.357z"/>
                    <circle cx="18" cy="6" r="2.5" fill="currentColor"/>
                  </svg>
                  <div className="absolute inset-0 border border-white/40 rounded-2xl pointer-events-none" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">WhatsApp Business</p>
                  <p className="font-medium">Chat with us directly</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] border-white/40 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2 text-foreground">Name</label>
                  <input type="text" className="w-full bg-white/20 dark:bg-white/15 border-2 border-white/60 dark:border-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-3 focus:ring-brand-gold focus:border-brand-gold transition-all placeholder:text-foreground/50 font-medium" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-2 text-foreground">Email</label>
                  <input type="email" className="w-full bg-white/20 dark:bg-white/15 border-2 border-white/60 dark:border-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-3 focus:ring-brand-gold focus:border-brand-gold transition-all placeholder:text-foreground/50 font-medium" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2 text-foreground">Subject</label>
                <input type="text" className="w-full bg-white/20 dark:bg-white/15 border-2 border-white/60 dark:border-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-3 focus:ring-brand-gold focus:border-brand-gold transition-all placeholder:text-foreground/50 font-medium" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-2 text-foreground">Message</label>
                <textarea rows={4} className="w-full bg-white/20 dark:bg-white/15 border-2 border-white/60 dark:border-white/50 rounded-2xl px-6 py-4 focus:outline-none focus:ring-3 focus:ring-brand-gold focus:border-brand-gold transition-all resize-none placeholder:text-foreground/50 font-medium" placeholder="Tell us about your vision..." />
              </div>
              <Button className="w-full rounded-full py-6 sm:py-8 text-base sm:text-lg bg-brand-gold text-brand-black hover:scale-[1.02] transition-transform font-bold">
                Send Message <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[300px] sm:h-[500px] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden glass border-white/40 shadow-2xl"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.984062072238!2d12.447026675114547!3d9.245721790824513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc6b9727141425%3A0xaa3e32fcdf4ac9a7!2sRALI%20MEDIA!5e0!3m2!1sen!2sng!4v1776250725838!5m2!1sen!2sng" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert dark:grayscale-0 dark:invert-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
