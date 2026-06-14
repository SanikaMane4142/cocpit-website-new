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
              <button className="w-40 sm:w-44 h-12 sm:h-14 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center gap-2 sm:gap-3 hover:bg-indigo-50 transition-colors">
                <img src="/apple.svg" alt="Apple" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <div className="flex flex-col justify-center items-start">
                  <span className="text-black text-[8px] sm:text-[10px] font-normal font-sans leading-tight">GET IN ON</span>
                  <span className="text-black text-xs sm:text-sm font-medium font-sans leading-tight">App Store</span>
                </div>
              </button>

              {/* Play Store */}
              <button className="w-40 sm:w-44 h-12 sm:h-14 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center gap-2 sm:gap-3 hover:bg-indigo-50 transition-colors">
                <img src="/playstore.svg" alt="Play Store" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                <div className="flex flex-col justify-center items-start">
                  <span className="text-black text-[8px] sm:text-[10px] font-normal font-sans leading-tight">GET IN ON</span>
                  <span className="text-black text-xs sm:text-sm font-medium font-sans leading-tight">Play Store</span>
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
