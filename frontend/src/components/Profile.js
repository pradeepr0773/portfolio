import Me from '../assets/me.jpg'
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Profile() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 justify-center' id='profile'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-6xl'>Hi, <br /> I am Pradeep
                    <p className='text-2xl'>I am a Full-Stack Developer</p>
                </h1>
                <div className='flex py-10'>
                    <a href="https://www.linkedin.com/in/pradeepr0207" target="_blank" rel="noopener noreferrer" className='pr-3 hover:text-gray-600'><AiOutlineLinkedin size={40} /></a>
                    <a href="https://github.com/pradeepr0773" target="_blank" rel="noopener noreferrer" className='pr-3 hover:text-gray-600'><AiOutlineGithub size={40} /></a>
                </div>
                <div className='text-center'>
                    <a href="https://drive.google.com/file/d/1eoStBKKMjtpmFiy-iC05n6d1R-xJYDWe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="border-0 p-2 shadow-xl shadow-gray-500/50 rounded-full bg-gray-600 text-white text-2xl">Check Resume</a>
                </div>
            </div>
            <img className='md:w-1/5 shadow-2xl shadow-cyan-500/50 rounded-full' src={Me} alt="Pradeep" />
        </section>
    );
}
