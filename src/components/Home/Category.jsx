import React, { useRef } from 'react'
import Heading from '../Heading'
import CategoryCard from '../CategoryCard'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category() {
    // for carousel
    const sliderRef = useRef(null);

    // initialize data from redux store
    const categoryProduct = useSelector((state) =>state.products.category);

    // react slick-slider code
    const settings = {
        dots: true,
        infinite: true,
        slickPrev:true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280, // For screens below 1024px
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024, // For screens below 1024px
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768, // For screens below 768px
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576, // For screens below 768px
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <section>
            <div className='w-[85vw] my-10 mx-auto'>
                <Heading title={"Categories"}/>

                <div>
                    <div className='flex gap-4 justify-between md:gap-14 md:items-end flex-col md:flex-row'>
                        <p className='text-4xl md:text-5xl font-semibold'>Browse By Category</p>

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
                        {categoryProduct.map((product,index)=>(
                            <div key={index} className='px-3'><CategoryCard {...product} /></div>
                        ))}
                    </Slider>

                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Category