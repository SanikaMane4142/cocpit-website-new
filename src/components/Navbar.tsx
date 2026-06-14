"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  return (
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
                  } text-[11px] sm:text-[13px] md:text-base font-['Poppins']`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-[99px] px-5 py-2 md:px-8 md:py-2.5 flex justify-center items-center cursor-pointer shadow-sm">
            <span className="text-white text-[11px] md:text-sm font-normal font-['Poppins']">Register now</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
