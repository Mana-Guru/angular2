import {Component} from 'angular2/core';
import {TodoInput} from './todo.input';


@Component({
    selector: 'app',
    directives: [TodoInput],
    template: '<div><todo-input></todo-input></div>'
})
export class AppComponent { }  