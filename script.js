const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a -b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let firstNumber = 1;
let secondNumber = 2;
let operator = "";

const operate = function(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber);
}

//Initializing array to store numbers
let numbers = []

//Filling array with numbers
for(let i = 0; i <= 9; i++) {
    numbers.push(i);
}

//Creating box elements that will be the calculator buttons
let htmlElements = "";
for(let i = 0; i < 24; i++) {
    htmlElements += `<div id="${i}"class="box"></div>`;
}

let layout = document.querySelector('.buttons');
layout.innerHTML = htmlElements;