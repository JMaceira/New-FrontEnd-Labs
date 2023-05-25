
class TodoList {
    constructor(tasks) {
        this.tasks = tasks
    }

    addNewTodo(task) {
        this.task.push(task)
    }

    getIncomplete() {
        return thi.task.filter(task => !task.complete)
    }

    getTaskById(id) {
        this.task.find(task => task.id === id)
    }
}