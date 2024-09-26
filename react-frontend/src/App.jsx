import React, { useEffect } from 'react';
import './App.css'
import Modal from './FormComponents/Modal';
import WaitlistInput from './FormComponents/WaitlistInput';
import Logo from './ImageComponents/Logo';
import Paragraph from './TextComponents/Paragraph';
import Subheading from './TextComponents/Subheading';
import ContentText from './TextComponents/ContentText';
import FAQ from './TextComponents/FAQ';
import Footer from './Footer';
function App() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Logo />
        <Paragraph />
        <Subheading />
        <WaitlistInput />
        <Modal /> 
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ContentText />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
