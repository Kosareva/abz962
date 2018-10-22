import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {MainMenuModule} from '@app/shared/components/main-menu/main-menu.module';
import {LogoComponent} from './logo/logo.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoComponent,
    ],
    imports: [
        CommonModule,
        MainMenuModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        MainMenuModule,
    ],
})
export class ComponentsModule {
}
