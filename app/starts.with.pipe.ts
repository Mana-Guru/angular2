import {Pipe} from "angular2/core";

@Pipe({
    name: 'startsWith',
    pure: false
})
export class StartsWith{
    transform(value, [field,letter]) {
        return value.filter ((todo) => todo[field].startsWith(letter));
    }
}