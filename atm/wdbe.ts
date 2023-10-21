import inquirer from "inquirer";
import chalk from "chalk";


export async function deposit() {
   
    let atm1 = await inquirer.prompt([{
        message: (chalk.yellow("What do you want to do?".toUpperCase())),
        type: "list",
        choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
        name: "PaymentStatus"
    }]);
    let { PaymentStatus } = atm1;

    let Balance = 100000;
    if (PaymentStatus == "Check Balance") {

        console.log(chalk.bold.blue(`Your Current Balance Rs:${Balance}`));

    }

    // Deposit
    else if (PaymentStatus == "Deposit") {


        let value = await inquirer.prompt({
            message: "Enter Your Deposit",
            type: "number",
            name: "deposit"
        })
        let { deposit } = value
        console.log(chalk.bold.blue(`Your Balance is Rs:${deposit + Balance}`));



        
        // Withdraw
    } else if (PaymentStatus == "Withdraw") {
        let value1 = await inquirer.prompt({
            message: "Enter Your Withdraw",
            type: "number",
            name: "withdraw"
        })
        let { withdraw } = value1
       
            if (withdraw < 50000) {
          console.log(chalk.yellowBright(`Your Remaining Balance :${Balance - withdraw}`))
          
            
        }
    
    else {
        console.log(`Your Account limit is 50000`);
        
    }
    
} 
    
    
}

