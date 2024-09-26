import React from "react";

const FAQ = () => {
  return (
    <div className="mt-32 mb-8">
    <div className="text-center mb-8 mt-16">
            <p className="text-[65px] leading-[1.1em] font-verbalFlowSub text-black dark:text-white">
                FAQ
            </p>
        </div>
      <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border">
        <div className="collapse-title text-xl font-medium">What is VerbalFlow and how does it work?</div>
        <div className="collapse-content">
          <p>VerbalFlow is a software solution that automatically converts spoken process descriptions into detailed process flow diagrams. Simply speak or type your process steps, and VerbalFlow uses advanced algorithms to create accurate, easy-to-understand diagrams, saving you time and reducing errors in process documentation.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-plus border-base-300 bg-base-200 border mt-4">
        <div className="collapse-title text-xl font-medium">Who can benefit from using VerbalFlow?</div>
        <div className="collapse-content">
          <p>VerbalFlow is ideal for businesses of all sizes, including consultants, process managers, IT teams, and compliance officers. Any organization looking to streamline its process documentation, improve accuracy, and enhance operational efficiency can benefit from using VerbalFlow.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
