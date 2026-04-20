"use client"
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full shadow-lg focus:outline-none"
        >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default { ThemeToggleButton };
