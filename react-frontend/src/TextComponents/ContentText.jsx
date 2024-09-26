import React from "react";
import LpPicture from '../assets/LP_Pic.png'; // Importieren Sie das Bild

const ContentText = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-8 mb-8">
      <div className="w-1/2">
        <p className="text-left font-verbalFlow text-[24px] leading-[1.5em] text-[#6B7280] dark:text-[#ACA2BD] mb-8">
          VerbalFlow turns spoken process descriptions into accurate flow diagrams, making it easy to streamline your documentation and boost efficiency.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img src={LpPicture} alt="VerbalFlow Logo" className="rounded-2xl w-[400px]" />
      </div>
    </div>
    
  );
};

export default ContentText;