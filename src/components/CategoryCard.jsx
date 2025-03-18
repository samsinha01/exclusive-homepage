import React from 'react';

function CategoryCard() {
  return (
    <div className='border-2 border-gray-400 rounded-md py-5 px-14 flex flex-col justify-center items-center gap-4 
                    transition-all duration-300 hover:bg-red-600 hover:text-white cursor-pointer'>
      <img src="img/Category-CellPhone.png" alt="Category" />
      <p className='font-semibold text-md '>Phones</p>
    </div>
  );
}

export default CategoryCard;
