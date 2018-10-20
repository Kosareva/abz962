import {NgModule} from '@angular/core';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {FooterComponent} from '@app/shared/components/footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ],
})
export class ComponentsModule {
}
