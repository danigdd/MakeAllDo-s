import { getSelectedProject, addTodoToProject } from "./project";
import { createTodo } from "./todoitem";
import { validateForm } from "./validation";
import { render, closeForm, crossTODO } from "./view";

document.addEventListener("submit", (e) => {
  if (e.target.id == "formOfNewTODO") {
    const form = document.getElementById("formOfNewTODO");

    console.log("we entered");
    e.preventDefault(); // no reload of page
    let isValid = validateForm(form);
    if(!isValid) return;
    const title = document.getElementById("title_to_do").value;
    const dueDate = document.getElementById("dueDate_to_do").value;
    const priority = document.getElementById("priority_to_do").value;
    const projectId = getSelectedProject().id;

    const toDoObject = createTodo({
      title,
      dueDate,
      priority,
      projectId,
    });

    addTodoToProject(projectId, toDoObject);
    closeForm();
    render();
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "toDoItem") {
    crossTODO(e.target);
  }
});