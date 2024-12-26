import React from 'react';

const ProjectSection: React.FC = (props) => {
    return (
        <div className="w-full mt-4 md:my-5 bg-red-90 flex gap-4 text-justify">
            <div className="w-[25%] hidden md:block">
                <p className="text-[1.7vw] font-serif mb-2 text-center font-semibold border-b border-amber-950">Decision Making Framework</p>
                <p className="text-[1.1vw]">{data.blog}</p>
            </div>

            <div className="w-full md:w-[75%]">
                <p className="text-[3.4vw] md:text-[2.4vw] font-bold font-serif text-center border-t border-b border-amber-950 tracking-wider">PROJECTS UNVEILED INNOVATION IN ACTION</p>
                <div className="flex gap-2 w-full">
                    <div className="w-[80%] text-[1.3vw] md:text-[1.1vw]">
                        {/* Treeved */}
                        <div className="flex gap-2 mt-1 md:mt-4">
                            <img
                                src={data.project.treeved.img}
                                alt="treeved"
                                className="h-[13vw] w-[20vw]  md:h-[10vw] md:w-[18.5vw]"
                            />
                            <div>
                                <p className="font-semibold">{data.project.treeved.title}</p>
                                <p>{data.project.treeved.desc}</p>
                            </div>
                        </div>
                        {/* Edloops */}
                        <div className="flex gap-2 mt-1 md:mt-4">
                            <img
                                src={data.project.edloops.img}
                                alt="edloops"
                                className="h-[13vw] w-[20vw] md:h-[10vw] md:w-[18.5vw]"
                            />
                            <div>
                                <p className="font-semibold">{data.project.edloops.title}</p>
                                <p>{data.project.edloops.desc}</p>
                            </div>
                        </div>

                        <p className="font-semibold mt-1 md:mt-4">{data.project.faceRecognition.title}</p>
                        <p>{data.project.faceRecognition.desc}</p>

                    </div>
                    <div className="w-[35%] md:w-[48%] h-full md:px-4 text-[1.3vw] md:text-[1.1vw] mt-1 md:mt-4">
                        {/* Wejournal */}
                        <img
                            src={data.project.wejournal.img}
                            alt="wejournal"
                            className="h-[12vw] w-full"
                        />
                        <p className="font-semibold">{data.project.wejournal.title}</p>
                        <p>{data.project.wejournal.desc}</p>

                        <p className="font-semibold mt-1">{data.project.recruto.title}</p>
                        <p>{data.project.recruto.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;

const data = {
    blog: "I adopted this from the book Eat that Frog, and it really helps in making yourself more productive and driven my outcomes. I call it the Plan in Advance strategy. Create 3 lists: Monthly, Weekly, and Daily for tasks which you must or have to do. You can have different lists for different Purposes and Projects. Always write them in Advance, as the 6-P says, Proper Prior planning Prevents Poor Performance. When you make your list night before, your subconscious mind will work on your list all night long while you sleep. Often you will wake up with great ideas and insights. Always work from list, if something comes up, add it to the list before you do it. You must be crystal clear about your highest-value activities before you begin work.",
    project: {
        treeved: {
            title: "TreeVed",
            desc: "Created a platform to curate, discover and share links in form of Lists, Posts and save in Private Diary. Techstack consisted of HTML, Tailwind CSS, TypeScript, Next JS, Redux",
            img: "treeved.png"
        },
        edloops: {
            title: "Edloops",
            desc: "AI powered Learning platform with features like Course & Roadmap Generation, Quiz, and Realtime learning feedback. Techstack used - TypeScript, NextJS, MongoDB, Prisma, Next-Auth, Redux.",
            img: "edloops.png"
        },
        wejournal: {
            title: "WeJournal",
            desc: "Experience paired journaling with friends, family, or loved ones. Techstack consisted of Typescript, NextJS, Firebase",
            techstack: "",
            img: "wejournal.png"
        },
        recruto: {
            title: "Recruto",
            desc: "Used Selenium and Celery to scrape data from other recruitment platform. Cached the API response using a Redis database, which reducing response time by 92.5%. Techstack consisted of TypeScript, Python, Next JS, Django Rest Framework, Redis and Docker",
        },
        faceRecognition: {
            title: "Face Recognition Attendance System",
            desc: "A full attendance management system that uses CNN based face recognition to mark attendance. The system is capable of checking if the student is in the designated classroom or not.  Techstack consisted of Python, Flask, OpenCV, TensorFlow.",
        }
    }
}