import React, { useState } from 'react';
import './Nav.module.scss';

function Nav() {
  const [menu, setMenu] = useState('Home');
  const [navOpen, setNavOpen] = useState(false); // State to toggle nav

  return (
    <>
      <nav className="border-b-2 border-gray-300 p-3 pt-7">
        <div className="flex lg:justify-between lg:items-center w-[85vw] my-0 mx-auto flex-col lg:flex-row">
          {/* Logo and Toggle Menu */}
          <div className="flex justify-between flex-grow items-center">
            <p className="text-2xl font-bold">Exclusive</p>

            {/* Toggle Button (Keeping Original Hamburger Animation) */}
            <div className="toggle-menu block lg:hidden" onClick={() => setNavOpen(!navOpen)}>
              <label className="flex flex-col gap-2 w-8 cursor-pointer">
                <div
                  className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 ${
                    navOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''
                  }`}
                ></div>
                <div
                  className={`rounded-2xl h-[3px] w-full bg-black duration-500 ${
                    navOpen ? '-rotate-45' : ''
                  }`}
                ></div>
                <div
                  className={`rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end ${
                    navOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''
                  }`}
                ></div>
              </label>
            </div>
          </div>

          {/* Navigation Links - Mobile Animation Applied */}
          <div
            className={`lg:flex-grow lg:text-center sm:mt-7 lg:mt-0 nav-links lg:block transition-all duration-500 ease-in-out 
              ${navOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-5'}
              lg:opacity-100 lg:translate-y-0 lg:block`}
          >
            <ul className="flex lg:gap-10 sm:gap-2 justify-center text-md flex-col lg:flex-row">
              {['Home', 'Contact', 'About', 'SignUp'].map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setMenu(item);
                    setNavOpen(false); // Close menu on click
                  }}
                  className={`cursor-pointer ${
                    menu === item ? 'lg:border-b-2 border-black' : ''
                  }`}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-Side Search and Icons */}
          <div className="hidden lg:block">
            <div className="flex gap-3 items-center justify-end">
              <div className="flex relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="py-2 px-3 bg-gray-200 rounded-md border border-gray-300 w-[250px]"
                />
                <figure className="absolute right-2 top-2">
                  <img src="img/search_icon.png" alt="icon"/>
                </figure>
              </div>
              <img src="img/like_icon.png" alt="icon" className='hover:cursor-pointer hover:p-1 rounded-full transition duration-150 hover:bg-slate-300'/>
              <img src="img/cart_icon.png" alt="icon" className='hover:cursor-pointer hover:p-1 rounded-full transition duration-150 hover:bg-slate-300'/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
