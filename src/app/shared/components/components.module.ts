import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {MainMenuModule} from '@app/shared/components/main-menu/main-menu.module';
import {LogoComponent} from './logo/logo.component';
import {IconBoxComponent} from './icon-box/icon-box.component';
import {UsersItemComponent} from './users-item/users-item.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {FileInputComponent} from './file-input/file-input.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
        UsersItemComponent,
        RegistrationFormComponent,
        FileInputComponent,
    ],
    imports: [
        CommonModule,
        MainMenuModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
        MainMenuModule,
        UsersItemComponent,
        RegistrationFormComponent,
        FileInputComponent,
    ],
})
export class ComponentsModule {
}
