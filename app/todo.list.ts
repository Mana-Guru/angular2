import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from "./todo.service"

@Component({
    selector: 'todo-list',
    directives: [CORE_DIRECTIVES],
    template: `
    <div>
        <div *ngFor="#todo of todoService.todos">
            {{todo}}
        </div>
    </div>
        `
})
export class TodoList{
    constructor ( public todoService:TodoService) {
        
    }
}