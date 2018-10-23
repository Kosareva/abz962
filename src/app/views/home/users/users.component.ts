import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '@app/store/app.reducers';
import * as fromApplicants from '@app/core/applicants/store/applicants.reducers';
import * as ApplicantsActions from '@app/core/applicants/store/applicants.actions';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    applicantsState$: Observable<fromApplicants.ApplicantsState>;

    constructor(
        private store: Store<fromApp.AppState>
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new ApplicantsActions.TryFetchApplicants());
        this.applicantsState$ = this.store.select('applicants');
    }

    showMoreUsers() {
        this.store.dispatch(new ApplicantsActions.TryFetchApplicants());
    }

}
