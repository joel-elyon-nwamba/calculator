const display = document.querySelector(".display")
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const equalKey = document.querySelector(".equal");

let firstNumber = ""
let secondNumber = "";
let clickedOperator = "";
let result = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
          return add(a, b);
        case "-":
          return subtract(a, b);
        case "*":
          return multiply(a, b);
        case "/":
          return divide(a, b);
      }
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", function(event) {
        secondNumber += event.target.value;
        display.textContent = secondNumber;
    })
});

operatorButtons.forEach(opt => {
    opt.addEventListener("click", function() {
        firstNumber += secondNumber;
        clickedOperator = opt.textContent;
        display.textContent = secondNumber + clickedOperator;
        secondNumber = "";

    })
});

equalKey.addEventListener("click", function() {
    result = operate(Number(firstNumber), Number(secondNumber), clickedOperator);
    display.textContent = result;
})






