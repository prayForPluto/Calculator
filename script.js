const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let firstNumber = 0;
let secondNumber = 0;
let result = 0;
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

//Initialize variable for the current value of calculator
let currentValue = '';

//Initialize empty array to keep track of values of buttons clicked
let history = [];

let screenChange = document.querySelector('p');

let counter = 0;

let operatorChain = false;

function number(array) {
    //The array numbers are combined to create a number depending on
    //how many number buttons were pressed
    //array.(some method that combines entries)
}

function calculator(e) {;
    
    currentValue = e.target.innerHTML;
    history.push(currentValue);
    screenChange.innerHTML = history.join("");
    if(currentValue === 'Clear') {
        history.splice(0, history.length);
        screenChange.innerHTML = "0";
        operatorChain = false;
    }
/*
Note to self:

I feel like this can all be done without all these statements by doing the following:
-A simple array with the different operators
-Do an ifIn or a contains method or whatever to see if it's in there
-There isn't a need for a result variable:
  -The first number simply becomes the result and then we proceed as usual
  -THere is nothing really special about the equals sign, it's just another operator
*/    
    switch(currentValue) {
        case "/":
            if(operatorChain) {
                //operator = divide;
                history.pop();
                secondNumber = history.join("");
                result = operate(operator, firstNumber, secondNumber);
                operator = divide;
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;

            }

            operator = divide;
            history.pop();
            firstNumber = history.join("");
            screenChange.innerHTML = firstNumber;
            history.splice(0, history.length);
            operatorChain = true;
            break;

        case("*"):
            if(operatorChain) {
                //operator = multiply;
                history.pop();
                secondNumber = history.join("");
                result = operate(operator, firstNumber, secondNumber);
                operator = multiply;
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;
            }

            operator = multiply;
            history.pop();
            firstNumber = history.join("");
            screenChange.innerHTML = firstNumber;
            history.splice(0, history.length);
            operatorChain = true;
            break;

        case("-"):
            if(operatorChain) {
                history.pop();
                secondNumber = history.join("");
                result = operate(operator, firstNumber, secondNumber);
                operator = subtract;
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;
            }

            operator = subtract;
            history.pop();
            firstNumber = history.join("");
            screenChange.innerHTML = firstNumber;
            history.splice(0, history.length);
            operatorChain = true;
            break;

        case("+"):
            if(operatorChain) {
                history.pop();
                secondNumber = parseInt(history.join(""));
                result = operate(operator, firstNumber, secondNumber);
                operator = add;
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;
            }

            operator = add;
            history.pop();
            firstNumber = parseInt(history.join(""));
            screenChange.innerHTML = firstNumber;
            history.splice(0, history.length);
            operatorChain = true;
            break;

        case("="):
            history.pop();
            secondNumber = parseInt(history.join(""));
            result = operate(operator, firstNumber, secondNumber);
            screenChange.innerHTML = result;
            history.splice(0, history.length);
            operatorChain = false;
            break;

    }


    /*switch(currentValue) {
        case "Clear":
            history.splice(0, history.length);
            screenChange.innerHTML = "0";
            break;

        case "/":
            if(operatorChain) {
                operator = divide;
                history.pop();
                secondNumber = history.join("");
                result = operate(operator, firstNumber, secondNumber);
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;
            }
                operator = divide;
                history.pop();
                firstNumber = history.join("");
                screenChange.innerHTML = history.join("");
                history.splice(0, history.length);
                operatorChain = true;
                break;
        case "*":
            if(operatorChain) {
                operator = multiply;
                history.pop();
                secondNumber = history.join("");
                console.log(secondNumber);
                console.log(firstNumber)
                result = operator(operator, Number(firstNumber), Number(secondNumber));
                console.log(result);
                screenChange.innerHTML = result;
                firstNumber = result;
                history.splice(0, history.length);
                break;
            }
                operator = multiply;
                history.pop();
                firstNumber = history.join("");
                screenChange.innerHTML = history.join("");
                history.splice(0, history.length);
                operatorChain = true;
                break;

        case "=":
            history.pop();
            secondNumber = history.join("");
            history.splice(0, history.length);
            screenChange.innerHTML = operate(operator, firstNumber, secondNumber);
            operatorChain = false;


            
    }*/

    //console.log(history);
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
