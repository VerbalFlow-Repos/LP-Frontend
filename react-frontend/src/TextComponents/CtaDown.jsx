import React from 'react';
import { useTheme } from '../ThemeComponents/ThemeContext';

const CtaDown = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="bg-base-300 w-screen -mx-[calc((100vw-100%)/2)]">

        
        <div className="text-center mt-24 mb-16">
            <p className="text-[40px] mb-4 leading-[1.1em]">
                <span className={`font-asgardFont  ${isDarkMode ? 'text-white' : 'text-[#454545]'}`}>Boost your efficiency with VerbalFlow and sign up for our waitlist.</span>                
            </p>
            <p className="text-center font-selanikFont text-[22px] leading-[1.5em] text-[#454545] dark:text-[#acacac] mb-8">
            Stay up to date and secure an exclusive advantage with VerbalFlow!
            </p>
            <div className="mb-4">
                <btn className="btn btn-ghost bg-[#FF9E56] hover:bg-[#999999] text-[#454545] rounded-md font-selanikFont w-64 text-[18px]"><a href="#waitlist" onClick={(e) => scrollToSection(e, 'waitlist')}>Join the waitlist!</a></btn>
            </div>
        </div>
        </div>
    )
}

export default CtaDown;