"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();

    // Use the correct type for options
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long", // "long", "short", or "narrow"
      year: "numeric", // "2-digit" or "numeric"
      month: "long",   // "long", "short", or "narrow"
      day: "numeric",  // "2-digit" or "numeric"
    };

    // Format the date using toLocaleDateString with the correct options
    const formattedDate = today.toLocaleDateString("en-US", options);

    // Add suffix for the day
    const day = today.getDate();
    const daySuffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";

    setCurrentDate(formattedDate.replace(`${day}`, `${day}${daySuffix}`));
  }, []);

  return (
    <div className="h-full flex flex-col items-center mx-[5vw] text-amber-950">
      <div className="h-[1px] w-full bg-amber-950 mb-1"></div>
      <div className="h-1 w-full bg-amber-950"></div>
      <div className="py-1 text-amber-950 mt-2 w-full flex  items-center border-b border-amber-950 text-[1.4vw] md:text-[1.2vw]">
        <div className="flex gap-4 md:gap-6">
          <p>About</p>
          <p>Projects</p>
          <p>Blogs</p>
          <p>Contact</p>
        </div>
        <p className="font-serif ml-auto">{currentDate}</p>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="flex flex-col w-full md:w-[80%]">
          <p className="text-[4.3vw] md:text-[2.75vw] font-bold font-serif">BANGALORE'S MOST WANTED DEVELOPER</p>
          <div className="h-[30vw] w-full flex gap-3">
            <img
              src="hero.png"
              alt="Hero"
              className="h-[30vw] w-[30vw]"
            />
            <div className="text-justify text-[1.3vw] md:text-[1.1vw]">
              <p>Amid the buzz of Bangalore{"’"}s vibrant tech scene, Satyanarayan Prashar emerges as a dedicated and curious software developer with a passion for crafting meaningful digital experiences. With a foundation in Engineering and a flair for blending design and functionality, Satyanarayan{"’"}s work has begun to quietly resonate in the industry.</p>
              <p className="mt-2">Since childhood, Satyanarayan had an innate love for art—a quality that seamlessly translates into his creations. College may have been about engineering, but his true attendance was at early-stage startups, building applications, websites, and even managing tasks and teams with precision.</p>
              <p className="mt-2">Not just a developer but a lifelong learner at heart, he believes in the power of technology to transform ideas into impactful solutions. From designing client-facing websites to developing AI-powered learning platforms, his work consistently reflects a thoughtful approach to solving real-world challenges.</p>
              <p className="mt-2">Satyanarayan{"’"}s versatility and keen attention to detail rightfully earn him the title of the Most Wanted Developer in town.</p>
            </div>
          </div>
        </div>
        <div className="w-[30%] px-3 hidden md:block text-justify text-[1.3vw] md:text-[1.1vw]">
          <p className="text-[25px] font-serif text-center font-semibold text-neutral-800">SATYA'S LATEST FEAT</p>
          <img
              src="edloops.png"
              alt="edloops"
              className="h-[14vw] w-[30vw] grayscale"
          />
          <p><span className="text-[1.3vw] font-semibold">Edloops: An AI-Powered Learning Platform</span> designed to enhance online learning experiences. The project focuses on delivering personalized content to users, simplifying the learning process with tailored resources and interactive tools. Built with a focus on usability and functionality, Edloops aims to bridge gaps in traditional learning methods by leveraging advanced technology.</p>
          <p className="mt-2">Tech Stack: TypeScript, NextJS, Postgres, Prisma</p>
        </div>
      </div>
      
    </div>
  );
}
