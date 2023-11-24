import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Team from './components/Team'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {

  return (
    <div className=' h-[100vh] m-auto bg-[#FAFDF2]'>
      <div >
        <Header />
      </div>
      <div className=' max-w-[1920px] m-auto'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/team' element={<Team />}/>
          <Route path='/process' element={<Process />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </div>
    
  )
}

export default App
