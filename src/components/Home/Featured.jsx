// 📌 Import Required Dependencies
import React from 'react';

/**
 * 📌 Featured Component
 * Displays featured product collections including PS5, Women's Collection, Speakers, and Perfume.
 */
function Featured() {
  return (
    <>
      {/* ✅ Featured Products Section */}
      <section>
        <div className='w-[85vw] mt-10 mx-auto'>

          {/* 🔹 Featured Grid Layout */}
          <div className='flex flex-col lg:flex-row gap-7'>

            {/* ✅ PlayStation 5 Section */}
            <aside className='flex-1 bg-[#0d0d0d] relative'>
              <figure className='pt-12 flex justify-end'>
                <img src="img/arrival-1.png" alt="PlayStation 5" />
              </figure>
              <div className='absolute bottom-4 flex flex-col gap-3 px-4 text-white w-[50%]'>
                <h3 className='text-lg font-semibold'>PlayStation 5</h3>
                <p className='text-slate-300'>Black and White version of the PS5 coming out on sale.</p>
                <a href="#" className='text-white border-b-2 border-white inline-block w-fit'>Shop Now</a>
              </div>
            </aside>

            {/* ✅ Right-Side Featured Items */}
            <div className='flex-1 flex flex-col gap-7'>

              {/* 🔹 Women's Collections Section */}
              <div className='flex bg-[#0d0d0d]'>
                <div className='flex-1 text-white px-5 py-3 flex flex-col justify-end gap-3'>
                  <h3 className='text-lg font-semibold'>Women’s Collections</h3>
                  <p className='text-slate-300'>Featured woman collections that give you another vibe.</p>
                  <a href="#" className='text-white border-b-2 border-white inline-block w-fit'>Shop Now</a>
                </div>
                <figure className='flex-1'>
                  <img src="img/arrival-2.png" alt="Women's Collection" />
                </figure>
              </div>

              {/* 🔹 Speakers & Perfume Section */}
              <div className='flex-grow flex-1 flex flex-col md:flex-row gap-7'>

                {/* ✅ Featured Item: Speakers */}
                <div className='flex-1 bg-[#262627] flex justify-center items-center relative'>
                  <img src="img/arrival-speaker.png" alt="Speakers" />
                  <div className='absolute bottom-4 left-5 flex flex-col gap-3 text-white'>
                    <h3 className='text-lg font-semibold'>Speakers</h3>
                    <p className='text-slate-300'>Amazon wireless speakers</p>
                    <a href="#" className='text-white border-b-2 border-white inline-block w-fit'>Shop Now</a>
                  </div>
                </div>

                {/* ✅ Featured Item: Perfume */}
                <div className='flex-1 bg-[#262627] flex justify-center items-center relative'>
                  <img src="img/arrival-perfume.png" alt="Perfume" />
                  <div className='absolute bottom-4 left-5 flex flex-col gap-3 text-white'>
                    <h3 className='text-lg font-semibold'>Perfume</h3>
                    <p className='text-slate-300'>GUCCI INTENSE OUD EDP</p>
                    <a href="#" className='text-white border-b-2 border-white inline-block w-fit'>Shop Now</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// 📌 Export Featured Component
export default Featured;
