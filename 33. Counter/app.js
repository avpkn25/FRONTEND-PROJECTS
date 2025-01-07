let count = document.getElementById("count");
let save = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let decrementBtn = document.querySelector(".decrement-btn");
let saveBtn = document.querySelector(".save-btn");

let c = 0;

incrementBtn.addEventListener("click", () => {
  c += 1;
  count.textContent = c;
});

decrementBtn.addEventListener("click", () => {
  c -= 1;
  count.textContent = c;
});

saveBtn.addEventListener("click", () => {
  let countStr = c + ", ";
  save.textContent += countStr;
  count.textContent = 0;
  c = 0;
});
