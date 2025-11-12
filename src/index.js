import {createToDo} from "./todoitems.js";

let firstToDo = createToDo("Finish this project", "Finish the ToDoApp for my github portfolio", "18-11-2025", "medium");

console.log("FIRST TODO: \n");
for (const key in firstToDo) {
    console.log(`${key} : ${firstToDo[key]}\n`);
}