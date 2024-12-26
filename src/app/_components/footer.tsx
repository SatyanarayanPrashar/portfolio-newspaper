import React from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-between mx-[5vw] pb-10 pt-4 border-t border-amber-950 text-[1.3vw] md:text-[1.1vw text-amber-950">
                <div className='flex gap-4'>
                    <div className='flex gap-2 justify-center items-center'>
                        <FaSquareXTwitter /> <p>X (Twitter)</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <FaSquareGithub /> <p>Github</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <FaLinkedin /> <p>Linkedin</p>
                    </div>
                </div>
                <div>
                    <p>satyanarayanprashar73@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;