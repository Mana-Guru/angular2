import {Component} from 'angular2/core'; 

@Component ({
    selector: 'todo-input',
    template: `
        <input type="text" #logMe>
        <button (click)="onClick(logMe.value);">Click Me</button>
    `     
})

export class TodoInput{
    onClick(value) {
        console.log(value);
    }
}