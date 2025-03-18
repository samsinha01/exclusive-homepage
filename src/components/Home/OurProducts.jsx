import React from 'react'
import Heading from '../Heading';
import ProductCard from '../ProductCard';
import Button from '../Button';

function OurProducts() {
  return (
    <>
        <section>
            <div className='w-[85vw] mt-10 mx-auto'>
                <div>
                    <Heading title={"Our Products"}/>
                </div>

                <div>
                    <div className='flex gap-4 justify-between md:gap-14 md:items-end flex-col md:flex-row'>
                        <p className='text-4xl md:text-5xl font-semibold'>Explore Our Products</p>

                        <div className='flex gap-4 items-center justify-between lg:justify-start'>
                            <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                                <i className="fa-solid fa-arrow-left text-xl"></i>
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                                <i className="fa-solid fa-arrow-right text-xl"></i>
                            </span>
                        </div>
                    </div>

                    <div className='my-8 flex gap-4 justify-center lg:justify-between flex-wrap'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    <div className="flex justify-center">
                        <Button btnVal={"View All Products"} padLine={12}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OurProducts