let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function setOperator(op) {
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    displayValue = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

updateDisplay();