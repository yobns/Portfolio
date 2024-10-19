"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Share_Tech_Mono, Homemade_Apple } from 'next/font/google';

const techInit = Share_Tech_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-tech',
});

const appleInit = Homemade_Apple({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-homemade-apple',
});

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setDarkMode(mediaQuery.matches);

            const handleChange = (e) => setDarkMode(e.matches);
            mediaQuery.addEventListener('change', handleChange);

            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            document.body.classList.toggle('dark', darkMode);
            document.body.classList.toggle('light', !darkMode);
        }
    }, [darkMode]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <body className={`${techInit.variable} ${appleInit.variable}`}>
                {children}
            </body>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};