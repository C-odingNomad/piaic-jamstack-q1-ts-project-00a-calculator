"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
var numVal1 = Number(prompt("Enter First Number: "));
var numVal2 = Number(prompt("Enter Second Number: "));
var operator = prompt("Enter Desired Operation to Perform (+, -, *, /): ");
switch (operator) {
    case "+":
        console.log("Answer: ".concat(numVal1, " ").concat(operator, " ").concat(numVal2, " = ").concat(numVal1 + numVal2));
        break;
    case "-":
        console.log("Answer: ".concat(numVal1, " ").concat(operator, " ").concat(numVal2, " = ").concat(numVal1 - numVal2));
        break;
    case "*":
        console.log("Answer: ".concat(numVal1, " ").concat(operator, " ").concat(numVal2, " = ").concat(numVal1 * numVal2));
        break;
    case "/":
        console.log("Answer: ".concat(numVal1, " ").concat(operator, " ").concat(numVal2, " = ").concat(numVal1 / numVal2));
        break;
    default:
        console.log("Please try again with correct values!");
        break;
}
