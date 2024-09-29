import React from 'react';
import GraphImage from '../assets/GraphImage.png';
import { useTheme } from '../ThemeComponents/ThemeContext';


const GraphComponent = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className='w-full relative'>
        <div className="absolute inset-0 bg-[#FF9E56] opacity-50 blur-3xl transform -translate-x-4 translate-y-4 rounded-full"></div>
        <div className="mockup-window bg-base-100 rotate-3 shadow-xl rounded-xl h-full">
            <div className="bg-base-200 flex">
                <div className="flex w-full gap-4">
                    <div className="skeleton h-[300px] flex flex-col items-center w-full"> 
                        <p className={`text-center text-2xl mt-16 font-bold font-asgardFont ${isDarkMode ? 'text-white' : 'text-[#454545]'}`}>
                        Coming Soon!
                        </p>
                        {/* <img src={GraphImage} alt="Graph" className="w-[90%] mt-4" /> */}
                    </div>
                </div>    
            </div>
        </div>
    </div>
    );
}

export default GraphComponent;