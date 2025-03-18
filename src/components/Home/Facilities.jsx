import React from 'react'

function Facilities() {
  return (
    <section>
        <div className='w-[85vw] mt-10 mx-auto'>
            <div className="flex gap-9 justify-center items-center flex-col lg:flex-row">
                <div className='flex flex-col gap-3 items-center'>
                    <figure className='py-3 px-3 bg-black border-8 border-slate-400 rounded-full'>
                        <img src="img/icon-delivery.png" alt="" />
                    </figure>
                    <p className='text-lg font-bold'>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>

                <div className='flex flex-col gap-3 items-center'>
                    <figure className='py-3 px-3 bg-black border-8 border-slate-400 rounded-full'>
                        <img src="img/Icon-Customer service.png" alt="" />
                    </figure>
                    <p className='text-lg font-bold'>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
                
                <div className='flex flex-col gap-3 items-center'>
                    <figure className='py-3 px-3 bg-black border-8 border-slate-400 rounded-full'>
                        <img src="img/Icon-secure.png" alt="" />
                    </figure>
                    <p className='text-lg font-bold'>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Facilities