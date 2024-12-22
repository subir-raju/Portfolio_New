import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

export default App