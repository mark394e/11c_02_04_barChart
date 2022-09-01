"use strict";

document.addEventListener("DOMContentLoaded", init);

// creating an array with 40 numbers between 0 and 32
const array = [17, 25, 16, 18, 9, 10, 14, 12, 14, 0, 2, 0, 21, 5, 12, 1, 5, 7, 18, 25, 9, 27, 4, 21, 21, 27, 5, 28, 24, 15, 21, 8, 7, 21, 11, 15, 12, 9, 5, 29];

// runs the initialisation function which calls the loop function
function init() {
  modifyArray();
}

// generates a random number between 0 and 32
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

// waits 1s before calling the modifyArray function
function loop() {
  setTimeout(modifyArray, 1000);
}

// modifies the array by adding and removing array-objects
function modifyArray() {
  // runs the random number function
  const queueSize = getNumberOfCustomers();

  // adds the random number to the end of the array
  array.push(queueSize);

  // removes the first object in the array
  array.shift();

  // calls the loop() and displayData() function
  loop();
  displayData();
}

function displayData() {
  // runs a for-loop
  // i determines the height of the bar by using the value at each index from 0 to 40
  for (let i = 0; i < 40; i++) {
    // defining constans
    const bar = document.querySelector(".bar");
    const bars = document.querySelector("#bars");

    // sets the height of the bar to the number at the given index - determined by the iterator - and displays it in %.
    bar.style.height = array[i] + "%";

    // appends the bar with the given height as the last child to the #bars-container
    bars.append(bar);
  }
}
