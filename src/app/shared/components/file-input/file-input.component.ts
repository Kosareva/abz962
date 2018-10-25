import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss'],
})
export class FileInputComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;
    @Input() placeholder = 'Choose file';
    @Output() changeEvent = new EventEmitter();
    fileName: string;

    @Input()
    set change(val) {
        switch (val) {
            case 'clear':
                setTimeout(() => {
                    this.deleteFile();
                }, 0);
                break;
            case 'markAsUntouched':
                setTimeout(() => {
                    this.markAsUntouched();
                }, 0);
                break;
            case 'markAsTouched':
                setTimeout(() => {
                    this.markAsTouched();
                }, 0);
                break;
            default:
                break;
        }
    }

    constructor(
        private renderer: Renderer2,
        private elRef: ElementRef,
    ) {
    }

    deleteFile() {
        this.renderer.setProperty(this.fileInput.nativeElement, 'value', null);
        this.fileName = this.placeholder;
        this.changeEvent.emit();
    }

    ngOnInit() {
        this.fileName = this.placeholder;
    }

    onChange(events) {
        if (events.target.files.length) {
            this.fileName = events.target.files[0].name;
        } else {
            this.fileName = this.placeholder;
        }
    }

    trigger() {
        this.fileInput.nativeElement.click();
    }

    private markAsTouched() {
        this.renderer.addClass(this.elRef.nativeElement, 'ng-touched');
        this.renderer.removeClass(this.elRef.nativeElement, 'ng-untouched');
    }

    private markAsUntouched() {
        this.renderer.addClass(this.elRef.nativeElement, 'ng-untouched');
        this.renderer.removeClass(this.elRef.nativeElement, 'ng-touched');
    }

}
