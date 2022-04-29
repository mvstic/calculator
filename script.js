const buttons = document.querySelectorAll("button");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const operatorBtns = document.querySelectorAll(".operator");
const numericalBtns = document.querySelectorAll(".numeral");
const decimalBtn = document.querySelector(".decimal");
const equalBtn = document.querySelector(".equals");
const clearBtn = document.querySelector("#clear");
const clearAllBtn = document.querySelector("#clear-all");
const backspaceBtn = document.querySelector("#backspace");
const btns = document.querySelectorAll(".calculator-buttons");

let array = [];

let result = 0;

let input;
let operator = operatorBtns.value;
let regex = /[+\-*/]/;

function intoArray(input) {
    array.push(input);
    input = 0;
    clearDisplay();
}

function intoArrayAndSolve(input) {
    array.push(input);
    result = solve(array);
    clearArray();
    array.push(result);
    display.value += result;
}

function onOperatorPress(operator, input) {
    input = display.value;
    if (array.length === 0) {
        intoArray(input);
        intoArray(operator);
    } else if (array.length === 1 && typeof array[0] === "number") {
        intoArray(operator);
    } else if (array.length >= 2 || typeof array[0] === "number") {
        intoArrayAndSolve(input);
        intoArray(operator);
        display.value = array[0];
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

function clearDisplay() {
    return display.value = '';
}

function add(a, b) {
    result = a + b;
    return result;
}

function subtract(a, b) {
    result = a - b;
    return result;
}

function multiply(a, b) {
    result = a * b;
    return result;
}

function divide(a, b) {
    if (a === 0) {
        return null;
    } else {
        result = a / b;
        return result;
    }
}

numericalBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        if (array.length === 1 && typeof array[0] === "number") {
            clearDisplay();
            display.value += e.target.value;
            onOperatorPress();
        } else {
            console.log(e.target.value);
            clearDisplay();
            display.value += e.target.value;
        }
    })
});

operatorBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        onOperatorPress(e.target.value);
    })
});

decimalBtn.addEventListener('click', (e) => {
    console.log(e.target.value);
    display.value += e.target.value;
});

equalBtn.addEventListener('click', () => {
    if (array.length === 1 && typeof array[0] === "number") {
        onOperatorPress();
    } else if (array.length === 2) {
        onOperatorPress()
        array.pop(); //removes "undefined"
    } else
        result = array[0];
        display.value = result;
});

clearAllBtn.addEventListener('click', clearArray);
clearBtn.addEventListener('click', clearDisplay);
// backspaceBtn.addEventListener('click', backspace); 
// (can this button just be assigned to the delete key?)