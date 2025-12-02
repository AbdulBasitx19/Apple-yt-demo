import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import gsap from "gsap";
import {ScrollTrigger , SplitText } from "gsap/all";
import ProductViewer from './components/ProductViewer'
gsap.registerEase(ScrollTrigger,SplitText);
const App = () => {
  return (
    <main>
          <Navbar />
          <Hero />
          <ProductViewer />
    </main>
   
  )
}

export default App