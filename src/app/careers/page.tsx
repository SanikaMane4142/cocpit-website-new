"use client";
import React, { useState } from 'react';

const ApplicationModal = ({ title, onClose }: { title: string, onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    const form = new FormData();
    form.append('role', title);
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    if (resume) {
      form.append('resume', resume);
    }

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to submit application');

      setStatus('success');
      setFeedback(data.message || 'Application submitted successfully!');
    } catch (err: any) {
      setStatus('error');
      setFeedback(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="w-full max-w-[448px] p-5 md:p-7 bg-[#1c1c1c] rounded-xl border border-gray-500 flex flex-col justify-center items-center gap-2.5 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col justify-start items-start gap-6">

          {/* Header */}
          <div className="w-full inline-flex justify-between items-center">
            <div className="justify-center text-white text-2xl font-medium leading-8">Apply for {title}</div>
            <button onClick={onClose} className="w-6 h-6 flex justify-center items-center hover:opacity-70 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-start items-start gap-4">

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <label className="text-white text-sm font-normal leading-4">Full Name*</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full h-12 p-3 bg-transparent rounded-xl border border-gray-500 text-white placeholder:text-gray-500 text-sm font-normal focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <label className="text-white text-sm font-normal leading-4">Email Address*</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full h-12 p-3 bg-transparent rounded-xl border border-gray-500 text-white placeholder:text-gray-500 text-sm font-normal focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <label className="text-white text-sm font-normal leading-4">Message (Optional)</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Why do you want to join ?"
                className="w-full h-24 p-3 bg-transparent rounded-xl border border-gray-500 text-white placeholder:text-gray-500 text-sm font-normal resize-none focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-2">
              <label className="text-white text-sm font-normal leading-4">Resume Upload*</label>
              <div className="relative w-full h-12 px-3 py-3 rounded-xl border border-dashed border-gray-500 flex justify-center items-center cursor-pointer hover:border-indigo-500 hover:bg-white/5 transition-colors overflow-hidden">
                <input 
                  type="file" 
                  required 
                  accept=".pdf,.doc,.docx" 
                  onChange={(e) => setResume(e.target.files?.[0] || null)} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-gray-500 text-sm font-normal">
                  {resume ? resume.name : 'Select PDF/DOC'}
                </div>
              </div>
            </div>

            {feedback && (
              <div className={`w-full text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {feedback}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="w-full mt-2 h-12 px-3 py-3 bg-[#818cf8] hover:bg-indigo-400 disabled:bg-gray-600 transition-colors rounded-xl flex justify-center items-center"
            >
              <span className="text-white text-base font-normal leading-5">
                {status === 'loading' ? 'Submitting...' : status === 'success' ? 'Submitted!' : 'Submit Application'}
              </span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

const JobCard = ({ title, details, description, onApply }: { title: string, details: string, description: string, onApply: (title: string) => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Clickable Card Header */}
      <div
        className="w-full lg:w-[810px] h-[125px] px-[25px] py-[20px] rounded-[12px] border border-[#E0E7FF] flex flex-col justify-center items-start gap-2.5 hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="text-black text-base lg:text-xl font-medium font-sans leading-5 lg:leading-6">{title}</div>
        <div className="text-[#606060] text-xs lg:text-base font-normal font-sans leading-4 lg:leading-5">{details}</div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="w-full lg:w-[810px] px-[25px] flex flex-col justify-center items-start gap-8 cursor-default">
          <div className="self-stretch text-black text-xs lg:text-base font-normal font-sans leading-4 lg:leading-5 whitespace-pre-wrap">
            {description}
          </div>
          <button
            onClick={() => onApply(title)}
            className="w-44 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 inline-flex justify-center items-center gap-2.5"
          >
            <span className="text-center text-white text-base font-normal font-sans leading-6">Apply Now</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApplyClick = (title: string) => {
    setSelectedJob(title);
    setIsModalOpen(true);
  };

  const defaultDescription = `Role Overview:
We’re growing fast and looking for creative, driven, and passionate interns to join our Marketing Team.

Open Roles:
• Content Strategist Intern
• Content Writer / Creator Intern
• Social Media Marketing Intern

What You’ll Do:
• Create engaging content for social media, campaigns, and branding
• Develop creative ideas and storytelling strategies
• Understand audience behavior and build meaningful engagement
• Collaborate with the team to grow Cocpit’s digital presence
• Take ownership of projects and contribute fresh ideas

What We’re Looking For:
• Creative thinkers with strong communication skills
• Passion for content, branding, and digital marketing
• Self-driven individuals who enjoy building from scratch
• Basic understanding of social media trends and audience engagement`;

  const jobs = [
    { title: "Marketing Intern", details: "Kolhapur, Maharashtra (On-site) · Internship", description: defaultDescription },
    { title: "UI/UX Design Intern", details: "Kolhapur, Maharashtra (On-site) · Internship", description: defaultDescription.replace(/Marketing/g, "Design") },
    { title: "Manual Testing Intern", details: "Kolhapur, Maharashtra (On-site) · Internship", description: defaultDescription.replace(/Marketing/g, "Testing") },
    { title: "AI / ML Developer", details: "Kolhapur, Maharashtra (On-site) · Internship", description: defaultDescription.replace(/Marketing/g, "AI/ML") },
    { title: "HR Manager", details: "Kolhapur, Maharashtra (On-site) · Internship", description: defaultDescription.replace(/Marketing/g, "HR") },
  ];

  return (
    <>
      <main className="pt-40 pb-32 relative flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,#F2F5FF_0%,#FFFFFF_100%)]">

        {/* Header Section */}
        <div className="w-full px-6 flex flex-col justify-start items-center gap-2 mb-8 lg:mb-20 mt-10 lg:mt-0">
          <h1 className="self-stretch text-center justify-center text-black text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">
            Join The Execution Layer
          </h1>
          <div className="self-stretch text-center justify-center text-zinc-600 text-sm lg:text-2xl font-normal font-sans leading-5 lg:leading-8">
            Help build the intelligent infrastructure powering Cocpit.
          </div>
        </div>

        {/* Jobs List Section */}
        <div className="w-full px-6 flex flex-col justify-center items-center gap-4 lg:gap-6">
          {jobs.map((job, idx) => (
            <JobCard
              key={idx}
              title={job.title}
              details={job.details}
              description={job.description}
              onApply={handleApplyClick}
            />
          ))}
        </div>

      </main>

      {/* Application Modal */}
      {isModalOpen && (
        <ApplicationModal title={selectedJob} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};
