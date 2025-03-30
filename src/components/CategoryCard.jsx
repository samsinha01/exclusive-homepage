import React from 'react';

function CategoryCard({imgPath,name}) {
  return (
    <div className='border-2 border-gray-400 rounded-md py-5 px-14 flex flex-col justify-center items-center gap-4 
                    transition-all duration-300 hover:bg-red-600 hover:text-white cursor-pointer'>
      <img src={imgPath} alt={name}/>
      <p className='font-semibold text-md '>{name}</p>
    </div>
  );
}

export default CategoryCard;
