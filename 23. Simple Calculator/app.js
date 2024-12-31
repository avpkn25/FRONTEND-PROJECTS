document.getElementById("btn").addEventListener("click", () => {
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num1").value;
  let res = document.querySelector(".result");
  let op = document.getElementById("select").value;

  switch (op) {
    case "add":
      res.innerHTML = Number(num1) + Number(num2);
      break;
    case "sub":
      res.innerHTML = Number(num1) - Number(num2);
      break;
    case "mul":
      res.innerHTML = Number(num1) * Number(num2);
      break;
    case "div":
      res.innerHTML = Number(num1) / Number(num2);
      break;
  }
});
