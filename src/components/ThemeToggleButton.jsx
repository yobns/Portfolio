"use client";
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const ThemeToggleButton = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    
    return (
        <button onClick={toggleDarkMode} className="focus:outline-none" aria-label="Dark/Light theme">
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
    );
};

export default ThemeToggleButton;