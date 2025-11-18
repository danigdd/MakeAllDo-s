import { getSelectedProject, addTodoToProject } from "./project";
import { createTodo } from "./todoitem";
import { render, closeForm} from "./view";

document.addEventListener("submit", e => {
    if (e.target.id == "formOfNewTODO") {
        console.log("we entered");
        e.preventDefault(); // no reload of page

        const title = document.getElementById("title_to_do").value;
        const description = document.getElementById("description_to_do").value;
        const date = document.getElementById("dueDate_to_do").value;
        const priority = document.getElementById("priority_to_do").value;
        const projectID = getSelectedProject().id;

        console.log(projectID);

        const toDoObject = createTodo(
            {
                title, 
                description,
                date,
                priority,
                projectID
            }
        );
        console.log("object created");

        for (let key in toDoObject) {
            console.log(`${key} : ${toDoObject[key]}`);
        }


        addTodoToProject(projectID, toDoObject);
        closeForm();
        render();
    }
});