import {createToDo, deleteToDo} from "./todoitem.js";
import { createProject } from "./project.js";
import {PersonalPage} from "./personalpage.js";
import "../styles/general-styles.css"

PersonalPage();

let firstProject = createProject("My first project", true);
let secondProject = createProject("Prueba", false);
let firstToDo = createToDo("Finish this project", "Finish the ToDoApp for my github portfolio", "18-11-2025", "medium", firstProject);
let secondToDo = createToDo("Go to the gym", "Go to the gym with my friend Hugo", "13-11-2025", "high", firstProject);

let contador = 1;

for (let key of firstProject.todos_list) {
    console.log(`TODO NUMBER ${contador}`);
    for (let keyObject in key) {
        console.log(`${keyObject} : ${key[keyObject]}`);
    }
    contador++;
}

deleteToDo(secondToDo.id, firstProject);

console.log("WE JUST ERASED THE SECOND TODO");

contador = 1;

for (let key of firstProject.todos_list) {
    console.log(`TODO NUMBER ${contador}`);
    for (let keyObject in key) {
        console.log(`${keyObject} : ${key[keyObject]}`);
    }
    contador++;
}

