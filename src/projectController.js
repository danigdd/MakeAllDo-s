import { addProject} from "./project";
import { render, closeForm} from "./view";

document.addEventListener("submit", e => {
    if (e.target.id == "formOfNewProject") {
        console.log("we entered");
        e.preventDefault(); // no reload of page

        const title = document.getElementById("title_project").value;
        const description = document.getElementById("description_project").value;


        const project = addProject(title, description);

        closeForm();
        render();
    }
});