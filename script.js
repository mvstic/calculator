const buttons = document.querySelectorAll("button");

array = [];

function input(n) {
    return array.push(n);
}

function backspace(array) {
   return array.pop();
}

function reset() {
    return array = [];
}

function add() {
    return array.push("+");
}

function subtract() {
    return array.push("-");
}

function multiply() {
    return array.push("*");
}

function divide() {
    return array.push("/");
}



