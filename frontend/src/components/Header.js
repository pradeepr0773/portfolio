import { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Bars3Icon } from '@heroicons/react/24/solid';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between px-5 bg-primary py-3">
            <a href="/">
                <img src={Logo} alt="Logo" className='w-9 h-8 marginTop' />
            </a>

            <nav className="hidden md:block">
                <ul className="flex text-white text-lg">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul className="flex flex-col text-white mobile-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                <Bars3Icon className='text-white h-5'/> 
            </button>
        </header>
    );
}
