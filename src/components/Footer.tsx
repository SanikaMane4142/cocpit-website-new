import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#EEF2FF] flex justify-center items-center">
      <div className="max-w-[1440px] w-full h-auto px-6 lg:px-28 py-8 lg:py-12 flex flex-col justify-center items-center gap-4 lg:gap-2.5">
        <div className="w-full lg:px-28 flex flex-col justify-start items-start lg:items-center gap-4 lg:gap-12">

          {/* Top Section */}
          <div className="w-full flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-4 lg:gap-52">
            {/* Logo & Description */}
            <div className="w-full lg:w-80 flex flex-col justify-start items-start gap-2.5 p-2.5 lg:px-0">
              <div className="self-stretch flex items-center">
                <span className="text-black text-xl lg:text-[32px] font-bold font-['Inter'] leading-6 lg:leading-[130%]">COC</span>
                <span className="text-indigo-500 text-xl lg:text-[32px] font-bold font-['Inter'] leading-6 lg:leading-[130%]">PIT</span>
              </div>
              <div className="self-stretch text-gray-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5">
                Navigating the future of digital experiences with velocity and precision.
              </div>
            </div>

            {/* Links Container */}
            <div className="w-full lg:w-auto px-2.5 lg:px-0 flex justify-between lg:justify-start items-start gap-4 lg:gap-52">
              {/* Middle Links */}
              <div className="flex flex-col justify-start items-start gap-4 lg:gap-5">
                <div className="text-black text-base lg:text-lg font-semibold font-['Poppins'] leading-5">Company</div>
                <div className="w-28 lg:w-auto flex flex-col justify-start items-start gap-2 lg:gap-5">
                  <Link href="/" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">Home</Link>
                  <Link href="/about" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">About</Link>
                  <Link href="/careers" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">Careers</Link>
                  <Link href="/features" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">Features</Link>
                </div>
              </div>

              {/* Right Links and Location */}
              <div className="flex flex-col justify-start items-start gap-4 lg:gap-5">
                <div className="text-black text-base lg:text-lg font-semibold font-['Poppins'] leading-5">Legal</div>
                <div className="w-28 lg:w-auto flex flex-col justify-start items-start gap-2 lg:gap-5">
                  <a href="#" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-500 hover:text-indigo-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 transition-colors">Terms of Service</a>
                </div>
                <div className="text-black text-base lg:text-lg font-semibold font-['Poppins'] leading-5 mt-2 lg:mt-4">Location</div>
                <div className="text-gray-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5 lg:leading-7 max-w-[400px]">
                  Ratnamani Green Emerald Building,
                  Mangalwar Peth, Race course Naka,
                  C Ward, Kolhapur, Maharashtra
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-gray-500"></div>

          {/* Copyright */}
          <div className="w-full text-center text-gray-500 text-sm lg:text-base font-normal font-['Poppins'] leading-5">
            © 2026 Cocpit. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
