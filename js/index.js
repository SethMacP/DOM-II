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

//1.  Keydown
//2.  MouseOver
//3.  MouseOut
//4.  Click
//5.  DblClick
//6.  ContextMenu
//7.  Wheel
//8.  load
//9.  Keyup
//10. MouseDown
//11. MouseUp

document.addEventListener("keydown", (e) => {
  if (e.key === "l") {
    e.target.style.color = "red";
    e.target.style.border = "10px solid blue";
    console.log(e.key);
  } else if (e.key === "a") {
    e.target.style.color = "blue";
    e.target.style.border = "8x solid green";
    e.stopPropagation();
    console.log(e.key);
  } else if (e.key === "m") {
    e.target.style.color = "green";
    e.target.style.border = "6px solid yellow";
    e.stopPropagation();
    console.log(e.key);
  } else if (e.key === "b") {
    e.target.style.color = "yellow";
    e.target.style.border = "4px solid magenta";
    e.stopPropagation();
    console.log(e.key);
  } else if (e.key === "d") {
    e.target.style.color = "magenta";
    e.target.style.border = "1px solid red";
    console.log(e.key);
  } else {
  }
});

const navChange = document.querySelector(".nav-container .nav");
navChange.addEventListener("click", function (e) {
  e.preventDefault();
});
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
h1Change.addEventListener("click", function () {
  h1Change.textContent = "Are You Sure?";
});

const h2Change = document.querySelector("h1");
console.log("h1Change", h1Change);
h2Change.addEventListener("dblclick", (e) => {
  e.target.innerHTML = "Spell out LAMBDA";
});

const zChange = document.querySelectorAll(".intro img");
// console.log(zChange);
// console.log(zChange[0]);
zChange[0].addEventListener("load", function (e) {
  e.target.src = "https://picsum.photos/200";
});

const otherImages = document.querySelectorAll("img");
console.log(otherImages);
otherImages[1].addEventListener("mouseup", function (e) {
  e.target.src = "https://picsum.photos/200";
});

otherImages[1].addEventListener("mousedown", function (e) {
  e.target.src = "https://picsum.photos/300";
});

const backgroundChange = document.querySelector("body");
backgroundChange.addEventListener("wheel", function (e) {
  //   document.body.style.backgroundColor = "red";

  e.target.style.backgroundColor = "blue";
});

//more
const allh2 = document.querySelectorAll("h2");
// console.log("allh2", allh2);
allh2[1].addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("Dont do that.");
});

document.addEventListener("keyup", (e) => {
  console.log(`You let up ${e.key}`);
});

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
