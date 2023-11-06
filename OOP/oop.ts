import inquirer from "inquirer";

class Task {
    constructor(public name: string, public completed: boolean) {}
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  }
  
  class TaskList {
    private tasks: Task[] = [];
  
    addTask(name: string) {
      const task = new Task(name, false);
      this.tasks.push(task);
    }
  
    listTasks() {
      console.log('Tasks:');
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.name}`);
      });
    }
  
    toggleTaskComplete(index: number) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].toggleComplete();
      }
    }
  }
  
  async function main() {
    const taskList = new TaskList();
  
    while (true) {
      const { choice } = await inquirer.prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Choose an action:',
          choices: ['Add Task', 'List Tasks', 'Toggle Task Complete', 'Quit'],
        },
      ]);
  
      if (choice === 'Quit') {
        break;
      } else if (choice === 'Add Task') {
        const { taskName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'taskName',
            message: 'Enter the task name:',
          },
        ]);
        taskList.addTask(taskName);
      } else if (choice === 'List Tasks') {
        taskList.listTasks();
      } else if (choice === 'Toggle Task Complete') {
        const { index } = await inquirer.prompt([
          {
            type: 'input',
            name: 'index',
            message: 'Enter the task number to toggle complete:',
          },
        ]);
        taskList.toggleTaskComplete(parseInt(index) - 1);
      }
    }
  }
  
  main();