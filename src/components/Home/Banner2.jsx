import React, { useState, useEffect } from 'react';

function Banner2() {
  // Set initial countdown time (e.g., 3 days, 23 hours, 59 minutes, 59 seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timer);
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='hidden lg:block'>
      <div className='w-[85vw] my-10 mx-auto bg-black py-16 px-12 flex items-center justify-center gap-6'>
        <div className='flex-1 flex gap-8 flex-col justify-around items-start'>
          <p className='text-green-400 font-semibold'>Categories</p>
          <h1 className='text-7xl font-semibold text-white'>Enhance Your Music Experience</h1>
          
          {/* Countdown Timer */}
          <div className='flex gap-4'>
            <div className='flex flex-col items-center justify-center py-4 px-6 rounded-full bg-white leading-4'>
              <p className='font-bold'>{String(timeLeft.days).padStart(2, '0')}</p>
              <p className='text-sm'>Days</p>
            </div>
            <div className='flex flex-col items-center justify-center py-4 px-5 rounded-full bg-white leading-4'>
              <p className='font-bold'>{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className='text-sm'>Hours</p>
            </div>
            <div className='flex flex-col items-center justify-center py-5 px-3 rounded-full bg-white leading-4'>
              <p className='font-bold'>{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className='text-sm'>Minutes</p>
            </div>
            <div className='flex flex-col items-center justify-center py-4 px-3 rounded-full bg-white leading-4'>
              <p className='font-bold'>{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className='text-sm'>Seconds</p>
            </div>
          </div>

          <p className='bg-green-600 hover:bg-green-700 hover:font-bold text-white rounded-md py-4 px-14 inline-block cursor-pointer'>Buy Now!</p>
        </div>

        <div className='flex-1'>
          <img src="img/JBL_BOOMBOX.png" alt="JBL Boombox" />
        </div>
      </div>
    </section>
  );
}

export default Banner2;
