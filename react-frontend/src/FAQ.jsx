import React from "react";

const FAQ = () => {
  return (
    <div className="bg-base-200 rounded-box">
    <details className="collapse">
        <summary className="collapse-title text-xl font-medium">What is VerbalFlow and how does it work?</summary>
        <div className="collapse-content">
            <p>VerbalFlow is a software solution that automatically converts spoken process descriptions into detailed process flow diagrams. Simply speak or type your process steps, and VerbalFlow uses advanced algorithms to create accurate, easy-to-understand diagrams, saving you time and reducing errors in process documentation.</p>
        </div>
        
    </details>
    <details className="collapse">
        <summary className="collapse-title text-xl font-medium">Who can benefit from using VerbalFlow?</summary>
        <div className="collapse-content">
            <p>VerbalFlow is ideal for businesses of all sizes, including consultants, process managers, IT teams, and compliance officers. Any organization looking to streamline its process documentation, improve accuracy, and enhance operational efficiency can benefit from using VerbalFlow.</p>
        </div>
    </details>
    </div>
  );
};

export default FAQ;
