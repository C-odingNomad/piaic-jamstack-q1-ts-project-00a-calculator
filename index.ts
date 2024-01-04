// In this program I try to make a simple calculator (for basic arithmetic operations), using Prompt-Sync library.

import { resourceLimits } from "worker_threads";

// Importing prompt-sync library:
let prompt = require("prompt-sync")();

// Variable for storing 1st numeric value:
let numVal1 = Number(prompt("Enter First Number: "));

// Variable for storing 2nd numeric value:
let numVal2 = Number(prompt("Enter Second Number: "));

let operator = prompt("Enter Desired Operation to Perform (+, -, *, /): ");

// Using switch condition for conditioning different arithmetic operators and printing the final answer:
switch (operator) {
  case "+":
    console.log(
      `Answer: ${numVal1} ${operator} ${numVal2} = ${numVal1 + numVal2}`
    );
    break;
  case "-":
    console.log(
      `Answer: ${numVal1} ${operator} ${numVal2} = ${numVal1 - numVal2}`
    );
    break;
  case "*":
    console.log(
      `Answer: ${numVal1} ${operator} ${numVal2} = ${numVal1 * numVal2}`
    );
    break;
  case "/":
    console.log(
      `Answer: ${numVal1} ${operator} ${numVal2} = ${numVal1 / numVal2}`
    );
    break;

  default:
    console.log("Please try again with correct values!");
    break;
}

export {};
