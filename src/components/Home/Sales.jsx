// 📌 Import Required Dependencies
import React, { useState, useEffect } from 'react';

// 📌 Import Reusable Components
import ProductCard from '../ProductCard';
import Heading from '../Heading';
import Button from '../Button';

/**
 * 📌 Sales Component
 * Displays a "Flash Sales" section with a countdown timer and product listings.
 * 
 * @param {Date} targetDate - The target date for the countdown timer.
 */
function Sales({ targetDate }) {

  /**
   * 📌 Function: Calculate Remaining Time
   * Computes the time left until the target date.
   * 
   * @returns {Object} Time left in days, hours, minutes, and seconds.
   */
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // 🔹 State to track countdown timer values
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // 🔹 useEffect: Updates timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup to prevent memory leaks
  }, []);

  return (
    <>
      {/* 📌 Sales Section Wrapper */}
      <section className='mt-4 lg:mt-24 w-[85vw] m-auto mb-0'>

        {/* ✅ Section Heading */}
        <Heading title={"Today's"} />

        {/* ✅ Flash Sales Header (Title + Countdown Timer) */}
        <div className='flex justify-between flex-col lg:flex-row gap-3'>

          {/* 🔹 Left Side: Sales Title + Countdown Timer */}
          <div className='flex gap-4 md:gap-14 md:items-end flex-col md:flex-row'>

            {/* 🔹 Flash Sales Title */}
            <p className='text-5xl font-semibold'>Flash Sales</p>

            {/* 🔹 Countdown Timer */}
            <div className="flex gap-5">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                <div key={unit} className="flex items-center gap-2">
                  <div className="flex flex-col justify-center text-center">
                    <p className="font-bold">{unit}</p>
                    <p className="font-bold text-4xl">{timeLeft[unit.toLowerCase()]}</p>
                  </div>
                  {/* 🔹 Dots Between Timer Values */}
                  {index < 3 && (
                    <div className="flex flex-col justify-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
                      <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* 🔹 Right Side: Navigation Arrows */}
          <div className='flex gap-4 items-center justify-between lg:justify-start'>
            <span className="inline-block bg-gray-200 hover:bg-gray-400 rounded-full py-3 px-4">
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </span>
            <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
              <i className="fa-solid fa-arrow-right text-xl"></i>
            </span>
          </div>

        </div>

        {/* ✅ Product Cards Display */}
        <div className='my-8 flex gap-4 justify-between overflow-hidden'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        {/* ✅ "View All Products" Button */}
        <div className='flex justify-center pb-12 border-b-2 border-gray-200 mb-14'>
          <Button btnVal={"View All Products"} padLine={12} />
        </div>

      </section>
    </>
  );
}

// 📌 Export Sales Component
export default Sales;
