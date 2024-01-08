import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const useGsapProjectLeftRightReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    // const el = items.current;
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const slideLeftAnimation = (item) => {
  gsap.from(item, {
    x: "100%", // Slide from right to left
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });
  gsap.utils.toArray(".tile-project").forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%", // Adjust this threshold as needed
      onEnter: () => slideLeftAnimation(item),
    });
  });
};

export const fromto = (listItems) => {
  // const el = listItems.map((item) => item.current);
  const el = listItems.current;
  gsap.from(listItems, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
    },
  });
};
