import { useState } from 'react';

const Testimonial = () => (
    <section className="pt-[151px] lg:pt-40 pb-0 lg:pb-20 relative flex justify-center items-center px-6 lg:px-0">
        <div className="w-full max-w-[1171px] lg:h-96 bg-indigo-50/50 rounded-2xl px-16 py-12 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-[10px]">

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full justify-between items-center">
                <div className="flex flex-col justify-center items-center relative">
                    <img className="w-44 h-56 rounded-xl object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80" alt="John Smith" />
                    <div className="w-44 mt-3 flex flex-col justify-center items-center">
                        <div className="text-black text-base font-semibold leading-5 text-center">John Smith</div>
                        <div className="text-indigo-500 text-base font-semibold leading-5 text-center">Founder & CEO</div>
                    </div>
                </div>
                <div className="w-[593px] h-40">
                    <span className="text-zinc-600 text-2xl font-medium leading-8">I tell everyone I know to download Raycast. </span>
                    <span className="text-black text-2xl font-medium leading-8">It’s truly become the centerpiece of everything I do on my computer</span>
                    <span className="text-zinc-600 text-2xl font-medium leading-8"> and the #1 way I stay in flow.</span>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="flex lg:hidden w-64 flex-col justify-start items-center gap-4">
                <img className="w-28 h-32 rounded-xl object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80" alt="John Smith" />
                <div className="h-12 inline-flex justify-center items-center gap-4">
                    <div className="w-32 h-16 inline-flex flex-col justify-center items-center">
                        <div className="text-center text-black text-base font-medium font-['Poppins'] leading-5">John Smith </div>
                        <div className="text-center text-zinc-600 text-sm font-normal font-['Poppins'] leading-5">Founder & CEO</div>
                    </div>
                </div>
                <div className="text-center">
                    <span className="text-zinc-600 text-xs font-medium font-['Poppins'] leading-[130%]">I tell everyone I know to download Raycast. </span>
                    <span className="text-black text-xs font-medium font-['Poppins'] leading-[130%]">It’s truly become the centerpiece of everything I do on my computer</span>
                    <span className="text-zinc-600 text-xs font-medium font-['Poppins'] leading-[130%]"> and the #1 way I stay in flow.</span>
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
                <div className="text-gray-400 text-sm font-normal font-['Poppins'] leading-[130%] align-middle whitespace-nowrap">{member.role}</div>
            </div>
        </div>
    );

    const [showAllMobile, setShowAllMobile] = useState(false);
    const mobileMembersToShow = showAllMobile ? allMembers : teamRows[1];

    return (
        <section className="pt-[40px] pb-10 lg:py-24 relative flex flex-col justify-center items-center gap-2.5 px-6 lg:px-0">

            {/* Header */}
            <div className="w-full max-w-[1440px] flex flex-col justify-center items-center gap-2 lg:gap-10">
                <div className="text-center">
                    <span className="text-black text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">Meet the Team Behind </span>
                    <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">Cocpit</span>
                </div>
                <div className="text-center text-gray-500 text-sm lg:text-lg font-normal font-['Poppins'] leading-5 lg:leading-6 max-w-sm lg:max-w-none">
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
                                <div className="text-black text-base font-medium font-['Poppins'] leading-5">{member.name}</div>
                                <div className="text-gray-400 text-sm font-normal font-['Poppins'] leading-[130%] align-middle">{member.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {!showAllMobile && (
                    <div
                        onClick={() => setShowAllMobile(true)}
                        className="w-44 h-10 px-4 py-2 bg-indigo-500 rounded-xl outline outline-1 outline-offset-[-1px] outline-indigo-500 flex justify-center items-center gap-2.5 cursor-pointer hover:bg-indigo-600 transition-colors mt-2"
                    >
                        <span className="text-center text-white text-base font-normal font-['Poppins'] leading-6">SEE ALL</span>
                    </div>
                )}
            </div>

        </section>
    );
};

const AboutInfo = () => (
    <section className="py-10 lg:py-24 relative flex flex-col justify-center items-center gap-10 px-6 lg:px-0">

        <div className="w-full max-w-[1440px] lg:px-32 flex flex-col justify-center items-center gap-2 lg:gap-4">
            <div className="text-center">
                <span className="text-black text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">About </span>
                <span className="text-indigo-500 text-2xl lg:text-4xl font-medium font-['Poppins'] leading-8 lg:leading-10">Cocpit</span>
            </div>
            <div className="w-full max-w-sm lg:max-w-[822px] text-center text-zinc-600 text-sm lg:text-lg font-normal font-['Poppins'] leading-5 lg:leading-6">
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
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>

            <div className="w-[1000px] h-px bg-indigo-100"></div>

            <div className="w-full max-w-[1000px] flex justify-center items-start gap-48">
                <div className="w-72">
                    <span className="text-black text-3xl font-medium leading-10">What We </span>
                    <span className="text-indigo-500 text-3xl font-medium leading-10">Do</span>
                </div>
                <div className="flex-1 text-zinc-600 text-base font-normal leading-5">
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>

            <div className="w-[1000px] h-px bg-indigo-100"></div>

            <div className="w-full max-w-[1000px] flex justify-center items-start gap-48">
                <div className="w-72">
                    <span className="text-neutral-900 text-3xl font-medium leading-10">THE AI </span>
                    <span className="text-indigo-500 text-3xl font-medium leading-10">Difference</span>
                </div>
                <div className="flex-1 text-zinc-600 text-base font-normal leading-5">
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex lg:hidden w-full max-w-xs flex-col justify-center items-center gap-6 mt-4">
            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="text-center">
                    <span className="text-black text-xl font-medium font-['Poppins'] leading-6">Our </span>
                    <span className="text-indigo-500 text-xl font-medium font-['Poppins'] leading-6">Vision</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-['Poppins'] leading-4">
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>

            <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-indigo-100"></div>

            <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="text-center">
                    <span className="text-black text-xl font-medium font-['Poppins'] leading-6">What We </span>
                    <span className="text-indigo-500 text-xl font-medium font-['Poppins'] leading-6">Do</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-['Poppins'] leading-4">
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>

            <div className="w-64 h-0 outline outline-1 outline-offset-[-0.50px] outline-indigo-100"></div>

            <div className="w-full flex flex-col justify-center items-center gap-1.5">
                <div className="text-center">
                    <span className="text-neutral-900 text-xl font-medium font-['Poppins'] leading-6">THE AI</span>
                    <span className="text-indigo-500 text-xl font-medium font-['Poppins'] leading-6"> Difference</span>
                </div>
                <div className="w-full text-center text-zinc-600 text-xs font-normal font-['Poppins'] leading-4">
                    Everything you do on Cocpit is powered by artificial intelligence. From crafting the perfect profile and discovering relevant connections to matching opportunities and facilitating meaningful conversations – our AI works behind the scenes to make your professional journey smoother, smarter, and more successful.
                </div>
            </div>
        </div>

    </section>
);

export const About = () => {
    return (
        <main className="relative overflow-hidden min-h-screen">
            <Testimonial />
            <FullTeamSection />
            <AboutInfo />
        </main>
    );
};
