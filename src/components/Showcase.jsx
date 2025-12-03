import { useGSAP } from "@gsap/react"
import { useMediaQuery } from "react-responsive"
import gsap from "gsap"
const Showcase = () => {
    const isTablet = useMediaQuery({query:"(max-width:1024px)"})
    useGSAP(()=>{
        if(!isTablet)
        {
            const timeline = gsap.timeline({
                scrollTrigger:{
                    trigger:"#showcase",
                    start:"top top",
                    end:"bottom top",
                    scrub:true,
                    pin:true,
                   
                }
            });
            timeline.to(".mask.img" ,{
                transform: "scale(1.1)",
            }).to('.content' ,{
                opacity:1,
                y:0,
                ease:'power1.in'
            })

        }
    },[isTablet])
    return (
        <section   id="showcase">
           <div className="media">
            <video src="/videos/game.mp4" loop muted autoPlay playsInline/>
           <div className="mask">
            <img src="/mask-logo.svg" alt="mask-logo" />

           </div>
           </div>
           <div className="content">
            <div className="wrapper">
                <div classname="lg:max-w-md">
                    <h2> Rocket chip</h2>

                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            Introducing{" "}
                            <span className="text-white">
                                M4, the next generation of apple silicon.
                            </span>
                            .M4 powers
                        </p>
                        <p>
                            This is apple device Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis tempora corrupti voluptate temporibus unde inventore sapiente nam explicabo ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, tempora?
                        </p>
                        <p classname="text-primary">Learn More about apple chipset</p>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}
export default Showcase