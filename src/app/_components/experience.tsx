import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="w-full my-2 md:my-5 bg-red-90 flex flex-col gap-2 md:gap-4 text-justify" >
            <div className="text-center text-[3.4vw] md:text-[2.4vw] font-bold font-serif border-t border-b border-amber-950 tracking-wider">Stories from the Field</div>
            <div className="flex gap-4 w-full">
                <div className="flex-1">
                    <div className='text-[1.7vw] font-serif font-semibold'>{expdata.monter.title}</div>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] font-semibold'>{expdata.monter.role}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] underline'>{expdata.monter.period}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw]'>{expdata.monter.desc}</p>
                </div>
                <div className="flex-1">
                    <div className='text-[1.7vw] font-serif font-semibold'>{expdata.treeved.title}</div>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] font-semibold'>{expdata.treeved.role}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] underline'>{expdata.treeved.period}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw]'>{expdata.treeved.desc}</p>
                </div>
                <div className="flex-1">
                    <div className='text-[1.7vw] font-serif font-semibold'>{expdata.fise.title}</div>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] font-semibold'>{expdata.fise.role}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw] underline'>{expdata.fise.period}</p>
                    <p className='text-justify text-[1.3vw] md:text-[1.1vw]'>{expdata.fise.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;

const expdata = {
    monter: {
        title: "Monter",
        period: "May 2024 - July 2024",
        role: "Frontend & UI/UX Developer Intern",
        desc: "Built the client facing website using NextJS, enabling investors and companies to share a common platform to expand there portfolio and connection respectively. Optimised the cross-browser compatibility to support screens of all sizes, and integrated APIs with the frontend. Conducted comprehensive user and competitor analysis to develop seamless UX, and created UI wireframes in Figma utilizing frames and auto-layouts.",
    },
    treeved: {
        title: "TreeVed",
        period: "Jan 23-Nov 23",
        role: "Product Management Intern",
        desc: "Worked with a team, to build a platform, enabling people to discover, share and store valuable links, streamlining their internet browsing experience. Worked with NextJS, Django, AWS, and Flutter. Prepared strategy, and road-map for the product based on market research, resources available and vision & mission of the company. Documented and streamlined decision-making process, keeping user and other stakeholders at the forefront.",
    },
    treeved_flutter: {
        title: "TreeVed",
        period: "Oct 22-Dec 22",
        role: "Flutter Developer Intern",
        desc: "Worked on core product to ship new features and improve existing one. Consistently debugged and fixed the existing code base",
    },
    fise : {
        title: "Fise Technologies",
        period: "July 2022 - Oct 2022",
        role: "Flutter Developer Intern",
        desc: "Developed a cross platform application using Flutter Frame Work, enabling retail investors to invest in equity and commodities like digital gold while saving in day to day life. Improved loading time by 50% by caching images on client devices, supported debugging and testing through out the development process. Integrated APIs and implemented push notifications. Added Rivedpod state management to the application.",
    },
}