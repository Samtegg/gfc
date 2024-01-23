import React from 'react'
import Navbar from '../components/homepage/navbar/Navbar'
import Hero from '../components/homepage/hero/Hero'
import HowItWorks from '../components/homepage/howitworks/HowItWorks'
import Com from '../components/homepage/com/Com'
import Activities from '../components/homepage/activities/Activities'
import Levels from '../components/homepage/levels/Levels'
import About from '../components/homepage/about/About'
import Try from '../components/homepage/try/Try'
import Over from '../components/homepage/over/Over'
import Footers from '../components/homepage/footer/Footers'


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Com />
      <Activities />
      <Levels />
      <About />
      <Try />
      <Over />
      <Footers />
      
      

      


    </div>
  )
}

export default Home