import React from "react";
import NotificationIconLight from '../assets/NotificationIconLight.png';
import NotificationIconDark from '../assets/NotificationIconDark1.png';
import { useTheme } from '../ThemeComponents/ThemeContext';
const Paragraph = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="w-full">
            <p className="text-left font-selanikFont text-[22px] leading-[1.5em] text-[#454545] dark:text-[#acacac] mb-16">
            VerbalFlow transforms your spoken process descriptions into precise flowcharts - <span className="text-[#FF9E56]  italic underline decoration-[#FF9E56]">as if by magic.</span>✨ Revolutionize your documentation and catapult your efficiency to 
            new dimensions!
            </p>
            <div className="flex justify-start mb-4">
                <btn className="btn btn-ghost bg-[#FF9E56] hover:bg-[#999999] text-[#454545] rounded-md font-selanikFont w-64 text-[18px]"><a href="#waitlist" onClick={(e) => scrollToSection(e, 'waitlist')}>Join the waitlist!</a></btn>
            </div>
            <div className="flex items-start">
            <img 
                    src={isDarkMode ? NotificationIconLight : NotificationIconDark} 
                    alt="Notification" 
                    className='w-[29px] rounded-md'
                />
                <p className="flex ml-2 justify-start text-left font-selanikFont text-[#454545] dark:text-[#acacac]">Get exclusive updates and be the first to use VerbalFlow!</p>
            </div>
        </div>
    );
}

export default Paragraph;