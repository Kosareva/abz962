import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromApp from '@app/store/app.reducers';
import * as fromPositions from '@app/views/home/registration/store/positions.reducers';
import * as PositionsActions from '@app/views/home/registration/store/positions.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {
    EMAIL_PATTERN,
    PHONE_PATTERN,
    accept,
    isInteger,
    isString,
    maxSize,
    minResolution,
    required,
    single
} from '@app/shared/validators/validators';
import {ToastrService} from 'ngx-toastr';
import {RegistrationForm, RegistrationFormModel} from '@app/views/home/registration/registration-form/registration-form.model';
import * as AuthActions from '@app/core/auth/store/auth.actions';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

    clear = false;
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
            required(),
            single(),
            maxSize(5),
            accept(['image/jpeg', 'image/jpg']),
        ]), minResolution(70, 70).bind(this)]
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

    onFileClear() {
        this.clearFile();
    }

    onSubmit() {
        const formData = RegistrationForm.createFormData(<RegistrationFormModel>this.form.value);
        // if (!this.form.valid) {
        //     this.toastr.warning('Form is not valid');
        //     this.markAsTouchedAll();
        //     return;
        // }
        this.store.dispatch(new AuthActions.TrySignup(formData));
        this.clearForm();
    }

    private clearForm() {
        this.form.get('name').setValue('');
        this.form.get('email').setValue('');
        this.form.get('phone').setValue('');
        this.form.get('position_id').setValue('');
        this.clearFile();
    }

    private clearFile() {
        this.form.get('photo').setValue('');
        this.clear = true;
    }

    private markAsTouchedAll() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsTouched();
        });
    }

}
