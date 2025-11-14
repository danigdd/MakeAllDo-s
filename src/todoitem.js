import { errors } from "./constants.js";
import {Project} from "./project.js";

class ToDoItem {
    constructor(title, description, dueDate, priority, project) {

        if (typeof(title) !== "string" || title.length == 0) throw new Error(errors["title_empty_or_number"]);
        if (description.length == 0 || description.length < 10 || description.length > 500) throw new Error(errors["description_length"]);
        if (priority != "high" && priority != "low" && priority != "medium") throw new Error(errors["priority"]);
        if ( !(project instanceof Project) ) throw new Error(errors["project"]);

        
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._project_name = project._name;
        this._id = Math.random().toString(36).slice(2);

        
    }

    get title() {
        return this._title;
    }
    
    set title(name) {
        this._title = name;
    }

    get description() {
        return this._description;
    }

    set description(name) {
        this._description = name;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(day) {
        this._dueDate = day;
    }

    get priority() {
        return this._priority;
    }

    set priority(level) {
        this._priority = level;
    }

    get project() {
        return this._project_name;
    }

    get id() {
        return this._id;
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