// use a script tag or an external JS file
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!

  const images = gsap.utils.toArray(".inner-container img");

  const getResponsiveValues = () => {
    return window.innerWidth < 420
    ? {xEnd: 250, yEnd: 450, rotate: -15}
    : window.innerWidth < 768
    ? {xEnd: 270, yEnd: 270, rotate: -20}
    : {xEnd: 400, yEnd: 200, rotate: -30};
  }

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: `+=${images.length * 250}%`,
      scrub: 10,
      fastScrollEnd: true,
      preventOverlaps: true,
      pin: true,
    },
  });

  tl.fromTo(".title", 
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: -50,
      duration: 0.2,
    }
  );

  images.forEach((image, i) => {

    const {xEnd, yEnd, rotate} = getResponsiveValues();
    tl.fromTo(`.text-${i + 1}`,
      {
        opacity: 0,
        y: 50,
        visibility: "visible",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
      },
      ">"
    );

    tl.fromTo(image, 
      {
        xPercent: -110,
        yPercent: -50,
        rotate: 0,
        visibility: "visible",
      },
      {
        xPercent: xEnd,
        yPercent: yEnd,
        rotate: rotate,
        duration: 1,
        ease: "none",
      },
      ">-0.3"
    );

    tl.to(
      `.text-${i + 1}`,
      {
        opacity: 0,
        y: -50,
        duration: 0.3,
        ease: "none",
      },
      "<+0.5"
    );
  });

  tl.fromTo(
    ".final",
    {
      opacity: 0,
      y: 50,
      visibility: "visible",
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "none",
    },
    ">+0.1"
  );
 });

 particlesJS("particles-js",
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",      
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 0.3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "none",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "retina_detect": true
  }
 )