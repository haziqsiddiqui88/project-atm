#!  /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAnswer.amount;
        console.log("your remaining is: " + myBalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is: " + myBalance);
    }
}
else {
    console.log("incorrect pin");
}
