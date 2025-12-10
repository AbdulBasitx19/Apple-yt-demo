import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive"
const Highlights = () => {

  const isMobile = useMediaQuery({ query: '(max-width :1020px)' })
  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'],
      {
        scrollTrigger: {
          trigger: '#highlights',
          satrt: isMobile ? 'bottom bottom' : 'top top',

        },
        y: 0,
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: 'power1.inOut'
      }
    )
  })
  return (
    <section id="highlights">
      <h2>
        There's a never been a better time to upgrade
      </h2>
      <h3>
        Here's what you get with the new MacBook Pro
      </h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>
              Fly through Demanding demand upto 9.8x Fatser
            </p>
          </div>
          <div src="/sun.png" alt="sun">
            <p>A stunning <br />
              Liquid Retina XDR <br />Display</p>
          </div>
        </div>


        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>Built for<br />
              <span>Apple Intelligence</span></p>

          </div>
          <div>
            <img src="/battery.png" alt="battery" />
            <p> Up to
              <span className="green-gradient">{' '}14 more Hours{''} </span>Battery Life. <span className="text-dark-100">{' '}(Up to 24hrs in Total) {' '}</span>
            </p>


          </div>

        </div>
      </div>
    </section>
  )
}

export default Highlights