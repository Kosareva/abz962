import {NgModule} from '@angular/core';

import {AboutComponent} from '@app/views/home/about/about.component';
import {GetAcquaintedComponent} from '@app/views/home/get-acquainted/get-acquainted.component';
import {HomeComponent} from '@app/views/home/home.component';
import {IntroComponent} from '@app/views/home/intro/intro.component';
import {RegistrationComponent} from './registration/registration.component';
import {RequirementsComponent} from '@app/views/home/requirements/requirements.component';
import {SharedModule} from '@app/shared/shared.module';
import {TestimonialsComponent} from '@app/views/home/testimonials/testimonials.component';

@NgModule({
    declarations: [
        AboutComponent,
        GetAcquaintedComponent,
        HomeComponent,
        IntroComponent,
        RegistrationComponent,
        RequirementsComponent,
        TestimonialsComponent,
    ],
    imports: [SharedModule],
    exports: [],
    providers: [],
})
export class HomeModule {
}
