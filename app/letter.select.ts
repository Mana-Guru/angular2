import {Component} from 'angular2/core';
import {CORE_DIRECTIVES,NgModel} from 'angular2/common';

@Component({
    selector: 'letter-select',
    directives: [CORE_DIRECTIVES, NgModel],
    template: `
    <select [(ngModel)]="selectedLetter">
        <option *ngFor="#letter of letters">{{letter}}</option>
    </select>
    `
})
export class LetterSelect{
    letters:string[] = ['a', 'c', 'e', 's'];
    selectedLetter:string = "e";
}

