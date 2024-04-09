#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const todos = [];
let condition = true;
console.log(chalk.bgRed("Hey Welcome to To-Do list app! (by Marjan Ahmed)"));
while (condition) {
    const addTask = await inquirer.prompt([
        {
            name: "userTodo",
            type: "input",
            message: " \t \n Enter your to-do:"
        },
        {
            name: "confirmation",
            type: "confirm",
            message: "\t \n Do you want to add more todos ?",
            default: "false"
        }
    ]);
    console.log(chalk.blue(addTask.userTodo), "is added to your todo list");
    todos.push(addTask.userTodo);
    condition = addTask.confirmation;
    console.log(todos);
}
;
