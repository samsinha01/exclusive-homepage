import React from 'react'

function Header() {
  return (
    <>
        <header className='bg-black py-2 px-7 text-white hidden md:block'>
            <div className='flex justify-between items-center w-[85vw] my-0 mx-auto'>
                <div className='flex justify-center items-center flex-grow gap-2'>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <a href="#" className='border-b'>ShopNow</a>
                </div>
                <div>
                    <select name="language" className='bg-black text-white'>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="spanish">Spanish</option>
                        <option value="germany">Germany</option>
                    </select>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header