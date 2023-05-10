const timeline = gsap.timeline({ repeat: -1 });

timeline.from(".yellow-background", {
  transform: "translateY(37.5rem)",
  duration: 0.3,
});
timeline.to(".image-warsaw", {
  transform: "translateX(0)",
  duration: 0.1,
});
timeline.to(".logo", {
  transform: "translateY(18.75rem) translateX(0)",
  duration: 0.4,
});
timeline.to(
  ".logo",
  {
    transform: "translateY(0) translateX(0)",
    duration: 0.4,
  },
  "+=0.2"
);
timeline.to(
  ".yellow-background",
  {
    transform: "translateY(-37.5rem)",
    duration: 0.3,
  },
  "+=0.2"
);
timeline.to(
  ".image-warsaw",
  {
    transform: "scale(1.2)",
    duration: 5,
  },
  "-=0.2"
);
timeline.from(
  ".squares-container",
  {
    transform: "translateY(5rem)",
    duration: 0.3,
  },
  "-=5.2"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "3.9rem",
    padding: "0.125rem 0.5rem 0 0.5rem",
    duration: 0.2,
  },
  "-=5"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "11rem",
    padding: "0 0.625rem",
    duration: 0.2,
  },
  "-=4.7"
);
timeline.to(
  ".country-poland",
  {
    display: "block",
  },
  "-=4.7"
);
timeline.from(
  ".book-now",
  {
    transform: "translateX(15rem)",
    duration: 0.2,
  },
  "-=4.7"
);
timeline.from(
  ".price-animation-container",
  {
    transform: "translateY(3rem)",
    duration: 0.2,
  },
  "-=4.7"
);
timeline.to(
  ".line",
  {
    width: "4.10rem",
    duration: 0.4,
  },
  "-=4.7"
);
timeline.from(
  ".city-poland",
  {
    transform: "translateY(3rem)",
    duration: 0.2,
  },
  "-=4.5"
);
timeline.to(
  ".country-poland",
  {
    transform: "translateY(-2rem)",
    duration: 0.2,
  },
  "-=1.5"
);
timeline.to(
  ".city-poland",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.4"
);
timeline.to(
  ".price-animation-container",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.4"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.2,
  },
  "-=1.3"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.2,
  },
  "-=1.2"
);
timeline.to(
  ".image-madrid",
  {
    transform: "translateX(0)",
    duration: 0.3,
  },
  "-=1.1"
);
timeline.to(
  ".image-madrid",
  {
    transform: "scale(1.2)",
    duration: 5,
  },
  "-=0.8"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "3.9rem",
    padding: "0.125rem 0.5rem 0 0.5rem",
    duration: 0.2,
  },
  "-=5"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "11rem",
    padding: "0 0.625rem",
    duration: 0.2,
  },
  "-=4.8"
);
timeline.to(
  ".country-poland",
  {
    display: "none",
    duration: 0,
  },
  "-=4.8"
);
timeline.to(
  ".country-spain",
  {
    display: "block",
    duration: 0,
  },
  "-=4.8"
);
timeline.from(
  ".country-spain",
  {
    transform: "translateY(2rem)",
    duration: 0.2,
  },
  "-=4.7"
);
timeline.to(
  ".price-poland",
  {
    display: "none",
    duration: 0,
  },
  "-=4.7"
);
timeline.to(
  ".price-spain",
  {
    display: "block",
    duration: 0,
  },
  "-=4.7"
);
timeline.to(
  ".price-animation-container",
  {
    transform: "translateY(0)",
    duration: 0.2,
  },
  "-=4.6"
);
timeline.to(
  ".city-poland",
  {
    display: "none",
    duration: 0,
  },
  "-=4.6"
);
timeline.to(
  ".city-spain",
  {
    display: "block",
    duration: 0,
  },
  "-=4.6"
);
timeline.from(
  ".city-spain",
  {
    transform: "translateY(3rem)",
    duration: 0.2,
  },
  "-=4.4"
);
timeline.to(
  ".country-spain",
  {
    transform: "translateY(-2rem)",
    duration: 0.2,
  },
  "-=1.4"
);
timeline.to(
  ".city-spain",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.3"
);
timeline.to(
  ".price-animation-container",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.3"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.3,
  },
  "-=1.3"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.3,
  },
  "-=1.2"
);
timeline.to(
  ".image-berlin",
  {
    transform: "translateX(0)",
    duration: 0.3,
  },
  "-=1.1"
);
timeline.to(
  ".image-berlin",
  {
    transform: "scale(1.2)",
    duration: 5,
  },
  "-=0.8"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "4.7rem",
    padding: "0.125rem 0.5rem 0 0.5rem",
    duration: 0.2,
  },
  "-=5"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "11rem",
    padding: "0 0.625rem",
    duration: 0.2,
  },
  "-=4.8"
);
timeline.to(
  ".country-spain",
  {
    display: "none",
    duration: 0,
  },
  "-=4.8"
);
timeline.to(
  ".country-germany",
  {
    display: "block",
    duration: 0,
  },
  "-=4.8"
);
timeline.from(
  ".country-germany",
  {
    transform: "translateY(2rem)",
    duration: 0.2,
  },
  "-=4.7"
);
timeline.to(
  ".price-spain",
  {
    display: "none",
    duration: 0,
  },
  "-=4.7"
);
timeline.to(
  ".price-germany",
  {
    display: "block",
    duration: 0,
  },
  "-=4.7"
);
timeline.to(
  ".price-animation-container",
  {
    transform: "translateY(0)",
    duration: 0.2,
  },
  "-=4.6"
);
timeline.to(
  ".city-spain",
  {
    display: "none",
    duration: 0,
  },
  "-=4.6"
);
timeline.to(
  ".city-germany",
  {
    display: "block",
    duration: 0,
  },
  "-=4.6"
);
timeline.from(
  ".city-germany",
  {
    transform: "translateY(3rem)",
    duration: 0.2,
  },
  "-=4.5"
);
timeline.to(
  ".country-germany",
  {
    transform: "translateY(-2rem)",
    duration: 0.2,
  },
  "-=1.5"
);
timeline.to(
  ".city-germany",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.4"
);
timeline.to(
  ".price-animation-container",
  {
    transform: "translateY(-3rem)",
    duration: 0.2,
  },
  "-=1.4"
);
timeline.to(
  ".country-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.3,
  },
  "-=1.4"
);
timeline.to(
  ".city-name",
  {
    maxWidth: "0",
    padding: "0",
    duration: 0.2,
  },
  "-=1.3"
);
timeline.to(
  ".white-background",
  {
    opacity: "1",
    duration: 0.5,
  },
  "-=1.3"
);
