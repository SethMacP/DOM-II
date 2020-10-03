// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

// Your code goes here
//What did I use?

//Keydown
//mouseover
//mouseout
//click
//dblclick

//try out
//resize
//scroll

document.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    e.target.style.color = "red";
    e.target.style.border = "10px solid blue";
    console.log(e.key);
  } else if (e.key === "a") {
    e.target.style.color = "blue";
    e.target.style.border = "8x solid green";
    console.log(e.key);
  } else if (e.key === "m") {
    e.target.style.color = "green";
    e.target.style.border = "6px solid yellow";
    console.log(e.key);
  } else if (e.key === "b") {
    e.target.style.color = "yellow";
    e.target.style.border = "4px solid magenta";
    console.log(e.key);
  } else if (e.key === "d") {
    e.target.style.color = "magenta";
    e.target.style.border = "1px solid red";
    console.log(e.key);
  } else {
    console.log(
      `Try spelling out L-A-M-B-D-A...You don't need: ${e.key}. NEVER USE : Z`
    );
  }
});

const navChange = document.querySelector(".nav-container .nav");
navChange.addEventListener("mouseover", function (e) {
  e.target.style.color = "red";
});

const navChangeBack = document.querySelector(".nav-container .nav");
navChange.addEventListener("mouseout", function (e) {
  e.target.style.color = "black";
});

const picChange = document.querySelector(".home img");
picChange.addEventListener("click", function () {
  picChange.style.border = "2px solid red";
});

const h1Change = document.querySelector("h1");
h1Change.addEventListener("click", () => {
  h1Change.textContent = "Are You Sure?";
});

const h2Change = document.querySelector("h1");
console.log("h1Change", h1Change);
h2Change.addEventListener("dblclick", (e) => {
  e.innerHTML = "Spell out LAMBDA";
});

const zChange = document.querySelectorAll(".intro img");
console.log(zChange);
console.log(zChange[0]);
zChange[0].addEventListener("click", function (e) {
  e.target.src = "https://picsum.photos/200";
});

const backgroundChange = document.querySelector("body");
backgroundChange.addEventListener("wheel", function (e) {
  //   document.body.style.backgroundColor = "red";

  e.target.style.backgroundColor = "blue";
});

// const picZoom = document.querySelector(".intro img");
// picZoom.addEventListener("fullscreenchange", function () {
//   e.target.style.transform = "scale(1.2)";
// });

// console.log("navChange", navChange);
// console.log("picChange", picChange);
// console.log("h1Change", h1Change);
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
// console.log( , );
