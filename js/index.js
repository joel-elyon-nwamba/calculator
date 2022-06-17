const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");
const numbers = document.querySelectorAll(".number");
const operatorButton = document.querySelectorAll(".operator");
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

function operate(a, b, operating) {
    if(operating === "+") {
        return addition(a, b)
    } else if(operating === "-") {
        return subtraction(a, b)
    } else if(operating === "*" ) {
        return multiply(a, b)
    } else{
        return divide(a, b)
    } 
}

let number1 = "";
let number2 = "";
let operation = "";
let result = "";

numbers.forEach(number => {
    number.addEventListener("click", function(event) {
        number1 += event.target.textContent;
        previousOperand.textContent = number1;
    })
});

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
operatorButton.forEach(operator => {
    operator.addEventListener("click", function(event) {
        if(event.target.textContent !== "=") {
            operation = event.target.textContent;
            previousOperand.textContent = number1 + operation
            number1 = ""
        } else {
            if(operation === "+") {
                return number1 + number2
            } else if(operation ===  "-") {
                return number1 - number2
            } else if(operation === "*") {
               return number1 * number2
            } else if(operation === "/") {
                return number1 / number2;
            }
        }
    })
});

equalButton.addEventListener("click", function() {
    result = operate(parseInt(number1), parseInt(number2), operation)
    console.log(result)
})


























































































// equalKey.addEventListener("click", function() {
//     result = operate(Number(firstNumber), Number(secondNumber), clickedOperator);
//     display.textContent = result;
//     previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + secondNumber;
//     secondNumber = result;
// });






