import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common'; 
import {TodoService,TodoModel} from './todo.service';

@Component ({
    selector: 'todo-input',
    directives: [FORM_DIRECTIVES],
    template: `
    <form (ngSubmit)="onSubmit()">
        <input type="text" [(ngModel)]="todoModel.title">
    </form>
    `
})

export class TodoInput{
    todoModel:TodoModel = new TodoModel();
    
    constructor(public todoService:TodoService) {
        console.log(todoService)
    }
    onClick(event,value) {
        this.todoService.addTodo(value);
        console.log(event, this.todoService.todos);
    }
    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
    
}