import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number :", type: "number ", name: "fristNumber" },
    { message: "Enter second number :", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"]
    },
]);
console.log(answer);
//conditional statemet
if (answer.operator === "Addition") {
    console.log(answer.fristNumber + answer.secondNumber);
}
else if (answer.operator === "Subraction") {
    console.log(answer.fristNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fristNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.fristNumber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
