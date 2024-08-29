/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const generateExcuse = () => {
  const allFirstPart = [
    "My chickens",
    "My baby",
    "My wrinkly grandma",
    "My stinky neighbor",
    "The nosy lady next door",
    "The guy at the bus stop",
    "The mayor",
    "Horton the elephant"
  ];

  const allSecondPart = [
    "dropped",
    "jumped on",
    "laughed about",
    "didn't listen to me about",
    "forgot",
    "interrupted",
    "ate"
  ];

  const allLastPart = [
    "my brand new scooter",
    "my lunch",
    "my car",
    "my new computer",
    "my Snickers bar",
    "my rock collection"
  ];

  const firstIndex = Math.floor(Math.random() * allFirstPart.length);
  const secondIndex = Math.floor(Math.random() * allSecondPart.length);
  const lastIndex = Math.floor(Math.random() * allLastPart.length);

  const excuse =
    allFirstPart[firstIndex] +
    " " +
    allSecondPart[secondIndex] +
    " " +
    allLastPart[lastIndex] +
    ".";

  return excuse;
};

const excuseElement = document.querySelector(".Excuse");
if (excuseElement) {
  excuseElement.innerHTML = generateExcuse();
}

document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".Excuse").innerHTML = generateExcuse();
});

console.log(generateExcuse());
