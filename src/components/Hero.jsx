import React, { useEffect } from 'react'
import { useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.playbackRate = 3;
        }
    },[])
  return (
   <section id='hero'>
    <div>
        <h1>
            MackBook Pro
        </h1>
        <img src="/title.png" alt="MacBook Pro Title" />
    </div>
    <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

    <button>Buy Apple Products</button>

    <p>From $1.5 to $0.09/month from Apple.com</p>
   </section>
  )
}

export default Hero