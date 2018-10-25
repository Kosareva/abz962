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
import {RegistrationForm, RegistrationFormModel} from '@app/views/home/registration/registration-form/registration-form.model';
import * as AuthActions from '@app/core/auth/store/auth.actions';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {

    changeFile: string;
    fileTouched = false;
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
        this.markAsTouchedFile();
    }

    onSubmit() {
        const formData = RegistrationForm.createFormData(<RegistrationFormModel>this.form.value);
        // if (!this.form.valid) {
        //     this.toastr.error('Form is not valid');
        //     this.markAsTouchedAll();
        //     return;
        // }
        this.store.dispatch(new AuthActions.TrySignup(formData));
        this.clearForm();
        this.markAsUntouchedAll();
    }

    private clearForm() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).setValue('');
        });
        this.clearFile();
    }

    private clearFile() {
        this.form.get('photo').setValue('');
        this.changeFile = 'clear';
    }

    private markAsTouchedAll() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsTouched();
        });
        this.markAsTouchedFile();
    }

    private markAsTouchedFile() {
        this.changeFile = 'markAsTouched';
        this.fileTouched = true;
    }

    private markAsUntouchedAll() {
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).markAsUntouched();
        });
        this.markAsUntouchedFile();
    }

    private markAsUntouchedFile() {
        this.changeFile = 'markAsUntouched';
        this.fileTouched = false;
    }

}
