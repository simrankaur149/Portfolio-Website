import React, { useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import projectData from '../data/projectData';
import { Link } from 'react-router-dom';



const Projects = () => {
  const[selectedBtn,setSelectedBtn]=useState('All');

 const filteredBtn = selectedBtn === 'All'
 ? projectData 
 : projectData.filter((item)=> item.categories.some((category) => category === selectedBtn));

  return (
    <>
      <div>
        <div className='title text-center mt-20'>
          <h1 className='text-5xl font-bold'>Projects</h1>
          <p className='pt-2'>Recent Projects</p>
        </div>
        <div>
          <div className='project w-[80%] m-auto'>
            <div className='flex items-center justify-center py-5'>
              {
                ['All', 'HTML & CSS', 'JS', 'REACT', 'Backend', 'PHP'].map((item, index) => (
                  <button key={index} className='rounded-lg mx-2 font-semibold py-2 px-4 hover:bg-black hover:text-white hover:transition-colors'
                  onClick={()=>setSelectedBtn(item)}
                  >{item}</button>
                ))
              }
            </div>

            <div className="grid gap-6 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                max-w-7xl mx-auto p-4 pro">
              {filteredBtn.map((data) => (
                <div key={data.id} className="wContent bg-white border-2 rounded-xl">
                  <Link to={data.link} className="text-[16px] text-gray-600 flex items-center">
                    <div>
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full rounded-t-xl object-cover"
                      />
                      <h6 className="font-semibold pt-2 text-center p-6 mt-3">{data.title}</h6>

                    </div>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

