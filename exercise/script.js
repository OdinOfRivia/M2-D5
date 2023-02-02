const images = [
  "./images/avocado.jpeg",
  "./images/pancake.jpeg",
  "./images/sandwich.jpeg",
  "./images/spaghetti.jpeg",
];

const img = document.querySelector("img");
let curentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
  img.src = images[0];
});

const btnRight = document.querySelector("#next-button");
const btnLeft = document.querySelector("#prev-button");

const nextButton = function () {
    if(curentIndex < images.length -1){
        curentIndex++
        img.src = images[curentIndex]
    }else{
        curentIndex = 0;
        img.src = images[0];
    }
};


const previusButton = function () {
    if(curentIndex > 0){
        curentIndex--
        img.src = images[curentIndex]
    }else{
        curentIndex = images.length -1;
        img.src = images[curentIndex]
    }
}

btnRight.addEventListener("click", nextButton);
btnLeft.addEventListener("click", previusButton);
