import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Connect from './Connect'
import Testmonials from '../Components/Testmonials'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Testmonials/>
      <Connect/>
      <Footer/>
    </>
  )
}

export default Home
