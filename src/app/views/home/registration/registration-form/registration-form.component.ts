import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '@app/store/app.reducers';
import * as fromPositions from '@app/views/home/registration/store/positions.reducers';
import * as PositionsActions from '@app/views/home/registration/store/positions.actions';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {accept, EMAIL_PATTERN, isInteger, isString, maxSize, minResolution, PHONE_PATTERN, single} from '@app/shared/validators/validators';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

    positionsState$: Observable<fromPositions.State>;
    form = this.fb.group({
        name: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(60),
            isString()
        ]],
        email: ['', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
            Validators.pattern(EMAIL_PATTERN)
        ]],
        phone: ['', [
            Validators.required,
            Validators.pattern(PHONE_PATTERN)
        ]],
        position_id: ['', [
            Validators.required,
            isInteger(),
            Validators.min(1)
        ]],
        photo: ['', Validators.compose([
            single(),
            maxSize(5),
            accept(['image/jpeg', 'image/jpg']),
        ]), minResolution(70, 70).bind(this)]
    });

    constructor(
        private store: Store<fromApp.AppState>,
        private fb: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new PositionsActions.TryGetPositions());
        this.positionsState$ = this.store.select('positions');
    }

    onSubmit() {
        console.warn(this.form);
    }

    signUp() {
        this.store.dispatch(new AuthActions.TrySignup());
    }

}
