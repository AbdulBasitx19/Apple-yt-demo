import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";
import { snap } from "gsap";
import { gsap } from "gsap";
const ANIMATION_DURATION=1;
const OFFSET_DISTANCE=5;


const fadeMeshes =(group,opacity)=>{
    if(!group) return;
    group.traverse((child)=>{
        if(child.ismesh)
        {
            child.material.transparent = true;
            gsap.to(child.material,{opacity,duration:ANIMATION_DURATION})
        }
    })
}

const moveGroup =(group,x)=>{
        if(!group)
        {
            return;
        }
        gsap.to(group.position,{x,duration:ANIMATION_DURATION});
}
const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const LargeMacbookRef = useRef();
    const showLargeMacbook = scale === 0.08 || scale === 0.05;
    const controlsConfig ={
        snap:true,
        speed:1,
        zoom:1,
        polar:[-Math.PI, Math.PI],
        azimuth:[-Infinity,Infinity],
        config:{mass:0,tension:0,friction:26}
    }
    return (
        <>
        <group>
            <PresentationControls {... controlsConfig}>
                <group ref={LargeMacbookRef}>
                    <macbookmodel16 scale={isMobile ? 0.05 : 0.08} />
                </group>
            </PresentationControls>
        </group>


         <group>
            {/* <PresentationControls>
                <group ref={smallMacbookRef}>
                    <macbookmodel14 scale={isMobile ? 0.03 : 0.06} />
                </group>
            </PresentationControls> */}
        </group>
         </>

   )
}

export default ModelSwitcher