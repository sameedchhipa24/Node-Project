import inquirer from "inquirer";
let students = ["sameed"];
async function mainMenu() {
    let listToDo = await inquirer.prompt([
        {
            name: "todolist",
            type: "list",
            choices: ["Add Todo", "Delete Todo", "View Todo", "Exit"],
            message: "Todolist",
        },
    ]);
    let { todolist } = listToDo;
    if (todolist === "Add Todo") {
        let addTodo = await inquirer.prompt({
            name: "addtodo",
            type: "input",
            message: "Enter Your Add Todo",
        });
        students.push(addTodo.addtodo);
        console.log("Todo added successfully.");
        mainMenu();
    }
    else if (todolist === "View Todo") {
        console.log("Todo List:");
        students.map((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
        mainMenu();
    }
    else if (todolist === "Delete Todo") {
        let deleteTodo = await inquirer.prompt({
            name: "delete",
            type: "list",
            choices: students,
            message: "Select a todo to delete",
        });
        const todoToDelete = deleteTodo.delete;
        const index = students.indexOf(todoToDelete);
        if (index > -1) {
            students.splice(index, 1);
            console.log(`"${todoToDelete}" has been deleted.`);
        }
        else {
            console.log('Todo not found.');
        }
        mainMenu();
    }
    else if (todolist === "Exit") {
        console.log("Exiting Todo App.");
    }
}
mainMenu();
