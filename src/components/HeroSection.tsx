"use client";
import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, Repeat2, Share, Bell, MoreVertical, UserPlus } from 'lucide-react';
import { cn } from '../lib/utils';

const FloatingAvatar = ({ src, className, delay = 0, size = 64 }: { src: string, className?: string, delay?: number, size?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={cn("absolute rounded-full overflow-hidden border-2 border-white shadow-[0px_4px_100px_17px_rgba(255,255,255,0.25)] bg-white object-cover", className)}
    style={{ width: size, height: size }}
  >
    <img src={src} alt="Avatar" className="w-full h-full object-cover" />
  </motion.div>
);

export const HeroSection = () => {
  return (
    <>
      {/* Mobile / Tablet Responsive Layout */}
      <section className="lg:hidden pt-28 pb-10 overflow-hidden relative">
        <div className="w-full mx-auto px-4 relative flex flex-col items-center">
          {/* Header Text */}
          <div className="text-center w-full max-w-[320px] mx-auto mb-6 relative z-10 flex flex-col gap-1 mt-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-medium text-black leading-tight"
            >
              Welcome To <span className="capitalize">C</span><span className="lowercase">OCPIT</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-lg font-medium text-indigo-500 leading-tight mt-1"
            >
              Turn Vision into Reality
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-normal text-gray-500 leading-tight mt-1"
            >
              The next-generation professional networking platform.
            </motion.p>
          </div>

          {/* Cluster Container: Card + Bubbles */}
          <div className="relative w-full max-w-[420px] flex justify-center items-center mt-6 mb-8 z-20">

            {/* Card Wrapper for precise bubble positioning */}
            <div className="relative w-[65%] sm:w-[60%] min-w-[240px]">

              {/* Floating Bubbles */}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="absolute -left-12 sm:-left-16 top-[48%] bg-indigo-50 rounded-xl px-2.5 py-1.5 inline-flex justify-center items-center gap-1.5 shadow-sm z-30 pointer-events-none whitespace-nowrap">
                <div className="text-indigo-500 text-[9px] sm:text-[10px] font-normal font-['Poppins']">Liked by Jhon and others</div>
                <ThumbsUp className="w-3 h-3 fill-indigo-500 text-indigo-500" />
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute -right-20 sm:-right-28 top-[54%] bg-indigo-50 rounded-xl px-2.5 py-1.5 inline-flex justify-center items-center gap-1.5 shadow-sm z-20 pointer-events-none whitespace-nowrap">
                <div className="text-indigo-500 text-[9px] sm:text-[10px] font-normal font-['Poppins']">comment on post and others</div>
                <Bell className="w-3 h-3 text-indigo-500" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -right-8 sm:-right-12 -bottom-0 bg-indigo-50 rounded-xl rounded-tl-none px-3 py-2 inline-flex justify-center items-center gap-1.5 z-30 shadow-md pointer-events-none whitespace-nowrap">
                <div className="text-indigo-500 text-[9px] sm:text-[10px] font-normal font-['Poppins'] leading-tight">AI found 15 new opportunities this week<br />+23% networking growth</div>
              </motion.div>

              {/* Center Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-20 w-full bg-white shadow-lg outline outline-1 outline-offset-[-0.50px] outline-indigo-50 overflow-hidden pb-1 rounded-md"
              >
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Amara Okafor" className="w-8 h-8 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-[11px] text-gray-900 leading-tight">Amara okafor</h3>
                      <p className="text-[8px] text-gray-500 leading-tight">Senior product designer<br /> 6 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <UserPlus className="w-3 h-3" />
                    <MoreVertical className="w-3 h-3" />
                  </div>
                </div>
                <div className="px-3 pb-2">
                  <p className="text-[9px] text-gray-700 leading-snug">Hey! I just got a new job — all thanks to Cocpit!! I'm really excited for this new chapter a...</p>
                </div>
                <div className="w-full aspect-[4/3] mx-auto bg-gray-100 relative">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="Workspace" className="w-full h-full object-cover" />
                </div>
                <div className="p-3 bg-white relative z-10 -mt-2">
                  <p className="text-[9px] text-gray-500 mb-2">Liked by <span className="font-semibold text-gray-900">Jhon</span> and <span className="font-semibold text-gray-900">others</span></p>
                  <div className="flex items-center justify-between text-gray-500">
                    <button className="flex items-center gap-1 text-[10px] hover:text-indigo-500 text-indigo-500 transition-colors"><ThumbsUp className="w-3 h-3 fill-indigo-500" /> 3</button>
                    <button className="flex items-center gap-1 text-[10px] hover:text-indigo-500 transition-colors"><MessageSquare className="w-3 h-3" /> 8</button>
                    <button className="flex items-center gap-1 text-[10px] hover:text-indigo-500 transition-colors"><Repeat2 className="w-3 h-3" /> 1</button>
                    <button className="flex items-center gap-1 text-[10px] hover:text-indigo-500 transition-colors"><Share className="w-3 h-3" /> 3</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description Moved Below the Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="w-full max-w-[340px] border-l-2 border-indigo-500 pl-4 mt-8 self-start ml-2 sm:mx-auto"
          >
            <h2 className="text-black font-medium text-lg mb-2">One Platform. <span className="text-indigo-500">Unlimited Growth.</span></h2>
            <p className="text-sm font-normal text-gray-500 leading-snug">
              Cocpit unifies professional networking, AI intelligence, recruitment, and business infrastructure into one platform that works alongside you to create opportunities and drive success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Desktop Exact Figma Layout */}
      <section className="hidden lg:flex justify-center w-full overflow-hidden h-[1000px] relative bg-transparent">
        <div className="relative w-[1440px] min-w-[1440px] h-[1000px]">

          {/* Header Text */}
          <div className="w-[629px] left-[406px] top-[172px] absolute inline-flex flex-col justify-center items-center gap-2">
            <h1 className="self-stretch text-center justify-end">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-black text-6xl font-medium font-['Poppins'] leading-[83.20px]">Welcome To </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-black text-6xl font-medium font-['Poppins'] capitalize leading-[83.20px]">C</motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-black text-6xl font-medium font-['Poppins'] lowercase leading-[83.20px]">OCPIT</motion.span>
            </h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="self-stretch text-center justify-center text-indigo-500 text-2xl font-medium font-['Poppins'] leading-8 mt-1">Turn Vision into Reality</motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="self-stretch text-center justify-center text-gray-500 text-lg font-normal font-['Poppins'] leading-6 mt-1">The next-generation professional networking platform.</motion.div>
          </div>

          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="w-96 left-[64px] top-[394px] absolute justify-center text-gray-500 text-base font-normal font-['Poppins'] leading-5">
            Cocpit helps professionals, students, entrepreneurs, and recruiters connect smarter, discover opportunities, and grow faster through AI-powered networking and business intelligence.
          </motion.div>

          {/* Right Text */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="w-96 left-[1003px] top-[700px] absolute justify-center text-gray-500 text-base font-normal font-['Poppins'] leading-5">
            AI continuously identifies opportunities, recommends valuable connections, and helps accelerate professional growth across one intelligent ecosystem.
          </motion.div>

          {/* Curved Lines */}
          <svg className="absolute left-[538px] top-[730px] w-[192px] h-[36px] origin-top-left rotate-[-175deg] overflow-visible pointer-events-none drop-shadow-sm">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} d="M 0,18 Q 48,54 96,18 T 192,18" fill="none" stroke="#D3D4F4" strokeWidth="1" />
          </svg>
          <svg className="absolute left-[922px] top-[490px] w-[194px] h-[35px] origin-top-left rotate-[-17deg] overflow-visible pointer-events-none drop-shadow-md">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} d="M 0,17.5 Q 48.5,52.5 97,17.5 T 194,17.5" fill="none" stroke="#D3D4F4" strokeWidth="1" />
          </svg>

          {/* Floating Bubbles */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="px-4 py-2 left-[376px] top-[538px] absolute bg-indigo-50 rounded-xl inline-flex justify-center items-center gap-2.5 shadow-sm z-20">
            <div className="justify-start text-indigo-500 text-sm font-normal font-['Poppins'] leading-5">Liked by Jhon and others</div>
            <ThumbsUp className="w-4 h-4 fill-indigo-500 text-indigo-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="px-4 py-2 left-[837px] top-[607px] absolute bg-indigo-50 rounded-xl inline-flex justify-center items-center gap-2.5 shadow-sm z-20">
            <div className="justify-start text-indigo-500 text-sm font-normal font-['Poppins'] leading-5">comment on post and others</div>
            <Bell className="w-4 h-4 text-indigo-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="h-20 px-4 py-2 left-[815px] top-[840px] absolute bg-indigo-50 rounded-tl-xl rounded-tr-xl inline-flex justify-center items-center gap-2.5 z-20">
            <div className="w-72 justify-start text-indigo-500 text-sm font-normal font-['Poppins'] leading-5">AI found 15 new opportunities this week<br />+23% networking growth</div>
          </motion.div>

          {/* Center Card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="left-[538px] top-[394px] absolute hover:scale-[1.02] transition-transform duration-500 z-10">
            <img src="/Frame.svg" alt="Post Card" className="w-[368px] h-[506px]" />
          </motion.div>

          {/* Avatars */}
          <FloatingAvatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" className="left-[1158px] top-[479px] z-10" delay={0.1} size={92} />
          <FloatingAvatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" className="left-[1099px] right-[190px] top-[429px] z-30" delay={0.5} size={60} />
          <FloatingAvatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" className="left-[279px] top-[627px] z-10" delay={0.7} size={91} />
          <FloatingAvatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" className="left-[188px] top-[699px] z-20" delay={0.3} size={132}  ></FloatingAvatar>

        </div>
      </section>
    </>
  );
};
