#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';


const answer = await inquirer.prompt([{
    message: (chalk.greenBright("Enter the First Number")),
    type: "number",
    name: "num1"
},
{
    message: (chalk.yellowBright("Enter Your Second Number")),
    type: "number",
    name: "num2"
},
{
    name: "operators",
    type: "rawlist",
    message: (chalk.bold.magenta("Select Your Operators")),
    choices: ["+", "-", "*", "/"],



}
])

 let result;
const { num1 , num2, operators } = answer;
if (num1 && num2 && operators) {
   
    if (operators === "+") {
        result = num1 + num2
    } else if (operators === "-") {
        result = num1 - num2
    } else if (operators === "*") {
        result = num1 * num2
    } else if (operators === "/") {
        result = num1 / num2
    } 
        let result1=chalk.rgb(120,111,214)("your result is :" + result)
        console.log(result1);
      
    
}
else {
    console.log(chalk.redBright("kindly enter valid input"));

}
