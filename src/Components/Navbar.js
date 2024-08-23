import React from 'react'
import Logo from '../Img/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className='w-full bg-white h-full flex justify-center items-center relative top-0 backdrop-blur-2xl'>
        <div className='nav flex justify-between items-center  text-[1.10rem] font-semibold w-[85%]'>
            <div className='logo'>
              <img src={Logo} className='w-20 h-20 object-cover'/>
            </div>
            <div className='nav-items flex'>
                <ul className='flex'>
                    <li><Link className='px-2' to="/">Home</Link></li>
                    <li><Link className='px-2' to="/about">About</Link></li>
                    <li><Link className='px-2' to="/skills">Skills</Link></li>
                    <li><Link className='px-2' to="/projects">Projects</Link></li>
                    <li><Link className='px-2' to="/connect">Connect</Link></li>
                </ul>
            </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
