import React from 'react';
import VerbalFlowLogoWhite from '../assets/VerbalFlow_Logo_White.png';
import VerbalFlowLogoBlack from '../assets/VerbalFlow_Logo_Black.png';
import ThemeController from '../ThemeComponents/ThemeController';
import { useTheme } from '../ThemeComponents/ThemeContext';

const Navbar = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="navbar flex items-start justify-between">
            <div className="navbar-start">
                <img 
                    src={isDarkMode ? VerbalFlowLogoWhite : VerbalFlowLogoBlack} 
                    alt="Logo" 
                    className='mb-8 w-[160px]'
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* <ul className="flex items-center font-selanikFont">
                    <li className="link link-hover mr-16"><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li className="link link-hover mr-16"><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a></li>
                    <li className="link link-hover mr-16"><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a></li>
                </ul> */}
            </div>
            <div className="navbar-end">
                <ThemeController />
            </div>
        </div>
    )
}

export default Navbar;