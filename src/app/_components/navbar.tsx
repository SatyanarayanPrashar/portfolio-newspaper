"use client"

import { useEffect, useState } from "react";
import React from 'react';

const Navbar: React.FC = () => {
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
        <nav className="mx-[5vw] text-amber-950">
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
        </nav>
    );
};

export default Navbar;