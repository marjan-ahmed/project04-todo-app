import inquirer from "inquirer";
const todos = [];
let condition = true;
console.log("Hey Welcome to To-Do list app! (by Marjan Ahmed)");
while (condition) {
    const addTask = await inquirer.prompt([
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
    ]);
    todos.push(addTask.userTodo);
    condition = addTask.confirmation;
    console.log(todos);
}
;
