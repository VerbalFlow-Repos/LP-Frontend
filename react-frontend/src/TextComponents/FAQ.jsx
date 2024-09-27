import React from "react";
import { useTheme } from '../ThemeComponents/ThemeContext';

const FAQ = () => {
  const { isDarkMode } = useTheme();

  const faqData = [
    {
      question: "What is VerbalFlow?",
      answer: "VerbalFlow is an innovative tool that transforms spoken process descriptions into precise flowcharts."
    },
    {
      question: "How does VerbalFlow work?",
      answer: "VerbalFlow uses advanced speech recognition and AI technologies to understand your spoken instructions and convert them into visual diagrams."
    },
    {
      question: "Who is VerbalFlow suitable for?",
      answer: "VerbalFlow is ideal for businesses, project managers, consultants, and anyone who wants to efficiently document and visualize processes."
    },
  ];

  return (
    <div className="bg-base-300 w-screen -mx-[calc((100vw-100%)/2)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <h2 className={`font-asgardFont text-left text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-[#454545]'}`}>
              Frequently Asked Questions
            </h2>
            <p className="font-selanikFont text-lg text-left">
              Have another Question? <a href="mailto:contact@verbalflow.de" className="link underline text-[#FF9E56]">Contact us</a>
            </p>
          </div>

          <div className="w-full md:w-3/5">
            <div className="join join-vertical w-full">
              <div className="divider my-2"></div>
              {faqData.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? null : <div className="divider my-2"></div>}
                  <div tabIndex={0} className="collapse collapse-arrow font-selanikFont text-left join-item">
                    <div className="collapse-title text-xl">{item.question}</div>
                    <div className="collapse-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;