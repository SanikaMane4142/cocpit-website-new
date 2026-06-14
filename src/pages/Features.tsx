import React from 'react';

const FeatureBlock = ({ title, description, items }: { title: React.ReactNode, description: string, items?: string[] }) => (
  <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-10 py-0 lg:py-12">
    <div className="w-full lg:w-96 text-center lg:text-left text-base lg:text-3xl font-medium font-['Poppins'] leading-5 lg:leading-10 text-zinc-950">
      {title}
    </div>
    <div className="w-full lg:flex-1 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-6">
      <div className="w-full max-w-[320px] lg:max-w-none text-center lg:text-left text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-5">
        {description}
      </div>
      {items && items.length > 0 && (
        <div className="w-full max-w-[320px] lg:max-w-[571px] text-center lg:text-left text-zinc-600 text-sm lg:text-base font-normal font-['Poppins'] leading-5">
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

export const Features = () => {
  return (
    <main className="pt-24 lg:pt-40 pb-20 relative flex flex-col justify-center items-center px-6 lg:px-0">
      {/* Header Section */}
      <div className="w-full max-w-[1440px] lg:px-28 py-2.5 flex flex-col justify-center items-center gap-2 lg:gap-4 mb-10 lg:mb-24">
        <div className="w-full lg:px-32 flex flex-col justify-center items-center gap-2 lg:gap-4">
          <div className="text-center">
            <span className="text-black text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">About </span>
            <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">Features</span>
          </div>
          <div className="w-full max-w-sm lg:max-w-[908px] text-center text-zinc-600 text-base lg:text-xl font-normal font-['Poppins'] leading-5 lg:leading-6">
            Cocpit is an AI-powered ecosystem where professionals, businesses, recruiters, and innovators connect, grow, and scale together.
          </div>
        </div>
      </div>

      {/* Features List Section */}
      <div className="w-full max-w-[1234px] flex flex-col justify-center lg:justify-start items-center lg:items-start gap-7 lg:gap-0">
        
        <FeatureBlock 
          title="Core Platform Features"
          description="Cocpit provides all the essential features of a modern professional networking platform while enhancing the experience with advanced AI-powered systems. Users can build professional profiles, post content, connect with people, discover opportunities, grow businesses, and manage operations — all from one platform."
          items={[
            "Post photos, videos, articles, updates, and professional content",
            "Follow and connect with professionals, founders, recruiters, and businesses",
            "Discover and apply for jobs directly through the platform",
            "Build professional and business profiles",
            "Create company pages and organizational profiles",
            "Network with industry-specific communities",
            "Share achievements, projects, and updates",
            "Engage with content through comments, reactions, and discussions",
            "Recruit candidates and manage hiring workflows",
            "Discover clients, collaborators, and strategic partners",
            "Access AI-powered growth and networking systems"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title="AI Co-Founder Intelligence"
          description="Cocpit’s AI Co-Founder gives businesses and professionals a live graphical intelligence system that compares their performance against industry standards. The platform analyzes key sectors like marketing, finance, operations, sales, productivity, growth, and branding to identify strengths, weaknesses, and hidden growth opportunities. Users can directly interact with the AI to understand business problems, receive strategic guidance, and instantly execute solutions. From launching sales campaigns to automating workflows and generating business strategies — Cocpit’s AI actively works alongside users to grow businesses and careers."
          items={[
            "Real-time business analytics",
            "Industry comparison intelligence",
            "AI-generated growth strategies",
            "Automated sales & marketing campaigns",
            "Operational optimization",
            "AI-driven execution systems"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">Professional Growth </span><span className="text-zinc-950">Intelligence</span></>}
          description="Cocpit creates personalized growth intelligence maps for professionals by analyzing how their skills compare against industry expectations. Whether users are designers, developers, marketers, consultants, or founders, Cocpit identifies strengths, weaknesses, missing industry requirements, and growth opportunities through advanced AI analysis. The platform actively helps users scale by recommending courses, building strategic connections, improving professional visibility, and discovering career opportunities."
          items={[
            "Skill gap analysis",
            "AI career guidance",
            "Smart networking recommendations",
            "Growth tracking",
            "Industry comparison intelligence",
            "Opportunity discovery systems"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">Autonomous Professional </span><span className="text-zinc-950">Network</span></>}
          description="Cocpit is more than a professional networking platform — it is a fully autonomous AI-powered ecosystem. The platform actively performs tasks for users and businesses instead of simply providing tools. From applying for jobs and finding clients to recruiting candidates and marketing products, Cocpit continuously works in the background to create opportunities and accelerate growth."
          items={[
            "AI-powered job applications",
            "Automated lead generation",
            "Intelligent networking systems",
            "Client acquisition workflows",
            "Recruitment automation",
            "Professional visibility enhancement"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">Cocpit Business </span><span className="text-zinc-950">Engine</span></>}
          description="Cocpit Business Engine transforms how companies discover opportunities, acquire clients, and scale operations. Instead of relying on manual searching and filtering, Cocpit’s AI understands business objectives and autonomously manages the growth pipeline — from finding decision-makers to creating campaigns and optimizing outreach systems."
          items={[
            "Lead discovery systems",
            "AI-managed outreach campaigns",
            "Decision-maker identification",
            "Business opportunity intelligence",
            "Strategic partnership matching",
            "Co-founder and executive discovery"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">Enterprise Business </span><span className="text-zinc-950">Dashboard</span></>}
          description="Cocpit’s Business Dashboard gives companies a centralized operational command center where founders can manage employees, workflows, recruitment, marketing operations, and business activities through advanced role-based access systems. Organizations can create custom departments and assign highly specific permissions to employees without compromising administrative control."
          items={[
            "Multi-role access management",
            "Department-based permissions",
            "Recruitment & hiring tools",
            "Marketing workflow controls",
            "Operational monitoring",
            "Secure administrative infrastructure"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">AI Execution </span><span className="text-zinc-950">Layer</span></>}
          description="Most AI systems stop at recommendations. Cocpit takes action. The AI Execution Layer enables Cocpit to automate workflows, launch campaigns, manage outreach, organize operations, and execute strategic actions directly inside the platform."
          items={[
            "Workflow automation",
            "Campaign execution systems",
            "AI-powered task management",
            "Autonomous growth operations",
            "Real-time execution support",
            "Intelligent operational workflows"
          ]}
        />
        <Divider />

        <FeatureBlock 
          title={<><span className="text-black lg:text-black">Unified Intelligence </span><span className="text-zinc-950">Ecosystem</span></>}
          description="Cocpit combines professional networking, AI automation, recruitment, marketing, analytics, business management, and operational intelligence into one centralized ecosystem. Instead of switching between disconnected tools and platforms, users can manage everything through one AI-powered environment designed for the future of work and business."
          items={[
            "Centralized operations",
            "Unified networking ecosystem",
            "Scalable AI infrastructure",
            "Cross-functional automation",
            "Future-ready business systems",
            "Integrated growth ecosystem"
          ]}
        />
      </div>
    </main>
  );
};
