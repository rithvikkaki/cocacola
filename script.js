var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".two",
      start: "0% 90%",
      end: "50% 50%",
      scrub: 1,
      // markers: true,
    }
  });
  
  tl.to("#cola", {
    top: "120%", 
    left: "10%",
  }, 'orange');
  
  tl.to("#orange-cut", {
    top: "150%",
    left: "23%",
  }, 'orange');
  
  tl.to("#orange", {
    width: "10%",
    top: "160%",
    right: "5%",
  }, 'orange');
  
  tl.to("#leaf", {
    top: "110%",
    rotate: "130deg",
    left: "80%",
  }, 'orange');
  
  tl.to("#leaf2", {
    top: "100%",
    rotate: "50deg",
    left: "0%",
  }, 'orange');
  
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".three",
      start: "10% 90%",
      end: "20% 50%",
      scrub: 1,
    //   markers: true,
    },
  });
  
  tl2.from("#cube", {
    rotate: "-90deg",
    left: "-10%",
    top: "110%",
  }, 'ca');
  
  tl2.from("#cococola", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  }, 'ca');
  
  tl2.from("#lemon", {
    rotate: "90deg",
    left: "10%",
    top: "110%",
    width: "10%", 
  }, 'ca');
  
  tl2.from("#l-cococola", {
    rotate: "90deg", 
    left: "90%",
    top: "110%",
  }, 'ca');
  
  tl2.to("#orange-cut", {
    width: "15%",
    left: "41%",
    top: "200%",
  }, 'ca');
  
  tl2.to("#cola", {
    width: "21%",
    left: "38%",
    top: "210%",
  }, 'ca');
  