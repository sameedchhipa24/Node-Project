#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const rainbow = chalkAnimation.rainbow('Welcome ATM Machine'); // Animation starts
setTimeout(() => {
    console.log(chalk.rgb(55, 113, 111)("Press Space key start ATM")); // Animation stops
}, 500);
let atm = await inquirer.prompt({
    message: "Enter the pin code".toUpperCase(),
    type: "password",
    name: "pincode",
});
let { pincode } = atm;
async function atmmachine() {
    let Usernameandpincode = ["sameed", "gufran", "owais", "asad"];
    for (let i = 1001; i < 1007; i++) {
        if (pincode === i) {
            console.log(`Welcome ${Usernameandpincode[0]}`);
        }
    }
}
atmmachine();
// //  316 Sameed
// if (pincode == 316) {
//     console.log(chalk.blue(`Welcome Sameed`));
//     deposit()
// }
// // 317 Muzammil
// else if (pincode == 317) {
//     console.log(chalk.red("Welcome Muzamil"));
//     deposit()
// }
// // 318 Musavir
// else if (pincode == 318) {
//     console.log(chalk.yellowBright("Welcome Musavir"));
//     deposit()
// }
// // 319 Mudassir
// else if (pincode == 319) {
//     console.log(chalk.green("Welcome Mudassir"));
//     deposit()
// }
// else {
//     console.log(chalk.redBright("Invalid Pin"));
// }
