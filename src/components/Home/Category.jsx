import React from 'react'
import Heading from '../Heading'
import CategoryCard from '../CategoryCard'

function Category() {
  return (
    <>
        <section>
            <div className='w-[85vw] my-10 mx-auto'>
                <Heading title={"Categories"}/>

                <div>
                    <div className='flex gap-4 justify-between md:gap-14 md:items-end flex-col md:flex-row'>
                        <p className='text-4xl md:text-5xl font-semibold'>Browse By Category</p>

                        <div className='flex gap-4 items-center justify-between lg:justify-start'>
                            <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                                <i className="fa-solid fa-arrow-left text-xl"></i>
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                                <i className="fa-solid fa-arrow-right text-xl"></i>
                            </span>
                        </div>
                    </div>

                    <div className='flex gap-4 justify-between my-10 overflow-hidden'>
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category