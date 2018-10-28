import {Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';
import {
    acceptFileTypes,
    fileMaxSize,
    fileMinSize,
    fileResolutionValidator
} from '@app/shared/components/file-input/validators/file-input.validators';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileInputComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: fileMaxSize,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: fileMinSize,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: acceptFileTypes,
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useValue: fileResolutionValidator,
            multi: true
        }
    ]
})
export class FileInputComponent implements ControlValueAccessor {

    @ViewChild('originalFile') originalFile: ElementRef;
    @Input('placeholder') placeholder = 'Choose file';
    file: File;
    fileName: string = this.placeholder;

    onChange = (file: File) => {
    };

    onTouched = () => {
    };

    get value(): File {
        return this.file;
    }

    upload(file: File) {
        this.writeValue(file);
    }

    writeValue(file: File): void {
        this.file = file;
        if (file) {
            this.fileName = file.name;
        } else {
            this.fileName = this.placeholder;
        }
        this.onChange(this.value);
    }

    registerOnChange(fn: (file: File) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    deleteFile() {
        this.writeValue(null);
    }

    onChangeOriginalFile(event) {
        if (event.target.files.length) {
            this.writeValue(event.target.files[0]);
        } else {
            this.writeValue(null);
        }
    }

    triggerFileClick() {
        this.originalFile.nativeElement.click();
    }

}
