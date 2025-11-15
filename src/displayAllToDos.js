import { projectsRelationDOMLogic } from "./personalpage";
import { list_of_projects } from "./project";
import { markDOMProjectSelected } from "./personalpage";

function displaySelected() {
    return;
}

function setSelected(project) {
    let project_id = projectsRelationDOMLogic[project.id];
    let project_to_select = list_of_projects.find(project => project.id === project_id);
    console.log("ep");
    console.log(project_to_select)

    if (!checkSelected(project_to_select)) {
        project_to_select.selected = true;
        markSelected(project_to_select,project);
    } 
    
    return;
}

function markSelected(projectLogic, projectDOM) {
    markDOMProjectSelected(projectLogic, projectDOM);
}

function checkSelected(project_logic) {
    return project_logic.selected;
}
export {displaySelected, setSelected};