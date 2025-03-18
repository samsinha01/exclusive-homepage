import React from 'react'
import Banner from './Banner'
import ProductsName from './ProductsName'

function HeroSection() {
  return (
    <>
        <section>
          <div className='w-[85vw] my-0 mx-auto'>
            <div className='flex flex-col xl:flex-row'>
              <ProductsName />
              <Banner />
            </div>
          </div>
        </section>
    </>
  )
}

export default HeroSection