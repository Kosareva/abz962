import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from './components/components.module';
import {DirectivesModule} from './directives/directives.module';
import {PipesModule} from './pipes/pipes.module';
import {UiKitModule} from '@app/shared/ui-kit/ui-kit.module';
import {NgProgressModule} from '@ngx-progressbar/core';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule,
        NgProgressModule.forRoot(),
        NgSelectModule,
        PipesModule,
        UiKitModule,
    ],
    exports: [
        CommonModule,
        ComponentsModule,
        DirectivesModule,
        NgProgressModule,
        NgSelectModule,
        PipesModule,
        UiKitModule,
    ],
})
export class SharedModule {
}
