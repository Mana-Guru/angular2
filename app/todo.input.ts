import {Component} from 'angular2/core'; 
import {TodoService} from './todo.service';

@Component ({
    selector: 'todo-input',
    template: `
        <input type="text" #logMe>
        <button (click)="onClick($event, logMe.value);">Click Me</button>
    `     
})

export class TodoInput{
    
    constructor(public todoService:TodoService) {
        console.log(todoService)
    }
    onClick(event,value) {
        this.todoService.addTodo(value);
        console.log(event, this.todoService.todos);
    }
}