const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const displayHistory = document.querySelector("#history");
const operatorBtns = document.querySelectorAll(".operator");
const numericalBtns = document.querySelectorAll(".numeral");
const equalBtn = document.querySelector(".equals");

const btns = document.querySelectorAll(".calculator-buttons");
const clearBtn = document.querySelector("#clear");

let array = [];

let round = 1;
let result = 0;

let firstNum;
let secondNum;

function getInput() { 
    return array.push(display.value);
}

function add(a, b) {
    result = a + b;
    display.value = result;
    return result;
}

function subtract(a, b) {
    result = a - b;
    display.value = result;
    return result;
}

function multiply(a, b) {
    result = a * b;
    display.value = result;
    return result;
}

function divide(a, b) {
    if (a === 0) {
        return null;
    } else {
        result = a / b;
        display.value = result;
        return result;
    }
}

function solve(array) {
    a = parseInt(array[0]);
    b = parseInt(array[2]);
    operator = (array[1]);
    switch(operator) {
        case "+": return add(a, b)
        case "-": return subtract(a, b)
        case "*": return multiply(a, b)
        case "/": return divide(a, b)
    }
}

function clearArray() {
    return array = [];
}

btns.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e.target.value);
        display.value = e.target.value;
    })
})



