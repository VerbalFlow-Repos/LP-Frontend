import React from "react";
import { useTheme } from '../ThemeComponents/ThemeContext';

const Heading = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="text-left mb-8 w-full">
            <p className="text-[65px] leading-[1.1em]">
                <span className={`font-asgardFont font-extrabold ${isDarkMode ? 'text-white' : 'text-[#454545]'}`}>From voice to process:<br /> speak it, </span>
                <span className="font-asgardFont font-extrabold bg-[#FF9E56] inline-block text-[#454545] transform -rotate-2 px-2">
                    <span className="inline-block transform rotate-2">we'll map it!</span>
                </span>
            </p>
        </div>
    )
}

export default Heading;