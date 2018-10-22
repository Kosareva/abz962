import {NgModule} from '@angular/core';

import {AboutComponent} from '@app/views/home/about/about.component';
import {HomeComponent} from '@app/views/home/home.component';
import {IntroComponent} from '@app/views/home/intro/intro.component';
import {RegistrationComponent} from './registration/registration.component';
import {RequirementsComponent} from '@app/views/home/requirements/requirements.component';
import {SharedModule} from '@app/shared/shared.module';
import {UsersComponent} from './users/users.component';

@NgModule({
    declarations: [
        AboutComponent,
        HomeComponent,
        IntroComponent,
        RegistrationComponent,
        RequirementsComponent,
        UsersComponent,
    ],
    imports: [SharedModule],
    exports: [],
    providers: [],
})
export class HomeModule {
}
