/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

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
      "The nosy neighbor", 
      "The neighbor's mistress", 
      "The mayor", 
      "Horton the elephant"
  ];

  const allSecondPart = [
      "dropped", 
      "jumped on", 
      "laughed", 
      "died", 
      "forgot", 
      "interrupted", 
      "ate"
  ];

  const allLastPart = [
      "trying to disco",
      "my lunch",
      "my car",
      "my new computer",
      "my Snickers bar",
      "my rock collection"
  ];

  const firstIndex = Math.floor(Math.random() * allFirstPart.length);
  const secondIndex = Math.floor(Math.random() * allSecondPart.length);
  const lastIndex = Math.floor(Math.random() * allLastPart.length);

  const excuse = allFirstPart[firstIndex] + " " + allSecondPart[secondIndex] + " " + allLastPart[lastIndex] + ".";

  return excuse;
};


document.querySelector(".Excuse").innerHTML = fullExcuse;

console.log(generateExcuse());
