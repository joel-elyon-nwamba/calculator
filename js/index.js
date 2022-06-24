const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

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
    return a/b;
}

function operate(a, toOperate, b) {
    if(toOperate === "+") {
        return addition(a, b)
    } else if(toOperate === "-") {
        return subtract(a, b)
    } else if(toOperate === "*") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}


let currentNumber = ""
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
        console.log(currentNumber);
        if(!operation) {
            firstNumber = currentNumber;
        } else {
            secondNumber = currentNumber;
        }
        updateCurrentNumber()
    })
})

function resultOfCalculation() {
    currentOperand.textContent = result;
}
// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
operatorButtons.forEach(operating => {
    operating.addEventListener("click", function(event) {
        operation = operating.textContent;
        if(secondNumber) {
            // Do an operation here
             result = operate(Number(firstNumber), operation , Number(secondNumber))
            console.log(result);
            resultOfCalculation();

            firstNumber = result;
            secondNumber = "";
            currentNumber = ""
        } else {
            currentNumber = ""
        }
        updateCurrentNumber()
    });
});

equalButton.addEventListener("click", function() {
    
})


clearButton.addEventListener("click", function() {
    previousOperand.textContent = "";
    currentOperand.textContent = "";
    result= 0
})