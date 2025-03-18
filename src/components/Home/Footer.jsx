import React from 'react'

function Footer() {
  return (
    <>
        <footer className='bg-black pt-7 mt-10'>
            <div className='w-[85vW] mt-10 pb-12 mx-auto'>
                <div className='flex flex-wrap gap-4 justify-between items-start text-white'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-semibold'>Exclusive</p>
                        <p className='font-semibold mt-3'>Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <input type="email" placeholder='Enter your email' className='border-2 border-white rounded-md py-2 px-3 pr-7 bg-transparent'/>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-semibold'>Support</p>
                        <a href="#" className='text-white mt-3'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                        <a href="mailto:exclusive@gmail.com" className='text-white'>exclusive@gmail.com</a>
                        <a href="tel:+8801 5888889999">+88015-88888-9999</a>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-semibold'>Account</p>
                        <a href="#" className='text-white mt-3'>My Account</a>
                        <a href="#" className='text-white'>Login / Register</a>
                        <a href="#" className='text-white'>Cart</a>
                        <a href="#" className='text-white'>Wishlist</a>
                        <a href="#" className='text-white'>Shop</a>
                    </div>
                    
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-semibold'>Quick Links</p>
                        <a href="#" className='text-white mt-3'>Privacy Policy</a>
                        <a href="#" className='text-white'>Terms Of Use</a>
                        <a href="#" className='text-white'>FAQ</a>
                        <a href="#" className='text-white'>Contact</a>
                    </div>
                    
                    <div className='flex flex-col gap-3'>
                        <p className='text-lg font-semibold'>Download App</p>
                        <p className='text-sm text-gray-300 mt-3'>Save $3 with App New User Only</p>
                        <div className='flex gap-2'>
                            <figure>
                                <img src="img/Qrcode.png" alt="qrcode" />
                            </figure>
                            <div className='flex flex-col justify-between gap-1'>
                                <img src="img/googlePlay.png" alt="google play store" />
                                <img src="img/appstore.png" alt="app store" />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <ul className='flex gap-2 justify-between'>
                                <li><img src="img/fb.png" alt="" /></li>
                                <li><img src="img/twitter.png" alt="twitter-img" /></li>
                                <li><img src="img/insta.png" alt="" /></li>
                                <li><img src="img/linkedin.png" alt="" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-2 px-3 border-t-2 border-gray-800 text-gray-800 text-center'>&copy; Copyright Rimel 2022. All right reserved</p>
        </footer>
    </>
  )
}

export default Footer