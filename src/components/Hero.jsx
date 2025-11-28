import React, { useEffect } from 'react'
import { useRef } from 'react';

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(()=>
    {
        if(videoRef.current)
        {
            videoRef.current.playbackRate = 3;
        }

    },[]     )
    
  return (
    <section id='hero'>
<div>
    <h1>Mac Book Pro</h1>
    <img src="/title.png" alt="Mac Book Pro Title " />
</div>
<video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
<button>BUY NOW</button>
<p>From  $1.5 to $0.09/month from apple .com</p>
    </section>
  )
}

export default Hero