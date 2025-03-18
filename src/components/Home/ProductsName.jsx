import React from 'react'

function ProductsName() {
  return (
    <div className='xl:w-2/6'>
      <ul className='pt-5 px-2 xl:border-r-[2px] border-gray-300 flex flex-wrap gap-4 lg:gap-0 sm:justify-center flex-row xl:flex-col'>
 
        <li className='flex gap-3 justify-between items-center py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>
          <span>Womenn's Fashion</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>

        <li className='flex gap-3 justify-between items-center py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>
          <span>Men's Fashion</span>
          <i className="fa-solid fa-angle-right"></i>
        </li>
        
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Electronics</li>
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Home Lifestyle</li>
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Medicine</li>
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Baby's & Toys</li>
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Groceries & Pets</li>
        <li className='py-3 text-xl border-b-2 xl:border-0 border-gray-500 hover:bg-gray-300 px-4 rounded-md'>Health & Beauty</li>
      </ul>
    </div>
  )
}

export default ProductsName