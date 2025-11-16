function createTodo({ title, description, dueDate, priority, projectId }) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        priority,
        projectId
    };
}

export {createTodo};