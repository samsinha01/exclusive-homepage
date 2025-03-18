// 📌 Import Required Dependencies
import React from 'react';

// 📌 Facilities Data Array
const facilitiesData = [
  {
    id: 1,
    imgSrc: "img/icon-delivery.png",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    id: 2,
    imgSrc: "img/Icon-Customer service.png",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    id: 3,
    imgSrc: "img/Icon-secure.png",
    title: "MONEY-BACK GUARANTEE",
    description: "Worry-free shopping with our 30-day return policy"
  }
];

/**
 * 📌 Facilities Component
 * Displays three key facilities such as Delivery, Customer Service, and Secure Shopping.
 */
function Facilities() {
  return (
    <section>
      <div className='w-[85vw] mt-10 mx-auto'>

        {/* ✅ Facilities Grid */}
        <div className="flex gap-9 justify-center items-center flex-col lg:flex-row">

          {/* 🔹 Dynamically Render Facilities */}
          {facilitiesData.map((facility) => (
            <div key={facility.id} className='flex flex-col gap-3 items-center text-center'>
              <figure className='py-3 px-3 bg-black border-8 border-slate-400 rounded-full'>
                <img src={facility.imgSrc} alt={facility.title} />
              </figure>
              <p className='text-lg font-bold'>{facility.title}</p>
              <p className='text-gray-600'>{facility.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

// 📌 Export Facilities Component
export default Facilities;
