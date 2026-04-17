import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const videos = [
  { id: 'ZRDeiCYQ-TE', title: 'Cinematic Brand Story' },
  { id: 'jPL5_blISQM', title: 'Corporate Excellence' },
  { id: 'ZC3xbjMfzdk', title: 'NGO Documentary' },
  { id: 'POvJRu8YCVo', title: 'Creative Production' },
  { id: 'clRg56GCSLU', title: 'Event Highlights' },
  { id: 'SHlraGl6L44', title: 'The Art of Storytelling' },
];

const images = [
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/671975717_1003304062211115_2964099119136650979_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEoaL9pHuOJcptFjhCill3BSxBljVXRkwVLEGWNVdGTBU83NVcMgIkM2T6I-9JtcTb7tN529tKgUknJLKQHjjWY&_nc_ohc=0bt2a1oqLi8Q7kNvwExYhEP&_nc_oc=AdrO2bwqDYXI8x2XUncUVA3tQjqZbCEkOxKITCE90QISOGzKsKFdq7l8YbxnP4zNnuEzqnSAmP6h5wPwQwIwpOFt&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=-rl5unUDaVSsGKyRoWBzLw&_nc_ss=7a3a8&oh=00_Af0ewcxHQIP_LJyYzM6ki1YTmtSehXDIiqdOngKyqrqj-A&oe=69E55BC6', title: 'Visual Identity' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/672201743_1003303488877839_836251854347451164_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeE4X2_ZCz_dBA7nTyMa5u8uzRA7Ck9fVaLNEDsKT19VogEXXAre2srpfz22xbbn1XMJQawr9yzzTAgvwPkj7diB&_nc_ohc=lsRe4ccuTyQQ7kNvwHQktHG&_nc_oc=AdqJrrybTG9MXE4tIRlylyWFA7YrPJLopjq-49lledLV-jyx7kKo0st9CaSRAuD7nKamBC_u9BYY9pBSk_bt8KbV&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=LgeBmrnx6Dg2MlZpeF4lbA&_nc_ss=7a3a8&oh=00_Af0Twn3i_MiCkWL2mjfP6Ed2egTxJbYYf1NHUvJJYqnMbA&oe=69E5521F', title: 'Creative Direction' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/672672192_1003303568877831_8335000593897558321_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF8QIXdIKKi60CjKiOM0rIhMy6Uu0lYK64zLpS7SVgrroTwCwPa-QtPZFFnBm_sWsxy08JBBfF55OW2GgbPcXJd&_nc_ohc=KUqh33jCq-sQ7kNvwF55UIe&_nc_oc=Adogpoz8jrw2BS2kg9IBR696WZqo7E5yRQsYppXbLlYBueAgKK5d8JXRgHprXXX3FukwFmHw-b194MwmlHHr7l8w&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=-6d2cNQBzQ50Sjrl6kjaEw&_nc_ss=7a3a8&oh=00_Af1o3S0D3ri7YYtrOSxJErqoBteh9bHVNeB4cC_FAjRJZg&oe=69E54056', title: 'Production Detail' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/671824058_1003303565544498_2286452107609025387_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGp3y88zHVCAgtuEjQDRsdRAXiUwBue-igBeJTAG576KC1AtQNriWaAtbFK5lAzDmtEpz2fUc9YLKAsRTLOhftw&_nc_ohc=xLlbQsVR-fIQ7kNvwGG1_cH&_nc_oc=AdqlgqP_bQvKtjQAhkFQVR-gAHUcsQ40YlH5a5a8rkHCYrsVZK3LQmPnfalCrlHUaPlWt8KPCbL4_KYEg6zl_ZvP&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=7Y6gP7DLYiOqvam6kt-MVw&_nc_ss=7a3a8&oh=00_Af1JJvyGBgzjS2cUulhSuxL9EQePoX06Wd4_x3vm4sKz-g&oe=69E56729', title: 'Cinematic Lighting' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/670756720_1003303492211172_8538321228387209809_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGUsPEXnDOgQtNhAzjeUriSZsHcM_r5NFRmwdwz-vk0VBe-_lxzaRBkbhfX4bEJFQlcNDFZUCkfYj5YPm_1bN71&_nc_ohc=PUOQ4UM1A84Q7kNvwFa4Mle&_nc_oc=AdoWEPpO9FKPPWtfQE2WaE0rsTss9_XaDe0jUql-4vFem9CYUSaoVSJI86TjPYkPP7OYidjGYM0OpnjPOnBsz8Rm&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=J6Z_cO1vYrgyzMnlC057eQ&_nc_ss=7a3a8&oh=00_Af04Q7lsAjAEe9ddBJdxropagh_0bVKGLSUs_uQbMLrImw&oe=69E56BB0', title: 'Studio Session' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/672346545_1003303485544506_9082055307497976509_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHXlqWLIqX32CWhNHtWWU32Mj8zj2Snb-MyPzOPZKdv461KtQHvcdf8o4PjHoKVARymQ33Y1oNokIazKmkCIuzv&_nc_ohc=mqgMDciTEIMQ7kNvwEoLmhB&_nc_oc=AdpZJFbr2Ien7tgGrEnNt9GbZHqx5fw4GeyNz5hGN_unPaOT6yDZdRwjnAX8L-urzfSADuf7xNNa2-WB2R79EOTP&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=IHDSsB6YglHGShx_2ehR9A&_nc_ss=7a3a8&oh=00_Af0HmJco3ObmCH89zT8wTkmWbx-rOYLjtEHVn4IAMXgtnw&oe=69E56022', title: 'Final Master' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/671332603_1003303495544505_2922777771905570541_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH9nzzMTw2ZX1Ra7BQ-hy-sPl5nXVl0GPU-XmddWXQY9S8pQ3t39R2ZDvAx0kKA3GvoAMv-32tjxmxh-NkjGLQ2&_nc_ohc=5m3jqDD6aA8Q7kNvwF6ANhS&_nc_oc=AdrEr8gTamD7wmF6HOLm8XRfIyTgjSDb-EghecUQagvb2hOpDTicoHUsWCn1gXVvCjE55cYbVrqX-79-qM6rNrZ8&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=T-Qu6DEkvhJx2vWs2yV37A&_nc_ss=7a3a8&oh=00_Af1EtKGViHcoHHDL8Qyh7is6LczkIF7poDEQz0pp4BmU4w&oe=69E55EB0', title: 'Event Coverage' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/659477110_993449443196577_2415472862335778294_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeELsk28qtl5Myc5RNC46dlMNxMHbhTqn983EwduFOqf3y5bppA-xT24JMES2mMwWF_1Gb7bmnWstzNFJhtGMEc8&_nc_ohc=zA0Aqwl08uAQ7kNvwE5kSFL&_nc_oc=Adq5QQXvOZOgg1x-dogjZEDOW2YGTEaCxG8a6aB_uEbv_houRZ-G8MqmX-r70cX2RstVETDwLJxWR2y_NRQvTWvD&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=6sRnBfcpD4_eiGH0iUfBUw&_nc_ss=7a3a8&oh=00_Af2GWlO4aRGQqLH5njlmb8GwqXqvL-3IOdWyUVxtHoHkLg&oe=69E56435', title: 'NGO Impact' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/662660925_996787846196070_8174368774539256536_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeF2CMdjpFaf9BmV3nwYByv6H0RZMR5YhokfRFkxHliGiU6xKvsB1hQBuhCOtiB4Agtmj2-pyJ6CA3odeFivmLq3&_nc_ohc=hhgKUc4TVJAQ7kNvwGoG7Gz&_nc_oc=AdpxvgYWyekqREVIi16qJFXFftuYE8I38cuwTqIcvVsmPXv_1jQh8JwEP5aKosrIayfd94iNzE_14T-lChD0X1HI&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=zNoQiqCmkUSz75q5-VSNMw&_nc_ss=7a3a8&oh=00_Af3qiq9psL-yCa3tBxaXjGNuMTmUoTVIC9QZzaXOJcn5DA&oe=69E56C24', title: 'Documentary Frame' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/666929801_997500089458179_8726868505122633411_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH9wmMm_kKgLk9LtwO16696rOxd-u-3CoKs7F3677cKgoINeUVlaYBofIBG8mw9fwe8fqnfkn0-BUByp_FbYj1H&_nc_ohc=ernBY5Rl0fIQ7kNvwHu32R6&_nc_oc=AdoeG-ngtB4QoUFHrQ59-fML-xISasjGWtltZcQI5YqAbNHuIGT_KApqTtvZfBe3axNGb1c1K6PKKrbjUTvBrdnP&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=RMTwZF6-PwBHn7CpaDHzsA&_nc_ss=7a3a8&oh=00_Af0IklQTpmOT_Qhk_O3IjGK7OdPiYoRP6hrrJo6mGx6P2Q&oe=69E53481', title: 'Post Production' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/659047477_991751580033030_6525314510024279947_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFxCYnQO4bZrBE83AthiENcFT4Gvo2l83UVPga-jaXzdWwPjpxldP_ET38u-_c_0WyyEMxYWR5twl06E7bV4trY&_nc_ohc=4ouKBEiQdbQQ7kNvwGdsflS&_nc_oc=AdpEIVBNpLZYhEWlfZi6CQNg3iLJOZKHGyim34hptorPDCEXTIgxHX6_r5WuBKFzlfzEtL4j4ZMcfrgvQuzK5bCm&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=iLc78Kpr_Nvldv6K0gXtQQ&_nc_ss=7a3a8&oh=00_Af23PT0qaAQZY7QXDTOrU4XglayX-_fVA3cUHRCzDI0Lsw&oe=69E56BAF', title: 'Live Broadcast' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/662181962_991751786699676_2864020420115448167_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFpN-7-c7jBEw6mg1lNYh6WEApRSzXPqBEQClFLNc-oERr9tKkd8FybUjRqNO1h4NSNThQ6ifirMDz8xm8HmzjZ&_nc_ohc=5Wm6Aixs4acQ7kNvwEwejNB&_nc_oc=Adr_mp_HooduniwukPB8m43xk80XDC-adOw2o6AVP3R-YdKuZKq7btSEt5Uk9VunAzwcbl8eOvxdjDLyFDXpbAm5&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=9namTaGcleah6kGRbE3-rA&_nc_ss=7a3a8&oh=00_Af3RhJzffDMCeKv7Iy2NXazQ8u3gb-gGHn91i1sn-QSbSw&oe=69E546EC', title: 'Cinematic Frame' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/656830723_991751493366372_2204927208535736271_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH_HJKR7E0aMtXwi6OM7cwtWimJDWFdqStaKYkNYV2pK5FaL1eX00amcnDWkHjuX7_KzEt4pJKFWCPe9lDDpZHx&_nc_ohc=L2LAjr53ijoQ7kNvwHRivfK&_nc_oc=AdogWmjR5sI4DhVzwk6VUhQcdvcooxTbjkZP6G2o-QsI95A4AsxsJue5BOVShFNS5AzT-otDUoGrgmke2vqCx678&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=1asNiTiYmWTH7wIZfCWoOw&_nc_ss=7a3a8&oh=00_Af1TYNEKZcIT_DXjFi7RTPd-k4Y7MhxHFagMr2_wEAVgpg&oe=69E536D0', title: 'Photography Session' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/660552300_991751646699690_1732686934939007089_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFCsxhQ0yFopk6mPaRlEDgJntbP--TSdqCe1s_75NJ2oA2JMY8uM0inETaGLG78O_cm7WBAK-3AbbBhfMl-ljuH&_nc_ohc=zaFTe_jsGeQQ7kNvwF_TIDF&_nc_oc=AdrYOaOkuebTeKzV7di6IwK_9RBKzizPKsmcGzBOM4JzR2kzVj84oKrSxT4mVz2Fws_afMh-3la6UpssjANIr_1t&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=-PdfkIpXqQYbKwllSzKfuA&_nc_ss=7a3a8&oh=00_Af0cSCHifPAzdrftioWNgSGXKAUlVGYgNNhu-zKcdaIxWQ&oe=69E54F84', title: 'Brand Identity' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/660539218_991751893366332_3095151293054912067_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeG3qQtN7T6SNEq_iUgI3G3CkMhT3ix1k4SQyFPeLHWThLaR3zY6Ch_I3wBDknh71HZ_epro9vCPrt9V1Eg_xsNZ&_nc_ohc=nbUr2NcZ5cMQ7kNvwHuZXmf&_nc_oc=AdopP-2rs4xcbqiIUJS-xf2sB_A5Ys3LfSkR0Ion_K3jBFaIbHW7m2l-hEy8txUV5mH_yY5Iz99S0dySkXPZlHUg&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=4HDo068G7CtxOjV_-H0TpA&_nc_ss=7a3a8&oh=00_Af3Khz5nmZ10wSr2dXZvV-MWvJwkJvYMOo4h0gXFNi3bbg&oe=69E540B8', title: 'Marketing Campaign' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/657920878_991751423366379_1203745324856928834_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEkrZ9dkK-MkXn83HxK9VQXurPEyUUzs7G6s8TJRTOzsbpKPYgtyFPdGYSeqUM1FIwtcdnDFR7O_BpdfYmOBhVK&_nc_ohc=T_Gn2lQ-IhQQ7kNvwHaf1na&_nc_oc=AdqrZ-grYQ9qq9rPX53YsQL9Geadj9v-7euRE-bBAfmsxes1E3scOmxRC_zr8E2AvAveRmbOzuxrAprFBtrkNnMe&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=M0Wzc0bd3dRWY1Ztc_OtFw&_nc_ss=7a3a8&oh=00_Af150sBEPaERakfbGojW5KX7gvqvYtZqei7_ShOeJm_j3Q&oe=69E5418A', title: 'Studio Detail' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/660876325_991751443366377_4331248818870894355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFgpTVNlPW7plEWAjKWheErTk9DSAHnHyNOT0NIAecfIx-BtXoivV-afrb4_lV4xjkLEu7buEOAQWsaRnWQrH53&_nc_ohc=-nbiSA1WzdAQ7kNvwELj1vJ&_nc_oc=AdrqeuzDnI1-ADBVp4YiNE3RckdUAdcqg_0yL9DYswZGeCLoOivxPYDxOSRe32OGpXktXqW3lLaEt3jz2t4KdMNU&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=8lZNk95W1KkASVvGTwwxNQ&_nc_ss=7a3a8&oh=00_Af1NZOkYCEjYKs5EYQZrioZHbu8mkBSeyNxh2NfB50Q90w&oe=69E551E8', title: 'Production Gear' },
  { src: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/660505247_991751823366339_2237018081743193563_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFr07aiF8JsUQ_tYNLgwSFSCTjUk8JhcXcJONSTwmFxd6fFK3T7ghV5N49760g0tGf65p-ptB1KhPGCzkXGp01g&_nc_ohc=NNU4YUNRAD0Q7kNvwGpwL8u&_nc_oc=AdqR0Hxcy3ZUDLHW7mCfv6ErEUSOz4RDgEOjfpWoE4TuvdqE2VCbJOGFy5HiOj7tBib6e5ENPoJoL7MIYPkAKb4t&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=k7oqSJ_garI3akqck0Vg6g&_nc_ss=7a3a8&oh=00_Af3gsAk0A8Ssx5td1cBv91qYR8-GXbpE9n0vaKTV0UgSpw&oe=69E53EE7', title: 'Final Master' },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="section-title inline-flex items-center gap-2">
            <span className="w-8 h-[1px] liquid-gold"></span>
            Studio Hub
            <span className="w-8 h-[1px] liquid-gold"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of our latest work in cinematography and photography. 
          </p>
        </div>

        <Tabs defaultValue="videos" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white/20 dark:bg-white/10 rounded-full p-1.5 sm:p-2 border-3 border-brand-gold shadow-xl shadow-brand-gold/40 backdrop-blur-md">
              <TabsTrigger value="videos" className="rounded-full px-6 sm:px-10 py-2.5 sm:py-3 data-[state=active]:bg-brand-gold data-[state=active]:text-brand-black data-[state=active]:shadow-lg data-[state=inactive]:text-foreground data-[state=inactive]:bg-white/5 hover:bg-white/10 transition-all font-bold text-sm sm:text-base">Videos</TabsTrigger>
              <TabsTrigger value="images" className="rounded-full px-6 sm:px-10 py-2.5 sm:py-3 data-[state=active]:bg-brand-gold data-[state=active]:text-brand-black data-[state=active]:shadow-lg data-[state=inactive]:text-foreground data-[state=inactive]:bg-white/5 hover:bg-white/10 transition-all font-bold text-sm sm:text-base">Photography</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card overflow-hidden rounded-[2rem] sm:rounded-[3rem] border-white/40"
                >
                  <div className="w-full h-[250px] sm:h-[480px] relative">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center flex flex-col items-center gap-4">
              <a 
                href="https://www.youtube.com/@ralienterprise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-gold font-bold hover:underline"
              >
                Visit our YouTube Channel
              </a>
              <a 
                href="https://www.facebook.com/RaliCreative/reels/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:underline"
              >
                Watch more Reels on Facebook
              </a>
            </div>
          </TabsContent>

          <TabsContent value="images">
            <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-3 sm:gap-6 md:h-[800px]">
              {images.map((image, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative overflow-hidden rounded-[1.5rem] sm:rounded-[3rem] glass-card border-white/40 h-[180px] sm:h-auto ${
                    i === 0 ? 'col-span-2 md:row-span-2' : 
                    i === 1 ? 'col-span-2 md:row-span-1' : 
                    'col-span-1 md:col-span-1 md:row-span-1'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <h3 className="text-white text-2xl font-display font-bold">{image.title}</h3>
                      <p className="text-white/60 text-sm">Captured by Rali Creative Media</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a 
                href="https://www.facebook.com/RaliCreative/photos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-gold font-bold hover:underline"
              >
                View full Gallery on Facebook
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
