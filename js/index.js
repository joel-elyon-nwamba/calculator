const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const clear = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".number");
const equalKey = document.querySelector(".equal");

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
    return a/b;
}

function operate(a, b, operator) {
    // num1 = num1;
    // num2 = num2;
    if(operator === "+") {
        return add(a, b)
    } else if(operator === "-") {
        return subtract(a, b)
    } else if(operator === "*") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}

let numberStored = " ";
let firstNumber = "";
let pressedOperator = "";
let result = "";
previousOperand.textContent = "";
currentOperand.textContent = 0;

numberButtons.forEach(numbers => {
    numbers.addEventListener("click", function() {
        numberStored += numbers.value
        previousOperand.textContent = numberStored;
        calculate()
    })
})

operatorButtons.forEach(operating => {
    operating.addEventListener("click", function() {
        // Storing the first number when user pressed operator
        firstNumber += numberStored
        // Operator clicked
        pressedOperator = operating.textContent
        // add the previous operand of the operator plus the number stored
        previousOperand.textContent = numberStored + pressedOperator
        numberStored = "";
        console.log(firstNumber + numberStored);
        console.log(pressedOperator);
    })
})

function calculate() {
    result = operate(Number(firstNumber), Number(numberStored), pressedOperator);
    if(pressedOperator === "+") return Number(firstNumber) + Number(numberStored);
    if(pressedOperator === "-") return Number(firstNumber) - Number(numberStored);
    if(pressedOperator === "*") return Number(firstNumber) * Number(numberStored);
    if(pressedOperator === "/") return Number(firstNumber) / Number(numberStored)
    currentOperand.textContent = result;
}
 equalKey.addEventListener("click", calculate)





