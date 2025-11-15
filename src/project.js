import { displayProject } from "./personalpage.js";

let list_of_projects = [];

class Project {
    constructor(project, selected) {
        this.todos_list = [];
        this.name = project;
        this.selected = selected;
    }
}

function createProject(title, selected) {
    const project = new Project(title, selected);
    list_of_projects.push(project);
    return project;
}

function searchSelectedProject() {
    let selected_project = list_of_projects.find(project => project.selected === true);
    return selected_project;
}

export {Project, createProject, searchSelectedProject, list_of_projects};