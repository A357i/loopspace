//  RANDOM NUMBER GENERATOR

// let randomNUM = Math.random() * 6;  //  Random Numbers 1 - 6

// const min = 50;
// const max = 100;

// let randomNUM = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNUM)

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNUM1;
let randomNUM2;
let randomNUM3;

myButton.onclick = function (){
    randomNUM1 = Math.floor(Math.random() * max) + min;
    randomNUM2 = Math.floor(Math.random() * max) + min;
    randomNUM3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNUM1;
    label2.textContent = randomNUM2;
    label3.textContent = randomNUM3;

}