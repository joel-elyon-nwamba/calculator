const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const deleteOption = document.querySelector(".delete");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const equal = document.querySelector(".equal")

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
    return a/b
}

function operate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2)
    if(operator === "+") {
        return add(num1, num2)
    } else if(operator === "-") {
        return subtract(num1, num2)
    } else if(operator === "*") {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}

let storeNumber = "";
let operatorClicked = "";
let firstNumber = "";
let result = "";
currentOperand.textContent = 0;

numberButtons.forEach(number => {
    number.addEventListener("click", function() {
        storeNumber += number.value 
        previousOperand.textContent += storeNumber;
    })
})

operatorButtons.forEach(operator => {
    operator.addEventListener("click", function() {
        firstNumber = storeNumber
        // Get the opertator that is clicked
        operatorClicked= operator.textContent;
        previousOperand.textContent = operator + storeNumber;
        storeNumber = "";
        console.log(firstNumber + storeNumber);
        console.log(operatorClicked)
    })
})

function calculator() {
    const result = operate(Number(firstNumber), Number(storeNumber), operatorClicked);
   currentOperand.textContent = result;
}

equal.addEventListener("click", calculator);




