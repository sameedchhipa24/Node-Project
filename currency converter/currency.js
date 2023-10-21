#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { exchangeRates } from "./exchangesrates.js";
async function Currencyconverter() {
    let CurrencyConverter = await inquirer.prompt([
        {
            message: "SELECT CURRENCY",
            type: "list",
            choices: Object.keys(exchangeRates),
            name: "BaseCountry"
        },
        {
            message: `ENTER THE AMOUNT`,
            type: "number",
            name: "Amount"
        },
        {
            message: "SELECT CURRENCY",
            type: "list",
            choices: Object.keys(exchangeRates),
            name: "ExchangeCurrency"
        }
    ]);
    const { BaseCountry, Amount, ExchangeCurrency } = CurrencyConverter;
    console.log(chalk.rgb(221, 222, 123)(`----------------------------------------------------------------------
          ${BaseCountry} to ${ExchangeCurrency}                           
---------------------------------------------------------------------------`));
    // Conversion logic...
    if (BaseCountry && Amount && ExchangeCurrency) {
        let convert = exchangeRates[BaseCountry][ExchangeCurrency] * Amount;
        console.log(chalk.bold(chalk.red(`${ExchangeCurrency} => ${chalk.greenBright(convert)}`)));
    }
    else {
        console.log("invalid inputs");
    }
    let againRestart = await inquirer.prompt({
        message: "Kya Ap Dubara Chalana Chahte he",
        type: "list",
        choices: ["Yes", "No"],
        name: "question"
    });
    let { question } = againRestart;
    if (question === "Yes") {
        Currencyconverter();
    }
}
Currencyconverter();
