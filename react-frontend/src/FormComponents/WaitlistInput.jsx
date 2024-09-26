import React, { useState } from "react";

const WaitlistInput = () => {
  const [email, setEmail] = useState("");
  const [shake, setShake] = useState(false);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!email.trim() || !validateEmail(email)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else {
      document.getElementById('sub_modal').showModal();
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div 
        className={`flex items-center space-x-4 ${shake ? 'animate-shake' : ''}`}
      >
        <label className="input input-bordered flex items-center gap-2 input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow placeholder-gray-600 dark:placeholder-gray-500"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button 
          className="btn btn-primary" 
          onClick={handleSubmit}
        >
          Join waitlist!
        </button>
      </div>
    </div>
  );
};

export default WaitlistInput;