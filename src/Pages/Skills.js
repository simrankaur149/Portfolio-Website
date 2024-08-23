import React from 'react'
import { HiOutlineBadgeCheck } from "react-icons/hi";


const Skills = () => {
  return (
    <>
      <div className='mb-10'>
        <div className='title text-center mt-20 my-10'>
            <h1 className='text-5xl font-bold'>Skills</h1>
            <p>My technical level</p>
        </div>
        <div className='skill-card w-[80%] m-auto flex items-center justify-around gap-0'>
        <div className='skill-desc text border-2 w-[35%] px-3 py-10  m-auto flex flex-col  bg-white rounded-2xl'>
            <h2 className='pb-6 text-center text-2xl font-semibold'>Frontend Developer</h2>
            <div className=' flex px-10 items-center justify-between'>
                <div className='first-row'>
                    <div className='flex items-center '>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>HTML</h6>
                    </div>
                    <p className='text-[12px]'>Advanced</p>
                    <div className='flex items-center pt-4'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>CSS</h6>
                    </div>
                    <p className='text-[12px] pb-4'>Advanced</p>
                    <div className='flex items-center'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Javascript</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                </div>
                <div className='second-Row'>
                    <div className='flex items-center '>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Bootstap</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                    <div className='flex items-center pt-4'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Git</h6>
                    </div>
                    <p className='text-[12px] pb-4'>Intermediate</p>
                    <div className='flex items-center'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>React</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                </div>
            </div>
            
        </div>
        <div className='skill-desc text border-2 w-[35%] px-3 py-10  m-auto flex flex-col  bg-white rounded-2xl'>
            <h2 className='pb-6 text-center text-2xl font-semibold'>Backend Developer</h2>
            <div className=' flex px-10  justify-between'>
                <div className='first-row'>
                    <div className='flex items-center '>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Node Js</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                    <div className='flex items-center pt-4'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Express Js</h6>
                    </div>
                    <p className='text-[12px] pb-4'>Intermediate</p>
                    <div className='flex items-center'>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>MongoDB</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                </div>
                <div className='second-Row'>
                    <div className='flex items-center '>
                        <HiOutlineBadgeCheck/>
                        <h6 className='font-semibold'>Firebase</h6>
                    </div>
                    <p className='text-[12px]'>Intermediate</p>
                    
                </div>
            </div>
            
        </div>
        </div>
      </div>
      
    </>
  )
}

export default Skills
