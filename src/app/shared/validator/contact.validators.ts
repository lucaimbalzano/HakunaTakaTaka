import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl):{[key:string]:any}|null{
    const forbidden = /contact/.test(control.value);
    return forbidden ? {'forbiddenName_custom': {value: control.value}}:null;
}