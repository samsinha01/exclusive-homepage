import React,{ useState, useEffect, useRef } from 'react'
import Slider from "react-slick";
import ProductCard from '../ProductCard';
import Heading from '../Heading';
import Button from '../Button';
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sales({ targetDate }) {
  // this part for carousel buttons
  const sliderRef = useRef(null);

  // initialize data from an redux store
  const salesProducts = useSelector((state) => state.products.salesProduct);

  // countdown timer
  const calculateTimeLeft = () => {
      const difference = targetDate - new Date();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);

    // react-slick carousel
    const settings = {
      dots: true,
      infinite: true,
      slickPrev:true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1280, // For screens below 1024px
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024, // For screens below 1024px
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768, // For screens below 768px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
        <section className='mt-4 lg:mt-24 w-[85vw] m-auto mb-0'>
            <Heading title={"Today's"}/>

            <div className='flex justify-between flex-col lg:flex-row gap-3'>
              <div className='flex gap-4 md:gap-14 md:items-end flex-col md:flex-row'>
                  <p className='text-5xl font-semibold'>Flash Sales</p>
                  <div className="flex gap-5">
                      {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                          <div key={unit} className="flex items-center gap-2">
                          <div className="flex flex-col justify-center text-center">
                              <p className="font-bold">{unit}</p>
                              <p className="font-bold text-4xl">{timeLeft[unit.toLowerCase()]}</p>
                          </div>
                          {index < 3 && (
                              <div className="flex flex-col justify-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
                              <span className="w-1 h-1 rounded-full bg-red-400 inline-block"></span>
                              </div>
                          )}
                          </div>
                      ))}
                  </div>
              </div>

              <div className='flex gap-4 items-center justify-between lg:justify-start'>
                <span onClick={() => sliderRef.current.slickPrev()} className="inline-block bg-gray-200 hover:bg-gray-400 rounded-full py-3 px-4">
                  <i className="fa-solid fa-arrow-left text-xl"></i>
                </span>
                <span onClick={() => sliderRef.current.slickNext()} className="inline-block bg-gray-200 rounded-full hover:bg-gray-400 py-3 px-4">
                  <i className="fa-solid fa-arrow-right text-xl"></i>
                </span>
              </div>
            </div>
            
            <Slider ref={sliderRef} {...settings} className='my-8'>
              {salesProducts.map((product, index) => (
                  <div key={index} className='mx-2'><ProductCard {...product} /></div>
                ))}
            </Slider>

            <div className='flex justify-center pb-12 border-b-2 border-gray-200 mb-14'>
              <Button btnVal={"View All Products"} padLine={12}/>
            </div>
        </section>
    </>
  )
}

export default Sales