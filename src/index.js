import { render } from "./view";
import { addProject } from "./project";
import "./toDoController";
import "../styles/general-styles.css";

const myFirstProject = addProject("My first project");
const d = addProject("mysecond project");

console.log("ALL TODOS OF PROJECT");
console.log(myFirstProject.todos);
render();