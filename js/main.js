// JS scripts placed here
const video = document.querySelector(".hover-video");

video.addEventListener("mouseover", () => {
  video.play();
});

video.addEventListener("mouseout", () => {
  video.pause();
  video.currentTime = 0; // Reset to the beginning when hover stops
});
