import React, {  useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import PulsanteContatti from "./PulsanteContatti";
import PoupupMenu from './PoupupMenu';

export default function NavHome() {
    const [scrolled, setScrolled] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    // Gestore di scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    // Aggiungi e rimuovi il gestore di scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className={`fixed w-full transition-colors duration-500 ease-in-out z-50 ${
                scrolled ? 'bg-white' : 'bg-transparent'
            }`}
        >
            <nav className="flex justify-around items-center">
                <div className="flex w-full justify-between items-center pl-2 md:pl-20">
                    <Link href="/">
                        <Image
                            src="/logo.webp"
                            alt="Logo"
                            width={250}
                            height={250}
                            className='w-[120px] lg:w-[250px]'
                        />
                    </Link>
                    <div className="flex items-center justify-center">
                        
                        {/* icona hamburger */}
                        <div className="mr-4 mt-2 2xl:mt-2">
                            <button
                                onClick={() => setShowHamburger(!showHamburger)}
                                className={`transition-colors duration-500 ${
                                    scrolled ? 'text-black' : 'text-white'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 12h16"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className='hidden md:block items-end'>
                            <PulsanteContatti />
                        </div>
                    </div>
                </div>
            </nav>

            {/* POUPUP MENU */}
            <PoupupMenu showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
        </header>
    );
}
