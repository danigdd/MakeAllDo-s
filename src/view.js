import { projectState, selectProject, getSelectedProject} from "./project";
import "../styles/personal-page.css";
import logoImage from "../resources/todologo.png";

const root = document.getElementById("content");

function openForm() {
    root.style.transition = "0.2s";
    root.style.opacity = 0.3;

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    

    const form = document.createElement("div");
    form.id = "formContainer";

    const formProjectTitle = document.createElement("p");
    formProjectTitle.id = "formProjectTitle";
    formProjectTitle.textContent = "Create a new To-Do for " +  getSelectedProject().name;
    form.appendChild(formProjectTitle);

    form.innerHTML += 
    `
    <form id = "formOfNewTODO">
        <label>Title</label>
        <input type = "text" id = "title_to_do" placeholder = "Title..." name = "title_to_do"></input>

        <label>Description</label>
        <input type = "text" id = "description_to_do" placeholder = "Description..." name = "description_to_do"></input>

        <label>Due date</label>
        <input type = "date" id = "dueDate_to_do" placeholder = "Due date..." name = "dueDate_to_do"></input>

        <label>Priority</label>
        <select name = "priority_to_do" id = "priority_to_do" style="color:black;">
            <option value = "" disable selected hidden>Priority...</option>
            <option value = "high">High</option>
            <option value = "medium">Medium</option>
            <option value = "low">Low</option>  
        </select>

        <button type = "submit">Add new To-Do</button>
    </form>
    
    `

    overlay.appendChild(form);

    // if a click is outside the form or the save/discard button is clicked, close the form
    overlay.addEventListener("click", e => {
        if (e.target === overlay) closeForm();
    });
}

export function closeForm() {
    root.style.opacity = 1;
    const overlay = document.getElementById("overlay");
    if (overlay) overlay.remove();
}

export function render() {
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

    const selectedProject = getSelectedProject();

    // MAIN LAYOUT
    const main = document.createElement("div");
    main.id = "main";
    app.appendChild(main);

    // CURRENT PROJECT TITLE
    const selectedProjectTitle = document.createElement("p");
    selectedProjectTitle.id = "selectedProjectTitle";

    if (selectProject) {
        selectedProjectTitle.textContent = selectedProject.name;
    } else {
        selectedProjectTitle.textContent = "No project selected";
    }
    
    main.appendChild(selectedProjectTitle);
    
    // ANNEX OF MAIN LAYOUT
    const annex = document.createElement("div");
    annex.id = "annexMainLayout";

    const titleAnnex = document.createElement("div");
    titleAnnex.id = "titleAnnex";
    titleAnnex.textContent = "Title";
    annex.appendChild(titleAnnex);

    const descriptionAnnex = document.createElement("div")
    descriptionAnnex.id = "descriptionAnnex";
    descriptionAnnex.textContent = "Description";
    annex.appendChild(descriptionAnnex);

    const dateAnnex = document.createElement("div");
    dateAnnex.id = "dateAnnex";
    dateAnnex.textContent = "Date";
    annex.appendChild(dateAnnex);

    const priorityAnnex = document.createElement("div");
    priorityAnnex.id = "priorityAnnex";
    priorityAnnex.textContent = "Priority";
    annex.appendChild(priorityAnnex);

    main.appendChild(annex);
    // DISPLAY TODO'S OF SELECTED PROJECT

    if (selectedProject) {
        const toDoContainer = document.createElement("div");
        toDoContainer.id = "toDoContainer";

        
        selectedProject.todos.forEach(todo => {
            const toDoItem = document.createElement("div");
            toDoItem.className = "toDoItem";

            const toDoItemTitle = document.createElement("div");
            toDoItemTitle.textContent = todo.title;
            toDoItem.appendChild(toDoItemTitle);

            const toDoItemDescription = document.createElement("div");
            toDoItemDescription.textContent = todo.description;
            toDoItem.appendChild(toDoItemDescription);

            const toDoDueDate = document.createElement("div");
            toDoDueDate.textContent = todo.dueDate;
            toDoItem.appendChild(toDoDueDate);
            
            const toDoPriority = document.createElement("div");
            toDoPriority.textContent = todo.priority.toUpperCase();
            toDoItem.appendChild(toDoPriority);

            toDoContainer.appendChild(toDoItem);
        });

        const newToDoButton = document.createElement("button");
        newToDoButton.id = "newToDoButton";
        toDoContainer.appendChild(newToDoButton);

        // event listener for creating a new to do
        newToDoButton.addEventListener("click", () => {
            openForm();
        });


        main.appendChild(toDoContainer);
    }

    
}
