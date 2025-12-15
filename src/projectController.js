import { addProject } from "./project";
import { render, closeForm } from "./view";
import { validateForm } from "./validation";

document.addEventListener("submit", (e) => {
  if (e.target.id == "formOfNewProject") {
    const form = document.getElementById("formOfNewProject");
    e.preventDefault(); // no reload of page

    validateForm(form);
    console.log("ep");
    const title = document.getElementById("title_project").value;
    const description = document.getElementById("description_project").value;

    const project = addProject(title, description);

    closeForm();
    render();
  }
});