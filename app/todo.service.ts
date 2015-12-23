export class TodoService {
    todos:string[] = [
        "eat","sleep", "code"
    ];
    addTodo(value:any) {
        this.todos.push(value);
    }
}