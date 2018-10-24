import {Directive, forwardRef, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidatorFn} from '@angular/forms';
import {accept, maxSize, single} from '@app/shared/validators/validators';

export function required(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        console.log('required');
        if (!control.value.length) {
            return {required: 'true'};
        } else {
            return null;
        }
    };
}

@Directive({
    selector: 'app-file-input[formControlName]',
    host: {
        '(change)': 'onChange($event.target.files)',
    },
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileInputDirective),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useValue: maxSize,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: accept,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: single,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: required,
            multi: true
        },
    ]
})
export class FileInputDirective implements ControlValueAccessor, OnInit {

    onChange = (files: FileList) => {
    };
    onTouched = () => {
    };

    constructor() {
    }

    ngOnInit() {
    }

    writeValue(val: any) {
    }

    registerOnChange(fn: (filesExternal: FileList) => any): void {
        this.onChange = (files: FileList) => {
            if (files.length) {
                fn(files);
            } else {
                fn(null);
            }
        };
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

}

