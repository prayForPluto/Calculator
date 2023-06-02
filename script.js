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

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const operate = function(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber);
}

//Initializing array to store numbers
let buttons = ['7', '8', '9', '/', 'Undo', 'Clear', '4', '5', '6', '*', '(', ')',
                '1', '2', '3', '-', 'x^2', 'sqrt', '0', '.', '%', '+', '=']

//Filling array with numbers
//for(let i = 0; i <= 9; i++) {
 //   numbers.push(i);
//}



//Creating box elements that will be the calculator buttons
let htmlElements = "";
for(let i = 0; i < 23; i++) {
    htmlElements += `<div id="${i}"class="box">${buttons[i]}</div>`;
}

let layout = document.querySelector('.buttons');
layout.innerHTML = htmlElements;

//Add click listener to each box
const clickButton = document.querySelectorAll('.box')
clickButton.forEach((box) => {

    box.addEventListener('click', (e) => {
        calculator(e);
        //firstNumber = e.target.innerHTML;
        //secondNumber = e.target.innerHTML;
        //console.log(firstNumber);
        //console.log(secondNumber);
        //console.log(currentValue);
    })
})

//Initialize click counter; this keeps track of the number of clicks we make
let click = 0;

let currentValue = '';

let history = [];

function number(array) {
    //The array numbers are combined to create a number depending on
    //how many number buttons were pressed
    //array.(some method that combines entries)
}

function calculator(e) {;
    
    currentValue = e.target.innerHTML;
    history.push(currentValue);
    if(currentValue === 'Clear') {
        history.splice(0, history.length);
    }
    
    switch(currentValue) {
        case "Clear":
            history.splice(0, history.length);
            break;
        case "/":
            history.pop();
            console.log(history.join(""));
            console.log(history);
            
    }

    console.log(history);
    /*if(click === 0) {
        firstNumber = e.target.innerHTML;
        currentValue = '1';
        console.log(currentValue);
        click++;
    } else if (click === 1) {
        secondNumber = e.target.innerHTML;
        console.log(click);
        click++;
    }*/
}
