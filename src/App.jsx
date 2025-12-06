import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import gsap from "gsap";
import Showcase from './components/Showcase'
import {ScrollTrigger , SplitText } from "gsap/all";
import Performance from './components/Performance'
import Features from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'
import ProductViewer from './components/ProductViewer'
gsap.registerEase(ScrollTrigger,SplitText);
const App = () => {
  return (
    <main>
          <Navbar />
          <Hero />
          <ProductViewer />
          <Showcase />
          <Performance />
          <Features />
          <Highlights />
          <Footer />
    </main>
   
  )
}

export default App