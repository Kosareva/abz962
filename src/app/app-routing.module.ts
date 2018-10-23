import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '@app/views/home/home.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''},
    // {path: '**', loadChildren: '@app/views/error-page/error-page.module#ErrorPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
