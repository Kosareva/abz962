import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {MainMenuModule} from '@app/shared/components/main-menu/main-menu.module';
import {LogoComponent} from './logo/logo.component';
import {IconBoxComponent} from './icon-box/icon-box.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
    ],
    imports: [
        CommonModule,
        MainMenuModule,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        IconBoxComponent,
        LogoComponent,
        MainMenuModule,
    ],
})
export class ComponentsModule {
}
