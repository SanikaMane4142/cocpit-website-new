import React from 'react';
import heroImage from '../assets/product_experience.png';
import heroImageMobile from '../assets/product_experience_mobile.png';

export const ProductExperienceSection = () => {
  return (
    <section className="pt-6 pb-12 lg:py-24 relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="w-full inline-flex flex-col justify-center items-center gap-2.5">
          <div className="w-full flex flex-col justify-center items-center gap-4">
            
            {/* App Store Buttons */}
            <div className="order-1 lg:order-4 w-full px-6 lg:px-0 mb-6 lg:mb-0 lg:mt-6 inline-flex lg:hidden justify-between items-center">
              {/* App Store */}
              <button className="w-40 sm:w-44 px-1 sm:px-2.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-between items-center hover:bg-indigo-50 transition-colors">
                <div className="w-full sm:w-36 py-[5px] flex justify-center items-center gap-1 sm:gap-2">
                  <div className="size-6 sm:size-7 flex justify-center items-center shrink-0">
                    <div className="size-6 sm:size-7 relative overflow-hidden">
                      <div className="w-5 h-6 sm:w-6 sm:h-7 left-[2.44px] top-0 absolute bg-black [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 24 24\\\'><path d=\\\'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.88 3.5-.8 1.48.06 2.65.61 3.4 1.64-2.85 1.63-2.31 5.37.5 6.44-.65 1.83-1.61 3.57-2.48 4.89zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z\\\'/></svg>')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                    </div>
                  </div>
                  <div className="w-20 sm:w-24 h-10 sm:h-12 inline-flex flex-col justify-center items-start shrink-0">
                    <div className="w-12 h-5 sm:h-6 justify-start text-black text-[8px] sm:text-[10px] font-normal font-sans leading-5 sm:leading-6">GET IN ON</div>
                    <div className="text-center justify-start text-black text-xs sm:text-sm font-normal font-sans leading-5 sm:leading-6">App Store</div>
                  </div>
                </div>
              </button>

              {/* Play Store */}
              <button className="w-40 sm:w-44 px-1 sm:px-2.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-between items-center hover:bg-indigo-50 transition-colors">
                <div className="w-full sm:w-28 py-[5px] flex justify-center sm:justify-start items-center gap-1 sm:gap-2">
                  <div className="size-6 sm:size-7 relative overflow-hidden shrink-0">
                    <div className="w-4 h-5 sm:w-5 sm:h-6 left-[4.18px] top-[3.13px] absolute bg-black [mask-image:url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 24 24\\\'><path d=\\\'M3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 20H5V2h14v20zM8 5l9 7-9 7V5z\\\'/></svg>')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                  </div>
                  <div className="flex-1 h-10 sm:h-12 inline-flex flex-col justify-center items-start shrink-0">
                    <div className="w-12 h-5 sm:h-6 justify-start text-black text-[8px] sm:text-[10px] font-normal font-sans leading-5 sm:leading-6">GET IN ON</div>
                    <div className="text-center justify-start text-black text-xs sm:text-sm font-normal font-sans leading-5 sm:leading-6">Play Store</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Image */}
            <img 
              className="hidden lg:block order-2 lg:order-1 max-w-[1132px] w-full h-[736px] object-cover rounded-xl shadow-[0px_0px_50px_0px_rgba(255,255,255,0.25)] border border-[#B7B7B7]" 
              src={heroImage.src} 
              alt="Interactive Product Experience Desktop" 
            />
            
            {/* Mobile Image */}
            <img 
              className="lg:hidden order-2 lg:order-1 w-72 h-[659px] object-cover rounded-xl shadow-[0px_0px_50px_0px_rgba(255,255,255,0.25)] border border-[#B7B7B7]" 
              src={heroImageMobile.src} 
              alt="Interactive Product Experience Mobile" 
            />
            
            {/* Pagination Dots */}
            <div className="order-3 lg:order-2 inline-flex justify-start items-center gap-1 mt-4">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
              <div className="w-1.5 h-1.5 bg-indigo-100 rounded-full" />
            </div>

            {/* Description Text */}
            <div className="order-4 lg:order-3 w-full max-w-[667px] p-2.5 inline-flex justify-center items-center gap-2.5">
              <div className="hidden lg:flex w-full text-center justify-center text-gray-500 text-sm lg:text-base font-normal leading-5">
                Explore Cocpit through an interactive product experience. Discover how AI, networking, business growth, and career opportunities work together in one intelligent ecosystem.
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
