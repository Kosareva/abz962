import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppErrorHandler} from '@app/core/error-handler/error-handler';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private http: HttpClient, private errorHandler: AppErrorHandler) {
    }

    ngOnInit() {
    }

    getUser() {
        this.http.get('https://frontend-test-assignment-api.abz.agency/api/v1/user/1')
            .subscribe((data) => {
                console.log('data: ', data);
            });
    }

}
