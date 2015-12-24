import {Component, Input} from 'angular2/core';
import {TodoModel} from './todo.service'
import {NgClass} from 'angular2/common'

@Component ({
    selector: 'todo-renderer',
    styles:[`
       .${TodoModel.STARTED} {
           color: green;
       }
       .${TodoModel.COMPLETED} {
           text-decoration: line-through;
       } 
    `],
    directives: [NgClass],
    template: `
        <div>
            <span [class]="todo.status">{{todo.title}}</span>
            <button (click)="todo.toggle()">Toggle</button>
        </div>
        `
})

export class TodoRenderer{
    @Input() todo:TodoModel;
}
