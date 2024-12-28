// btn
const btn = document.querySelector(".btn");
//close-btn
const close = document.querySelector(".close-icon");
//trailer-container
const container = document.querySelector(".trailer-container");
// video
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  container.classList.remove("active");
});

close.addEventListener("click", () => {
  container.classList.add("active");
  video.pause();
  video.currentTime = 0;
});
