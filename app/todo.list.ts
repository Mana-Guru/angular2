import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from "./todo.service"
import {TodoRenderer} from "./todo.renderer"
import {StartsWith} from './starts.with.pipe'

@Component({
    selector: 'todo-list',
    pipes: [StartsWith],
    directives: [CORE_DIRECTIVES,TodoRenderer],
    template: `
    <div>
        <todo-renderer *ngFor="#todo of todoService.todos | startsWith:'title':'c'" [todo]="todo">
        </todo-renderer>
    </div>
        `
})
export class TodoList{
    constructor ( public todoService:TodoService) {
        
    }
}

