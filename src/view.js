import { projectState, addProject, selectProject } from "./project";
import "../styles/personal-page.css";
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
    sideBar.appendChild(logo);

    // TITLE
    const title = document.createElement("p");
    title.textContent = "Projects";
    title.style.fontWeight = "bold";
    title.style.textAlign = "start";
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
            selectProject(project.id);
            render();
        });

        projectList.appendChild(item);
    });

    const main = document.createElement("div");
    main.id = "main";
    app.appendChild(main);

    
}
