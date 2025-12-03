function createTodo({ title, description, dueDate, priority, projectId }) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        priority,
        projectId,
        crossed : false
    };
}

function checkTodoCrossed(todo) {
    if (todo.crossed == true) return true;
    else return false;
}


export {createTodo, checkTodoCrossed};