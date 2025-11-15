import { projectState, addProject } from "./project";

import logoImage from "../resources/todologo.png";

export function render() {
    const root = document.getElementById("content");
    root.innerHTML = "";

    const app = document.createElement("div");
    app.id = "app";
    app.style.display = "flex";

    root.appendChild(app);

    const sideBar = document.createElement("div");
    sideBar.id = "sidebar";
    app.appendChild(sideBar);

    // LOGO
    const logo = document.createElement("img");
    logo.src = logoImage;
    logo.id = "logo";
    logo.style.width = "120px";
    logo.style.display = "block";
    logo.style.margin = "20px auto";
    sideBar.appendChild(logo);

    // TITLE
    const title = document.createElement("p");
    title.textContent = "Projects";
    title.style.fontWeight = "bold";
    title.style.textAlign = "center";
    title.style.marginBottom = "10px";
    title.style.fontSize = "38px";
    sideBar.appendChild(title);

    // PROJECT LIST CONTAINER
    const projectList = document.createElement("div");
    projectList.id = "projectList";
    sideBar.appendChild(projectList);

    // DISPLAY PROJECTS
    projectState.projects.forEach(project => {
        const item = document.createElement("div");
        item.textContent = project.name;
        item.dataset.id = project.id;
        item.style.padding = "8px";
        item.style.cursor = "pointer";

        // current project
        if (project.id === projectState.selectedProjectID) {
            item.style.fontWeight = "bold";
        }

        // listener
        item.addEventListener("click", () => {
            projectState.selectedProjectID = project.id;
            render();
        });

        projectList.appendChild(item);
    });

    const main = document.createElement("div");
    main.id = "main";
    app.appendChild(main);

    
}

/*
import "../styles/personal-page.css";
import logoImageSource from "../resources/todologo.png"
import {displaySelected} from "./displayAllToDos.js";
import { searchSelectedProject, list_of_projects } from "./project.js";
const contentTemplate = document.getElementById("content");

let projectsRelationDOMLogic = {};
let selected_project = null;
function PersonalPage() {
    createAndDisplayLeftSection();
    createAndDisplayLayout();
    displaySelected();
}

function createAndDisplayLeftSection() {
    const leftSection = document.createElement("div"); 
    leftSection.id = "leftSectionProjects";
    contentTemplate.appendChild(leftSection);

    const logoImage = document.createElement("img");
    logoImage.id = "logoImage";
    logoImage.src = logoImageSource;
    leftSection.appendChild(logoImage);

    const title = document.createElement("p");
    title.id = "projectsTitle";
    title.textContent = "Projects";
    leftSection.appendChild(title);

    const projectsDisplay = document.createElement("div");
    projectsDisplay.id = "projectsDisplay";
    leftSection.appendChild(projectsDisplay);


}

function createAndDisplayLayout() {
    const layoutDisplayed = document.createElement("div");
    layoutDisplayed.id = "layoutDisplayed";
    contentTemplate.appendChild(layoutDisplayed);

    selected_project = searchSelectedProject();
    console.log(selected_project);
    const selected_project_name = document.createElement("p");

    if (selected_project) selected_project_name.textContent = selected_project.name + " To-Do's :";
    else selected_project_name.textContent = "No project selected";
    layoutDisplayed.appendChild(selected_project_name);

}



function displayProject(projectObject) {
    const projectsDisplay = document.getElementById("projectsDisplay");

    const projectToAdd = document.createElement("div");
    projectToAdd.textContent = projectObject.name;
    projectToAdd.id = projectObject.name.toLowerCase().replace(/\s+/g, "") + "id";
    projectToAdd.style.cursor = "pointer";

    projectsDisplay.appendChild(projectToAdd);

    projectsRelationDOMLogic[projectToAdd.id] = projectObject.id;



    markDOMProjectSelected(projectObject, projectToAdd);
}

function displayAllProjects() {
    for (let project of list_of_projects) {
        displayProject(project);
    }
}

function markDOMProjectSelected (projectLogic, projectDOM) {
    if (projectLogic.selected == true) {
        projectDOM.style.fontWeight = "700";

        selected_project.selected = false;
        // giveup
    }
}
export {PersonalPage, displayAllProjects, projectsRelationDOMLogic, markDOMProjectSelected};*/