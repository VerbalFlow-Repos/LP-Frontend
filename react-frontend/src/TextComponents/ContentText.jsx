import React from "react";
import LpPicture from '../assets/ToTheMoon.png'; // Importieren Sie das Bild

const ContentText = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-64 mt-32">
      <div className="w-1/2 flex justify-center">
        <img src={LpPicture} alt="VerbalFlow Logo" className="rounded-2xl h-[250px]" />
      </div>
      <div className="w-1/2">
        <p className="text-left font-selanikFont text-[22px] leading-[1.5em] text-[#454545] dark:text-[#acacac] mb-16">
          VerbalFlow turns spoken process descriptions into accurate flow diagrams, making it easy to streamline your documentation and boost efficiency.
        </p>
      </div>
    </div>
    
  );
};

export default ContentText;