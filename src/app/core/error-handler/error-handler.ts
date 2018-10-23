import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppErrorHandler {

    constructor(private toastr: ToastrService) {
    }

    handleError(error: Error | HttpErrorResponse) {

        let msg = 'Something went wrong. Please, contact site administrator';

        if (error instanceof HttpErrorResponse) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                msg = 'No internet connection';
            } else {
                // Handle Http Error (error.status === 403, 404...)
                switch (error.status) {
                    case 404:
                        msg = error.statusText;
                        break;
                    default:
                        break;
                }
            }
        } else {
            // Handle Client Error (Angular Error, ReferenceError...)
        }

        console.error(error);

        this.toastr.error(msg, 'Error!');
    }

}
