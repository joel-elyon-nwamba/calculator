const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

function addition(a, b) {
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

function operate(a, toOperate, b) {
    if(toOperate === "+") {
        return addition(a, b)
    } else if(toOperate === "-") {
        return subtract(a, b)
    } else if(toOperate === "*") {
        return multiply(a, b)
    } else if(toOperate === "/") {
        return divide(a, b)
    } else {
        return "do not calculate"
    }
}

let currentNumber = "";
let firstNumber = "0";
let secondNumber = "";
let operation = "";
let result = "";

function updateCurrentNumber() {
    previousOperand.textContent = firstNumber + operation + secondNumber;
}

updateCurrentNumber()

numberButtons.forEach(number => {
    number.addEventListener("click", function() {
        currentNumber += number.value;
        console.log("first Number " + currentNumber)
        if(!operation) {
            firstNumber = currentNumber
        } else {
            secondNumber = currentNumber;
        }
        updateCurrentNumber()
    })
});

function calculateResult() {
    result = operate(Number(firstNumber), operation, Number(secondNumber));
    firstNumber = result;
    secondNumber = ""
    currentNumber = ""
}

operatorButtons.forEach(op => {
    op.addEventListener("click", function() {
        operation = op.textContent;
        if(secondNumber) {
            // previousOperand.textContent = firstNumber + operation;
            calculateResult()
            currentOperand.textContent = result;
         } else {
            // previousOperand.textContent = firstNumber + operation + secondNumber;
            currentNumber = ""
        }
        updateCurrentNumber()
    })
})

equalButton.addEventListener("click", function() {
    if(secondNumber !== "" && operation !== "") {
        calculateResult()
        currentOperand.textContent = result;
    } else {
        return "no need to calculate"
    }
})

clearButton.addEventListener("click", function() {
    previousOperand.textContent = 0;
    currentOperand.textContent = 0;
    firstNumber = 0;
    currentNumber = "";
    result = "";
});
