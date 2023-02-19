/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function verciamKg() {
  let outputBox = document.getElementById("output");

  let lbBox = document.createElement("p");
  let gBox = document.createElement("p");
  let ozBox = document.createElement("p");

  outputBox.append(lbBox, gBox, ozBox);

  let kgToLb = document.getElementById("search").value * 2.2046;
  let kgToG = document.getElementById("search").value / 0.001;
  let kgToOz = document.getElementById("search").value * 35.274;

  lbBox.textContent = "Weight in pounds = " + kgToLb + "lb";
  gBox.textContent = "Weight in grams = " + kgToG + "g";
  ozBox.textContent = "Weight in ounces = " + kgToOz + "oz";
}

document.querySelector("#submit-btn").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(document.getElementById("search").value);
  verciamKg();
});
