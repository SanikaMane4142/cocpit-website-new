"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const WaitlistModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Failed to join waitlist');

      setStatus('success');
      setMessage(data.message || 'Successfully joined the waitlist!');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="w-full max-w-[448px] p-6 bg-[#1c1c1c] rounded-xl border border-gray-500 flex flex-col justify-start items-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full inline-flex justify-between items-center mb-6">
          <div className="text-white text-2xl font-medium leading-8">Join the Waitlist</div>
          <button onClick={onClose} className="w-6 h-6 flex justify-center items-center hover:opacity-70 transition-opacity">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-white text-sm font-normal">Email Address*</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="w-full h-12 p-3 bg-transparent rounded-xl border border-gray-500 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {message && (
            <div className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full h-12 mt-2 px-3 py-3 bg-[#818cf8] hover:bg-indigo-400 disabled:bg-gray-600 transition-colors rounded-xl flex justify-center items-center"
          >
            <span className="text-white text-base font-normal">
              {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
            </span>
          </button>
        </form>
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
