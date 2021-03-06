"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  document.querySelector("button").addEventListener("click", showOutput);
}

function showOutput() {
  console.log("showOutput");

  let operator = document.querySelector("#operator").value;
  let val = document.querySelector("#input").value;
  let output = document.querySelector("#output");
  let firstSpace = val.indexOf(" ");
  let lastSpace = val.lastIndexOf(" ");
  let firstName = val.substring(0, firstSpace);

  if (operator == "firstNameUpperCase") {
    const firstLetter = val.substring(0, 1).toUpperCase();
    const restOfLetters = val.substring(1);
    output.innerHTML = `${firstLetter}${restOfLetters}`;
  } else if (operator == "findFirstName") {
    output.innerHTML = firstName;
  } else if (operator == "findLengthOfFirstName") {
    let len = firstName.length;
    output.innerHTML = len;
    console.log(len);
  } else if (operator == "findMiddleName") {
    let middleName = val.substring(firstSpace, lastSpace);
    output.innerHTML = middleName;
  } else if (operator == "checkFileName" && val.endsWith(".jpg") == true) {
    output.innerHTML = `File is a .jpg`;
  } else if (operator == "checkFileName" && val.endsWith(".png") == true) {
    output.innerHTML = `File is a .png`;
  } else if (operator == "password") {
    let len = val.length;
    let stars = "*";
    output.innerHTML = `${stars.repeat(len)}`;
  } else if (operator == "makeThirdLetterUppercase") {
    const name2 = val.substring(2, 3).toUpperCase();
    const part1 = val.substring(0, 2);
    const part2 = val.substring(3);
    output.innerHTML = `${part1}${name2}${part2}`;
  } else if (operator == "makeOtherLetterUppercase") {
    const part1 = val.substring(0, firstSpace + 1);
    const character = val[firstSpace + 1];
    const part2 = val.substring(firstSpace + 2);
    const result1 = part1 + character.toUpperCase() + part2;

    const firstHyphen = result1.indexOf("-");
    const part1hyphen = result1.substring(0, firstHyphen + 1);
    const character2 = result1[firstHyphen + 1];
    const part2hyphen = result1.substring(firstHyphen + 2);
    const result2 = part1hyphen + character2.toUpperCase() + part2hyphen;
    console.log(result2);

    output.innerHTML = result2;
  }
}
