import { errors } from "./constants.js";
import {Project} from "./project.js";

class ToDoItem {
    constructor(title, description, dueDate, priority, project) {

        if (typeof(title) !== "string" || title.length == 0) throw new Error(errors["title_empty_or_number"]);
        if (description.length == 0 || description.length < 10 || description.length > 500) throw new Error(errors["description_length"]);
        if (priority != "high" && priority != "low" && priority != "medium") throw new Error(errors["priority"]);
        if ( !(project instanceof Project) ) throw new Error(errors["project"]);

        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project_name = project.name;
        this.id = Math.random().toString(36).slice(2);
    }
}



function createToDo(title, description, dueDate, priority, project) {
    let to_do_object = new ToDoItem(title, description, dueDate, priority, project);
    addToDoProject(project, to_do_object);
    return to_do_object;
}

function addToDoProject(project, todo) {
    project.todos_list.push(todo);
}

function addToDoDOM() {
    // todo
}

function deleteToDo(to_do_id, project) {
    project.todos_list = project.todos_list.filter(todo => todo["id"] !== to_do_id);
    return;
}
export {createToDo, deleteToDo};