import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[appOnlyNumeric]',
    providers: [{ provide: NG_VALIDATORS, useExisting: OnlyNumericValidatorDirective, multi: true }]
})
export class OnlyNumericValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return (onlyNumericValidator())(control);
    }
}

export function onlyNumericValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const isNumeric = /^-?\d*(\.\d*)?(e-?\d+)?$/.test(control.value);
        return isNumeric ? null : { 'notNumeric': { value: control.value } };
    };
}
