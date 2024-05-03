"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOnScroll, setHideOnScroll] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY === 0);
            setHideOnScroll(currentScrollY > 50 && currentScrollY > lastScrollY);
            lastScrollY = currentScrollY;
        };

        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuClasses = "flex p-3 text-md text-gray-800 hover:text-muted-foreground rounded transition-colors duration-300 inline-block";
    const shadowClass = (!hideOnScroll && !isAtTop) ? 'shadow-md' : '';
    const navClasses = `bg-background text-foreground fixed top-0 inset-x-0 z-10 transition-transform duration-300 ${hideOnScroll ? '-translate-y-full' : 'translate-y-0'} ${shadowClass}`;

    return (
        <nav className={navClasses}>
            <div className="container mx-auto p-4 flex justify-between items-center xl:w-[65%] w-[90%]">
                <Link href="/" className="font font-bold text-3xl">YB</Link>
                <div className="hidden md:flex items-center space-x-6 flex-auto justify-center">
                    <Link href="#projects-section" className={menuClasses}>Projects</Link>
                    <Link href="#work-section" className={menuClasses}>Work</Link>
                    <Link href="#edu-section" className={menuClasses}>Education</Link>
                    <Link href="#contact-section" className={menuClasses}>Contact</Link>
                </div>
                <div className="flex items-center space-x-5">
                    <ThemeToggleButton />
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className="md:hidden z-20 bg-background text-foreground fixed top-15 inset-x-0 shadow-lg py-2 flex justify-between px-[5%]">
                        <div className="flex flex-col items-start">
                            <Link href="#projects-section" className={menuClasses} onClick={() => setIsOpen(false)}>Projects</Link>
                            <Link href="#work-section" className={menuClasses} onClick={() => setIsOpen(false)}>Work</Link>
                            <Link href="#edu-section" className={menuClasses} onClick={() => setIsOpen(false)}>Education</Link>
                            <Link href="#contact-section" className={menuClasses} onClick={() => setIsOpen(false)}>Contact</Link>
                        </div>
                    </div>
                    <div className="fixed top-30 min-h-screen inset-x-0 bg-black bg-opacity-25 z-10" onClick={() => setIsOpen(false)}></div>
                </>
            )}
        </nav>
    );
};

export default Nav;