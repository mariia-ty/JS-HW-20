//task 1
/*
const gallery = document.querySelector(".gallery");
const image = document.querySelectorAll(".image");
let imgNum = 0;

gallery.style.listStyle = "none";

function imgChange() {
  image.forEach((img, index) => {
    if (index === imgNum) {
        img.style.display = "block";
        img.style.maxWidth = "400px";
        img.style.maxHeight = "450px";
    } else {
      img.style.display = "none";
    }
  });
}

imgChange();

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    imgNum = (imgNum - 1 + image.length) % image.length;
  } else if (event.key === "ArrowRight") {
    imgNum = (imgNum + 1) % image.length;
  }
  imgChange();
});
*/

//task 2
const inp = document.querySelector(".inputBx");
const create = document.querySelector(".create");
const clear = document.querySelector(".clear");
const boxes = document.querySelector("#boxes");

function randomColor() {
  let red = Math.trunc(Math.random() * 255);
  let green = Math.trunc(Math.random() * 255);
  let blue = Math.trunc(Math.random() * 255);
  color = `rgb(${red}, ${green}, ${blue} )`;
  return color;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
      let newDiv = document.createElement("div");
      let measure = 30 * (i+1); 
    newDiv.style.width = `${measure}px`;
    newDiv.style.height = `${measure}px`;
      newDiv.style.backgroundColor = randomColor();
      boxes.appendChild(newDiv);
  }
}

create.addEventListener("click", () => {
  let numBx = Number(inp.value);
  if (numBx != 0) {
    createBoxes(numBx);
  }
});

clear.addEventListener("click", () => {
    boxes.innerHTML = "";
});
