import React, { useState, useEffect } from 'react';

function Banner2() {
  // 🔹 Set target date (e.g., 3 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // Add 3 days

  // 🔹 State for countdown
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // 🔹 Function to calculate remaining time
  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now; // Get difference in milliseconds

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  // 🔹 Countdown logic (runs every second)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className='hidden lg:block'>
      <div className='w-[85vw] my-10 mx-auto bg-black py-16 px-12 flex items-center justify-center gap-6'>
        
        {/* ✅ Left Section */}
        <div className='flex-1 flex flex-col gap-8 justify-around items-start'>
          <p className='text-green-400 font-semibold'>Categories</p>
          <h1 className='text-7xl font-semibold text-white'>Enhance Your Music Experience</h1>
          
          {/* 🔹 Countdown Timer */}
          <div className='flex gap-4'>
            {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
              <div key={index} className='flex flex-col items-center justify-center py-4 px-5 rounded-full bg-white leading-4'>
                <p className='font-bold text-xl'>{timeLeft[unit].toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
                <p className='text-sm'>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
              </div>
            ))}
          </div>

          {/* ✅ Buy Now Button */}
          <button className='bg-green-600 hover:bg-green-700 hover:font-bold text-white rounded-md py-4 px-14 cursor-pointer transition-all duration-300'>
            Buy Now!
          </button>
        </div>

        {/* ✅ Right Section - Product Image */}
        <div className='flex-1'>
          <img src="img/JBL_BOOMBOX.png" alt="JBL Boombox" />
        </div>
        
      </div>
    </section>
  );
}

export default Banner2;
