import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

    @Input('id') id: string;
    @ViewChild('fileInput') fileInput: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    trigger() {
        this.fileInput.nativeElement.click();
    }

}
