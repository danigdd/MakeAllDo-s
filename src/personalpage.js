import "../styles/personal-page.css";
import logoImageSource from "../resources/todologo.png"
import displaySelected from "./displayAllToDos.js";
import { searchSelectedProject, list_of_projects } from "./project.js";
const contentTemplate = document.getElementById("content");

function PersonalPage() {
    createAndDisplayLeftSection();
    displaySelected();
    createAndDisplayLayout();


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

function displayProject(projectObject) {
    const projectsDisplay = document.getElementById("projectsDisplay");

    const projectToAdd = document.createElement("div");
    projectToAdd.textContent = projectObject.name;
    projectToAdd.style.cursor = "pointer";

    projectsDisplay.appendChild(projectToAdd);



    if (projectObject.selected == true) projectToAdd.style.fontWeight = "700";
}

function displayAllProjects() {
    for (let project of list_of_projects) {
        displayProject(project);
    }
}

function createAndDisplayLayout() {
    const layoutDisplayed = document.createElement("div");
    layoutDisplayed.id = "layoutDisplayed";
    contentTemplate.appendChild(layoutDisplayed);

    let selected_project = searchSelectedProject();
    console.log(selected_project);
    const selected_project_name = document.createElement("p");

    if (selected_project) selected_project_name.textContent = selected_project.name;
    else selected_project_name.textContent = "No project selected";
    layoutDisplayed.appendChild(selected_project_name);

}

export {PersonalPage, displayAllProjects};