var readlineSync = require('readline-sync');

var firstNum = readlineSync.question('What is your first number: ');
console.log('You put ' + firstNum);

var secondNum = readlineSync.question('What is your second number: ');
console.log('You put ' + secondNum);

var operatorOptions = ['add', 'subtract', 'multiply', 'divide'];

var index = readlineSync.keyInSelect(operatorOptions, 'What operation do you want to perform: add, subtract, multiply or divide?');

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

var objects = {
    'add': add,
    'subtract': subtract,
    'multiply': multiply,
    'divide': divide
};

var operation = operatorOptions[index];

console.log('The result is: ' +
    objects[operation](firstNum, secondNum));