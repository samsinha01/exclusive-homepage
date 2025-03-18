// 📌 Import Required Dependencies
import React from 'react';

// 📌 Import Reusable Components
import Heading from '../Heading';
import ProductCard from '../ProductCard';
import Button from '../Button';

/**
 * 📌 OurProducts Component
 * Displays the "Our Products" section, including a heading, a product grid, and navigation controls.
 */
function OurProducts() {
  return (
    <>
      {/* 📌 Products Section Wrapper */}
      <section>
        <div className='w-[85vw] mt-10 mx-auto'>

          {/* ✅ Section Heading */}
          <Heading title={"Our Products"} />

          {/* ✅ Section Content */}
          <div>

            {/* 🔹 Header: Title + Navigation Arrows */}
            <div className='flex gap-4 justify-between md:gap-14 md:items-end flex-col md:flex-row'>

              {/* 🔹 Section Title */}
              <p className='text-4xl md:text-5xl font-semibold'>Explore Our Products</p>

              {/* 🔹 Navigation Controls */}
              <div className='flex gap-4 items-center justify-between lg:justify-start'>
                <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                  <i className="fa-solid fa-arrow-left text-xl"></i>
                </span>
                <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                  <i className="fa-solid fa-arrow-right text-xl"></i>
                </span>
              </div>

            </div>

            {/* ✅ Product Cards Grid */}
            <div className='my-8 flex gap-4 justify-center lg:justify-between flex-wrap'>
              {/* 🔹 Render Multiple Product Cards */}
              {Array.from({ length: 8 }).map((_, index) => (
                <ProductCard key={index} />
              ))}
            </div>

            {/* ✅ "View All Products" Button */}
            <div className="flex justify-center">
              <Button btnVal={"View All Products"} padLine={12} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// 📌 Export OurProducts Component
export default OurProducts;
