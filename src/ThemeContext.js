"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';
import { Share_Tech_Mono, Homemade_Apple } from 'next/font/google'

const techInit = Share_Tech_Mono({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-tech',
})

const appleInit = Homemade_Apple({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-homemade-apple',
})

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);
    let savedDarkMode = false;
    if (typeof window !== "undefined" && isMounted) {
        const saved = localStorage.getItem('darkMode');
        savedDarkMode = saved !== null ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    const [darkMode, setDarkMode] = useState(savedDarkMode);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== "undefined") {
            localStorage.setItem('darkMode', JSON.stringify(darkMode));
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const bodyClass = darkMode ? 'dark' : 'light';

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <body className={`${isMounted ? bodyClass : ''} ${techInit.variable} ${appleInit.variable}`}>{children}</body>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};