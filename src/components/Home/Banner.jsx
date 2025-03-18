import React from 'react';

function Banner() {
  return (
    <section className='flex-grow hidden lg:block'>
      <div className='pt-10 ps-10'>
        <div className='w-full h-full bg-black'>
          <div className='flex items-center'>
            
            {/* ✅ Left Side: Text & Button */}
            <div className='flex-1 ps-12 py-5 flex flex-col justify-evenly'>
              {/* 🔹 Apple Logo & iPhone Series Name */}
              <div className='flex gap-5 items-center'>
                <i className="fa-brands fa-apple text-white text-6xl"></i>
                <p className='text-white text-lg'>iPhone 14 Series</p>
              </div>

              {/* 🔹 Heading */}
              <h1 className='text-white leading-tight text-7xl font-bold'>
                Up to 10% off Voucher
              </h1>

              {/* 🔹 CTA: Shop Now Button */}
              <div className='flex gap-6 items-center'>
                <a href="#" className='border-b-2 border-white text-white font-semibold pb-1 text-xl flex items-center gap-2 hover:opacity-80 transition-all'>
                  Shop Now 
                  <i className="fa-solid fa-arrow-right text-2xl"></i>
                </a>
              </div>
            </div>

            {/* ✅ Right Side: Product Image */}
            <div className='flex-1'>
              <img src="img/hero_sec.png" alt="iPhone 14 Promotion" className='w-auto h-[375px] object-contain'/>
            </div>
          </div>

          {/* 🔹 Pagination Dots */}
          <div className='flex gap-3 justify-center pb-3 mt-4'>
            {Array(5).fill(null).map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  index === 2 ? 'bg-red-500 border-2 border-white scale-125' : 'bg-gray-400 hover:opacity-80'
                }`}
              ></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;
