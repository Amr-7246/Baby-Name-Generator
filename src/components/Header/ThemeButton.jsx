import React, { useState, useEffect } from 'react';
import { IoMdCloudyNight } from "react-icons/io";

const ThemeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    };

return (
    <button className="btn cursor-pointer" onClick={toggleTheme} >
        <IoMdCloudyNight />
    </button>
    );
};

export default ThemeToggleButton;
