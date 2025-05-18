// NumbersScrollEffect.jsx
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NumbersScrollEffect() {
    

  useEffect(() => {
    gsap.to(".number-track", {
      xPercent: -200,
      scale: 1.5,
      scrollTrigger: {
        trigger: ".number-scroll-wrapper",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });
  }, []);

  return null;
}
