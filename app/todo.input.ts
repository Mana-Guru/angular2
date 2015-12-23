import {Component} from 'angular2/core'; 

@Component ({
    selector: 'todo-input',
    template: `
        <input type="text" #logMe>
        <button (click)="onClick($event, logMe.value);">Click Me</button>
    `     
})

export class TodoInput{
    onClick(event,value) {
        console.log(event, value);
    }
}