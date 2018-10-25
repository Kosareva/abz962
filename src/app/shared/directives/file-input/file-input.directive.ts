import {Directive, ElementRef, forwardRef, OnInit, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {accept, maxSize, required, single} from '@app/shared/validators/validators';

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

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
    }

    writeValue(val: any) {
    }

    registerOnChange(fn: (filesExternal: FileList) => any): void {
        this.onChange = (files: FileList) => {
            this.renderer.addClass(this.elRef.nativeElement, 'ng-touched');
            this.renderer.removeClass(this.elRef.nativeElement, 'ng-untouched');
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

