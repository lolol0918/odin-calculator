const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear-entry");
const clearAllBtn = document.getElementById("clear-all");
const deleteButton = document.getElementById("backspace");
const equalButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const plusMinusButton = document.getElementById("plus-minus");

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

const clear = () => {
    display.value = 0;
};

const clearAll = () => {
    clear();  // inherit/reuse the clear() logic
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
};

const backspace = () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        clear();
    }
};

const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
        case "+":
            return firstOperand + secondOperand;
        case "-":
            return firstOperand - secondOperand;
        case "*":
            return firstOperand * secondOperand;
        case "/":
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
};

plusMinusButton.addEventListener("click", () => {
    display.value = parseFloat(display.value) * -1;
});

decimalButton.addEventListener("click", () => {
    if (!display.value.includes(".")) {
        display.value += decimalButton.dataset.value;
    }
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        firstOperand = display.value;
        currentOperator = button.dataset.value
        clear();
    });
});

equalButton.addEventListener("click", () => {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(display.value);
    display.value = calculate(firstOperand, secondOperand, currentOperator);
    firstOperand = parseFloat(display.value);
});

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        const value = numberButton.dataset.value;

        if (display.value == "0") {
            display.value = value;
        } else {
            display.value += value;
        }

    });
});

deleteButton.addEventListener("click", backspace);
clearBtn.addEventListener("click", clear);
clearAllBtn.addEventListener("click", clearAll);