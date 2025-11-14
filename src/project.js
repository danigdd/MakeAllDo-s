import { displayProject } from "./personalpage.js";

class Project {
    constructor(project, selected) {
        this.todos_list = [];
        this.name = project;
        this.selected = selected;
    }
}

function createProject(title, selected) {
    const project = new Project(title, selected);
    displayProject(project);
    return project;
}

export {Project, createProject};