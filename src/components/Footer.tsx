

import lightLogoSrc from '@/assets/light logo.webp';

export function Footer() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=%2B2348134933164&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NzYzMzU4NDksInBob25lIjoiKzIzNDgxMzQ5MzMxNjQiLCJjb250ZXh0IjoiQWZoN01wd2RSSzBzRXNiS0FPaGpxdDZwQlpCcWVnYXN3WUVFTWdLcmM2U2lxMmtySThtLXh1YlBiWUU1elVxcl9mOW9iTTMtRDlLb0JsN29ybDBIMkpOSHptTmtvNnZleEFTM1ZJREpuR1VPelFsWU1KUno4MWxZbXFNeldpNTlMMzg4Ni05aDkwdUNib3VYVnVRY2cyczBNUSIsInNvdXJjZSI6IkZCX1BhZ2UiLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicGFnZV9jdGEifQ.iExX6qylwoOtx7cndPFq3P7GTDHyhV6l6cJhHMZyhz8y1f3fjjFU1awu_zE-erXTgEXz8IYVPr0x-AfKosJTgw&fbclid=IwY2xjawRMS3FleHRuA2FlbQIxMABicmlkETFIamMxRHdtaDVoT3ZPbUJFc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnpZ1Tjg1QsGoJ_EEu2KeEDgjRFF00a0bc2TwW7_Otr1aDqH6rS4fEkJMow8_aem_dvHQWFLdZ9JyDL2IBKo9Aw";

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src={lightLogoSrc}
              alt="Rali Creative Media Logo" 
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-tight">
                Rali<span className="text-brand-gold"> Creative Media</span>
              </span>
              <span className="tracking-[0.18em] text-brand-gold/70 font-medium italic text-[9px]">
                creative. strategic. Reliable.
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Rali Creative Media. All rights reserved. <br />
            <span className="text-xs opacity-50">Shop #4, Udi Hills Close, Karewa GRA-Jimeta, Yola, Nigeria</span>
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/RaliCreative"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="absolute inset-0 backdrop-blur-[1px] bg-blue-600/5 group-hover:bg-transparent transition-colors" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/ralicreative"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                <svg className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.79.263-1.473.557-2.115 1.194-.657.646-.945 1.35-1.206 2.115-.266.788-.471 1.666-.53 2.946C.032 8.333.017 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.53 2.946.263.79.557 1.473 1.194 2.115.657.657 1.35.945 2.115 1.206.788.266 1.666.471 2.946.53C8.333 23.968 8.74 23.983 12 23.983s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.946-.53.79-.263 1.473-.557 2.115-1.194.657-.657.945-1.35 1.206-2.115.266-.788.471-1.666.53-2.946.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.53-2.946-.263-.79-.557-1.473-1.194-2.115C21.557 1.406 20.854 1.118 20.089.857c-.788-.266-1.666-.471-2.946-.53C15.667.032 15.26.017 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z"/>
                  <circle cx="12" cy="12" r="3.305"/>
                  <circle cx="18.513" cy="5.487" r=".773"/>
                </svg>
                <div className="absolute inset-0 backdrop-blur-[1px] bg-pink-600/5 group-hover:bg-transparent transition-colors" />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@ralienterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                <svg className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div className="absolute inset-0 backdrop-blur-[1px] bg-red-600/5 group-hover:bg-transparent transition-colors" />
              </div>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center overflow-hidden border border-white/20 shadow-lg">
                <svg className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.547 4.108 1.506 5.848L0 24l6.352-1.506C8.892 23.453 10.89 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.701 0-3.361-.406-4.859-1.179l-.348-.2-3.613.859.859-3.613-.2-.348C1.588 15.361 1.182 13.701 1.182 12c0-5.449 4.387-9.836 9.818-9.836 5.449 0 9.836 4.387 9.836 9.836 0 5.449-4.387 9.818-9.836 9.818z"/>
                  <path d="M18.556 15.897c-.305-.153-1.81-.894-2.091-.996-.281-.102-.486-.153-.691.153-.204.305-.791.996-.969 1.201-.178.204-.357.229-.662.076-.305-.153-1.293-.477-2.463-1.519-.911-.835-1.524-1.866-1.702-2.171-.178-.305-.019-.471.134-.624.137-.137.305-.357.458-.535.153-.178.204-.305.305-.509.102-.204.051-.382-.025-.535-.076-.153-.691-1.661-.947-2.274-.248-.595-.501-.514-.691-.524-.178-.009-.382-.012-.587-.012-.204 0-.535.076-.815.382-.281.305-1.071 1.045-1.071 2.554 0 1.509 1.097 2.963 1.25 3.167.153.204 2.159 3.293 5.231 4.619.73.317 1.298.504 1.741.645.733.236 1.401.201 1.927.122.588-.088 1.81-.74 2.063-1.455.254-.715.254-1.327.178-1.455-.076-.128-.281-.204-.587-.357z"/>
                  <circle cx="18" cy="6" r="2.5" fill="currentColor"/>
                </svg>
                <div className="absolute inset-0 backdrop-blur-[1px] bg-green-600/5 group-hover:bg-transparent transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
