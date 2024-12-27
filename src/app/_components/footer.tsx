import React from 'react';
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="flex justify-between mx-[5vw] pb-10 pt-4 border-t border-amber-950 text-[1.3vw] md:text-[1.1vw text-amber-950">
                <div className='flex gap-4'>
                    <a href='https://twitter.com/Satya021Don' target='_blank' className='flex gap-2 justify-center items-center'>
                        <FaSquareXTwitter /> <p>X (Twitter)</p>
                    </a>
                    <a href='https://github.com/SatyanarayanPrashar' target='_blank' className='flex gap-2 justify-center items-center'>
                        <FaSquareGithub /> <p>Github</p>
                    </a>
                    <a href='https://www.linkedin.com/in/satyanarayan-prashar-57a170229/' target='_blank' className='flex gap-2 justify-center items-center'>
                        <FaLinkedin /> <p>Linkedin</p>
                    </a>
                </div>
                <div>
                    <p>satyabuilds@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;