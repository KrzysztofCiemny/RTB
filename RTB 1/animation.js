const frames = document.querySelectorAll(".product");
const container = document.querySelector(".container");

let currentFrameIndex = 0;
let interval;

gsap.set(frames[currentFrameIndex], { border: "2px solid red" });

container.addEventListener("mouseenter", () => clearInterval(interval));
container.addEventListener("mouseleave", () => {
  addHighlight(currentFrameIndex);
  jumpingFrameAnimation();
});

frames.forEach((frame, index) => {
  frame.addEventListener("mouseenter", () => {
    removeHighlight(currentFrameIndex);
    currentFrameIndex = index;
    addHighlight(index);
  });

  frame.addEventListener("mouseleave", () => {
    removeHighlight(index);
  });
});

const addHighlight = (currentFrameIndex) => {
  gsap.to(frames[currentFrameIndex], {
    borderWidth: "2px",
    borderColor: "red",
    duration: 0.1,
  });
};
const removeHighlight = (currentFrameIndex) => {
  gsap.to(frames[currentFrameIndex], {
    borderWidth: "1px",
    borderColor: "lightgray",
    duration: 0.1,
  });
};

const jumpingFrameAnimation = () => {
  interval = setInterval(() => {
    removeHighlight(currentFrameIndex);
    currentFrameIndex = (currentFrameIndex + 1) % frames.length;
    addHighlight(currentFrameIndex);
  }, 2000);
};
jumpingFrameAnimation();
