import {Component} from 'angular2/core';
import {CORE_DIRECTIVES,NgModel} from 'angular2/common';
import {TodoService} from "./todo.service"
import {TodoRenderer} from "./todo.renderer"
import {StartsWith} from './starts.with.pipe'

@Component({
    selector: 'todo-list',
    pipes: [StartsWith],
    directives: [CORE_DIRECTIVES,TodoRenderer, NgModel],
    template: `
    <div>
        <todo-renderer *ngFor="#todo of todoService.todos | startsWith:'title':selectedLetter" [todo]="todo">
        </todo-renderer>
    </div>
    <select [(ngModel)]="selectedLetter">
        <option *ngFor="#letter of letters">{{letter}}</option>
    </select>
        `
})
export class TodoList{
    letters:string[] = ['a', 'c', 'e', 's'];
    selectedLetter:string = "e";
    
    constructor ( public todoService:TodoService) {
    }
}

