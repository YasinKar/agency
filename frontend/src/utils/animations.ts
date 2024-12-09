import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const revealText = (element: string) => {
  gsap.fromTo(
    element,
    {
      color: '#c2c2c2',
    },
    {
      color: '#ffffff',
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    }
  )
}
