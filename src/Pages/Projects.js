import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from '../Img/Screenshot (17).png'


const Projects = () => {
  return (
    <>
      <div>
      <div className='title text-center mt-32'>
            <h1 className='text-5xl font-bold'>Projects</h1>
            <p className='pt-2'>Recent Projects</p>
        </div>

        <div>
            <div className='project w-[60%] m-auto'>
              <div className='flex items-center justify-center py-10'>
              <button className='rounded-lg mx-2 font-semibold py-2 px-4 bg-black text-white '>All</button>
              <button className='rounded-lg mx-2 font-semibold py-2 px-4 hover:bg-black hover:text-white hover:transition-colors'>Html & CSS</button>
              <button className='rounded-lg mx-2 font-semibold py-2 px-4 hover:bg-black hover:text-white hover:transition-colors'>JS</button>
              <button className='rounded-lg mx-2 font-semibold py-2 px-4 hover:bg-black hover:text-white hover:transition-colors'>React</button>
              <button className='rounded-lg mx-2 font-semibold py-2 px-4 hover:bg-black hover:text-white hover:transition-colors'>Backend</button>
              </div>

            <div className='project-items flex items-center flex-wrap justify-center gap-12'>
              <div className='wContent w-[40%] h-full bg-white p-6 border-2  rounded-xl'>
                <div>
                  <img src={img1} className='w-full h-full rounded-xl object-cover'/>
                  <h6 className='font-semibold mt-3'>Web design</h6>
                  <a className='text-[16px] text-gray-600 flex items-center'>Demo <IoIosArrowRoundForward className='text-2xl'/> </a>     
                </div>
              </div>
              <div className='wContent w-[40%] h-full bg-white p-6 border-2  rounded-xl'>
                <div>
                  <img src={img1} className='w-full h-full rounded-xl object-cover'/>
                  <h6 className='font-semibold mt-3'>Web design</h6>
                  <a className='text-[16px] text-gray-600 flex items-center'>Demo <IoIosArrowRoundForward className='text-2xl'/> </a>     
                </div>
              </div>
              <div className='wContent w-[40%] h-full bg-white p-6 border-2  rounded-xl'>
                <div>
                  <img src={img1} className='w-full h-full rounded-xl object-cover'/>
                  <h6 className='font-semibold mt-3'>Web design</h6>
                  <a className='text-[16px] text-gray-600 flex items-center'>Demo <IoIosArrowRoundForward className='text-2xl'/> </a>     
                </div>
              </div>
              <div className='wContent w-[40%] h-full bg-white p-6 border-2  rounded-xl'>
                <div>
                  <img src={img1} className='w-full h-full rounded-xl object-cover'/>
                  <h6 className='font-semibold mt-3'>Web design</h6>
                  <a className='text-[16px] text-gray-600 flex items-center'>Demo <IoIosArrowRoundForward className='text-2xl'/> </a>     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

