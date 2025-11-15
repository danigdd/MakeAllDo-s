import {createToDo, deleteToDo} from "./todoitem.js";
import { createProject } from "./project.js";
import { PersonalPage, displayAllProjects } from "./personalpage.js";
import {setSelected} from "./displayAllToDos.js";
import "../styles/general-styles.css"


let secondProject = createProject("Prueba", false);
let firstProject = createProject("My first project", true);

console.log(`Proof is ${firstProject.selected}`);

PersonalPage();
displayAllProjects();

const projectsOnDOM = document.querySelectorAll("#projectsDisplay div");
projectsOnDOM.forEach(project => {
    project.addEventListener("click", () => {
        setSelected(project);
    });
});

console.log(`Proof is ${secondProject.selected}`);

let firstToDo = createToDo("Finish this project", "Finish the ToDoApp for my github portfolio", "18-11-2025", "medium", firstProject);
let secondToDo = createToDo("Go to the gym", "Go to the gym with my friend Hugo", "13-11-2025", "high", firstProject);