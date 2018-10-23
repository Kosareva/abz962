import {NgModule} from '@angular/core';

import {AboutComponent} from '@app/views/home/about/about.component';
import {HomeComponent} from '@app/views/home/home.component';
import {IntroComponent} from '@app/views/home/intro/intro.component';
import {RequirementsComponent} from '@app/views/home/requirements/requirements.component';
import {SharedModule} from '@app/shared/shared.module';
import {UsersComponent} from './users/users.component';
import {RelationshipsComponent} from './relationships/relationships.component';
import {RegistrationModule} from '@app/views/home/registration/registration.module';

@NgModule({
    declarations: [
        AboutComponent,
        HomeComponent,
        IntroComponent,
        RequirementsComponent,
        UsersComponent,
        RelationshipsComponent,
    ],
    imports: [
        SharedModule,
        RegistrationModule,
    ],
    exports: [],
    providers: [],
})
export class HomeModule {
}
