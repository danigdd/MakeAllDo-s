import {createToDo, deleteToDo} from "./todoitem.js";
import { createProject } from "./project.js";
import { PersonalPage, displayAllProjects } from "./personalpage.js";
import "../styles/general-styles.css"

let firstProject = createProject("My first project", true);
let secondProject = createProject("Prueba", false);

PersonalPage();

displayAllProjects();

let firstToDo = createToDo("Finish this project", "Finish the ToDoApp for my github portfolio", "18-11-2025", "medium", firstProject);
let secondToDo = createToDo("Go to the gym", "Go to the gym with my friend Hugo", "13-11-2025", "high", firstProject);