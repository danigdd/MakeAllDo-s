import { errors } from "./constants.js";

class ToDoItem {
    constructor(title, description, dueDate, priority) {

        if (typeof(title) !== "string" || title.length == 0) throw new Error(errors["title_empty_or_number"]);
        if (description.length == 0 || description.length < 10 || description.length > 500) throw new Error(errors["description_length"]);
        if (priority != "high" && priority != "low" && priority != "medium") throw new Error(errors["priority"]);

        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function createToDo(title, description, dueDate, priority) {
    let to_do_object = new ToDoItem(title, description, dueDate, priority);
    return to_do_object;
}

function addToDoDOM() {
    // todo
}

export {createToDo};