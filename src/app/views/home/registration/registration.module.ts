import {NgModule} from '@angular/core';

import {RegistrationComponent} from './registration.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {positionsReducer} from '@app/views/home/registration/store/positions.reducers';
import {RegistrationFormComponent} from '@app/views/home/registration/registration-form/registration-form.component';
import {EffectsModule} from '@ngrx/effects';
import {PositionsEffects} from '@app/views/home/registration/store/positions.effects';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        RegistrationComponent,
        RegistrationFormComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        StoreModule.forFeature('positions', positionsReducer),
        EffectsModule.forFeature([PositionsEffects]),
        ReactiveFormsModule,
    ],
    exports: [RegistrationComponent],
    providers: [],
})
export class RegistrationModule {
}
