/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <AnimatePresence>
      <div className="min-h-screen selection:bg-brand-gold selection:text-brand-black">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 liquid-gold z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Cinematic Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>

        {/* Transparent Background Theme */}
        <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-64 opacity-[0.15] flex flex-col gap-8 p-4">
            {[
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/658159873_990295853511936_5132860841176691976_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH6dvugkgrsDe58Fw_0mgsqJ8dcX9B8G5wnx1xf0HwbnDvbZvqaClUT_piMWofBpOkPcZgFZg9Jj_ft1hQZPPkr&_nc_ohc=wMlfvyBlMqIQ7kNvwFypa9x&_nc_oc=Adr2W_3iUh9O1mQTNFI08wAfXw-fyUJ2S70BoUZ1t_UaCnE5vAfJpdd46rMxc_hkeIw5ckyN_W2F4z85kWzgTP9T&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=iG5xPRhw07HhDW4cUirO7A&_nc_ss=7a3a8&oh=00_Af3Q0QoJCP5uS3DIwdk9twfCMDGZCokN9_fDLTcCN48vyQ&oe=69E567D3',
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/658203834_989618236913031_7880215082006692852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFaFvBlEGoFRxuHkuzZGRTPF4SHJbYgfV0XhIcltiB9XbW8PzGAkiKouIGyj6ZFAIjBPBq0c0_CX4ctIZLSXlwU&_nc_ohc=Vmazqb1V-0YQ7kNvwF2cVXI&_nc_oc=Adrb7JqN_CI3gFWuJgb7Jcop9OGtSTChMcZ41zWZWHsaw8BCU46y_-Tn3ek8V9UvKbgrnR0ej7PqLYIfdoyO0GDl&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=mK6lKuGOPLEnjCcmhOEIXQ&_nc_ss=7a3a8&oh=00_Af1jMOp2_kcxvr6LBZ1WLkqDqKzptIKd765BKdif_0nsww&oe=69E5558C',
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/657562065_989618566912998_647700260797652511_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFe_R3K6sfOrvxGIVmq-FPZChR4eiS_4SYKFHh6JL_hJkS_RrwGa2LvwG38a-7gs9AmUI5NUmn9wCWDPIuGzQQS&_nc_ohc=IbhcoVK9yYMQ7kNvwGP30X3&_nc_oc=AdpzxtwlRcb-J9Pir0GuZoO8IpdGio-OC3gZEFtprP7kuU5KBQb6CTsMUdxnNL0k46CCN3rRrPT9gGvg9utmgVKD&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=-pNNmO9-JIBRLRfkd8K0Og&_nc_ss=7a3a8&oh=00_Af0zf7s1xhN8fEREl05NRvY5zs1vpW6A2W-QqloCsFT6ww&oe=69E566D4',
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/656315173_989618230246365_1192448603414206135_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGg3HgbWGDcE97PDdpM9UVp_RvpOVPlQvz9G-k5U-VC_G3c3SOay07KjkHOY50WZcdvJcz89NBo2Gzy3TlMYJSq&_nc_ohc=nnNXdarbMtMQ7kNvwEwJ2OS&_nc_oc=Adq2XCUIpN0jgScLYA-ji8nB8MjgQSIxiei6k6L2trWihvmDwm00XC8vuv_gbhWeL1Ci7VySPGIaig5w1fiKwJuP&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=3aYej5ra6neM6_IFKjbD7w&_nc_ss=7a3a8&oh=00_Af0bVjQ8ndKwiJ05NmtXb1xTz-lEYIuMIpJ8Spw1vXccRA&oe=69E55F1C',
            ].map((src, i) => (
              <img key={i} src={src} className="w-full h-auto rounded-2xl shadow-2xl" alt="" referrerPolicy="no-referrer" />
            ))}
          </div>
          <div className="absolute inset-y-0 right-0 w-64 opacity-[0.15] flex flex-col gap-8 p-4">
            {[
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/659208610_989618630246325_7082123915628864417_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGy3B5-YWEpvELWS-Vook0xNpNbJyXZSno2k1snJdlKevgSb7PM-Fidaboh4ojpz4U1YxeqS3qWorLcfTO92S5w&_nc_ohc=zFPuMt5mlpUQ7kNvwFIZETs&_nc_oc=AdqQPxh_OjAhBZBcRdeTs4rk2C-LHdolKbF4ITXw4e9fp_-NzHeF8z1osN6ePriDImnEn7Gwlxl1iL7sExwp6Nwm&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=WuM7qhZ49913VxjzwMTDzg&_nc_ss=7a3a8&oh=00_Af3zo_yuNuTwLkmh6Bkh6EyoTEmLc2UwmG4TNdnBkY81mw&oe=69E55602',
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/660794141_989618683579653_4879491711664663283_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHA0rbfI2CeEf6y19jmRuNzaT07NJ3LGc1pPTs0ncsZzZIoRVfyWStod93oawiQ7dLPQKK7fYRclwcpIdgtzcvD&_nc_ohc=rWfq0IzV1zsQ7kNvwHfIKCJ&_nc_oc=Adq1dsUICAc4-pcR-AibzqPmt2sLS6ZTNDbSoYX8c1_ZsZFLgjoXV6WdovyMDPuBFkMwI6erPFfUmtyIukeKPHpz&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=_EG4tV84BqQ9QlkuzMahfw&_nc_ss=7a3a8&oh=00_Af3uIAPsMxk9Qs9R0P3kF1_kbdYWeeVUWz_PTDcw1_wXxQ&oe=69E56370',
              'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/657358434_989618523579669_5632447632414429869_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHuGscjVDbRPiHuRpaxa7Vrz9lbmftiNIjP2VuZ-2I0iP87JIICa1ZKmbr-jRsISNjxH8MpHHqdKOg7I0xgPXvu&_nc_ohc=xD4rZCXw5dAQ7kNvwEB0U4F&_nc_oc=Adry4KAeW35xQj2H_3Ud8bl9i5PDvANFJFqUcZ1ifoRh3pUqBoyyZzyOPjZ6g17WDbckwzBrnzfEPYm1iJTUBMFC&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=SQkDfQFypZnie8SrfWxtSQ&_nc_ss=7a3a8&oh=00_Af3tObKkrasBULnqIShJaG48-y9PRPEV3Tlp716yQNJbPA&oe=69E5490D',
              'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/657216006_989618123579709_2527394386845589822_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGDs539MJxAwNbWPSCxajn83QtLJsSrh6LdC0smxKuHou4h3qa1hefUpmJnDr6OYcQiMi2BAt5MKOBH0chb-Wdq&_nc_ohc=zKdRYE9oMUoQ7kNvwExN81e&_nc_oc=AdrfonKffU86WnoZj54dOcJjXKwUUCkxMmkZeDV2pKMRH0SYBo9LL6mbCt2ze_t4W0cjL2nbUVBB83D5e9PwyL2P&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=pNCl_M0aVW3ZnkqeSqloVw&_nc_ss=7a3a8&oh=00_Af3ihWM_AFyV-yYpvMaDKs3il1fyVyqAUeAjAoUi1FSqxg&oe=69E56CCB',
            ].map((src, i) => (
              <img key={i} src={src} className="w-full h-auto rounded-2xl shadow-2xl" alt="" referrerPolicy="no-referrer" />
            ))}
          </div>
        </div>

        <Navbar />
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </motion.div>
        </main>
        <Footer />
        
        {/* Global Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none mesh-gradient opacity-40 dark:opacity-100" />
      </div>
    </AnimatePresence>
  );
}
