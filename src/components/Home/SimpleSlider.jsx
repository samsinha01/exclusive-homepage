import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SimpleSlider({ sliderImg }) {
  console.log("hello", sliderImg);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {sliderImg.map((image, index) => (
        <div key={index}>
            <div className='flex'>
                <div className='flex-1 ps-12 py-5 flex flex-col justify-evenly'>
                <div className='flex gap-5 items-center'>
                    <i className="fa-brands fa-apple text-white text-6xl"></i>
                    <p className='text-white text-lg'>iPhone 14 Series</p>
                </div>
                <div>
                    <h1 className='text-white leading-tight text-7xl font-bold'>Up to 10% off Voucher</h1>
                </div>
                <div className='flex gap-6 items-center'>
                    <a href="#" className='border-b-2 border-white text-white font-semibold pb-1 text-xl'>Shop Now</a>
                    <i className="fa-solid fa-arrow-right text-2xl text-white "></i>
                </div>
                </div>
                <div className='flex-1'>
                <img src="img/hero_sec.png" alt="hero-sec-img" className='w-auto h-[375px]'/>
                </div>
            </div>
        </div>
      ))}
    </Slider>
  );
}

export default SimpleSlider;
