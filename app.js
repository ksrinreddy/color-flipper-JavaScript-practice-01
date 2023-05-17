const colors = ["red", "blue", "green", "rgb(234, 88, 222)", "#f3b5c1"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const container = document.querySelector(".container");

btn.addEventListener("click", function () {
  // get random number
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  container.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// create random number between 0 and 5 (within the length of the colors array)
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
