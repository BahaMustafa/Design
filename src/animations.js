import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll() {
  gsap.from('.project', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: '.portfolio-section',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });
}
