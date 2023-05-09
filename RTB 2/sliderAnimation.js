const timeLine = gsap.timeline({ repeat: -1 });
timeLine.to(".products_container", {
  transform: "translateX(-10rem)",
  duration: 2,
  delay: 2,
});
timeLine.to(".products_container", {
  transform: "translateX(-20rem)",
  duration: 2,
  delay: 2,
});
timeLine.to(".products_container", {
  transform: "translateX(-30rem)",
  duration: 2,
  delay: 2,
});
timeLine.to(".products_container", {
  transform: "translateX(0)",
  duration: 0,
});
