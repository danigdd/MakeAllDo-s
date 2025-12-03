class Project {
    constructor(name, description) {
        this.id = crypto.randomUUID();
        this.todos = [];
        this.name = name;
        this.description = description;
    }
}

// Global state for projects
const projectState = {
    projects : [],
    selectedProjectID : null
}

// global state for todos
const todoState = {
    todos: []
}


function addTodoToProject(projectId, todo) {
    const project = projectState.projects.find(p => p.id === projectId);
    console.log(`Project found! Name of the project: ${project.name}`)
    if (!project) return;
    project.todos.push(todo);
    todoState.todos.push(todo);
}

function deleteTodo(projectId, todoId) {
    const project = projectState.projects.find(p => p.id === projectId);
    if (!project) return;
    project.todos = project.todos.filter(t => t.id !== todoId);
}

// State manipulation
function addProject(name, description) {
    const project = new Project(name, description);
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

function getTODO(id) {
    return todoState.todos.find(todo => todo.id === id);
}

export {addProject, projectState,  selectProject, getSelectedProject, addTodoToProject, deleteTodo, getTODO};