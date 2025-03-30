import React from 'react'
import Heading from '../Heading'
import Button from '../Button'
import ProductCard from '../ProductCard'
import { useSelector } from 'react-redux'

function MonthWise() {
    const monthlyProduct = useSelector((state)=> state.products.monthProduct);
    
  return (
    <>
        <section>
            <div className='w-[85vw] my-10 mx-auto'>
                <Heading title={"This Month"}/>
                
                <div>
                    <div className='flex gap-4 md:gap-14 justify-between md:items-end flex-col md:flex-row'>
                        <p className='text-4xl md:text-5xl font-semibold'>Browse By Category</p>
                        <Button btnVal={"View All"} padLine={6}/>
                    </div>

                    <div className='flex justify-center lg:justify-between my-10 flex-wrap gap-8'>
                        {monthlyProduct.map((product,index)=>(
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MonthWise