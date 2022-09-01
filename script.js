"use strict";

document.addEventListener("DOMContentLoaded", init);

const array = [37, 13, 34, 1, 9, 7, 22, 20, 28, 30, 33, 17, 18, 0, 16, 11, 8, 21, 15, 36, 32, 31, 27, 4, 25, 10, 19, 5, 23, 2, 39, 14];

const queueSize = getNumberOfCustomers();

function init() {
  loop();
}

function loop() {
  setTimeout(() => {
    console.log(queueSize);
    modifyModel();
  }, 1000);
  //   setTimeout(() => {
  //     modifyModel
  //   });
  //   document.querySelectorAll(".bar").style.height = "50px";
}

function displayData() {}

function modifyModel() {
  //   console.log("modify model");
  array.shift();
  array.push(queueSize);
  console.log(array);
  //   loop();
}

function getNumberOfCustomers() {
  console.log("getnumber");
  return Math.floor(Math.random() * 32);
}
