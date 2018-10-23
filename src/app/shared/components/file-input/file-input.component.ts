import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

    @ViewChild('fileInput') fileInput: ElementRef;
    @Input() placeholder;
    fileName: string;

    constructor() {
    }

    deleteFile() {
        this.fileInput.nativeElement.value = null;
        this.fileName = this.placeholder;
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
