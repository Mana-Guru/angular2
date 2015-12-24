import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from "./todo.service"
import {TodoRenderer} from "./todo.renderer"

@Component({
    selector: 'todo-list',
    directives: [CORE_DIRECTIVES,TodoRenderer],
    template: `
    <div>
        <todo-renderer *ngFor="#todo of todoService.todos" [todo]="todo">
        </todo-renderer>
    </div>
        `
})
export class TodoList{
    constructor ( public todoService:TodoService) {
        
    }
}

