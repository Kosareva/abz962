import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '@app/store/app.reducers';
import * as fromPositions from '@app/views/home/registration/store/positions.reducers';
import * as PositionsActions from '@app/views/home/registration/store/positions.actions';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

    positionsState$: Observable<fromPositions.State>;

    constructor(
        private store: Store<fromApp.AppState>,
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new PositionsActions.TryGetPositions());
        this.positionsState$ = this.store.select('positions');
    }

}
