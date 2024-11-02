let currentOperand = "";
let previousOperand = "";
let operation = undefined;

const fullOperationTextElement = document.getElementById("full-operation");

function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = "";
    updateDisplay();
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result;
    operation = undefined;
    previousOperand = "";
    updateDisplay();
}

function clearDisplay() {
    currentOperand = "";
    previousOperand = "";
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    fullOperationTextElement.innerText = 
        previousOperand + (operation ? " " + operation : "") + (currentOperand ? " " + currentOperand : "");
}
