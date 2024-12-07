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

export const parallaxElement = (element: string) => {
  gsap.to(element, {
    y: -100,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom top',
      scrub: true,
    },
  })
}

export const horizontalScroll = (container: string, elements: string) => {
  gsap.to(elements, {
    xPercent: -100 * (document.querySelectorAll(elements).length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: '+=3000',
    },
  })
}

