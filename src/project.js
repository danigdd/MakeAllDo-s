class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.todos = [];
        this.name = name;
    }
}

// Global state for projects
const projectState = {
    projects : [],
    selectedProjectID : null
}


function addTodoToProject(projectId, todo) {
    const project = projectState.projects.find(p => p.id === projectId);
    if (!project) return;
    project.todos.push(todo);
}

function deleteTodo(projectId, todoId) {
    const project = projectState.projects.find(p => p.id === projectId);
    if (!project) return;
    project.todos = project.todos.filter(t => t.id !== todoId);
}

// State manipulation
function addProject(name) {
    const project = new Project(name);
    projectState.projects.push(project);

    // if first project, we mark it as default
    if (projectState.projects.length === 1) {
        projectState.selectedProjectID = project.id;
    }

    return project;
}

function getSelectedProject() {
    return projectState.projects.find(
        project => project.id === projectState.selectedProjectID
    );
}

function selectProject(id) {
    projectState.selectedProjectID = id;
}

export {addProject, projectState, selectProject, getSelectedProject, addTodoToProject, deleteTodo};