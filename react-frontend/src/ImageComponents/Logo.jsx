import React, { useState, useEffect } from 'react';
import VerbalFlowLogoWhite from '../assets/VerbalFlow_Logo_White.png';
import VerbalFlowLogoBlack from '../assets/VerbalFlow_Logo_Black.png';

const Logo = () => {
    const [logo, setLogo] = useState(VerbalFlowLogoWhite);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            setLogo(e.matches ? VerbalFlowLogoWhite : VerbalFlowLogoBlack);
        };

        handleChange(mediaQuery);
        mediaQuery.addListener(handleChange);

        return () => mediaQuery.removeListener(handleChange);
    }, []);

    return (
        <div>
            <img src={logo} alt="Logo" className='mb-8 w-[400px]'/>
        </div>
    );
};

export default Logo;