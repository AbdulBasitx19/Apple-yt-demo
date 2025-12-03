import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import MacbookModel14 from "../models/Macbook-14";
import MacbookModel16 from "../models/Macbook-16";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 6;


const fadeMeshes = (group, opacity) => {
    if (!group) return;
    group.traverse((child) => {
        if (child.ismesh) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if (!group) {
        return;
    }
    gsap.to(group.position, { x, duration: ANIMATION_DURATION });
}
const ModelSwitcher = ({ scale, isMobile }) => {
    const smallMacbookRef = useRef();
    const LargeMacbookRef = useRef();
    const showLargeMacbook = scale === 0.08 || scale === 0.05;

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
            moveGroup(LargeMacbookRef.current, 0);

            fadeMeshes(smallMacbookRef.current, 0);
            fadeMeshes(LargeMacbookRef.current, 1);

        }
        else {
            moveGroup(smallMacbookRef.current, 0);
            moveGroup(LargeMacbookRef.current, OFFSET_DISTANCE);

            fadeMeshes(smallMacbookRef.current, 1);
            fadeMeshes(LargeMacbookRef.current, 0);
        }
    }, [scale])


    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        polar: [-Math.PI, Math.PI],
        azimuth: [-Infinity, Infinity],
        config: { mass: 0, tension: 0, friction: 26 }
    }
    return (
        <>
            <group>
                <PresentationControls {...controlsConfig}>
                    <group ref={LargeMacbookRef}>
                        {/* <macbookmodel16 scale={isMobile ? 0.05 : 0.08} /> */}
                        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
                    </group>
                </PresentationControls>
            </group>


            <group>
                <PresentationControls {...controlsConfig}>
                    <group ref={smallMacbookRef}>
                        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
                    </group>
                </PresentationControls>
            </group>

        </>

    )
}

export default ModelSwitcher