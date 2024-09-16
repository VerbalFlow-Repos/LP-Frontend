import React from 'react';
import './App.css'
import Modal from './Modal';
import WaitlistInput from './WaitlistInput';
import Logo from './Logo';
import Paragraph from './Paragraph';
import Subheading from './Subheading';
import FAQ from './FAQ';


function App() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      <Paragraph />
      <Subheading />
      <WaitlistInput />
      <Modal /> 
    </div>
    {/* <FAQ /> */}
    </div>
  );
}

export default App
