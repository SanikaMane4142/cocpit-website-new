import React from 'react';

const FeatureBlock = ({ title, description, items }: { title: React.ReactNode, description: React.ReactNode, items?: string[] }) => (
  <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-10 py-0 lg:py-12">
    <h2 className="w-full lg:w-96 text-center lg:text-left text-base lg:text-3xl font-medium font-sans leading-5 lg:leading-10 text-zinc-950">
      {title}
    </h2>
    <div className="w-full lg:flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-6">
      <div className="w-full max-w-[320px] lg:max-w-none text-center lg:text-left text-zinc-600 text-sm lg:text-base font-normal font-sans leading-5">
        {description}
      </div>
      {items && items.length > 0 && (
        <div className="w-full max-w-[320px] lg:max-w-[571px] text-center lg:text-left text-zinc-600 text-sm lg:text-base font-normal font-sans leading-5">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              {item}
              {idx < items.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Divider = () => (
  <div className="w-full max-w-[320px] lg:max-w-none h-px bg-indigo-100"></div>
);

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cocpit – AI Professional Networking Platform',
  description: 'Cocpit is an AI-powered professional networking platform that helps professionals, recruiters, startups, founders, businesses, and enterprises connect, hire, discover opportunities, generate leads, and accelerate growth.',
};

export default function Features() {
  return (
    <main className="pt-24 lg:pt-40 pb-20 relative flex flex-col justify-center items-center px-6 lg:px-0">
      {/* Header Section */}
      <div className="w-full max-w-[1440px] lg:px-28 py-2.5 flex flex-col justify-center items-center gap-2 lg:gap-4 mb-10 lg:mb-24">
        <div className="w-full lg:px-32 flex flex-col justify-center items-center gap-2 lg:gap-4">
          <h1 className="text-center">
            <span className="text-black text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">About </span>
            <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">Features</span>
          </h1>
          <div className="w-full max-w-sm lg:max-w-[908px] text-center text-zinc-600 text-base lg:text-xl font-normal font-sans leading-5 lg:leading-6">
            Cocpit is an AI-powered ecosystem where professionals, businesses, recruiters, and innovators connect, grow, and scale together.
          </div>
        </div>
      </div>

      {/* Features List Section */}
      <div className="w-full max-w-[1234px] flex flex-col justify-center lg:justify-start items-center lg:items-start gap-7 lg:gap-0">
        
        <FeatureBlock 
          title="Professional Networking"
          description="Build professional profiles, connect with industry experts, engage with communities, and expand your professional network."
          items={[
            "Professional profile creation",
            "Business profile management",
            "Company pages",
            "Industry networking communities",
            "Professional content sharing",
            "Connections and followers",
            "Business networking opportunities",
            "Thought leadership publishing"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="AI Career Growth Platform"
          description="Advance your career with AI-powered insights, personalized recommendations, and professional development tools."
          items={[
            "Skill gap analysis",
            "Career path recommendations",
            "Professional growth tracking",
            "Industry benchmarking",
            "Learning recommendations",
            "Professional branding optimization",
            "Career opportunity discovery",
            "AI career coaching"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="Recruitment & Talent Acquisition"
          description="Help recruiters and companies discover qualified candidates, manage hiring workflows, and improve recruitment outcomes."
          items={[
            "Candidate sourcing",
            "AI talent matching",
            "Recruitment workflow automation",
            "Applicant management",
            "Hiring pipeline tracking",
            "Employer branding tools",
            "Talent discovery systems",
            "Recruitment analytics"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="AI Business Intelligence"
          description="Cocpit's AI Co-Founder analyzes business performance across sales, marketing, operations, productivity, finance, and growth to identify opportunities and improve decision-making."
          items={[
            "Business analytics dashboard",
            "Industry comparison analysis",
            "Growth opportunity detection",
            "Strategic business recommendations",
            "Performance benchmarking",
            "Sales intelligence",
            "Marketing optimization",
            "Operational efficiency insights"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="Lead Generation & Business Growth"
          description="Discover clients, decision-makers, strategic partners, investors, and business opportunities through AI-powered networking systems."
          items={[
            "Lead generation automation",
            "Client acquisition systems",
            "Partnership discovery",
            "Decision-maker identification",
            "Business opportunity intelligence",
            "Co-founder matching",
            "Executive networking",
            "Market expansion insights"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="Workflow Automation Software"
          description="Automate repetitive tasks, campaigns, outreach, and operational processes with AI-powered workflow automation."
          items={[
            "Workflow automation",
            "Marketing campaign automation",
            "AI task management",
            "Outreach automation",
            "Operational process automation",
            "Productivity optimization",
            "Team collaboration workflows",
            "Business process execution"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="Enterprise Business Management Platform"
          description="Manage departments, employees, workflows, recruitment, operations, and business activities through a centralized enterprise dashboard."
          items={[
            "Role-based access control",
            "Department management",
            "Employee administration",
            "Recruitment management",
            "Marketing operations",
            "Business activity monitoring",
            "Secure access controls",
            "Organizational workflow management"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="Unified AI Ecosystem for Professionals and Businesses"
          description={
            <>
              Cocpit combines professional networking, career development, recruitment software, business intelligence, lead generation, workflow automation, and enterprise management into a single AI-powered platform.<br/><br/>
              By eliminating disconnected tools and systems, Cocpit enables professionals and organizations to manage networking, hiring, growth, operations, and business development from one centralized environment.<br/><br/>
              <strong>Why Choose Cocpit?</strong>
            </>
          }
          items={[
            "AI Professional Networking",
            "Career Growth Intelligence",
            "Recruitment & Hiring Software",
            "Lead Generation Platform",
            "Business Intelligence Dashboard",
            "Workflow Automation Software",
            "Enterprise Management Tools",
            "Business Growth Platform",
            "Professional Development Ecosystem",
            "Future-Ready AI Infrastructure"
          ]}
        />
      </div>
    </main>
  );
}
