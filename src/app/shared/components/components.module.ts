import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import {IconBoxComponent} from './icon-box/icon-box.component';
import {UsersItemComponent} from './users-item/users-item.component';
import {FileInputComponent} from './file-input/file-input.component';
import {RouterModule} from '@angular/router';
import {MainMenuModule} from '@app/shared/components/main-menu/main-menu.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
    declarations: [
        FileInputComponent,
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
        UsersItemComponent,
    ],
    imports: [
        CommonModule,
        MainMenuModule,
        RouterModule,
        LazyLoadImageModule,
    ],
    exports: [
        FileInputComponent,
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
        MainMenuModule,
        UsersItemComponent,
    ],
})
export class ComponentsModule {
}
