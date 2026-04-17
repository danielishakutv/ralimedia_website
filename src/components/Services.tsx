import { motion } from 'motion/react';
import { Camera, Users, Film, Layers, Radio } from 'lucide-react';

const services = [
  {
    title: 'Photography & Videography',
    description: 'Professional visual storytelling through high-end photography and cinematic video production.',
    image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/671332603_1003303495544505_2922777771905570541_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH9nzzMTw2ZX1Ra7BQ-hy-sPl5nXVl0GPU-XmddWXQY9S8pQ3t39R2ZDvAx0kKA3GvoAMv-32tjxmxh-NkjGLQ2&_nc_ohc=5m3jqDD6aA8Q7kNvwF6ANhS&_nc_oc=AdrEr8gTamD7wmF6HOLm8XRfIyTgjSDb-EghecUQagvb2hOpDTicoHUsWCn1gXVvCjE55cYbVrqX-79-qM6rNrZ8&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=T-Qu6DEkvhJx2vWs2yV37A&_nc_ss=7a3a8&oh=00_Af1EtKGViHcoHHDL8Qyh7is6LczkIF7poDEQz0pp4BmU4w&oe=69E55EB0',
  },
  {
    title: 'NGO Communications',
    description: 'Strategic communication services tailored for NGOs to amplify their impact and reach.',
    image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/662660925_996787846196070_8174368774539256536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF2CMdjpFaf9BmV3nwYByv6H0RZMR5YhokfRFkxHliGiU6xKvsB1hQBuhCOtiB4Agtmj2-pyJ6CA3odeFivmLq3&_nc_ohc=hhgKUc4TVJAQ7kNvwGoG7Gz&_nc_oc=AdpxvgYWyekqREVIi16qJFXFftuYE8I38cuwTqIcvVsmPXv_1jQh8JwEP5aKosrIayfd94iNzE_14T-lChD0X1HI&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=zNoQiqCmkUSz75q5-VSNMw&_nc_ss=7a3a8&oh=00_Af3qiq9psL-yCa3tBxaXjGNuMTmUoTVIC9QZzaXOJcn5DA&oe=69E56C24',
  },
  {
    title: 'Documentary Production',
    description: 'In-depth documentary film production capturing powerful narratives and real-life stories.',
    image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/659477110_993449443196577_2415472862335778294_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeELsk28qtl5Myc5RNC46dlMNxMHbhTqn983EwduFOqf3y5bppA-xT24JMES2mMwWF_1Gb7bmnWstzNFJhtGMEc8&_nc_ohc=zA0Aqwl08uAQ7kNvwE5kSFL&_nc_oc=Adq5QQXvOZOgg1x-dogjZEDOW2YGTEaCxG8a6aB_uEbv_houRZ-G8MqmX-r70cX2RstVETDwLJxWR2y_NRQvTWvD&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=6sRnBfcpD4_eiGH0iUfBUw&_nc_ss=7a3a8&oh=00_Af2GWlO4aRGQqLH5njlmb8GwqXqvL-3IOdWyUVxtHoHkLg&oe=69E56435',
  },
  {
    title: 'Post Production',
    description: 'Expert editing, color grading, and sound design to bring your raw footage to life.',
    image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/659047477_991751580033030_6525314510024279947_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFxCYnQO4bZrBE83AthiENcFT4Gvo2l83UVPga-jaXzdWwPjpxldP_ET38u-_c_0WyyEMxYWR5twl06E7bV4trY&_nc_ohc=4ouKBEiQdbQQ7kNvwGdsflS&_nc_oc=AdpEIVBNpLZYhEWlfZi6CQNg3iLJOZKHGyim34hptorPDCEXTIgxHX6_r5WuBKFzlfzEtL4j4ZMcfrgvQuzK5bCm&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=iLc78Kpr_Nvldv6K0gXtQQ&_nc_ss=7a3a8&oh=00_Af23PT0qaAQZY7QXDTOrU4XglayX-_fVA3cUHRCzDI0Lsw&oe=69E56BAF',
  },
  {
    title: 'Livestream Services',
    description: 'High-quality multi-camera livestreaming for events, conferences, and digital broadcasts.',
    image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/666929801_997500089458179_8726868505122633411_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH9wmMm_kKgLk9LtwO16696rOxd-u-3CoKs7F3677cKgoINeUVlaYBofIBG8mw9fwe8fqnfkn0-BUByp_FbYj1H&_nc_ohc=ernBY5Rl0fIQ7kNvwHu32R6&_nc_oc=AdoeG-ngtB4QoUFHrQ59-fML-xISasjGWtltZcQI5YqAbNHuIGT_KApqTtvZfBe3axNGb1c1K6PKKrbjUTvBrdnP&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=RMTwZF6-PwBHn7CpaDHzsA&_nc_ss=7a3a8&oh=00_Af0IklQTpmOT_Qhk_O3IjGK7OdPiYoRP6hrrJo6mGx6P2Q&oe=69E53481',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary/30 mesh-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-title inline-flex items-center gap-2">
            <span className="w-8 h-[1px] liquid-gold"></span>
            What We Do
            <span className="w-8 h-[1px] liquid-gold"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand and tell your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card group h-[350px] sm:h-[450px] rounded-[2rem] sm:rounded-[3.5rem] p-0 flex flex-col justify-end border-white/40"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-12 h-12 rounded-2xl liquid-gold mb-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                  <div className="w-2 h-2 bg-black rounded-full animate-ping" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
