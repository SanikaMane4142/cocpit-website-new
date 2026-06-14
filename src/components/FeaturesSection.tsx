"use client";
import { motion } from 'framer-motion';
import { Users, Network, Briefcase, TrendingUp } from 'lucide-react';

const FeatureCard = ({ title, icon: Icon, delay }: { title: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="w-full lg:w-[208px] h-[110px] p-4 bg-white rounded-xl flex flex-col justify-center items-start gap-2 hover:-translate-y-1 transition-transform duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
  >
    <div className="w-6 h-6 text-indigo-500">
      <Icon className="w-6 h-6" />
    </div>
    <div className="w-48 text-indigo-500 text-base font-normal leading-5">
      {title}
    </div>
  </motion.div>
);

export const FeaturesSection = () => {
  return (
    <section className="pt-12 pb-6 lg:py-24 relative z-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1195px] mx-auto gap-10 lg:gap-0">
          
          {/* Left Side Content */}
          <div className="flex justify-start items-center gap-4 w-full lg:w-auto lg:max-w-[623px]">
            <div className="w-[2px] h-[150px] bg-[#6366F1] shrink-0"></div>
            <div className="w-full py-1 inline-flex flex-col justify-center items-start gap-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col justify-start items-start gap-2"
              >
                <div>
                  <span className="text-black text-[24px] font-medium font-sans leading-[130%]">One Platform. </span>
                  <span className="text-indigo-500 text-[24px] font-medium font-sans leading-[130%]">Unlimited Growth.</span>
                </div>
              </motion.div>
              <p className="text-zinc-600 text-sm lg:text-base font-normal leading-5">
                Cocpit unifies professional networking, AI intelligence, recruitment, and business infrastructure into one platform that works alongside you to create opportunities and drive success.
              </p>
            </div>
          </div>

          {/* Right Side Grid */}
          <div className="w-full lg:w-[530px] px-4 py-2.5 lg:px-0 lg:py-0 flex flex-col justify-center items-center gap-5 lg:gap-4">
            <div className="w-full inline-flex flex-col lg:flex-row justify-end items-stretch lg:items-center gap-5 lg:gap-4">
              <FeatureCard 
                title="Recruitment Intelligence" 
                icon={Users} 
                delay={0.1} 
              />
              <FeatureCard 
                title="Smart Networking" 
                icon={Network} 
                delay={0.2} 
              />
            </div>
            <div className="w-full inline-flex flex-col lg:flex-row justify-start items-stretch lg:items-center gap-5 lg:gap-4">
              <FeatureCard 
                title="Business Engine" 
                icon={Briefcase} 
                delay={0.3} 
              />
              <FeatureCard 
                title="AI Career Growth" 
                icon={TrendingUp} 
                delay={0.4} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
