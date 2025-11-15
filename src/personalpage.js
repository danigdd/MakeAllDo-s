import "../styles/personal-page.css";
import logoImageSource from "../resources/todologo.png"
import displaySelected from "./displayAllToDos.js";
const contentTemplate = document.getElementById("content");

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

function displayProject(projectObject) {
    const projectsDisplay = document.getElementById("projectsDisplay");

    const projectToAdd = document.createElement("div");
    projectToAdd.textContent = projectObject.name;
    projectToAdd.style.cursor = "pointer";

    projectsDisplay.appendChild(projectToAdd);



    if (projectObject.selected == true) projectToAdd.style.fontWeight = "700";
}

function createAndDisplayLayout() {
    const layoutDisplayed = document.createElement("div");
    layoutDisplayed.id = "layoutDisplayed";
    layoutDisplayed.textContent = "das";
    contentTemplate.appendChild(layoutDisplayed);

}

export {PersonalPage, displayProject};