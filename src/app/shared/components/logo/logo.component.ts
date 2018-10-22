import {Component, Inject, OnInit} from '@angular/core';
import {APP_CONFIG, AppConfig} from '@app/app.config';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

    constructor(
        @Inject(APP_CONFIG) public appConfig: AppConfig
    ) {
    }

    ngOnInit() {
    }

}
