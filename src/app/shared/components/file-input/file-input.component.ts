import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;
    @Input() placeholder;
    @Output() clearChange = new EventEmitter();
    fileName: string;

    @Input()
    set clear(val) {
        if (val) {
            this.deleteFile();
        }
    }

    constructor(
        private renderer: Renderer2,
    ) {
    }

    deleteFile() {
        this.renderer.setProperty(this.fileInput.nativeElement, 'value', null);
        this.fileName = this.placeholder;
        this.clearChange.emit();
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

}
