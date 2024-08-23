import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";


const Connect = () => {
  return (
    <>
      <div>
        <div className='title text-center my-10 mt-44'>
          <h1 className='text-5xl font-bold'>Get in touch</h1>
          <p>Contact Me</p>
          <div className='connect flex w-[70%] m-auto '>
            <div className='connect-desc flex gap-2 w-full my-10'>
              <div className=' w-full flex flex-col justify-center items-center '>
                <h2 className='pb-6 text-center text-2xl font-semibold'>Talk to me</h2>
                <div className='flex flex-col gap-4'>
                  <div className='flex border-2 flex-col w-full rounded-xl bg-white items-center justify-center px-20 py-5'>
                    <MdOutlineMarkEmailUnread className='text-3xl'/>
                    <h6 className='font-semibold text-xl'>Email</h6>
                    <p className='text-[20px] pt-1 text-gray-700 pb-3 '>user@gmail.com</p>
                    <a href='#' className='flex items-center text-gray-700'>Write me<IoIosArrowRoundForward className='text-2xl'/></a>
                  </div>
                  <div className='flex border-2 flex-col w-full rounded-xl bg-white items-center justify-center px-20 py-5'>
                    <FaWhatsapp className='text-3xl'/>
                    <h6 className='font-semibold text-xl'>Whatsapp</h6>
                    <p className='text-[20px] pt-1 text-gray-700 pb-3 '>999-888-777</p>
                    <a href='#' className='flex items-center text-gray-700'>Write me<IoIosArrowRoundForward className='text-2xl'/></a>
                  </div>
                  <div className='flex border-2 flex-col w-full rounded-xl bg-white items-center justify-center px-20 py-5'>
                    <CiLinkedin className='text-3xl'/>
                    <h6 className='font-semibold text-xl'>Linkedin</h6>
                    <p className='text-[20px] pt-1 text-gray-700 pb-3 '>user.fb123</p>
                    <a href='#' className='flex items-center text-gray-700'>Write me<IoIosArrowRoundForward className='text-2xl'/></a>
                  </div>
                </div>
              </div>
              <div className='w-full mt-1'>
                <h2 className='pb-2 text-center text-2xl font-semibold'>Write me your Project</h2>
                <form className=''>
                  <fieldset className='mb-5'>
                    <legend>Name</legend>
                    <input type="text" placeholder="Insert your name" required />
                  </fieldset>

                  <fieldset className='my-5'>
                    <legend>Email</legend>
                    <input type="email" placeholder="Insert your email" required />
                  </fieldset>

                  <fieldset>
                    <legend>Project</legend>
                    <textarea rows="9" cols="30" placeholder="Write your project" required></textarea>
                  </fieldset>

                  <button className='btn bg-black text-white my-7 flex items-center justify-center px-7 py-4 rounded-3xl mt-15'>Send Message<CiLocationArrow1 className='text-2xl ml-2'/>
                </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
