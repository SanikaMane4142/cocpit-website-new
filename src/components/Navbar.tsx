"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const WaitlistModal = ({ onClose }: { onClose: () => void }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-08-08T00:00:00').getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timerId = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerId);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="w-full max-w-[448px] p-8 bg-[#1c1c1c] rounded-2xl border border-gray-700 flex flex-col justify-start items-center shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full inline-flex justify-between items-center mb-6 relative z-10">
          <div className="text-white text-xl md:text-2xl font-medium leading-8 font-sans">Registrations Opening Soon</div>
          <button onClick={onClose} className="w-6 h-6 flex justify-center items-center hover:opacity-70 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="w-full text-gray-400 text-sm md:text-base text-center mb-8 font-sans relative z-10">
          We are getting things ready for you. Mark your calendars for August 8th!
        </div>

        {/* Mini Countdown */}
        <div className="flex justify-center items-center gap-2 md:gap-4 w-full relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a2a2a] rounded-xl flex justify-center items-center text-xl sm:text-2xl font-semibold text-white font-sans border border-gray-600">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="mt-2 text-[10px] font-medium text-gray-500 uppercase tracking-widest">Days</div>
          </div>
          <div className="text-lg sm:text-xl font-medium text-gray-500 pb-5">:</div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a2a2a] rounded-xl flex justify-center items-center text-xl sm:text-2xl font-semibold text-white font-sans border border-gray-600">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="mt-2 text-[10px] font-medium text-gray-500 uppercase tracking-widest">Hours</div>
          </div>
          <div className="text-lg sm:text-xl font-medium text-gray-500 pb-5">:</div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a2a2a] rounded-xl flex justify-center items-center text-xl sm:text-2xl font-semibold text-white font-sans border border-gray-600">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="mt-2 text-[10px] font-medium text-gray-500 uppercase tracking-widest">Mins</div>
          </div>
          <div className="text-lg sm:text-xl font-medium text-gray-500 pb-5">:</div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2a2a2a] rounded-xl flex justify-center items-center text-xl sm:text-2xl font-semibold text-white font-sans border border-gray-600">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="mt-2 text-[10px] font-medium text-gray-500 uppercase tracking-widest">Secs</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-auto bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="w-full py-4 md:h-[72px] md:py-0 px-6 md:px-10 flex justify-between items-start md:items-center max-w-[1512px] mx-auto">

          {/* Logo */}
          <div className="flex items-center h-8 md:h-full">
            <Link href="/" className="flex items-center">
              <img src="/image%206.svg" alt="Cocpit Logo" className="h-6 md:h-11 w-auto invert" />
            </Link>
          </div>

          {/* Navigation Links + Register Button Container */}
          <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-8">
            <div className="flex justify-end items-center gap-3 md:gap-6 mt-1 md:mt-0">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Features', path: '/features' },
                { name: 'Careers', path: '/careers' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-center flex justify-center items-center transition-colors pb-1 md:pb-4 border-b-[1.5px] md:border-b-2 mt-0 md:mt-4 ${pathname === item.path
                      ? 'border-indigo-500 text-indigo-500 font-medium'
                      : 'border-transparent text-black font-normal hover:text-indigo-500'
                    } text-[11px] sm:text-[13px] md:text-base font-sans`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-[99px] px-5 py-2 md:px-8 md:py-2.5 flex justify-center items-center cursor-pointer shadow-sm"
            >
              <span className="text-white text-[11px] md:text-sm font-normal font-sans">Register now</span>
            </button>
          </div>
        </div>
      </nav>

      {isWaitlistOpen && <WaitlistModal onClose={() => setIsWaitlistOpen(false)} />}
    </>
  );
};
