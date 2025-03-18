import React from 'react'

function Heading({title}) {
  return (
    <div className='flex gap-4 my-8'>
        <span className='w-6 bg-red-600 rounded-md'></span>
        <p className='text-red-600 py-3 text-lg font-bold'>{title}</p>
    </div>
  )
}

export default Heading