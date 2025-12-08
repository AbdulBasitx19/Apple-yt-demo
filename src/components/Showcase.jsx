import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"
import gsap from "gsap";
const Showcase = () => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });
            timeline.to(".mask img", {
                transform: "scale(1.1)"
            }).to('.content', {
                opacity: 1,
                y: 0,
                ease: 'power1.in'
            });

        }
    }, [isTablet])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop autoPlay muted playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" alt="Mask Logo" />
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className=" lg:max-w-md">
                        <h2>Rocket Chips</h2>
                        <div className=" space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next genration of apple chips
                                </span>
                                .M4 powers
                            </p>
                            <p>
                                Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide. So, what is it? Cake or pie?
                            </p>
                            <p>
                                The choice was red, green, or blue. It didn't seem like an important choice when he was making it, but it was a choice nonetheless. Had he known the consequences at that time, he would likely have considered the choice a bit longer. In the end, he didn't and ended up choosing blue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase