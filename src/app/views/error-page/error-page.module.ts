import {NgModule} from '@angular/core';
import {ErrorPageComponent} from '@app/views/error-page/error-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', component: ErrorPageComponent}
];

@NgModule({
    declarations: [ErrorPageComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [ErrorPageComponent],
    providers: [],
})
export class ErrorPageModule {
}
