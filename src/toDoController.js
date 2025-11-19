import { getSelectedProject, addTodoToProject } from "./project";
import { createTodo } from "./todoitem";
import { render, closeForm} from "./view";

document.addEventListener("submit", e => {
    if (e.target.id == "formOfNewTODO") {
        console.log("we entered");
        e.preventDefault(); // no reload of page

        const title = document.getElementById("title_to_do").value;
        const description = document.getElementById("description_to_do").value;
        const dueDate = document.getElementById("dueDate_to_do").value;
        const priority = document.getElementById("priority_to_do").value;
        const projectId = getSelectedProject().id;


        const toDoObject = createTodo(
            {
                title, 
                description,
                dueDate,
                priority,
                projectId
            }
        );

        addTodoToProject(projectId, toDoObject);
        closeForm();
        render();
    }
});