import React from 'react';
import { useTheme } from '../ThemeComponents/ThemeContext';

const Pricing = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="mb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-selanikFont text-[#454545] dark:text-white mb-2">
                Pricing
            </h2>
            <p className="text-xl font-selanikFont text-[#454545] dark:text-[#acacac]">
                More information coming soon.
            </p>
            
        </div>
        <div className="flex flex-row justify-between items-center">
        <div className="w-[30%] mx-2">
        <div className="card bg-base-300 shadow-xl rounded-xl">
            <div className="card-title">
                    <p className={`text-left text-lg font-bold font-selanikFont text-[#454545] dark:text-[#acacac]`}>
                    Standard Plan
                    </p>
            </div>
            <div className="mt-4">
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[28px]">×</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[28px]">×</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[28px]">×</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
            </div>
            </div>
        </div>
        
        <div className="w-[30%] mx-2 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <span className="badge bg-[#FF9E56] text-white px-4 py-2 rounded-full">Popular</span>
            </div>
            <div className="card bg-base-300 shadow-xl rounded-xl border-2 border-[#FF9E56]">
                <div className="card-title">
                    <p className={`text-left text-lg font-bold font-selanikFont text-[#454545] dark:text-[#acacac]`}>
                        Premium Plan
                    </p>
                </div>
                <div className="mt-4">
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                    <div className="flex items-baseline">
                        <span className="mr-2 text-[24px]">✓</span>
                        <div className="skeleton h-4 w-full mb-4"></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-[30%] mx-2">
        <div className="card bg-base-300 shadow-xl rounded-xl">
            <div className="card-title">
                    <p className={`text-left text-lg font-bold font-selanikFont text-[#454545] dark:text-[#acacac]`}>
                    Consultant & Enterprise Plan
                    </p>
            </div>
            <div className="mt-4">
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
                <div className="flex items-baseline">
                    <span className="mr-2 text-[24px]">✓</span>
                    <div className="skeleton h-4 w-full mb-4"></div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
    </div>
    );
}

export default Pricing;