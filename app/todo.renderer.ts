import {Component, Input} from 'angular2/core';
import {TodoModel} from './todo.service'

@Component ({
    selector: 'todo-renderer',
    template: `
        <div>
            <span [hidden]="todo.status == 'completed'">{{todo.title}}</span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
        `
})

export class TodoRenderer{
    @Input() todo:TodoModel;
}
