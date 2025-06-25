// import React from 'react'
// import useTheme from '../contexts/theme';

// export default function ThemeBtn() {

//     const { themeMode, lightTheme, darkTheme } = useTheme()
//     const onChangeBtn = (e) => {
//         const darkModeStatus = e.currentTarget.checked
//         if (darkModeStatus) {
//             darkTheme()
//         } else {
//             lightTheme()
//         }
//     }
//     return (
//         <label className="relative inline-flex items-center cursor-pointer">
//             <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 onChange={onChangeBtn}
//                 checked={themeMode === "dark"}
//                 aria-label="Toggle Dark Mode"
//             />
//             <div
//                 className="w-11 h-6 bg-gray-200 dark:bg-gray-700 
//                    peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
//                    rounded-full 
//                    peer 
//                    peer-checked:after:translate-x-full 
//                    peer-checked:after:border-white 
//                    after:content-[''] 
//                    after:absolute after:top-[2px] after:left-[2px] 
//                    after:bg-white 
//                    after:border-gray-300 dark:after:border-gray-600 
//                    after:border after:rounded-full 
//                    after:h-5 after:w-5 
//                    after:transition-all 
//                    peer-checked:bg-blue-600"
//             ></div>
//             <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
//                 Toggle Theme
//             </span>
//         </label>
//     );
// }

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={toggleTheme}
                checked={theme === "dark"}
            />
            <div
                className="w-10 h-10 flex items-center justify-center 
           bg-white/80 dark:bg-white/10 
           backdrop-blur-md 
           shadow-md hover:shadow-cyan-300 
           peer-focus:outline-none 
           transition-all duration-300 
           rounded-full 
           text-yellow-400 dark:text-blue-300 
           hover:scale-105 dark:shadow-cyan-300 dark:shadow-sm"
            >
                {theme === "light" ? <FaSun /> : <FaMoon />}
            </div>
        </label>
    );
};

export default ThemeToggle;
