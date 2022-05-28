const button = document.querySelector(".btn");
const paragraph = document.querySelector("p");
const hover = document.querySelector(".hover");
const displayText = document.querySelector(".toggle-container");

const hidden = document.querySelector(".hidden");

button.addEventListener("click", function (e) {
  e.preventDefault();
    console.log(`Clicked`);
    displayText.classList.toggle('active');
});