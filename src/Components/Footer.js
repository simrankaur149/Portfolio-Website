import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='bg-white text-center w-full h-full p-16'>
        <h1 className='text-3xl font-bold'>Simran</h1>
        <ul className='flex py-5 text-xl justify-center  items-center'>
            <li className='px-5'><Link to='/about'>About</Link></li>
            <li className='px-5'><Link to='/about'>Projects</Link></li>
            <li className='px-5'><Link to='/about'>Contact</Link></li>
        </ul>
        <div className='icons w-full justify-center flex items-center text-2xl'>
            <FaInstagram className='mx-4'/>
            <MdOutlineMarkEmailUnread className='mx-4'/>
            <FaWhatsapp className='mx-4'/>
            <CiLinkedin className='mx-4'/>
        </div>
        <p className='py-12'>&copy;2014. All Right Reserved</p>
      </div>
    </>
  )
}

export default Footer
