import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '@app/store/app.reducers';
import * as fromPositions from '@app/views/home/registration/store/positions.reducers';
import * as PositionsActions from '@app/views/home/registration/store/positions.actions';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {
    EMAIL_PATTERN,
    PHONE_PATTERN,
    isInteger,
    isString,
} from '@app/shared/validators/validators';
import {acceptFileTypes, fileMaxSize, fileResolutionValidator} from '@app/shared/components/file-input/validators/file-input.validators';
import {RegistrationForm, RegistrationFormModel} from '@app/views/home/registration/registration-form/registration-form.model';
import {ToastrService} from 'ngx-toastr';


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
        photo: ['', [
            Validators.required,
            fileMaxSize(5),
            acceptFileTypes(['image/jpeg']),
        ],
            fileResolutionValidator('min', 70, 70).bind(this)
        ]
    });

    constructor(
        private store: Store<fromApp.AppState>,
        private fb: FormBuilder,
        private toastr: ToastrService,
    ) {
    }

    ngOnInit() {
        this.store.dispatch(new PositionsActions.TryGetPositions());
        this.positionsState$ = this.store.select('positions');
    }

    onSubmit() {
        const formData = RegistrationForm.createFormData(<RegistrationFormModel>this.form.value);
        if (!this.form.valid) {
            this.toastr.error('Form is not valid');
            this.markAsTouchedAll();
            return;
        }
        this.store.dispatch(new AuthActions.TrySignup(formData));
        this.clearForm();
    }

    private clearForm() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).setValue('');
        });
        this.markAsUntouchedAll();
    }

    private markAsTouchedAll() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsTouched();
        });
    }

    private markAsUntouchedAll() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsUntouched();
        });
    }

}
