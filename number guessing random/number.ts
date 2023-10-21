#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const rainbowTitle = chalkAnimation.rainbow("WELCOME TO NUMBER GUESSING GAME");
await sleep();
rainbowTitle.stop();
async function guess_number(){
console.log(`${chalk.bgRed("HOW TO PLAY")}
${chalk.italic(chalk.blue("Try to Guess the Number Between 1-10"))}
${chalk.bold(chalk.green("When your Guess is Wrong your one"))} ${chalk.bgRed("Live Losts")}
`);

for(let i=0;i<=3;i++){
let guessnumber=await inquirer.prompt({
    message:"Enter Your Guess Number 1 to 10",
    type:"number",
    name:"guesnumber"
})

let{guesnumber}=guessnumber
let number=Math.round(Math.random()*10)
if(guesnumber===number){
    console.log(chalk.bgYellow(`CONGRATULATIONS "YOU WON"`));
    break;
}
else{
console.log(`${chalk.yellow("TRY AGAIN")}
${chalk.bgMagentaBright(`Your Live Remaining is ${[3-i]}♥`)}
${chalk.blue(`You Lose Random Number is : ${number}`.toUpperCase())}`);
  
}}}

guess_number()

