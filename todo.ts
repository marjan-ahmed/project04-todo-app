import inquirer from "inquirer";
import chalk from "chalk";

const todos: number[] = [];
let condition: boolean = true

console.log(chalk.bgRed("Hey Welcome to To-Do list app! (by Marjan Ahmed)"));

while(condition){

    const addTask = await inquirer.prompt(
        [
            {
                name: "userTodo",
                type: "input",
                message: "Enter your to-do:"
            },
            {
                name: "confirmation",
                type: "confirm",
                message: "Do you want to add more todos ?"
                
            }
        ]
    );
    
    const addingTask = () => {
    todos.push(addTask.userTodo);
    };

    addingTask();
    condition = addTask.confirmation;
    console.log(todos);

};