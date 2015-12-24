import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {TodoService} from "./todo.service"
import {TodoRenderer} from "./todo.renderer"
import {StartsWith} from './starts.with.pipe'
import {LetterSelect} from './letter.select'

@Component({
    selector: 'todo-list',
    pipes: [StartsWith],
    directives: [CORE_DIRECTIVES,TodoRenderer, LetterSelect],
    template: `
    <div>
        <todo-renderer *ngFor="#todo of todoService.todos | startsWith:'title':letterSelect.selectedLetter" [todo]="todo">
        </todo-renderer>
    </div>
    <letter-select #letterSelect></letter-select>
     `
})
export class TodoList{
    constructor ( public todoService:TodoService) {
    }
}

