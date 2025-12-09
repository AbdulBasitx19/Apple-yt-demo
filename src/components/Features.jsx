import { Canvas } from "@react-three/fiber"
import StudioLights from "./three/StudioLights"
import { features, featureSequence } from "../constant"
import clsx from 'clsx'
import { Suspense, useEffect, useRef } from "react"
import { Html } from "@react-three/drei"
import { useMediaQuery } from 'react-responsive'
import useMacBookStore from "../store"
import MacbookModel from "./models/Macbook"

import MacbookModel14 from "./models/Macbook-14"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const ModelScroll = () => {
  const groupRef = useRef(null);
   const { setTexture } = useMacBookStore();
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement('video');

      Object.assign(v,
        {
          src: feature.videoPath,
          muted: true,
          preload: 'auto',
          playsInline: true,
          crossOrigin: 'anonymous',
        }
      );
      v.load();
    })
  }, [])

  useGSAP(() => {

    //3D model rotation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true
      }
    });



    //Sync
    const timeline = gsap.timeline(
      {
        scrollTrigger: {
          trigger: '#f-canvas',
          start: 'top center',
          end: 'bottom top',
          scrub: 1

        }
      });
    //3D model spin
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2 , ease :'power1.inOut'})
    }
//content and texture Sync
timeline.call(()=>setTexture('/videos/feature-1.mp4'))
.to('.box1',{opacity:1 ,y:0})



.call(()=>setTexture('/videos/feature-2.mp4'))
.to('.box2',{opacity:1 ,y:0})

.call(()=>setTexture('/videos/feature-3.mp4'))
.to('.box3',{opacity:1 ,y:0})



.call(()=>setTexture('/videos/feature-4.mp4'))
.to('.box4',{opacity:1 ,y:0})



.call(()=>setTexture('/videos/feature-5.mp4'))
.to('.box5',{opacity:1 ,y:0})


  }, [])
 
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">loading...</h1> </Html>} >

        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />




      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id="features">
      <h2>see it all in a new light.</h2>
      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>
      <div className=" absolute inset-0">
        {features.map((feature, index) => (
          <div key={index} className={clsx('box', `box${index + 1}`, feature.styles)}>
           <img src={feature.icon} alt={feature.highlight} />
           <p>
            <span className="text-white">
              {feature.highlight}
            </span>
            {feature.text}
           </p>
           
          </div>
        ))}

      </div>
    </section>
  )
}

export default Features