#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "no1" },
  { message: "Enter Second Number", type: "number", name: "no2" },
  {
    message: "select any one Operation",
    name: "operator",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.no1 + answer.no2);
} else if (answer.operator === "Subtraction") {
  console.log(answer.no1 - answer.no2);
} else if (answer.operator === "Multiplication") {
  console.log(answer.no1 * answer.no2);
} else if (answer.operator === "Division") {
  console.log(answer.no1 / answer.no2);
} else {
  console.log("Select operator");
}
