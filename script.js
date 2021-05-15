const operator = getOperator();
const operandsCount = getOperandsCount();
let result = 0;
let expression = '';

for (let i = 0; i < operandsCount; i++) {
    const operand = getOperand(i + 1)

    if (i === 0) {
        result = operand;
        expression = operand;
    } else {
        result = calculate(operator, result, operand);
        expression += ` ${operator} ${operand}`
    }
}

alert(`${expression} = ${result}`);


function getOperator() {
    let answerOperator = '';
    do {
        answerOperator = prompt('Enter the operation you want to do (+ - / *)');
    } while (isOperatorInvalid(answerOperator));
    return answerOperator;
}

function isOperatorInvalid(answerOperator) {
    return (
        answerOperator !== '+' && 
        answerOperator !== '-' && 
        answerOperator !== '*' && 
        answerOperator !== '/'
    );
}

function getOperandsCount() {
    let answerOperandsCount = '';
    do {
        answerOperandsCount = prompt ('Enter the number of operands from 2 to 5');
    } while (isOperandsCountInvalid(answerOperandsCount))
    return +answerOperandsCount;
}

function isOperandsCountInvalid(answerOperandsCount) {
    return (
        isNaN(answerOperandsCount) ||
        answerOperandsCount > 5 || 
        answerOperandsCount < 2 ||
        !Number.isInteger(+answerOperandsCount)
    );
}

function getOperand(index) {
    let answerOperand = '';
    do {
        answerOperand = prompt(`Enter the operand ${index}`);
    } while (!isOperandValid(answerOperand))
    return +answerOperand;
}

function isOperandValid(answerOperand) {
    return !isNaN(answerOperand);
}

function calculate(operator, a, b) {
    switch (operator) {
    case '+':
    return a + b;
    case '-':
    return a - b;
    case '*':
    return a * b;
    case '/':
    return a / b;
    }
}