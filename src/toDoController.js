import { getSelectedProject, addTodoToProject } from "./project";
import { createTodo } from "./todoitem";
import { render } from "./view";

document.addEventListener("submit", e => {
    if (e.target.id == "formContainer") {
        e.preventDefault(); // no reload of page

        const title = document.getElementById("title_to_do").value;
        const description = document.getElementById("description_to_do").value;
        const date = document.getElementById("dueDate_to_do").value;
        const priority = document.getElementById("priority_to_do").value;
        const projectID = getSelectedProject().id;

        const toDoObject = createTodo(
            {
                title, 
                description,
                date,
                priority,
                projectID
            }
        )

        addTodoToProject(projectID, toDoObject);
    }
});