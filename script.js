console.log(99999);

//HORIZONTAL SCROLLING
let sections = gsap.utils.toArray(".section_scroll");

// gsap
//   .to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     scrollTrigger: {
//       trigger: ".section_container",
//       pin: true,
//       scrub: true,
//       // start: "top top",
//       // end: "bottom center",
//       // snap: 1 / (sections.length - 1),
//       end: () =>
//         "+=" + document.querySelector(".section_container").offsetWidth,
//     },
//   })
//   .to(".section_scroll_title", {});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_container",
      start: "center center",
      end: "bottom top",
      //   markers: true,
      scrub: true,
      pin: true,
      snap: 1 / (sections.length - 1),
      end: () =>
        "+=" + document.querySelector(".section_container").offsetWidth,
    },
  })
  //IF THERE IS NO EASE => SOME BUG IN CHANGE BETWEEN LAYERS!
  .to(sections, { xPercent: -100 * (sections.length - 1), ease: "none" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section_scroll_title",
      start: "top top",
      end: "bottom top",
      markers: true,
      scrub: true,
      pin: true,
    },
  })
  .to(".section_scroll_title", { xPercent: 50, opacity: 0.7 });

gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});
