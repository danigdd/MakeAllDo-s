import { render } from "./view";
import { addProject } from "./project";
import "./toDoController";
import "./validationController"
import "./projectController";
import "../styles/general-styles.css";

const myFirstProject = addProject("My first project", "First project");

render();
