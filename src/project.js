class Project {
    constructor(project) {
        this.todos_list = [];
        this._name = project;
    }
}

function createProject(title) {
    let project = new Project(title);
    return project;
}

export {Project, createProject};