#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please Guess a number between 1 to 10: "
    }
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulations ! You Gussed The Right Number");
}
else {
    console.log("Sorry ! You Gussed The Wrong Number");
}
;
