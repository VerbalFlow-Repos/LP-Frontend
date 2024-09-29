import React from 'react';
import './App.css'

import Footer from './MenuComponents/Footer';
import Navbar from './MenuComponents/Navbar';
import Heading from './TextComponents/Heading';
import Paragraph from './TextComponents/Paragraph';
import GraphComponent from './ImageComponents/GraphComponent';
import WaitlistInput from './FormComponents/WaitlistInput';
import Modal from './FormComponents/Modal';
import Pricing from './TextComponents/Pricing';
import ContentText from './TextComponents/ContentText';
import FAQ from './TextComponents/FAQ';
import CtaDown from './TextComponents/CtaDown';
import { ThemeProvider } from './ThemeComponents/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-between items-baseline mt-8">
          <div className="w-3/5">
            <Heading />
            <Paragraph />
          </div>
          <div className="w-2/6">
            <GraphComponent />
          </div>
        </div>
        <div className="mt-48 bg-base-300 w-screen -mx-[calc((100vw-100%)/2)]" id="waitlist">
          <div className="flex py-16 justify-center items-center">  
            <WaitlistInput />
            <Modal />
          </div>
        </div>
        {/* <div id="about">
          <ContentText />
        </div>
        <div id="pricing">
          <Pricing />
        </div> */}
        <div className=""id="faq">
          <FAQ />
        </div>
        {/* <CtaDown /> */}
        <Footer />
      </div>
    </ThemeProvider>
    
  );
}

export default App;