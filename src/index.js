// card component
let b1 = document.querySelector("#card1");
let b2 = document.querySelector("#card2");
let b3 = document.querySelector("#card3");
let b4 = document.querySelector("#card4");
let b5 = document.querySelector("#card5");
let b6 = document.querySelector("#card6");

let target = document.querySelector("#card");

b1.addEventListener("click", (event) => {
  target.className = "card";
});

b2.addEventListener("click", (event) => {
  target.className = "card2";
});

b3.addEventListener("click", (event) => {
  target.className = "card3";
});

b4.addEventListener("click", (event) => {
  target.className = "card4";
});

b5.addEventListener("click", (event) => {
  target.className = "card5";
});

b6.addEventListener("click", (event) => {
  target.className = "card6";
});
