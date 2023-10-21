import inquirer from "inquirer";
import chalk from "chalk";




async function wordCounter() {
    let WordCounter = await inquirer.prompt([{
        message: "Please write the sentence",
        type: "input",
        name: "sentence"
    }]);


 const { sentence } = WordCounter;

    let Split=  sentence.split(" ")

    const Count=Split.length

    console.log(chalk.blueBright(`
    -------------------------------
    Total Number Of Words=${Count}
    -------------------------------
    `));

    let againRestart = await inquirer.prompt({
        message: "Kya Ap Dubara Chalana Chahte he",
        type: "list",
        choices: ["Yes", "No"],
        name: "question"
    })

    let { question } = againRestart

    if (question === "Yes") {
         wordCounter()
    }
}

wordCounter()