"use client";
import { useState, useEffect } from 'react';

const Testimonial = () => (
    <section className="pt-[151px] lg:pt-40 pb-0 lg:pb-20 relative flex justify-center items-center px-6 lg:px-0">
        <div className="w-full max-w-[1171px] lg:h-96  rounded-2xl px-16 py-12 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[10px]">

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full justify-between items-center">
                <div className="flex flex-col justify-center items-center relative">
                    <img className="w-44 h-56 rounded-xl object-cover" src="/yash oswal.png" alt="Yash Oswal" />
                    <div className="w-44 mt-3 flex flex-col justify-center items-center">
                        <div className="text-black text-base font-semibold leading-5 text-center">Yash Oswal</div>
                        <div className="text-indigo-500 text-base font-semibold leading-5 text-center">Founder & CEO</div>
                    </div>
                </div>
                <div className="w-[593px] h-40">
                    <span className="text-zinc-600 text-2xl font-medium leading-8">The greatest luxury in business isn't money. It's time. </span>
                    <span className="text-black text-2xl font-medium leading-8">Cocpit gives you both.</span>
                    <span className="text-zinc-600 text-2xl font-medium leading-8"> One platform. Infinite possibilities.</span>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden w-64 flex-col justify-start items-center gap-4">
                <img className="w-28 h-32 rounded-xl object-cover" src="/yash oswal.png" alt="Yash Oswal" />
                <div className="h-12 inline-flex justify-center items-center gap-4">
                    <div className="w-32 h-16 inline-flex flex-col justify-center items-center">
                        <div className="text-center text-black text-base font-medium font-sans leading-5">Yash Oswal </div>
                        <div className="text-center text-zinc-600 text-sm font-normal font-sans leading-5">Founder & CEO</div>
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-zinc-600 text-xs font-medium font-sans leading-[130%]">The greatest luxury in business isn't money. It's time. </span>
                    <span className="text-black text-xs font-medium font-sans leading-[130%]">Cocpit gives you both.</span>
                    <span className="text-zinc-600 text-xs font-medium font-sans leading-[130%]"> One platform. Infinite possibilities.</span>
                </div>
            </div>

        </div>
    </section>
);

const teamRows = [
    [
        { name: "Yash Karvekar", role: "Project Manager", img: "/yash.svg" }
    ],
    [
        { name: "Swaroop Manade", role: "Full-Stack Developer", img: "/swaroop.svg" },
        { name: "Harshada Khot", role: "Full-Stack Developer", img: "/harshada.svg" },
        { name: "Shubham Patil", role: "Full-Stack Developer", img: "/SHUBHAM_PATIL.svg" },
        { name: "Mahesh Khamkar", role: "Flutter Developer", img: "/mahesh.svg" }
    ],
    [
        { name: "Sakshi Patil", role: "Flutter Developer", img: "/sakshi.svg" },
        { name: "Akshay Gandal", role: "IOS Developer", img: "/akshay.svg" },
        { name: "Nikhil Shinde", role: "IOS Developer", img: "/nikhil.svg" },
        { name: "Harshad Pawar", role: "AI Developer", img: "/harshad.svg" }
    ],
    [
        { name: "Sanika Mane", role: "AI Developer", img: "/sanika.svg" },
        { name: "Priyansh Devada", role: "UI/UX Designer", img: "/priyansh.svg" }
    ]
];

const allMembers = teamRows.flat();

const FullTeamSection = () => {

    const MemberCard = ({ member }: { member: any }) => (
        <div className="w-[284.75px] h-[90px] px-6 rounded-xl bg-transparent shadow-[0px_0px_20px_0px_rgba(0,0,0,0.02)] outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-start items-center gap-4">
            <img className="w-14 h-14 rounded-full object-cover" src={member.img} alt={member.name} />
            <div className="flex flex-col justify-center items-start">
                <div className="text-black text-base font-medium leading-5 whitespace-nowrap">{member.name}</div>
                <div className="text-gray-400 text-sm font-normal font-sans leading-[130%] align-middle whitespace-nowrap">{member.role}</div>
            </div>
        </div>
    );

    const SHOW_TEAM = false; // Toggle to true to show the team grid again
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMounted, setIsMounted] = useState(false);

    const [showAllMobile, setShowAllMobile] = useState(false);
    const mobileMembersToShow = showAllMobile ? allMembers : teamRows[1];

    useEffect(() => {
        setIsMounted(true);
        if (SHOW_TEAM) return;

        const targetDate = new Date('2026-06-28T00:00:00').getTime();
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
    }, [SHOW_TEAM]);

    if (!SHOW_TEAM) {
        if (!isMounted) return null; // Avoid hydration mismatch

        return (
            <section className="py-16 lg:py-24 relative flex-col justify-center items-center gap-2.5 bg-white w-full overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-32 flex flex-col justify-center items-center gap-8 lg:gap-12">

                    {/* Header */}
                    <div className="flex flex-col justify-center items-center gap-3 relative z-10 w-full lg:w-[1184px]">
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-2">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span className="text-indigo-600 text-xs font-semibold tracking-widest uppercase">Classified</span>
                        </div>
                        <div className="text-center font-sans font-medium text-3xl lg:text-4xl leading-[130%] text-black w-full">
                            Unmasking The <span className="text-indigo-500">Cocpit Team</span>
                        </div>
                        <div className="text-center font-sans font-normal text-base lg:text-lg leading-[130%] text-[#6B7280] w-full max-w-2xl">
                            We're pulling back the curtain to reveal the incredible minds building the future of AI-powered networking. The official team reveal happens on June 28th!
                        </div>
                    </div>

                    {/* Countdown Block */}
                    <div className="w-full max-w-3xl bg-indigo-50/50 backdrop-blur-sm rounded-[24px] p-6 lg:p-12 shadow-[0px_0px_50px_0px_rgba(99,102,241,0.1)] border border-indigo-100 flex flex-col items-center gap-8 relative overflow-hidden">

                        {/* Background embellishments */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        <div className="flex justify-center items-center gap-2 sm:gap-4 lg:gap-8 w-full z-10">

                            <div className="flex flex-col items-center">
                                <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] bg-white rounded-2xl shadow-sm outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center text-3xl lg:text-6xl font-semibold text-indigo-600 font-sans tracking-tight">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </div>
                                <div className="mt-3 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">Days</div>
                            </div>

                            <div className="text-2xl lg:text-5xl font-medium text-indigo-200 pb-8">:</div>

                            <div className="flex flex-col items-center">
                                <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] bg-white rounded-2xl shadow-sm outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center text-3xl lg:text-6xl font-semibold text-indigo-600 font-sans tracking-tight">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </div>
                                <div className="mt-3 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">Hours</div>
                            </div>

                            <div className="text-2xl lg:text-5xl font-medium text-indigo-200 pb-8">:</div>

                            <div className="flex flex-col items-center">
                                <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] bg-white rounded-2xl shadow-sm outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center text-3xl lg:text-6xl font-semibold text-indigo-600 font-sans tracking-tight">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </div>
                                <div className="mt-3 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">Mins</div>
                            </div>

                            <div className="hidden sm:block text-2xl lg:text-5xl font-medium text-indigo-200 pb-8">:</div>

                            <div className="hidden sm:flex flex-col items-center">
                                <div className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px] bg-white rounded-2xl shadow-sm outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-center items-center text-3xl lg:text-6xl font-semibold text-indigo-600 font-sans tracking-tight">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className="mt-3 text-[10px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-[0.2em]">Secs</div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="pt-[40px] pb-10 lg:py-24 relative flex flex-col justify-center items-center gap-2.5 px-6 lg:px-0">

            {/* Header */}
            <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-2 lg:gap-10">
                <h2 className="text-center">
                    <span className="text-black text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">Meet the Team Behind </span>
                    <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">Cocpit</span>
                </h2>
                <div className="text-center text-gray-500 text-sm lg:text-lg font-normal font-sans leading-5 lg:leading-6 max-w-sm lg:max-w-none">
                    Building the future of AI-powered networking and professional growth.
                </div>
            </div>

            {/* Desktop Full Grid */}
            <div className="hidden lg:flex w-[1440px] px-32 flex-col gap-10 mt-10">
                {teamRows.map((row, rowIndex) => (
                    <div key={rowIndex} className={`w-full flex justify-center ${rowIndex === 0 ? 'items-center' : 'gap-4'}`}>
                        {rowIndex === 0 ? (
                            <div className="w-1/4">
                                <MemberCard member={row[0]} />
                            </div>
                        ) : (
                            row.map(m => <MemberCard key={m.name} member={m} />)
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Snippet Grid */}
            <div className="flex lg:hidden w-full max-w-sm flex-col justify-start items-center gap-4 mt-8">
                <div className="w-full flex flex-col justify-center items-start gap-4">
                    {mobileMembersToShow.map(member => (
                        <div key={member.name} className="self-stretch w-full h-[90px] px-6 bg-transparent rounded-xl shadow-[0px_0px_100px_0px_rgba(255,255,255,1.00)] outline outline-1 outline-offset-[-1px] outline-indigo-100 flex justify-start items-center gap-4">
                            <img className="size-14 rounded-full object-cover" src={member.img} alt={member.name} />
                            <div className="flex flex-col justify-center items-start">
                                <div className="text-black text-base font-medium font-sans leading-5">{member.name}</div>
                                <div className="text-gray-400 text-sm font-normal font-sans leading-[130%] align-middle">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAllMobile && (
                    <div
                        onClick={() => setShowAllMobile(true)}
                        className="w-44 h-10 px-4 py-2 bg-indigo-500 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-indigo-600 transition-colors mt-2"
                    >
                        <span className="text-center text-white text-base font-normal font-sans leading-6">SEE ALL</span>
                    </div>
                )}
            </div>

        </section>
    );
};

const AboutInfo = () => (
    <section className="py-10 lg:py-24 relative flex flex-col justify-center items-center gap-10 px-6 lg:px-0">

        <div className="w-full max-w-[1440px] lg:px-32 flex flex-col justify-center items-center gap-2 lg:gap-4">
            <h1 className="text-center">
                <span className="text-black text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">About </span>
                <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-sans leading-8 lg:leading-10">Cocpit</span>
            </h1>
            <div className="w-full max-w-sm lg:max-w-[822px] text-center text-zinc-600 text-sm lg:text-lg font-normal font-sans leading-5 lg:leading-6">
                Cocpit is the next-generation professional networking platform where students, professionals, businesses, and innovators connect, collaborate, and grow in the digital age.
            </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-[1440px] px-10 py-2.5 flex-col justify-center items-center gap-14 mt-10">
            <div className="w-full max-w-[1000px] flex justify-center items-start gap-48">
                <div className="w-72">
                    <span className="text-black text-3xl font-medium leading-10">Our </span>
                    <span className="text-indigo-500 text-3xl font-medium leading-10">Vision</span>
                </div>
                <div className="flex-1 text-zinc-600 text-base font-normal leading-5">
                    We believe the next generation of technology won't come from improving what already exists, it will come from inventing what doesn't. Cocpit is building the future through groundbreaking products that redefine how the world works, collaborates, and grows.
                </div>
            </div>

            <div className="w-[1000px] h-px bg-indigo-100"></div>

            <div className="w-full max-w-[1000px] flex justify-center items-start gap-48">
                <div className="w-72">
                    <span className="text-black text-3xl font-medium leading-10">What We </span>
                    <span className="text-indigo-500 text-3xl font-medium leading-10">Do</span>
                </div>
                <div className="flex-1 text-zinc-600 text-base font-normal leading-5">
                    The most powerful opportunities in the world are created when the right people meet at the right moment. Yet discovering those opportunities remains surprisingly difficult. We are building Cocpit to change that. By combining artificial intelligence with professional networking, we're creating a platform that doesn't just connect professionals it actively helps professionals unlock their next opportunity, scale and grow their business. We are building an AI that not only suggests, but executes all the tasks for you.
                </div>
            </div>

            <div className="w-[1000px] h-px bg-indigo-100"></div>

            <div className="w-full max-w-[1000px] flex justify-center items-start gap-48">
                <div className="w-72">
                    <span className="text-neutral-900 text-3xl font-medium leading-10">THE AI </span>
                    <span className="text-indigo-500 text-3xl font-medium leading-10">Difference</span>
                </div>
                <div className="flex-1 text-zinc-600 text-base font-normal leading-5">
                    Cocpit is an AI-powered professional platform that helps entrepreneurs, professionals, startups, and businesses discover opportunities, build meaningful networks, and take action faster. Unlike traditional business networking platforms that only provide information, Cocpit combines AI-driven business intelligence, workflow automation, strategic recommendations, and execution support to help users identify growth opportunities, analyze business performance, streamline operations, and accelerate career and business growth. Whether you're building a startup, expanding your professional network, scaling a business, or advancing your career, Cocpit acts as an intelligent AI partner that transforms insights into action. The future of professional networking isn't about having more tools—it's about having AI that helps you get things done.
                </div>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden w-full max-w-xs flex-col justify-center items-center gap-6 mt-4">
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="text-center">
                    <span className="text-black text-xl font-medium font-sans leading-6">Our </span>
                    <span className="text-indigo-500 text-xl font-medium font-sans leading-6">Vision</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-sans leading-4">
                    We believe the next generation of technology won't come from improving what already exists, it will come from inventing what doesn't. Cocpit is building the future through groundbreaking products that redefine how the world works, collaborates, and grows.
                </div>
            </div>

            <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-indigo-100"></div>

            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="text-center">
                    <span className="text-black text-xl font-medium font-sans leading-6">What We </span>
                    <span className="text-indigo-500 text-xl font-medium font-sans leading-6">Do</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-sans leading-4">
                    The most powerful opportunities in the world are created when the right people meet at the right moment. Yet discovering those opportunities remains surprisingly difficult. We are building Cocpit to change that. By combining artificial intelligence with professional networking, we're creating a platform that doesn't just connect professionals it actively helps professionals unlock their next opportunity, scale and grow their business. We are building an AI that not only suggests, but executes all the tasks for you.
                </div>
            </div>

            <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-indigo-100"></div>

            <div className="w-full flex flex-col justify-center items-center gap-1.5">
                <div className="text-center">
                    <span className="text-neutral-900 text-xl font-medium font-sans leading-6">THE AI</span>
                    <span className="text-indigo-500 text-xl font-medium font-sans leading-6"> Difference</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-sans leading-4">
                    Cocpit is an AI-powered professional platform that helps entrepreneurs, professionals, startups, and businesses discover opportunities, build meaningful networks, and take action faster. Unlike traditional business networking platforms that only provide information, Cocpit combines AI-driven business intelligence, workflow automation, strategic recommendations, and execution support to help users identify growth opportunities, analyze business performance, streamline operations, and accelerate career and business growth. Whether you're building a startup, expanding your professional network, scaling a business, or advancing your career, Cocpit acts as an intelligent AI partner that transforms insights into action. The future of professional networking isn't about having more tools—it's about having AI that helps you get things done.
                </div>
            </div>
        </div>

    </section>
);

export default function About() {
    return (
        <main className="relative overflow-hidden min-h-screen">
            <Testimonial />
            <FullTeamSection />
            <AboutInfo />
        </main>
    );
};
