import {NgModule} from '@angular/core';
import {FileInputDirective} from '@app/shared/directives/file-input/file-input.directive';

@NgModule({
    declarations: [FileInputDirective],
    exports: [FileInputDirective],
})
export class DirectivesModule {
}
