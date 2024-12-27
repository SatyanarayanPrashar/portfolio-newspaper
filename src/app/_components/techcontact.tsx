"use client"

import { useState } from 'react';
import { FaReact } from 'react-icons/fa6';
import { IoLogoSass } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandCpp, TbBrandJavascript, TbBrandTypescript, TbBrandPython, TbBrandDjango, TbBrandFlutter, TbBrandDocker, TbBrandAws } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cn } from '../lib/utils';

interface TechContantSectionProps {
    classname?: string;
    gridclass?: string;
}

const TechContantSection: React.FC<TechContantSectionProps> = ({ classname, gridclass }) => {
    const [email, setEmail] = useState<string>('');
    const notify = (message: string) => toast(message);

    const handleConnect = async () => {
        if (!email) {
            alert('Please enter an email address!');
            return;
        }

        try {
            const response = await fetch('/api/emailhandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                notify("Thanks for reaching out! I'll get back to you soon.");
            } else {
                notify("Something is broken :( reach me at satyabuilds@gmail.com");
            }
        } catch (error) {
            console.error('Error:', error);
            notify('An error occurred while sending the email.');
        }
    };

    return (
        <div className={cn("w-[30%] px-3 flex-col text-justify text-[1.3vw] md:text-[1.1vw] items-center", classname)}>
            <p className="text-[1.7vw] font-serif text-center font-semibold border-b border-amber-950">
                TECH BEHIND THE CODE
            </p>
            <div className={cn("grid grid-cols-4 text-[2.8vw] lg:text-[4vw] my-4 gap-y-2 lg:gap-y-4 w-full text-amber-950", gridclass)} >
                <TbBrandCpp />
                <TbBrandJavascript />
                <TbBrandTypescript />
                <TbBrandPython />
                <FaReact />
                <SiNextdotjs />
                <RiTailwindCssFill />
                <IoLogoSass />
                <TbBrandDjango />
                <TbBrandFlutter />
                <TbBrandDocker />
                <TbBrandAws />
            </div>
            <div className={cn("flex flex-col gap-2 border border-amber-950 w-full text-[1.3vw] md:text-[1.1vw] p-[0.7vw]", gridclass !== null && "mb-2")}>
                <p>
                    Have something I can build for you? <br /> Drop your email and I will reach
                    out to you.
                </p>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border border-amber-950/40 py-1 px-3 text-amber-950 focus:outline-none"
                />
                <button
                    className="bg-amber-950 py-1 px-3 text-white w-[40%] text-[1.3vw] md:text-[1.1vw]"
                    onClick={handleConnect}
                >
                    Connect
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default TechContantSection;