"use client"

import { useState } from 'react';
import { FaReact } from 'react-icons/fa6';
import { IoLogoSass } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNextdotjs } from 'react-icons/si';
import { TbBrandCpp, TbBrandJavascript, TbBrandTypescript, TbBrandPython, TbBrandDjango, TbBrandFlutter, TbBrandDocker, TbBrandAws } from 'react-icons/tb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TechContantSection from './techcontact';

const HeroComponent: React.FC = () => {
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
        <div className="flex flex-col md:flex-row w-full gap-2">
            <div className="flex flex-col w-full md:w-[80%]">
                <p className="text-[3.8vw] md:text-[2.7vw] font-bold font-serif">
                    BANGALORE&apos;S MOST WANTED DEVELOPER
                </p>
                <div className="h-[30vw] w-full flex gap-3">
                    <img src="hero.png" alt="Hero" className="h-[30vw] w-[30vw]" />
                    <div className="text-justify text-[1.3vw] md:text-[1.1vw]">
                        <p>{hero.p1}</p>
                        <p className="mt-2">{hero.p2}</p>
                        <p className="mt-2">{hero.p3}</p>
                        <p className="mt-2">{hero.p4}</p>
                    </div>
                </div>
            </div>
            <TechContantSection classname='hidden md:flex'/>
        </div>
    );
};

export default HeroComponent;

const hero = {
    p1: "Amid the buzz of Bangalore's vibrant tech scene, Satyanarayan Prashar emerges as a dedicated and curious software developer with a passion for crafting meaningful digital experiences. With a foundation in Engineering and a flair for blending design and functionality, Satyanarayan's work has begun to quietly resonate in the industry.",
    p2: "Since childhood, Satyanarayan had an innate love for art—a quality that seamlessly translates into his creations. College may have been about engineering, but his true attendance was at early-stage startups, building applications, websites, and even managing tasks and teams with precision.",
    p3: "Not just a developer but a lifelong learner at heart, he believes in the power of technology to transform ideas into impactful solutions. From designing client-facing websites to developing AI-powered learning platforms, his work consistently reflects a thoughtful approach to solving real-world challenges.",
    p4: "Satyanarayan's versatility and keen attention to detail rightfully earn him the title of the Most Wanted Developer in town."
}
