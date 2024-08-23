import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import person1 from '../Img/person.jpg';
import person2 from '../Img/person2.jpg';
import person3 from '../Img/person3.jpg';




const Testmonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

  return (
    <>
    <div>
    <div className='title text-center mt-24 my-12'>
            <h1 className='text-5xl font-bold'>Testimonial</h1>
            <p>My clients say</p>
        </div>
      <div className="slider-container my-10 w-[70%] m-auto flex flex-col gap-4 ">
      <Slider {...settings}>
               <div className='testimonial-slide p-2'>
                            <div className='rounded-xl border-2 bg-white p-5'>
                                <img src={person1} className='w-12 h-12 object-cover rounded-full' alt="person1"/>
                                <h6 className='font-semibold'>Jhon Deo</h6>
                                <p className='text-[12px] text-gray-700 pb-4'>A really good job, all aspects of the project were followed step by step and with good results.</p>
                            </div>
               </div>
               <div className='testimonial-slide p-2'>
                            <div className='rounded-xl border-2 bg-white p-5'>
                                <img src={person2} className='w-12 h-12 object-cover rounded-full' alt="person2"/>
                                <h6 className='font-semibold'>Harry Clin</h6>
                                <p className='text-[12px] text-gray-700 pb-4'>A really good job, all aspects of the project were followed step by step and with good results.</p>
                            </div>
               </div>
               <div className='testimonial-slide p-2'>
                            <div className='rounded-xl border-2 bg-white p-5'>
                                <img src={person3} className='w-12 h-12 object-cover rounded-full' alt="person3"/>
                                <h6 className='font-semibold'>Sara Cill</h6>
                                <p className='text-[12px] text-gray-700 pb-4'>A really good job, all aspects of the project were followed step by step and with good results.</p>
                            </div>
               </div>
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Testmonials
