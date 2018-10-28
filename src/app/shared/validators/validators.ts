import {AbstractControl, ValidatorFn} from '@angular/forms';

export const EMAIL_PATTERN = /([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \\t]|(\\\\[\\t -~]))+")@([!#-\'*+/-9=?A-Z^-~-]+(\\.[!#-\'*+/-9=?A-Z^-~-]+)*|\\[[\\t -Z^-~]*])/;
export const PHONE_PATTERN = /^[\+]{0,1}380([0-9]{9})$/;

export function isInteger(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return !Number.isInteger(+control.value) ? {typeError: {needs: 'integer'}} : null;
    };
}

export function isString(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return !isNaN(control.value) ? {typeError: {needs: 'string'}} : null;
    };
}
