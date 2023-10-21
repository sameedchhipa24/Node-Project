import inquirer from "inquirer";
import chalk from "chalk";
async function startQuiz() {
    let name1 = await inquirer.prompt([
        {
            message: "What Is Your Name",
            type: "input",
            name: "Name",
        }
    ]);
    let { Name } = name1;
    let Loop = await inquirer.prompt({
        message: "How many questions do you have to solve?(Maximum 50 Question)",
        type: "number",
        name: "loop",
    });
    let { loop } = Loop;
    let apilink = "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple";
    let fetchData = async (data) => {
        try {
            let fetchQuiz = await fetch(data);
            let res = await fetchQuiz.json();
            return res.results;
        }
        catch (error) {
            console.log(error, `Fetch Failed`);
        }
    };
    let quiz = await fetchData(apilink);
    let CorrectAnswer = 0;
    if (loop <= 50) {
        for (let i = 0; i < loop; i++) {
            let answer = [...quiz[i].incorrect_answers, quiz[i].correct_answer];
            let Quiz = await inquirer.prompt({
                message: quiz[i].question,
                type: "rawlist",
                name: "AskQuiz",
                choices: answer.map((quizz) => quizz)
            });
            if (Quiz.AskQuiz === quiz[i].correct_answer) {
                CorrectAnswer++;
            }
            else {
                console.log('Incorrect. The correct answer is:', quiz[i].correct_answer);
            }
        }
        console.log(chalk.bold(chalk.greenBright(`${Name}, Your final score: ${CorrectAnswer}/${loop}`)));
    }
    else {
        console.log("Maximum 50 MCQs Solve Karsakte he");
        let againRestart = await inquirer.prompt({
            message: "Do you want to run again?",
            type: "list",
            choices: ["Yes", "No"],
            name: "again"
        });
        let { again } = againRestart;
        if (again === "Yes") {
            startQuiz();
        }
    }
}
startQuiz();
