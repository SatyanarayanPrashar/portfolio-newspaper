import React from 'react';
import { LuExternalLink } from 'react-icons/lu';

const ProjectSection: React.FC = () => {
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
                                className="h-[11vw] w-[20vw]  md:h-[10vw] md:w-[18.5vw] grayscale"
                            />
                            <div className=''>
                                <div className='flex gap-2 items-center'>
                                    <p className="font-semibold">{data.project.treeved.title}</p>
                                    <a href='https://treeved-s.vercel.app/profile/Satya' target='_blank' className=''>
                                        <LuExternalLink className='hover:text-blue-500 hover:text-[18px]'/>
                                    </a>
                                </div>
                                <p>{data.project.treeved.desc}</p>
                            </div>
                        </div>
                        {/* Edloops */}
                        <div className="flex gap-2 mt-1 md:mt-4">
                            <img
                                src={data.project.edloops.img}
                                alt="edloops"
                                className="h-[11vw] w-[20vw] md:h-[10vw] md:w-[18.5vw] grayscale"
                            />
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <p className="font-semibold">{data.project.edloops.title}</p>
                                    <a href='https://edloops.com/' target='_blank' className=''>
                                        <LuExternalLink className='hover:text-blue-500 hover:text-[18px]'/>
                                    </a>
                                </div>
                                <p>{data.project.edloops.desc}</p>
                            </div>
                        </div>
                        {/* Recruto */}
                        <div className="flex gap-2 mt-1 md:mt-4">
                            <img
                                src={data.project.recruto.img}
                                alt="Recruto"
                                className="h-[11vw] w-[20vw] md:h-[10vw] md:w-[18.5vw] grayscale"
                            />
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <p className="font-semibold">{data.project.recruto.title}</p>
                                    <a href='https://github.com/SatyanarayanPrashar/recuto_be' target='_blank' className=''>
                                        <LuExternalLink className='hover:text-blue-500 hover:text-[18px]'/>
                                    </a>
                                </div>
                                <p>{data.project.recruto.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[35%] md:w-[48%] h-full md:px-4 text-[1.3vw] md:text-[1.1vw] mt-1 md:mt-4">
                        <p className="font-semibold text-[1.3vw] underline">ML Projects</p>
                        <div className='flex gap-2 items-center'>
                            <p className="font-semibold">{data.project.faceRecognition.title}</p>
                            <a href='https://github.com/SatyanarayanPrashar/attendanceSystem' target='_blank' className=''>
                                <LuExternalLink className='hover:text-blue-500 hover:text-[18px]'/>
                            </a>
                        </div>
                        
                        <p>{data.project.faceRecognition.desc}</p>

                        <div className='flex gap-2 items-center mt-4'>
                            <p className="font-semibold">{data.project.research.title}</p>
                            <a href='https://github.com/SatyanarayanPrashar/research-paper-chatbot' target='_blank' className=''>
                                <LuExternalLink className='hover:text-blue-500 hover:text-[18px]'/>
                            </a>
                        </div>

                        
                        <p>{data.project.research.desc}</p>
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
            desc: "Used Selenium and Celery to scrape data from other recruitment platform. Cached the API response and most request pages using Redis database, which reducing response time of the next call by 92.5%.",
            img: "recruto.jpeg"
        },
        faceRecognition: {
            title: "Face Recognition Attendance System",
            desc: "A full attendance management system that uses CNN based face recognition to mark attendance. The system is capable of checking if the student is in the designated classroom or not.  Techstack consisted of Python, Flask, OpenCV, TensorFlow.",
        },
        research : {
            title: "Research Paper Chatbot",
            desc: "Built a chat bot to answer the questions based on the input Research Paper. Utilised Langchain, OpenAI NLM model, and Python. Chained NLM model with Langchain to answer questions and provide extra context. Implemented RAG technique for augmenting LLM with additional dat.  Techstack consisted of Python, OpenAI, Langchain.",
        }
    }
}