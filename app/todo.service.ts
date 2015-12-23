export class TodoService {
    todos:string[] = [];
    addTodo(value:any) {
        this.todos.push(value);
    }
}