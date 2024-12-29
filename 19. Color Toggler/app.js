let btn = document.getElementById("switch");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = btn.checked ? "black" : "white";
});
