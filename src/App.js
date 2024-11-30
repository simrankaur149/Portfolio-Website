import React from 'react'
import Navbar from './Components/Navbar'
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Connect from './Pages/Connect';


const App = () => {
  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
        <Routes>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
        <Routes>
          <Route path='/connect' element={<Connect/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
