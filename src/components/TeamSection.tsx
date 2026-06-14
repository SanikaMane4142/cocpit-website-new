"use client";
import React, { useState } from 'react';

const allMembers = [
  { name: "Yash Karvekar", role: "Project Manager", img: "/yash.svg" },
  { name: "Swaroop Manade", role: "Full-Stack Developer", img: "/swaroop.svg" },
  { name: "Harshada Khot", role: "Full-Stack Developer", img: "/harshada.svg" },
  { name: "Shubham Patil", role: "Full-Stack Developer", img: "/SHUBHAM_PATIL.svg" },
  { name: "Mahesh Khamkar", role: "Flutter Developer", img: "/mahesh.svg" },
  { name: "Sakshi Patil", role: "Flutter Developer", img: "/sakshi.svg" },
  { name: "Akshay Gandal", role: "IOS Developer", img: "/akshay.svg" },
  { name: "Nikhil Shinde", role: "IOS Developer", img: "/nikhil.svg" },
  { name: "Harshad Pawar", role: "AI Developer", img: "/harshad.svg" },
  { name: "Sanika Mane", role: "AI Developer", img: "/sanika.svg" },
  { name: "Priyansh Devada", role: "UI/UX Designer", img: "/priyansh.svg" }
];

export const TeamSection = () => {
  const infiniteMembers = [...allMembers, ...allMembers, ...allMembers];
  const [currentIndex, setCurrentIndex] = useState(allMembers.length + 1); // Start at Yash (index 13 + 1 to show Yash centered if we want, or just start at index 14. Wait, Yash is index 13.
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Correct starting index: Yash is allMembers.length. We usually start at allMembers.length + 1 to center the second item?
  // Previous code had useState(1). So let's use allMembers.length + 1
  React.useEffect(() => {
    setCurrentIndex(allMembers.length + 1);
  }, []);

  const MemberCard = ({ member, index }: { member: any, index: number }) => {
    const isActive = index === currentIndex;
    
    let cardWidthClass = isActive ? "min-w-[350px] h-[90px]" : "min-w-[325px] h-[85px]";
    let borderClass = isActive 
      ? "border border-indigo-100 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)]" 
      : "border border-transparent";

    let avatarSize = isActive ? "w-[60px] h-[60px]" : "w-[56px] h-[55px]";
    let titleSize = isActive ? "text-[16px]" : "text-[15px]";
    let roleSize = isActive ? "text-[16px]" : "text-[15px]";

    return (
      <div 
        onClick={() => {
          setIsTransitioning(true);
          setCurrentIndex(index);
        }}
        className={`${cardWidthClass} p-6 rounded-xl flex justify-start items-center gap-4 bg-white cursor-pointer ${isTransitioning ? 'transition-all duration-500 ease-in-out' : ''} ${borderClass}`}
      >
        <img 
          className={`${avatarSize} rounded-full object-cover ${isTransitioning ? 'transition-all duration-500' : ''}`} 
          src={member.img} 
          alt={member.name} 
        />
        <div className="flex flex-col justify-center items-start gap-1">
          <div className={`font-medium leading-[130%] whitespace-nowrap text-black font-['Poppins'] ${titleSize} ${isTransitioning ? 'transition-all duration-500' : ''}`}>
            {member.name}
          </div>
          <div className={`font-normal leading-[130%] whitespace-nowrap text-[#9CA3AF] font-['Poppins'] ${roleSize} ${isTransitioning ? 'transition-all duration-500' : ''}`}>
            {member.role}
          </div>
        </div>
      </div>
    );
  };

  const MobileMemberCard = ({ member, index }: { member: any, index: number }) => {
    const isActive = index === currentIndex;

    return (
      <div 
        id={`mob-card-${index}`}
        onClick={() => {
           setIsTransitioning(true);
           setCurrentIndex(index);
        }}
        className="w-[320px] h-[100px] flex justify-center items-center shrink-0 snap-center cursor-pointer"
      >
        <div className={`flex justify-center items-center p-6 rounded-xl gap-4 bg-white ${isTransitioning ? 'transition-all duration-300 ease-in-out' : ''} ${
          isActive 
            ? "w-[320px] h-20 shadow-[0px_0px_10px_0px_rgba(99,102,241,0.60)] outline outline-1 outline-offset-[-1px] outline-indigo-100" 
            : "w-[288px] h-20 outline outline-1 outline-offset-[-1px] outline-indigo-100 opacity-60"
        }`}>
          <img 
            className={`${isActive ? "w-[60px] h-[60px]" : "w-[50px] h-[50px]"} rounded-full object-cover ${isTransitioning ? 'transition-all duration-300' : ''}`} 
            src={member.img} 
            alt={member.name} 
          />
          <div className="flex justify-center items-center gap-4">
            <div className="w-32 inline-flex flex-col justify-center items-start">
              <div className={`justify-center text-black text-base font-medium font-['Poppins'] leading-5 ${isTransitioning ? 'transition-all duration-300' : ''}`}>
                {member.name}
              </div>
              <div className={`self-stretch justify-center text-gray-400 text-sm font-normal font-['Poppins'] leading-5 ${isTransitioning ? 'transition-all duration-300' : ''}`}>
                {member.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    const container = document.getElementById('mobile-slider-container');
    if (container) {
      const targetScroll = currentIndex * 336;
      if (Math.abs(container.scrollLeft - targetScroll) > 10) {
        container.scrollTo({ left: targetScroll, behavior: isTransitioning ? 'smooth' : 'auto' });
      }
    }
  }, [currentIndex, isTransitioning]);

  // Auto-scroll loop every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Seamless loop jump
  React.useEffect(() => {
    if (currentIndex >= allMembers.length * 2) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - allMembers.length);
      }, 500); // Match duration-500
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <>
      <section className="hidden lg:flex py-12 lg:py-24 relative flex-col justify-center items-center gap-2.5 overflow-hidden bg-white w-full">
        <div className="w-full max-w-[1440px] px-6 lg:px-32 flex flex-col justify-center items-center gap-6 lg:gap-10">
          
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-2 relative z-10 w-full lg:w-[1184px] h-auto lg:h-[60px]">
            <div className="text-center font-['Poppins'] font-medium text-2xl leading-[130%] text-black w-full lg:w-[358px] h-auto lg:h-[31px]">
              Meet the Team Behind <span className="text-indigo-500">Cocpit</span>
            </div>
            <div className="text-center font-['Poppins'] font-normal text-sm lg:text-[16px] leading-[130%] text-[#6B7280] w-full lg:w-[560px] h-auto lg:h-[21px]">
              Building the future of AI-powered networking and professional growth.
            </div>
          </div>
          
          {/* Slider */}
          <div className="w-full lg:w-[1100px] h-auto lg:h-[90px] relative flex items-center overflow-x-auto lg:overflow-hidden pb-4 lg:pb-0 scrollbar-hide">
            <div className="min-w-max lg:w-full lg:h-full flex items-center relative">
              <div 
                className={`flex items-center gap-4 lg:gap-[50px] lg:absolute lg:left-0 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                style={{ transform: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `translateX(${(1 - currentIndex) * 375}px)` : 'none' }} 
              >
                {infiniteMembers.map((m, idx) => (
                  <MemberCard key={`${m.name}-${idx}`} member={m} index={idx} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full lg:w-[1184px] h-auto lg:h-[83px] flex justify-between items-center p-0 lg:p-2.5 mt-2">
            <div className="w-full lg:w-[494px] mx-auto text-center font-['Poppins'] font-normal text-sm lg:text-[16px] leading-[130%] text-[#7E8490]">
              Cocpit is built to help professionals discover opportunities grow meaningful connections, and accelerate their careers through AI-powered intelligence.
            </div>
          </div>

        </div>
      </section>

      {/* Mobile Version */}
      <section className="flex lg:hidden w-full bg-white flex-col justify-center items-center py-[38px] overflow-hidden">
        <div className="w-full flex-col justify-center items-center gap-6 flex">
          
          <div className="flex flex-col justify-center items-center gap-2 px-6 max-w-[384px]">
            <div className="text-center">
              <span className="text-black text-base font-medium font-['Poppins'] leading-5">Meet the Team Behind </span>
              <span className="text-indigo-500 text-base font-medium font-['Poppins'] leading-5">Cocpit</span>
            </div>
            <div className="text-center text-gray-500 text-sm font-normal font-['Poppins'] leading-5">
              Building the future of AI-powered networking and professional growth.
            </div>
          </div>
          
          <div className="w-full relative py-2">
            <div 
              id="mobile-slider-container"
              className="w-full flex items-center gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
              style={{
                paddingLeft: 'calc(50% - 160px)',
                paddingRight: 'calc(50% - 160px)'
              }}
              onScroll={(e) => {
                 const scrollLeft = e.currentTarget.scrollLeft;
                 const newIndex = Math.round(scrollLeft / 336);
                 if (newIndex !== currentIndex && newIndex >= 0 && newIndex < allMembers.length) {
                    setCurrentIndex(newIndex);
                 }
              }}
            >
              {allMembers.map((m, idx) => (
                <MobileMemberCard key={`mob-${m.name}-${idx}`} member={m} index={idx} />
              ))}
            </div>
          </div>
          
          <div className="w-full flex justify-center items-center px-6 max-w-[384px]">
            <div className="text-center">
              <span className="text-gray-500 text-sm font-normal font-['Poppins'] leading-5">Cocpit is built to help professionals discover opportunities </span>
              <span className="text-black text-sm font-medium font-['Poppins'] leading-5">grow meaningful connections, and accelerate their careers through </span>
              <span className="text-gray-500 text-sm font-normal font-['Poppins'] leading-5">AI-powered intelligence.</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
