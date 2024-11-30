import React from 'react'
import { GiAchievement } from "react-icons/gi";
import { PiSuitcase } from "react-icons/pi";
import { FaHeadphones } from "react-icons/fa6";
import { FaFileWaveform } from "react-icons/fa6";
import { BsMouse } from "react-icons/bs";

import profile from '../Img/profile.png'

const About = () => {
  const cvDownload = ()=>{
    const path = '/portfolio-website/Simran Resume.pdf';
    const a = document.createElement('a');
    a.href = path;
    a.download = 'Simran Resume.pdf';
    a.click();
}
  return (
    <>
      <div>
        <div className='title text-center mt-20 my-10'>
            <h1 className='text-5xl font-bold'>About Me</h1>
            <p>My introduction</p>
        </div>
        <div className='about-two  w-[85%] m-auto flex flex-wrap '>
            <div className='w-1/2 flex items-center justify-center'>
            <img src={profile} className='about-img w-80 rounded-xl'/>
            </div>
            <div className='about-desc w-[40%]'>
                <div className='about-main flex'>
                    <div className='text border-2 w-32 px-3 py-4 flex flex-col items-center justify-center bg-white rounded-2xl'>
                        <GiAchievement className=''/>
                        <h6 className='font-semibold'>Experience</h6>
                        <p className='text-[12px]'>Fresher</p>
                    </div>
                    <div className='text mx-2 border-2 w-32 px-3 py-4 flex flex-col items-center justify-center bg-white rounded-2xl'>
                        <PiSuitcase className=''/>
                        <h6 className='font-semibold'>Completed</h6>
                        <p className='text-[12px]'>20+ Projects</p>
                    </div>
                    <div className='text border-2 w-32 px-3 py-4 flex flex-col items-center justify-center bg-white rounded-2xl'>
                        <FaHeadphones className=''/>
                        <h6 className='font-semibold'>Support</h6>
                        <p className='text-[12px]'>Online 24/7</p>
                    </div>
                </div>
                <p className=' text-[1.2rem] mt-6 text-gray-800'>Passionate full-stack web developer eager to build high-quality, dynamic web applications. Dedicated to learning and delivering innovative solutions that meet your needs and exceed expectations.</p>
                <button className='btn bg-black text-white my-10 flex items-center justify-center px-7 py-4 rounded-3xl'
                onClick={cvDownload}
                >Download CV<FaFileWaveform className='text-2xl ml-2'/>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
