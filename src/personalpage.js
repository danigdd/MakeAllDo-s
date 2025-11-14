import "../styles/personal-page.css";
import logoImageSource from "../resources/todologo.png"

const contentTemplate = document.getElementById("content");

export default function PersonalPage() {
    createAndDisplayProjects();
    createAndDisplayLayout();


}

function createAndDisplayProjects() {
    const projectsDisplayed = document.createElement("div");
    projectsDisplayed.id = "leftSectionProjects";
    contentTemplate.appendChild(projectsDisplayed);

    const logoImage = document.createElement("img");
    logoImage.id = "logoImage";
    logoImage.src = logoImageSource;
    projectsDisplayed.appendChild(logoImage);


}

function createAndDisplayLayout() {
    const layoutDisplayed = document.createElement("div");
    layoutDisplayed.id = "layoutDisplayed";
    layoutDisplayed.textContent = "das";
    contentTemplate.appendChild(layoutDisplayed);

    
}