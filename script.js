let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let calcBtn = document.getElementById("calcBtn");
let resultDisplay = document.getElementById("resultDisplay");

calcBtn.addEventListener("click", calculate);

function calculate() {
  let a1 = a.value;
  let b1 = b.value;
  let c1 = c.value;

  a1 = parseFloat(a1);
  b1 = parseFloat(b1);
  c1 = parseFloat(c1);

  let bPower = Math.pow(b1, 2);
  let fourAC = 4 * a1 * c1;
  let resultToBeSquared = bPower - fourAC;
  let squareRoot = Math.sqrt(resultToBeSquared);
  let bottomOfEquation = 2 * a1;

  if (isNaN(squareRoot) === true) {
    resultDisplay.innerHTML = "Impossible to solve";
  } else {
    let result1 = (-b1 - squareRoot) / bottomOfEquation;
    let result2 = (-b1 + squareRoot) / bottomOfEquation;

    let finalResult1 = result1.toFixed(2);
    let finalResult2 = result2.toFixed(2);

    resultDisplay.innerHTML = "Solution : x = " + finalResult1 + " or x = " + finalResult2;
  }
}
